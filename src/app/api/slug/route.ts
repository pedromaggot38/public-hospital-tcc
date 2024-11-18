import { db } from "@/lib/db";

export async function GET(req: Request) {
    try {
        // Obtendo o slug da URL (query string ou params)
        const url = new URL(req.url);
        const slug = url.searchParams.get('slug');

        if (!slug) {
            return new Response("Slug é necessário", { status: 400 });
        }

        const article = await db.article.findFirst({
            where: { slug: slug, published: true },
        });

        if (!article) {
            return new Response("Artigo não encontrado", { status: 404 });
        }

        return new Response(JSON.stringify(article), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error("Erro ao buscar artigo:", error);
        return new Response("Erro interno do servidor", { status: 500 });
    }
}
