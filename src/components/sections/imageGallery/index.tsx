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
        <div>
            <div className="mb-14 text-center">
                <span className="py-1 px-4 bg-blue-100 rounded-full text-xs font-medium text-blue-600 text-center">
                    Galeria
                </span>
                <h2 className="text-4xl text-center font-bold text-gray-900 py-5">
                    Galeria
                </h2>
                <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
                    Verifique nosso endereço diretamente pelo mapa
                </p>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
                </div>
            </div>
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
        </div>
    );
}

export default ImageGallery;
