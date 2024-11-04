import { db } from "@/lib/db";
import { lastArticlesCount } from "@/lib/vars";

export async function GET() {
    try {
        const lastArticlesDB = await db.article.findMany({
            where: { published: true },
            orderBy: { createdAt: 'desc' },
            take: lastArticlesCount,
        });

        return new Response(JSON.stringify(lastArticlesDB), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error("Erro ao buscar artigos:", error);
        return new Response("Erro ao buscar artigos", { status: 500 });
    }
}