"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Category {
    name: string;
    slug: string;
    subcategories?: Category[];
}

const categories: Category[] = [
    {
        name: "Electronics",
        slug: "electronics",
        subcategories: [
            { name: "Smartphones", slug: "smartphones" },
            { name: "Laptops", slug: "laptops" },
            { name: "Tablets", slug: "tablets" },
        ],
    },
    {
        name: "Clothing",
        slug: "clothing",
        subcategories: [
            { name: "Men's", slug: "mens" },
            { name: "Women's", slug: "womens" },
            { name: "Kids", slug: "kids" },
        ],
    },
    { name: "Books", slug: "books" },
    { name: "Home & Garden", slug: "home-garden" },
    { name: "Sports & Outdoors", slug: "sports-outdoors" },
];

function CategoryItem({ category }: { category: Category }) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div>
            <div className="flex items-center justify-between py-2">
                <Link href={`/category/${category.slug}`} className="text-sm font-medium hover:underline">
                    {category.name}
                </Link>
                {category.subcategories && (
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        <span className="sr-only">Toggle {category.name} subcategories</span>
                    </Button>
                )}
            </div>
            {isOpen && category.subcategories && (
                <div className="ml-4 border-l pl-4">
                    {category.subcategories.map((subcategory) => (
                        <CategoryItem key={subcategory.slug} category={subcategory} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function CategoryNav() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <Button className="mb-4 w-full lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Hide Categories" : "Show Categories"}
            </Button>
            <aside className={`${isOpen ? "block" : "hidden"} lg:block w-full lg:w-64 bg-background p-4 border-r`}>
                <h2 className="text-lg font-semibold mb-4">Categories</h2>
                <ScrollArea className="md:h-[calc(100vh-8rem)]">
                    {categories.map((category) => (
                        <CategoryItem key={category.slug} category={category} />
                    ))}
                </ScrollArea>
            </aside>
        </>
    );
}
