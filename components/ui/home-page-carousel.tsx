"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { bannerData } from "@/lib/data";

export function HomePageCarousel() {
    return (
        <Carousel autoPlay interval={3000} infiniteLoop showStatus={false} showIndicators={false}>
            {bannerData.map((x, i) => (
                <div key={`banner-${x.url}`} className="overflow-hidden rounded-md">
                    <Image src={x.image} alt={`banner-${i}`} />
                </div>
            ))}
        </Carousel>
    );
}
