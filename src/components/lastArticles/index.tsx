'use client';

import { useEffect, useState } from "react";
import { Article } from "@/schemas/article";
import ArticleCard from "../articleCard";

export function LastArticles() {
    const [lastArticlesDB, setLastArticlesDB] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('/api/articles');
                if (!response.ok) {
                    throw new Error("Failed to fetch articles");
                }
                const articles = await response.json();
                if (Array.isArray(articles)) {
                    setLastArticlesDB(articles);
                } else {
                    throw new Error("Formato de dados inválido");
                }
            } catch (error) {
                console.error("Failed to fetch articles:", error);
                setError("Ocorreu um erro ao buscar as últimas notícias.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div className="">
            <h2 className="text-2xl font-bold">Últimas Notícias</h2>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div className="flex flex-col gap-4">
                    {lastArticlesDB.map((article) => (
                    <ArticleCard
                        key={article.slug}
                        title={article.title}
                        content={article.content}
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
