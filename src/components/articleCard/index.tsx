import DOMPurify from 'dompurify';
import Link from 'next/link';
import React from 'react';

interface ArticleProps {
    title: string;
    subtitle: string | null;
    imageUrl: string | null;
    createdAt: string;
    slug: string;
}

const ArticleCard: React.FC<ArticleProps> = ({ title, subtitle, imageUrl, createdAt, slug }) => {
    const formattedDate = new Intl.DateTimeFormat('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(new Date(createdAt));

    return (
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <Link href={`/articles/${slug}`}>
                <img
                    alt={title}
                    src={imageUrl || '/news-placeholder.png'}
                    className="h-56 w-full object-cover"
                />
                <div className="bg-white p-4 sm:p-6">
                    <time dateTime={createdAt} className="block text-xs text-gray-500">
                        {formattedDate}
                    </time>
                    <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>
                    <p
                        className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(subtitle || 'Sem subtitulo disponível.')
                        }}
                    />
                </div>
            </Link>
        </article>
    );
};

export default ArticleCard;
