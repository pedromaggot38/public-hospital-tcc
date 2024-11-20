'use client'

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const ImageGallery = () => {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const panels = [
        { image: '/ImageGallery/image0.jpg' },
        { image: '/ImageGallery/image1.jpg' },
        { image: '/ImageGallery/image2.jpg' },
        { image: '/ImageGallery/image3.jpg' },
        { image: '/ImageGallery/image4.jpg' },
        { image: '/ImageGallery/image5.jpg' },
        { image: '/ImageGallery/image6.jpg' },
    ]

    const handleClick = (index: number) => {
        setExpandedIndex(index);
    };

    return (
        <div className="w-[100%] h-[70vh] overflow-hidden">
            <div className="hidden lg:flex w-full h-full justify-center items-center">
                <div className="w-[80%] h-full flex items-center justify-center gap-2">
                    {
                        panels.map((panel, index) => (
                            <div
                                key={index}
                                onClick={() => handleClick(index)}
                                className={`          
                                    flex-shrink-0 rounded-2xl bg-black cursor-pointer transition-all duration-500 ease-in-out ${expandedIndex === index ? "w-[60%]" : "w-[10%] overflow-hidden"}
                                    h-full
                                    relative
                                `}
                            >
                                <Image
                                    src={panel.image}
                                    alt={`Image ${index + 1}`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    style={{ objectFit: "cover" }}
                                    className="rounded-2xl"
                                />
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="lg:hidden w-full h-full">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    {panels.map((panel, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-[50vh]">
                                <Image
                                    src={panel.image}
                                    alt={`Image ${index + 1}`}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="rounded-2xl"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default ImageGallery;
