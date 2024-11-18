import { db } from "@/lib/db";
import { lastArticlesCount } from "@/lib/vars";

export async function GET() {
    try {
        const lastArticlesDB = await db.article.findMany({
            where: { published: true },
            orderBy: { createdAt: 'desc' },
            take: lastArticlesCount,
        });

        if (!Array.isArray(lastArticlesDB)) {
            throw new Error("Formato de dados inválido");
        }

        return new Response(JSON.stringify(lastArticlesDB), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error("Erro ao buscar artigos:", error);
        const errorMessage = process.env.NODE_ENV === 'development' ? error.message : "Erro ao buscar artigos";
        return new Response(JSON.stringify({ message: errorMessage }), { 
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
