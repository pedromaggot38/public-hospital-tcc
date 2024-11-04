import { db } from "@/lib/db";
import { lastArticlesCount } from "@/lib/vars";
import Image from "next/image";
import Link from "next/link"; 
import { Skeleton } from "@/components/ui/skeleton"; 

export async function LastArticles() {
    const lastArticlesDB = await db.article.findMany({
        where: { published: true },
        orderBy: { createdAt: 'desc' },
        take: lastArticlesCount,
    });

    const isLoading = lastArticlesDB.length === 0;
    const maxSubtitleLength = 50;

    return (
        <div className="w-[25%] p-4 sticky top-0 h-screen shadow-lg">
            <h2 className="text-xl font-bold mb-4">Últimas Notícias</h2>
            <div className="space-y-4">
                {isLoading ? (
                    Array.from({ length: lastArticlesCount }).map((_, index) => (
                        <div key={index} className="bg-white p-4 rounded shadow flex space-x-4">
                            <Skeleton className="w-1/3 h-20" />
                            <div className="w-2/3 space-y-2">
                                <Skeleton className="h-4 w-3/4" />
                                <Skeleton className="h-3 w-1/2" />
                            </div>
                        </div>
                    ))
                ) : (
                    lastArticlesDB.map((article) => (
                        <div key={article.id} className="bg-white p-4 rounded shadow flex space-x-4">
                            <Link href={`/articles/${article.slug}`} className="flex w-full">
                                <div className="w-1/3">
                                    <Image
                                        src={article.imageUrl || '/placeholder.png'}
                                        alt={article.imageDescription || article.title}
                                        width={80}
                                        height={80}
                                        className="object-cover rounded"
                                        style={{ width: "80px", height: "80px" }}
                                    />
                                </div>
                                <div className="w-2/3">
                                    <h3 className="font-semibold">{article.title}</h3>
                                    {article.subtitle && (
                                        <p className="text-gray-600 text-sm">
                                            {article.subtitle.length > maxSubtitleLength
                                                ? `${article.subtitle.slice(0, maxSubtitleLength)}...`
                                                : article.subtitle}
                                        </p>
                                    )}
                                </div>
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
