import Image, { StaticImageData } from "next/image";
import { H1, P } from "./text";

type BlockProps = {
    title: string;
    body: string;
    image: StaticImageData;
    imageAlt: string;
    imageBlur: string;
    bodyChildren?: React.PropsWithChildren["children"];
};

export function Block({ title, body, image, imageAlt, imageBlur, bodyChildren }: BlockProps) {
    return (
        <article className="grid gap-4 md:grid-cols-2 md:gap-8 p-4">
            <div className="w-full">
                <Image src={image} alt={imageAlt} placeholder="blur" blurDataURL={imageBlur} />
            </div>
            <div className="flex flex-col gap-4">
                <H1>{title}</H1>
                <P>{body}</P>
                {bodyChildren}
            </div>
        </article>
    );
}
