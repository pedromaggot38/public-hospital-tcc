'use client'

import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import ArticleCard from "../articleListCard";
import { useMediaQuery } from 'react-responsive'
import { ArticlesPagination } from "../articlesPagination";
import { Article } from "@/types/interfaces";

export function ArticleList() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [totalArticles, setTotalArticles] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const isSmallScreen = useMediaQuery({ maxWidth: 640 });
    const isMediumScreen = useMediaQuery({ minWidth: 641, maxWidth: 1024 });

    const itemsPerPage = isSmallScreen ? 6 : isMediumScreen ? 6 : 9;

    useEffect(() => {
        const fetchArticles = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(`/api/articles?page=${currentPage}&limit=${itemsPerPage}`);
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
    }, [currentPage, itemsPerPage]); // refaz a chamada ao mudar página ou itens por página

    return (
        <div>
            {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 space-y-3">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles.map((article) => (
                            <ArticleCard
                                key={article.slug}
                                title={article.title}
                                subtitle={article.subtitle}
                                imageUrl={article.imageUrl || '/news-placeholder.png'}
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
