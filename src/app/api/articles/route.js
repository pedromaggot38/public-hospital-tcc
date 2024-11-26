import { db } from "@/lib/db";

export async function GET() {
    try {
        const publishedArticles = await db.article.findMany({
            where: { published: true },
            orderBy: { createdAt: 'desc' },
        });

        const totalArticlesCount = await db.article.count({
            where: { published: true },
        });


        return new Response(
            JSON.stringify({
                articles: publishedArticles,
                totalArticles: totalArticlesCount,
            }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    } catch (error) {
        console.error("Erro ao buscar artigos:", error);

        return new Response(
            JSON.stringify({
                message: "Erro ao buscar artigos",
                error:
                    process.env.NODE_ENV === 'development'
                        ? error.message
                        : undefined,
            }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    }
}
