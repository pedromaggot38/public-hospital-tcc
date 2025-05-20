import { db } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const { searchParams } = request.nextUrl;
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '9', 10);

    const offset = (page - 1) * limit;

    const [publishedArticles, totalArticlesCount] = await Promise.all([
      db.article.findMany({
        where: { published: true },
        orderBy: { createdAt: 'desc' },
        skip: offset,
        take: limit,
      }),
      db.article.count({
        where: { published: true },
      }),
    ]);

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
    console.error('Erro ao buscar artigos:', error);

    return new Response(
      JSON.stringify({
        message: 'Erro ao buscar artigos',
        error:
          process.env.NODE_ENV === 'development' ? error.message : undefined,
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
