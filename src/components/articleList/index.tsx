'use client'

import { Article } from "@/types/interfaces";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import ArticleCard from "../articleListCard";

export function ArticleList() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('/api/articles');
                if (!response.ok) {
                    throw new Error("Failed to fetch articles");
                }
                const data = await response.json();
                if (Array.isArray(data)) {
                    setArticles(data);
                } else {
                    throw new Error("Formato de dados inválido");
                }
            } catch (error) {
                console.error("Failed to fetch articles:", error);
                setError("Ocorreu um erro ao buscar os artigos.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchArticles();
    }, []);

    return (
        <div>
            {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 space-y-3">
                    {Array.from({ length: 20 }).map((_, index) => (
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
            )}
        </div>
    );
}
