"use client";

import { ChevronLeftCircleIcon, ChevronRightCircleIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const Carousel = () => {
    const [index, setIndex] = useState<number>(0);
    return (
        <div className="h-full w-full grid auto-cols-fr overflow-scroll grid-rows-1 relative">
            <div className="absolute w-full h-full z-10 top-0 left-0 flex items-center justify-between px-2">
                <button onClick={() => setIndex(0)}>
                    <ChevronLeftCircleIcon className="text-white" />
                </button>
                <button onClick={() => setIndex(1)}>
                    <ChevronRightCircleIcon className="text-white" />
                </button>
            </div>
            {index ? (
                <div className="h-full w-full relative">
                    <Image src={"/factory-img01.jpg"} fill className="object-contain" alt="/factory-img01.jpg" />
                </div>
            ) : (
                <div className="h-full w-full relative">
                    <Image src={"/factory-img02.jpg"} fill className="object-contain" alt="/factory-img02.jpg" />
                </div>
            )}
        </div>
    );
};
