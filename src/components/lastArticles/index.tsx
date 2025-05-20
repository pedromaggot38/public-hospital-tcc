'use client';

import { Article } from "@/types/interfaces";
import ArticleCard from "../articleCard";
import { Button } from "../ui/button";
import Link from "next/link";

interface LastArticlesProps {
    articles: Article[];
}

export function LastArticles({ articles }: LastArticlesProps) {

    if (!articles || articles.length === 0) {
        return <p>Nenhuma notícia recente disponível.</p>;
    }

    return (
        <div className="">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Notícias Recentes</h2>
                <Button variant="link">
                    <Link href="/articles">Ver todas</Link>
                </Button>
            </div>
            <div className="flex flex-col gap-4">
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
    );
}
