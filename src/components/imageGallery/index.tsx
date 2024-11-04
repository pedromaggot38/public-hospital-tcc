'use client'

import useIsMobile from "@/hooks/useIsMobile";
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
                                flex-shrink-0 h-full rounded-2xl bg-black cursor-pointer transition-all duration-500 ease-in-out ${expandedIndex === index ?
                                    "w-[60%]" : "w-[10%] overflow-hidden"}
                                `}
                        >
                            <img src={panel.image} className="w-full h-full object-cover object-top" alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ImageGallery