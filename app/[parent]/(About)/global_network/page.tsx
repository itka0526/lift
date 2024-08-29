import { P } from "@/components/ui/text";
import WorldImage from "@/public/world.png";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <section className="text-center flex-col flex gap-4 md:mt-12 mt-4">
                <P>
                    FUJI Precision лифтний хүчирхэг борлуулалт, үйлчилгээний маркетингийн сүлжээ нь дэлхийн зах зээл болон хэрэглэгчдэд тогтвортой
                    чанартай бүтээгдэхүүн, сэтгэл ханамжтай борлуулалтын дараах үйлчилгээг цаг тухайд нь, бүрэн дүүрэн хүргэж чадна.
                </P>
                <div className="w-full">
                    <Image src={WorldImage} alt="world.png" placeholder="blur" blurDataURL="/world-blur.png" />
                </div>
            </section>
        </>
    );
}
