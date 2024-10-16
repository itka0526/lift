import { Block } from "@/components/ui/block";
import { ContactUs } from "@/components/ui/contact-us";
import { COP_LOP_LANDING_DOOR_CEILING } from "@/components/ui/COP_LOP_LANDING_DOOR_CEILING";
import { ImageBlock } from "@/components/ui/imageBlock";
import { LEFT_IMG_RIGHT_TXT } from "@/components/ui/LEFT_IMG_RIGHT_TXT";
import { RIGHT_IMG_LEFT_TXT } from "@/components/ui/RIGHT_IMG_LEFT_TXT";
import { H1 } from "@/components/ui/text";
import HE1 from "@/public/he1.jpg";
import Image from "next/image";
import Link from "next/link";
import ShaftColor from "@/public/sc1.jpg";
import { MoreDecorations } from "@/components/ui/more-decorations";

export default function Page() {
    return (
        <>
            <Block
                title="Гэрийн цахилгаан шат"
                body="гэрийн цахилгаан шат FUJI Precision гэрийн цахилгаан шат нь өндөр зэрэглэлийн вилла болон хувийн орон сууцанд зориулан тусгайлан зохион бүтээсэн бөгөөд аюулгүй, тав тухтай, тохиромжтой босоо тээврийн шийдлийг санал болгодог. Фүжи вилла цахилгаан шат нь VVVF хөтлөгч, ухаалаг хяналтын систем, эрчим хүч хэмнэх дизайн зэрэг дэвшилтэт технологиудыг багтаасан тул дуу чимээ, чичиргээ багатай, жигд, үр ашигтай ажиллагааг хангадаг. Гэрийн цахилгаан шат нь амьдралаа таатай өнгөрүүлэх шинэ арга зам болог."
                imageAlt="Home elevator 1"
                image={HE1}
                imageBlur="/he1-b.jpg"
                bodyChildren={<ContactUs />}
            ></Block>
            <section>
                <h1 className="text-2xl md:text-3xl">FUJI Precision: Таны сонголтын тансаг зэрэглэлийн болон захиалгат цахилгаан шат!</h1>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 my-4 md:my-8">
                    {[
                        "Дугуй цахилгаан шат ",
                        "Шилэн цахилгаан шат ",
                        "FUJI Precision гэрийн цахилгаан шат ",
                        "Тавцант өргөгч ",
                        "1.0м/с хурдтай гэрийн цахилгаан шат ",
                        "Жижиг зайд зориулсан вилла цахилгаан шат ",
                        "Шахтын хамт панорам гэрийн цахилгаан шат ",
                        "0.4м/с хурдтай доторх тансаг цахилгаан шат ",
                        "Титан-Алтан өнгөлгөөтэй вилла цахилгаан шат ",
                        "Аюулгүй гэрийн цахилгаан шат",
                    ].map((desc, idx) => {
                        return (
                            <ImageBlock
                                description={desc}
                                src={`/he${idx + 2}.jpg`}
                                alt={`Home Elevator Preview ${idx + 2}`}
                                key={`preview-home-elevator-${idx}`}
                            />
                        );
                    })}
                </div>
            </section>
            <MoreDecorations />
            <COP_LOP_LANDING_DOOR_CEILING />
            <section className="flex flex-col gap-6">
                <div className="my-8">
                    <H1>Таныг гэрийн дулаан уур амьсгалыг мэдрүүлэх төрөл бүрийн хийцүүд</H1>
                </div>
                <LEFT_IMG_RIGHT_TXT title="Гантри таталтын төрөл" imgAlt="Gantry Traction Type" imgSrc="/ht1.jpg">
                    <p>
                        Энэ төрлийн цахилгаан шатны хөдөлгүүрийн хэсэг нь босоо амны дээд талд байрладаг бөгөөд үндсэн хоёр зам нь кабины зүүн, баруун
                        талд байрлана. Хоёр талын тэнцвэртэй хүчний ачаар цахилгаан шат илүү жигд ажилладаг. Үүний үр дүнд зорчих туршлага илүү төгс
                        болдог.
                    </p>
                </LEFT_IMG_RIGHT_TXT>
                <RIGHT_IMG_LEFT_TXT title="Үүргэвчтэй таталтын төрөл" imgAlt="Backpack Rack Traction Type" imgSrc="/ht2.jpg">
                    <p>
                        Үүргэвчний хүрээ бүтцтэй вилла цахилгаан шат нь нэрнээсээ харахад оюутны үүргэвчтэй адил. Эсрэг жин болон кабины зам нь нэг
                        талд байрладаг тул цахилгаан шатны босоо амны шаардлага бага байдаг.
                    </p>
                </RIGHT_IMG_LEFT_TXT>
                <LEFT_IMG_RIGHT_TXT title="Ган бүсийн төрөл" imgAlt="Steel Belt Type" imgSrc="/ht3.jpg">
                    <p>
                        Тулгуур систем нь уламжлалт ган троссыг орлох илүү бат бөх, байгальд ээлтэй нийлмэл ган бүсийг ашигладаг. Уламжлалт тросстой
                        харьцуулахад эдэлгээний хугацаа 2-3 дахин уртасдаг бөгөөд тосолгоо шаарддаггүй. Үүний үр дүнд цахилгаан шат илүү тогтвортой,
                        тав тухтай ажиллаж, босоо тээврийн хөгжлийг шинэ түвшинд хүргэж байна.
                    </p>
                </LEFT_IMG_RIGHT_TXT>
                <RIGHT_IMG_LEFT_TXT title="Албадмал төрөл" imgAlt="Forced Type" imgSrc="/ht4.jpg">
                    <p>
                        Албадмал төрлийн гэрийн цахилгаан шат нь хамгийн бага босоо амны хэмжээний шаардлагыг хангаж, босоо амны орон зайг их
                        хэмжээгээр ашиглах боломжтой бөгөөд харьцангуй бага суурийн гүн шаарддаг.
                    </p>
                </RIGHT_IMG_LEFT_TXT>
            </section>
            <section>
                <H1 className="my-12 text-center">Сонголттой босоо амны материал нь танд бүрэн үйлчилгээг санал болгож байна</H1>
                <div className="grid grid-cols-2 p-4 gap-6">
                    <div className="flex flex-col gap-4 ">
                        <Image src={"/hi1.jpg"} alt="Shaft 1" width={512} height={512} />
                        <H1 className="text-center">Алюминум хайлшин хүрээтэй босоо ам</H1>
                    </div>
                    <div className="flex flex-col gap-4 ">
                        <Image src={"/hi2.jpg"} alt="Shaft 2" width={512} height={512} />
                        <H1 className="text-center">Ган босоо ам</H1>
                    </div>
                </div>
            </section>
            <section className="w-full flex flex-col">
                <H1 className="my-12 text-center">Босоо амны материалын өнгө</H1>
                <div className="w-full overflow-x-auto gap-6">
                    <div className="flex w-full md:px-48">
                        <Image src={ShaftColor} alt="Shaft Color" className="w-full" />
                    </div>
                </div>
            </section>
            <section className="pb-24">
                <H1 className="my-12 text-center">Сонголттой битүүмжлэлийн материал</H1>
                <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                    <div className="flex flex-col gap-4 ">
                        <Image src={"/t1.jpg"} alt="Image 1" width={512} height={512} />
                        <H1 className="text-center">Тунгалаг шил</H1>
                    </div>
                    <div className="flex flex-col gap-4 ">
                        <Image src={"/t2.jpg"} alt="Image 2" width={512} height={512} />
                        <H1 className="text-center">Матт шил</H1>
                    </div>
                    <div className="flex flex-col gap-4 ">
                        <Image src={"/t3.jpg"} alt="Image 3" width={512} height={512} />
                        <H1 className="text-center">Бор шил</H1>
                    </div>
                    <div className="flex flex-col gap-4 ">
                        <Image src={"/t4.jpg"} alt="Image 4" width={512} height={512} />
                        <H1 className="text-center">Цэнхэр одтой саарал шил</H1>
                    </div>
                </div>
            </section>
        </>
    );
}
