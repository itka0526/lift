import { Block } from "@/components/ui/block";
import { ContactUs } from "@/components/ui/contact-us";
import { COP_LOP_LANDING_DOOR_CEILING } from "@/components/ui/COP_LOP_LANDING_DOOR_CEILING";
import { ImageBlock } from "@/components/ui/imageBlock";
import { MoreDecorations } from "@/components/ui/more-decorations";
import MAIN from "@/public/el1.jpg";

import LL1 from "@/public/ll1.jpg";
import LL2 from "@/public/ll2.jpg";
import LL3 from "@/public/ll3.jpg";
import LL4 from "@/public/ll4.jpg";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <Block
                title="Эскалатор"
                body="Дэвшилтэт шинжлэх ухааны судалгааны технологи, хамгийн өндөр чанарыг бүтээнэ. FUJI Precision-ийн эскалаторууд дөрвөн давуу талтай: нягт бүтэцийн төгс төгөлдөр байдал, тансаг хэв маягийн төгс төгөлдөр байдал, өндөр үр ашиг ба аюулгүй байдлын төгс төгөлдөр байдал, технологийн индукцийн төгс төгөлдөр байдал. Түүний нарийн бүтэц, сайхан алхмууд, гоёмсог бүслүүр, тансаг ба үзэсгэлэнтэй гадаад үзэмж нь зорчигчдод гэрэл гэгээтэй, тав тухтай шинэ мэдрэмжийг өгч, орчин үеийн архитектурын онцгой сэтгэл татам байдал ба тансаг хэв маягийг үнэлэх боломжийг олгодог. Одоо чатлаарай!"
                imageAlt="Escalator 1"
                image={MAIN}
                imageBlur="/el1-b.jpg"
                bodyChildren={<ContactUs />}
            ></Block>

            <section>
                <h1 className="text-2xl md:text-3xl text-center">FUJI Precision, нэг жижиг алхам, амьдралын нэг том алхам.</h1>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 my-4 md:my-8">
                    {[
                        "Худалдааны төвийн 30 градусын эскалатор",
                        "FUJI доторх эскалатор",
                        "Маш сайн чанартай эскалатор",
                        "FUJI бат бөх ба өрсөлдөх чадвартай эскалатор",
                        "Дэвшилтэт технологитой 1000 алхмын өргөнтэй эскалатор",
                        "Аюулгүй байдлын төхөөрөмжтэй өндөр чанартай эскалатор",
                        "0.5 м/с хурдтай эскалатор",
                        "VVVF функцтэй эскалатор",
                        "Гадна эскалатор",
                        "Арилжааны эскалатор",
                    ].map((desc, idx) => {
                        return <ImageBlock description={desc} src={`/l${idx + 1}.jpg`} alt={`${desc} ${idx + 1}`} key={`preview-escalator-${idx}`} />;
                    })}
                    -{" "}
                </div>
            </section>
            <MoreDecorations />
            <COP_LOP_LANDING_DOOR_CEILING />

            <section className="mb-16 w-full flex flex-col justify-center items-center max-w-7xl">
                <div className="">
                    <Image src={LL1} alt="Escalator Image 1" className="object-contain" />
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="">
                        <Image src={LL2} alt="Escalator Image 2" className="object-contain" />
                    </div>
                    <div className="">
                        <Image src={LL3} alt="Escalator Image 3" className="object-contain" />
                    </div>
                </div>
                <div>
                    <div className="">
                        <Image src={LL4} alt="Escalator Image 4" className="object-contain" />
                    </div>
                </div>
            </section>
        </>
    );
}
