import DOMPurify from 'dompurify';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ArticleProps {
    title: string;
    subtitle: string | null;
    imageUrl: string | null;
    createdAt: string;
    slug: string;
}

const ArticleListCard: React.FC<ArticleProps> = ({ title, subtitle, imageUrl, createdAt, slug }) => {
    const formattedDate = new Intl.DateTimeFormat('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(new Date(createdAt));

    return (
        <article className="flex flex-col h-full bg-white rounded shadowBlue transition overflow-hidden">
            <div className="h-48 w-full relative">
                <Image
                    alt={title}
                    src={imageUrl || '/news-placeholder.png'}
                    className="object-cover"
                    fill
                />
            </div>
            <div className="flex-1 flex flex-col justify-between p-4">
                <div>
                    <time dateTime={createdAt} className="block text-xs text-gray-500 mb-1">
                        {formattedDate}
                    </time>

                    <Link
                        href={`/articles/${slug}`}
                        className="block font-bold text-gray-900 text-sm leading-tight line-clamp-2 mb-2"
                    >
                        {title}
                    </Link>

                    <p
                        className={`text-sm line-clamp-2 ${subtitle ? 'text-gray-700' : 'text-gray-400'}`}
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(subtitle || 'Sem subtítulo disponível.'),
                        }}
                    />
                </div>

                <Link href={`/articles/${slug}`} className="mt-4">
                    <span className="block bg-blue-300 w-full text-center px-4 py-2 text-xs font-bold uppercase text-gray-900 transition hover:bg-blue-500">
                        Leia aqui
                    </span>
                </Link>
            </div>
        </article>

    );
};

export default ArticleListCard;