import { NextPage } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { LastArticles } from '@/components/lastArticles';
import BreadCrumb from '@/components/breadcrump';

interface Params {
  slug: string;
}

export const dynamic = 'force-dynamic';
export const revalidate = 60;

const ArticlePage: NextPage<{ params: Params }> = async ({ params }) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/slug?slug=${params.slug}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return notFound();
    }

    const article = await response.json();

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
          ]}
        />

        <div className="flex gap-6">
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
        <div className="mt-6 p-6 xl:hidden">
          <LastArticles />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Erro ao buscar artigo:', error);
    return notFound();
  }
};


export default ArticlePage;