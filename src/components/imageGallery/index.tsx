'use client'

import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import { useState } from "react";

const ImageGallery = () => {
    const [expandedIndex, setExpandedIndex] = useState(0);
    const isMobile = useIsMobile();
    
    if (isMobile) {
        return null;
    }
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
        <div className="w-[100%] h-[70vh] overflow-hidden flex justify-center items-center">
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
                                layout="fill"
                                objectFit="cover"
                                className="rounded-2xl"
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ImageGallery