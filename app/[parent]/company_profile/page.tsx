import { AboutWithVideo } from "@/components/ui/about-with-video";
import { H1, P, Section } from "@/components/ui/text";
import { data } from "@/lib/data";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function Page() {
    const products = data.find((x) => x.title === "Products") as
        | {
              title: string;
              mn_title: string;
              items: {
                  title: string;
                  mn_title: string;
                  url: string;
                  image: StaticImageData;
              }[];
              url: string;
          }
        | undefined;

    return (
        <>
            <h1 className="text-2xl mb-4">FUJI Precision нь өндөр чанартай цахилгаан шат болон бүтээгдэхүүний үйлчилгээг санал болгодог.</h1>
            <AboutWithVideo />
            <section className="w-full min-h-72">
                {products ? (
                    <div className="grid grid-flow-col auto-cols-[50%] md:auto-cols-[25%] justify-self-start self-start w-full h-full gap-4 overflow-auto">
                        {products.items.map((product) => (
                            <Link key={"product-" + product.title} href={product.url}>
                                <div className="w-full justify-self-start self-start my-4 overflow-hidden">
                                    <Image src={product.image} alt={product.url} className="rounded-md" placeholder="blur" />
                                    <h3 className="text-center text-lg font-medium">{product.mn_title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <span>Бараанууд алга!</span>
                )}
            </section>
            <Section>
                <H1>Бид бол Үйлдвэрлэл 4.0 технологийн үйлдвэр юм.</H1>
                <P>Олон улсын үйлдвэрүүдтэй синхрончилсон, оюун ухаанд суурилсан үйлдвэрлэл.</P>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        {
                            1: 1999,
                            2: "байгуулагдсан",
                        },
                        {
                            1: 1678,
                            2: "Харилцагчид",
                        },
                        {
                            1: 2000,
                            2: "Ажилчид",
                        },
                        {
                            1: 20000,
                            2: "Үйлдвэрлэл",
                        },
                    ].map((x, i) => (
                        <div
                            className="rounded-md aspect-square flex justify-center items-center bg-custom p-4 text-white flex flex-col"
                            key={`${x[2]}-${i}`}
                        >
                            <h1 className="text-4xl md:text-6xl">{x[1]}</h1>
                            <span className="text-lg md:text-2xl mt-1">{x[2]}</span>
                        </div>
                    ))}
                </div>
                <P>
                    Манай компани нь цахилгаан шатны судалгаа, үйлдвэрлэл, борлуулалт, суурилуулалт, засвар үйлчилгээ зэргийг нэгтгэсэн бөгөөд олон
                    арван жилийн цахилгаан шат үйлдвэрлэлийн туршлагатай. Бид дэлхийн хэрэглэгчдэд найдвартай, олон төрлийн бүтээгдэхүүнүүдийг
                    хүргэхээр зорьж байна.
                </P>
            </Section>
            <section>{/* // TODO: https://www.fujijg.com/about_us/company_profile/ submition form */}</section>
        </>
    );
}
