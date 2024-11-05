"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CategoryNav from "./left-navbar";

const products = Array.from({ length: 192 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    image: `/${i + 1}.jpg?height=200&width=200&text=Product+${i + 1}`,
}));

export function ECommerceNavigation() {
    const [activePage, setActivePage] = React.useState(1);
    const totalPages = 16;
    const productsPerPage = 12;
    const startIndex = (activePage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    return (
        <div className="flex min-h-screen flex-col w-full">
            <CategoryNav />
            <div className="flex flex-1 flex-col md:flex-row w-full">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                    {currentProducts.map((product) => (
                        <div key={product.id} className="border bg-card text-card-foreground shadow-sm p-2">
                            <Image src={product.image} alt={product.image} width={200} height={200} className="rounded-t-lg" />
                        </div>
                    ))}
                </div>
                <nav className="mt-8 flex justify-center w-full overflow-x-auto">
                    <ul className="flex flex-nowrap gap-4 w-full">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <li key={i}>
                                <Button variant={activePage === i + 1 ? "default" : "outline"} size="icon" onClick={() => setActivePage(i + 1)}>
                                    {i + 1}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}
