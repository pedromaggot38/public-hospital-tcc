/*
import { db } from "@/lib/db";

export async function GET(req: Request) {
    try {
        const url = new URL(req.url);
        const slug = url.searchParams.get('slug');

        if (!slug) {
            return new Response(JSON.stringify({ error: "Slug é necessário" }), { status: 400 });
        }

        const isValidSlug = /^[a-z0-9-]+$/.test(slug);
        if (!isValidSlug) {
            return new Response(JSON.stringify({ error: "Slug inválido" }), { status: 400 });
        }

        const article = await db.article.findFirst({
            where: { slug: slug, published: true },
        });

        if (!article) {
            return new Response(JSON.stringify({ error: "Artigo não encontrado" }), { status: 404 });
        }

        return new Response(JSON.stringify(article), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'public, max-age=60', // Cache por 60 segundos
            },
        });
    } catch (error) {
        console.error("Erro ao buscar artigo:", error);
        return new Response(JSON.stringify({ error: "Erro interno do servidor" }), { status: 500 });
    }
}
*/