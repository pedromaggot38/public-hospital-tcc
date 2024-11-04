import DOMPurify from 'dompurify';
import React from 'react';

interface ArticleProps {
    title: string;
    content: string | null;
    imageUrl: string | null;
    createdAt: string;
    slug: string;
}

const ArticleCard: React.FC<ArticleProps> = ({ title, content, imageUrl, createdAt, slug }) => {
    const formattedDate = new Intl.DateTimeFormat('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(new Date(createdAt));

    return (
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
                alt={title}
                src={imageUrl || '/news-placeholder.png'}
                className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6">
                <time dateTime={createdAt} className="block text-xs text-gray-500">
                    {formattedDate}
                </time>

                <a href={`/articles/${slug}`}>
                    <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>
                </a>

                <p
                    className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500"
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(content || 'Sem conteúdo disponível.')
                    }}
                />
            </div>
        </article>
    );
};

export default ArticleCard;
