import { AboutWithVideo } from "@/components/ui/about-with-video";
import { HomePageCarousel } from "@/components/ui/home-page-carousel";
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
            <section className="select-none">
                <HomePageCarousel />
            </section>
            <Section className="bg-white pt-0 md:pt-0">
                <H1>Цахилгаан шат үйлдвэрлэгч, нийлүүлэгч</H1>
                <P>
                    FUJI Precision нь хэрэглэгчдэдээ хэмнэлттэй, аюулгүй, үр ашигтай цахилгаан шатны шийдлүүдийг хүргэхэд зориулан ажиллаж байна.
                    Холбогдоно уу!
                </P>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                    {products ? (
                        products.items.map((product) => (
                            <Link key={"product-" + product.title} href={product.url}>
                                <div className="w-full justify-self-start self-start my-4 overflow-hidden">
                                    <Image src={product.image} alt={product.url} className="rounded-md" placeholder="blur" />
                                    <h3 className="text-center text-lg font-medium">{product.mn_title}</h3>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <span>Бараанууд алга!</span>
                    )}
                </div>
            </Section>
            <AboutWithVideo />
        </>
    );
}
