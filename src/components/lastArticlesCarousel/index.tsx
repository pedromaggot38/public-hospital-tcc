'use client'
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/swiper-bundle.css';
import { Button } from '../ui/button';
import { Article } from '@/types/interfaces';

interface Props {
    articles: Article[];
}

const LastArticlesCarousel: React.FC<Props> = ({ articles }) => {
    if (articles.length === 0) {
        return <p className="block xl:hidden text-center">Nenhuma notícia encontrada.</p>;
    }

    return (
        <div className="block xl:hidden">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Notícias Recentes</h2>
                <Button variant="link">
                    <Link href="/articles">Ver todas</Link>
                </Button>
            </div>

            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{ delay: 2500 }}
                pagination={{ clickable: true }}
                aria-label="Últimas notícias"
                loop={true}
                modules={[Autoplay]}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    800: { slidesPerView: 2 }, // 3 fica apertado no mobile, deixei 2
                }}
            >
                {articles.map((article) => (
                    <SwiperSlide key={article.slug}>
                        <Link href={`/articles/${article.slug}`} className="block relative rounded-lg overflow-hidden">
                            <div className="relative w-full h-64">
                                <Image
                                    src={article.imageUrl || '/news-placeholder.png'}
                                    alt={article.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    style={{ objectFit: 'cover', objectPosition: 'bottom' }}
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-45 text-white">
                                <p className="absolute top-2 left-2 bg-gray-900 bg-opacity-75 text-white text-xs rounded px-2 py-1">
                                    {new Date(article.createdAt).toLocaleDateString('pt-BR', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                    })}
                                </p>
                                <h2 className="text-lg font-semibold text-gray-100 line-clamp-2">{article.title}</h2>
                                <p className="text-sm mt-1 text-gray-100 line-clamp-2">{article.subtitle}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default LastArticlesCarousel;
