import Image from "next/image";

type ImageBlockProps = {
    src: string;
    alt: string;
    description: string;
};

export function ImageBlock({ alt, src, description }: ImageBlockProps) {
    return (
        <div className="border border-slate-200 p-2 flex flex-col gap-4 hover:shadow-md">
            <Image src={src} alt={alt} height={256} width={256} />
            <div className="w-full text-center">
                <span className="hover:text-blue-600 text-blue-500 ">{description}</span>
            </div>
        </div>
    );
}
