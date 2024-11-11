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
        <article className="flex bg-white transition hover:shadow-xl">
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time dateTime={createdAt} className="block text-xs text-gray-500">
                    {formattedDate}
                </time>
                <span className="w-px flex-1 bg-gray-900/10"></span>
            </div>

            <div className="hidden sm:block sm:basis-56">
                <Image
                    alt={title}
                    src={imageUrl || '/news-placeholder.png'}
                    className="aspect-square h-full w-full object-cover"
                    width={300}
                    height={300}
                />
            </div>

            <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <Link href={`/articles/${slug}`}
                        className="font-bold text-gray-900 line-clamp-3">
                        {title}
                    </Link>

                    <p
                        className={`mt-2 line-clamp-3 text-sm/relaxed ${subtitle ? 'text-gray-700' : 'text-gray-400'
                            }`}
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(subtitle || 'Sem subtitulo disponível.')
                        }}
                    ></p>

                </div>
                <Link href={`/articles/${slug}`}>
                    <span
                        className="block bg-blue-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-blue-500">
                        Leia aqui
                    </span>
                </Link>

            </div>
        </article>
    );
};

export default ArticleListCard;