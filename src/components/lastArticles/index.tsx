'use client';

import { useEffect, useState } from "react";
import ArticleCard from "../articleCard";
import { Skeleton } from "../ui/skeleton";
import { Article } from "@/types/interfaces";
import { Button } from "../ui/button";
import Link from "next/link";

export function LastArticles() {
    const [lastArticlesDB, setLastArticlesDB] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('/api/lastArticles');
                if (!response.ok) {
                    throw new Error("Failed to fetch last articles");
                }
                const articles = await response.json();
                if (Array.isArray(articles)) {
                    setLastArticlesDB(articles);
                } else {
                    throw new Error("Formato de dados inválido");
                }
            } catch (error) {
                console.error("Failed to fetch last articles:", error);
                setError("Ocorreu um erro ao buscar as últimas notícias.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchArticles();
    }, []);


    return (
        <div className="">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Notícias Recentes</h2>
                <Button variant="link">
                    <Link href="/articles">Ver todas</Link>
                </Button>
            </div>
            {isLoading ? (
                <div className="space-y-2">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <Skeleton key={index} className="h-60 w-full rounded-lg" />
                    ))}
                </div>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div className="flex flex-col gap-4">
                    {lastArticlesDB.map((article) => (
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
