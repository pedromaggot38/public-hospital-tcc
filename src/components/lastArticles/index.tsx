import { db } from "@/lib/db";
import { lastArticlesCount } from "@/lib/vars";
import Image from "next/image";
import Link from "next/link"; // Importando o Link

export async function LastArticles() {
    const lastArticlesDB = await db.article.findMany({
        where: { published: true },
        orderBy: { createdAt: 'desc' },
        take: lastArticlesCount,
    });

    return (
        <div className="w-[30%] p-4 sticky top-0 h-screen shadow-lg">
            <h2 className="text-xl font-bold mb-4">Últimas Notícias</h2>
            <div className="space-y-4">
                {lastArticlesDB.map((article) => (
                    <div key={article.id} className="bg-white p-4 rounded shadow flex space-x-4">
                        {/* Link que envolve a imagem e o título */}
                        <Link href={`/articles/${article.slug}`} className="flex w-full">
                            {/* Imagem do artigo à esquerda */}
                            <div className="w-1/3">
                                <Image
                                    src={article.imageUrl || '/placeholder.png'} // Se não houver imagem, usa um placeholder
                                    alt={article.imageDescription || article.title}
                                    width={80}  // Tamanho ajustado para a imagem
                                    height={80} // Tamanho ajustado para a imagem
                                    className="object-cover rounded"
                                />
                            </div>
                            {/* Título e subtítulo à direita */}
                            <div className="w-2/3">
                                <h3 className="font-semibold">{article.title}</h3>
                                {article.subtitle && (
                                    <p className="text-gray-600 text-sm">{article.subtitle}</p>
                                )}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
