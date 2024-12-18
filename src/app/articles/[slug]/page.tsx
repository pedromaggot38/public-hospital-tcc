import { db } from '@/lib/db';
import { NextPage } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { LastArticles } from '@/components/lastArticles';
import BreadCrumb from '@/components/breadcrumb';
import LastArticlesCarousel from '@/components/lastArticlesCarousel';

interface Params {
  slug: string;
}

const ArticlePage: NextPage<{ params: Params }> = async ({ params }) => {
  const article = await db.article.findFirst({
    where: {
      slug: params.slug,
    },
  });

  if (!article) {
    return notFound();
  }

  const formattedDate = format(new Date(article.createdAt), "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });

  const htmlContent = article.content || '';

  return (
    <div>
      <BreadCrumb
        items={[
          { label: 'Notícias', href: '/articles' },
          { label: '*', href: `/articles/${article.slug}` },
        ]}
      />

      <div className='flex gap-6'>
        <div className="w-[100%] mx-auto p-2">
          {article.imageUrl && (
            <div className="relative w-full h-60 overflow-hidden rounded-t-lg">
              <Image
                src={article.imageUrl}
                alt={article.imageDescription || 'Imagem relacionada à notícia'}
                fill
                className="rounded-t-lg object-cover object-center"
              />
            </div>
          )}

          <div className="bg-white shadow-md rounded-b-lg overflow-hidden">
            <div className="p-6">
              <h1 className="text-4xl font-bold mb-4 text-gray-800">{article.title}</h1>
              <h3 className="text-2xl font-semibold mb-6 text-gray-600">{article.subtitle}</h3>
              <div className="flex items-center mb-4">
                <p className="text-gray-500 text-sm">
                  Publicado em {formattedDate} por <span className="font-semibold">{article.author}</span>
                </p>
              </div>
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>
          </div>
        </div>
        <div className="hidden w-[20%] xl:block">
          <LastArticles />
        </div>
      </div>
      <div className="p-2 xl:hidden">
        <LastArticlesCarousel />
      </div>
    </div>
  );
};

export default ArticlePage;
