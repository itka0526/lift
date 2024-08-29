import { Carousel } from "@/components/client-components/image-carousel";
import { DivFlexible, H1, P, Section, SectionFlexible } from "@/components/ui/text";
import { data } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Page() {
    const res = data.find((x) => x.title === "Original Factory");
    if (!res) return notFound();
    return (
        <>
            <SectionFlexible>
                <DivFlexible>
                    <H1>Үйлдвэрийн талбай</H1>
                    <P>
                        Сужоу Фүжи Пресижн Лифт ХХК нь CNC лазер зүсэгч машин, олон станцтай CNC цоолборлох машин, CNC хавтан нугалах машин,
                        боловсруулах төв, шүрших шугам болон иж бүрэн эд анги үйлдвэрлэлийн шугамаар тоноглогдсон хүчирхэг дизайн, үйлдвэрлэлийн
                        системтэй. Бүх төрлийн дэлхийн хэмжээний орчин үеийн үйлдвэрлэлийн процессыг бүрэн гүйцэд гүйцэтгэх нь компанийн өндөр
                        чанартай, өндөр технологийн нэмүү өртөг шингэсэн лифтний бүтээгдэхүүн үйлдвэрлэх бат бөх баталгааг хангаж өгдөг. Фүжи Пресижн
                        нь нарийн ажиллагаа, ажилтнуудын ур чадварыг сайжруулахад ихээхэн ач холбогдол өгдөг. Тус компани стандартчиллыг удирдаж,
                        техникийн багуудыг байгуулан, техникийн сургалтыг бэхжүүлж, тогтмол салбарын судалгаа хийж, ажилтнуудаас санал авахыг дэмждэг;
                        мөн ISO9001:2000 чанарын систем болон CE гэрчилгээний системийг чанд мөрдөж, бүрэлдэхүүн хэсэг тус бүрийн нарийвчлал, гоо
                        үзэсгэлэнг баталгаажуулдаг.
                    </P>
                </DivFlexible>
                <DivFlexible>
                    <Carousel />
                </DivFlexible>
            </SectionFlexible>
            <Section>
                <DivFlexible>
                    <H1>Манай үйлдвэр</H1>
                    <P>
                        {`Оюун ухаан хөгжилд хөтөлж, технологи ирээдүйг удирдана. "Ухаалаг" шилжилтийн энэ давалгаанд, Фүжи Пресижн Лифт үргэлж тэргүүн
                    эгнээнд явж, хааны сүр жавхланг харуулсаар ирсэн.`}
                    </P>
                </DivFlexible>
                <DivFlexible>
                    <div className="h-full grid grid-cols-3 grid-rows-2 gap-4  ">
                        {Array(6)
                            .fill(0)
                            .map((x, index) => (
                                <Image
                                    key={`x-${index}`}
                                    src={`/i${index + 1}.jpg`}
                                    height={160}
                                    width={300}
                                    className="object-contain"
                                    alt="Image not found!"
                                />
                            ))}
                    </div>
                </DivFlexible>
            </Section>
        </>
    );
}
