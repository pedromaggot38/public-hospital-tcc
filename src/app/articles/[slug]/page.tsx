import { db } from '@/lib/db';
import { NextPage } from 'next';
import { notFound } from 'next/navigation';

interface Params {
    slug: string;
}

const ArticlePage: NextPage<{ params: Params }> = async ({ params }) => {
    const article = await db.article.findFirst({
        where: {
            slug: params.slug,
        }
    });

    if (!article) {
        return notFound();
    }

    const htmlContent = (article.content || '')

    return (
        <div>
            <h1>Título: {article.title}</h1>
            <h3>Subtítulo: {article.subtitle}</h3>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
};

export default ArticlePage;
