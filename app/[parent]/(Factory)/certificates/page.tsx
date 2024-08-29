import { H1, P } from "@/components/ui/text";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <section className="w-full rounded-md flex flex-col gap-8 md:gap-12 justify-center items-center px-8 py-4 md:px-28 md:py-16 ">
                <H1>Гэрчилгээний Дэлгэц</H1>
                <P className="text-center">Манай компани үндэсний болон олон улсын баталгаажуулалтуудыг амжилттай давсан болно.</P>
            </section>
            <section className="w-full rounded-md flex flex-col gap-8 md:gap-12 justify-center items-center px-8 py-4 md:px-28 md:py-16 md:pt-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Array(8)
                        .fill(8)
                        .map((_, idx) => (
                            <Link className="shadow-md" key={`i-${idx}`} href={`/c${idx + 1}.jpg`}>
                                <Image src={`/c${idx + 1}.jpg`} alt="Not found!" height={256} width={256} />
                            </Link>
                        ))}
                </div>
            </section>
        </>
    );
}
