import { CardCarousel, CardProps } from "@/components/card-carousel";
import { Block } from "@/components/ui/block";
import { ContactUs } from "@/components/ui/contact-us";
import { COP_LOP_LANDING_DOOR_CEILING } from "@/components/ui/COP_LOP_LANDING_DOOR_CEILING";
import { ImageBlock } from "@/components/ui/imageBlock";
import { MoreDecorations } from "@/components/ui/more-decorations";
import CE from "@/public/ce1.jpg";

export default function Page() {
    const cards: CardProps[] = [
        {
            title: "PM синхрон таталтын машин",
            content:
                "FUJI Precision Elevator 1000 кг-3000 кг PM синхрон таталтын машинтай ачааны лифтуудыг үйлдвэрлэдэг бөгөөд бид ачааны лифтэд зориулсан машин өрөө болон өрөөгүй төрлийг санал болгодог. Ерөнхий хурд 0.5 м/с, хамгийн өндөр хурд нь 1.0 м/с.",
            image: "/ee1.jpg",
        },
        {
            title: "Гир механизм",
            content:
                "Харилцагчдын шаардлагын дагуу, FUJI Precision нь харилцагчдынхаа захиалгаар онцгой загварчилсан дизайныг хэрэгжүүлэх боломжтой. 3000 кг-с 10000 кг хүртэлх том ачааны лифтүүд нь гир таталтын машинтай байна.",
            image: "/ee2.jpg",
        },
        {
            title: "Тусгай дизайны",
            content:
                "FUJI Precision дөрвөн дамжуулагч болон зургаан зааварчилгаа өгөгдсөн төмөр замын дизайныг сайжруулсан. Энэ нь хаалга системийн том хэмжээ, том ачаа, том тээвэр чадварт хүрэх боломжийг олгож, харилцагчдын онцгой ачаа ачаалалт, ачаа хасах хэрэгцээг хангахад хүргэнэ.",
            image: "/ee3.jpg",
        },
        {
            title: "Бусад Үйлдлүүд",
            content:
                "Аюулгүй ачааны лифтүүдэд зориулсан стандарт UCMP шинж чанарууд. Захиалгат машин буферийг хангаж өгч, ачааны лифтийг илүү хатуу, туурай болгож, лифтийн амьдралын хугацааг уртасгана.",
            image: "/ee4.jpg",
        },
    ];
    return (
        <>
            <Block
                title="Ачааны лифт"
                body="FUJI Precision-ийн ачааны лифтууд нь үр ашигтай, эрчим хүч хэмнэлттэй бөгөөд аюулгүй бөгөөд өндөр давхаргатай барилгууд, худалдааны төвүүд, үйлдвэрүүд болон агуулахуудын шаардлагыг хангаж байна. Манай лифтууд өндөр найдвартай байдал, тэсвэртэй байдал, өндөр ачаа тээврийн чадамж, бага дуу чимээ болон өндөр аюулгүй байдлаар онцлогтой. FUJI лифт логистикийн үр ашгийг онцгой сайжруулж, дээд зэрэглэлийн үйлчилгээнүүд ба шийдлүүдэд нэвтрэх боломжийг олгодог. Одоо чатлаарай!"
                imageAlt="Panoramic elevator 1"
                image={CE}
                imageBlur="/ce1-b.jpg"
                bodyChildren={<ContactUs />}
            ></Block>

            <section>
                <h1 className="text-2xl md:text-3xl">FUJI Precision танай барааг аюулгүй дээш-доош тээх болно</h1>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 my-4 md:my-8">
                    {[
                        "MRL/MR ачааны лифт",
                        "Машины өрөө ачааны лифт",
                        "Өндөр чанарын 2000 кг ачааны лифт",
                        "Хятадад аюулгүй ачааны лифт",
                        "Том зайтай ачааны лифт",
                        "3000 кг ачааны лифт",
                        "Өрөөгүй том ачааны лифт",
                        "MRL/MR ачааны лифт",
                        "Буяажласан ган ачааны лифт",
                    ].map((desc, idx) => {
                        return (
                            <ImageBlock
                                description={desc}
                                src={`/ec${idx + 1}.jpg`}
                                alt={`${desc} ${idx + 1}`}
                                key={`preview-cargo-elevator-${idx}`}
                            />
                        );
                    })}
                </div>
            </section>
            <MoreDecorations />
            <COP_LOP_LANDING_DOOR_CEILING />

            <section className="mb-16 w-full">
                <h1 className="text-2xl md:text-3xl md:mt-6 md:mb-8 mt-4 mb-6">Гүйцэтгэлтэй ачаа, нэг алхмын үйлчилгээ</h1>
                <CardCarousel cards={cards} />
            </section>
        </>
    );
}
