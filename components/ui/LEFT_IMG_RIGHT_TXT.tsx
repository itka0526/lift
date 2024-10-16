import Image from "next/image";
import { H1 } from "./text";
import { PropsWithChildren } from "react";

type LEFT_IMG_RIGHT_TXT_PROPS = {
    title: string;
    imgAlt: string;
    imgSrc: string;
};

export function LEFT_IMG_RIGHT_TXT({ children, imgAlt, imgSrc, title }: PropsWithChildren & LEFT_IMG_RIGHT_TXT_PROPS) {
    return (
        <div className="grid md:grid-cols-5 gap-4 p-2 bg-slate-100 text-black">
            <div className="md:col-span-2 w-full min-h-96 h-full relative flex items-center">
                <Image alt={imgAlt} src={imgSrc} fill className="object-contain md:object-left" />
            </div>
            <div className="md:col-span-3 flex flex-col p-4 justify-center">
                <H1 className="my-4">{title}</H1>
                {children}
            </div>
        </div>
    );
}
