import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { data } from "@/lib/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { CollapsibleSidebar } from "@/components/ui/collapsable-sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        template: "%s | ТББИ",
        default: "Төгс Бүтээн Босголт Интернэшнл",
    },
    description: "Манай компани нь Барилга угсралт, барилгын материал болон цахилгаан шат нийлүүлнэ",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const Mobile = () => (
        <div className="flex w-full h-full items-center space-x-2 md:hidden justify-end">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-ghost flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </label>
        </div>
    );

    const Desktop = () => (
        <div className="w-full h-full items-center flex">
            <div className="px-8 flex-1">
                <Link href="/" className="flex h-16 w-16">
                    <Image src={Logo} alt="logo.png" className="object-contain" priority />
                </Link>
            </div>
            <div className="w-full h-full justify-start self-start grid-flow-col gap-2 items-center hidden md:grid ">
                {data.map((x, i) => {
                    return (
                        <div className={x.items.length ? `dropdown dropdown-hover` : ""} key={x.mn_title}>
                            <div tabIndex={0} role="button" className="btn bg-base-100 border-none shadow-none">
                                <Link href={x.url}>{x.mn_title}</Link>
                            </div>
                            {x.items.length ? (
                                <ul tabIndex={i} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-md border">
                                    {x.items.map((y) => (
                                        <li key={y.mn_title}>
                                            <Link href={y.url}>{y.mn_title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : null}
                        </div>
                    );
                })}
            </div>
            <Mobile />
        </div>
    );

    return (
        <html lang="en">
            <body id="body" className={inter.className}>
                <div className="drawer">
                    <CollapsibleSidebar />
                    <div className="drawer-content flex flex-col">
                        <nav className="navbar bg-base-100 w-full shadow-md">
                            <div className="w-full h-full flex flex-col">
                                <Desktop />
                            </div>
                        </nav>
                        <main className="flex min-h-screen pt-10 gap-4 flex-col items-center px-4 md:px-16 overflow-hidden">{children}</main>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 min-h-full w-80 p-4">
                            <div className="flex flex-col h-full bg-background rounded-md">
                                <div className="flex-1 overflow-auto ">
                                    <Accordion type="single" collapsible={true} defaultValue={""}>
                                        {data.map((x) => {
                                            return (
                                                <AccordionItem value={x.title} key={`accordion-item-${x.title}`}>
                                                    <AccordionTrigger className="flex items-center justify-between px-6 py-4 hover:bg-muted transition-colors">
                                                        <Link href={x.url} className="flex items-center gap-4" prefetch={false}>
                                                            <span className="font-medium">{x.mn_title}</span>
                                                        </Link>
                                                    </AccordionTrigger>
                                                    <AccordionContent className="px-6 py-4 space-y-2">
                                                        {x.items.map((y) => {
                                                            return (
                                                                <Link
                                                                    key={`accordion-content-item-${y.title}`}
                                                                    href={y.url}
                                                                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground"
                                                                    prefetch={false}
                                                                >
                                                                    <span>{y.mn_title}</span>
                                                                </Link>
                                                            );
                                                        })}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            );
                                        })}
                                    </Accordion>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
                <footer className={`footer footer-center bg-base-100 shadow-inner text-base-content p-4`}>
                    <aside>
                        <p>Copyright © {new Date().getFullYear()}</p>
                    </aside>
                </footer>
            </body>
        </html>
    );
}
