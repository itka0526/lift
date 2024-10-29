"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export type CardProps = {
    title: string;
    content: string;
    image: string;
};

export function CardCarousel({ cards }: { cards: CardProps[] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        breakpoints: {
            "(min-width: 768px)": { loop: true },
        },
    });

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <div className="w-full mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-10">
                    {cards.map((card, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 pl-10 md:flex-[0_0_33.33%]">
                            <Card className="h-full">
                                <CardContent className="p-0">
                                    <div className="overflow-hidden">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            width={1024}
                                            height={1024}
                                            className="w-full object-cover origin-center scale-105 transition-transform hover:scale-100 max-md:scale-100 duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                                        <p className="text-sm text-gray-600">{card.content}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center mt-4 gap-2">
                <Button variant="outline" size="icon" onClick={scrollPrev} disabled={!prevBtnEnabled} className="rounded-none">
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={scrollNext} disabled={!nextBtnEnabled} className="rounded-none">
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
