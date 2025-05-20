'use client'

import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import ArticleCard from "../articleListCard";
import { ArticlesPagination } from "../articlesPagination";
import { Article } from "@/types/interfaces";

export function ArticleList() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [totalArticles, setTotalArticles] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const [windowWidth, setWindowWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 1200
    );
    const [itemsPerPage, setItemsPerPage] = useState(16);
    const [columns, setColumns] = useState(4);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (windowWidth <= 640) {
            setItemsPerPage(4);
            setColumns(1);
        } else if (windowWidth <= 800) {
            setItemsPerPage(6);
            setColumns(2);
        } else if (windowWidth <= 1280) {
            setItemsPerPage(9);
            setColumns(3);
        } else {
            setItemsPerPage(16);
            setColumns(4);
        }
    }, [windowWidth]);

    useEffect(() => {
        const fetchArticles = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    `/api/articles?page=${currentPage}&limit=${itemsPerPage}`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch articles");
                }
                const data = await response.json();

                if (data.articles && Array.isArray(data.articles)) {
                    setArticles(data.articles);
                    setTotalArticles(data.totalArticles || 0);
                } else {
                    throw new Error("Formato de dados inválido");
                }
            } catch (err) {
                console.error("Failed to fetch articles:", err);
                setError("Ocorreu um erro ao buscar os artigos.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchArticles();
    }, [currentPage, itemsPerPage]);

    const columnsClass =
        columns === 1
            ? "grid-cols-1"
            : columns === 2
                ? "grid-cols-2"
                : columns === 3
                    ? "grid-cols-3"
                    : "grid-cols-4";

    return (
        <div>
            {isLoading ? (
                <div className={`grid ${columnsClass} gap-6 auto-rows-fr`}>
                    {Array.from({ length: itemsPerPage }).map((_, index) => (
                        <div key={index} className="flex flex-col space-y-3">
                            <Skeleton className="h-[125px] w-full rounded-xl" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-3/4" />
                            </div>
                        </div>
                    ))}
                </div>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div>
                    <div className={`grid ${columnsClass} gap-6`}>
                        {articles.map((article) => (
                            <ArticleCard
                                key={article.slug}
                                title={article.title}
                                subtitle={article.subtitle}
                                imageUrl={article.imageUrl || "/news-placeholder.png"}
                                createdAt={new Date(article.createdAt).toISOString()}
                                slug={article.slug}
                            />
                        ))}
                    </div>
                </div>
            )}
            <ArticlesPagination
                totalItems={totalArticles}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}
