import { db } from '@/lib/db';
import { lastArticlesCount } from '@/lib/vars';

export async function getLastArticlesFromDB() {
  const lastArticles = await db.article.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    take: lastArticlesCount,
  });

  return lastArticles;
}

export async function getArticleAndLastArticles(slug: string) {
  const article = await db.article.findFirst({
    where: { slug },
  });

  const lastArticles = await db.article.findMany({
    orderBy: { createdAt: 'desc' },
    take: 3,
  });

  return { article, lastArticles };
}
