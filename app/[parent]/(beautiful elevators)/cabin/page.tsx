import { ECommerceNavigation } from "@/components/e-commerce-navigation";
import { H1 } from "@/components/ui/text";
import MAIN from "@/public/a1.jpg";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <div className="w-full relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <H1 className="text-white text-4xl">Бүхээг</H1>
                </div>
                <Image src={MAIN} alt="Cabin image 1" height={2048} width={2048} placeholder="blur" />
            </div>
            <ECommerceNavigation />
        </>
    );
}
