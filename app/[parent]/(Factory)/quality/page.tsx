import { DivFlexible, H1, P, SectionFlexible } from "@/components/ui/text";
import Image from "next/image";

export default function Page() {
    const Line = () => <span className="h-0 w-full border-dashed border-t-2 border-black absolute top-0 left-0" />;
    const CustomSection = ({ title, paragraph, src, swap = false }: { title: string; paragraph: string; src: string; swap?: boolean }) => {
        return (
            <SectionFlexible className="gap-6">
                <DivFlexible className={`${swap ? "md:order-2" : ""}`}>
                    <Image src={src} alt="Not found!" className="" width={500} height={500} />
                </DivFlexible>
                <div className={`flex flex-col items-center lg:justify-center w-full h-full gap-4 relative pt-2`}>
                    <Line />
                    <H1 className="text-center">{title}</H1>
                    <P className="text-center">{paragraph}</P>
                </div>
            </SectionFlexible>
        );
    };
    return (
        <>
            <section className="flex flex-col gap-4">
                <H1>Чанар</H1>
                <P>FUJI Precision компани нь чанарыг хянахын тулд үндэсний туршилтын төвөөр дамжуулан, бүх бүрэлдэхүүн хэсгүүдийг нарийн шалгадаг.</P>
            </section>
            <CustomSection
                title="Таталтын машины статик туршилт"
                paragraph={`Хүргэлтийн өмнө гол хөдөлгүүрийн анхны соронзон туйлын өнцөг, энкодерийн гарал үүсэл, моторын холболтын горим, d/q тэнхлэгийн индукцийн утгыг лифтний параметрийн дагуу шалгадаг.`}
                src="/q1.jpg"
            />
            <CustomSection
                title="Таталтын машины динамик ачааллын туршилт"
                paragraph={`Лифтний таталтын туршилт нь лифтний системийн чухал хэсэг бөгөөд лифтний аюулгүй ажиллагааг хангахад маш чухал үүрэгтэй.`}
                src="/q2.jpg"
                swap
            />
            <CustomSection
                title="Ган олсны туршилт"
                paragraph={`Лифтний утсан олсны бүтэц, ашиглалтын сонголт, ашиглалтын байршил, хүчдэлийн илрүүлэлт, элэгдэлд тэсвэртэй байдал, зэврэлтээс хамгаалах байдал, зөөлөн байдлыг шалгадаг.`}
                src="/q3.jpg"
            />
            <CustomSection
                title="Хяналтын шүүгээний туршилт"
                paragraph={`Лифтний хяналтын шүүгээний загварын дугаар, жолоодлогын систем, хяналтын горим, нэрлэсэн хүчин чадал, нэрлэсэн хурд, давхрын хүчдэлийн илрүүлэлтийн хүчийг шалгана.`}
                src="/q4.jpg"
                swap
            />
            <CustomSection
                title="Хаалганы бат бөхийн цохилтын туршилт"
                paragraph={`Лифтний хаалганы өлгүүр хавтан, хаалганы бат бөх байдал, хаалганы гулсалт, хаалганы түгжээ, хажуугийн хавтан болон холбогдох хэсгүүдийн бат бөх байдлыг шалгадаг.`}
                src="/q5.jpg"
            />
            <CustomSection
                title="Суналтын туршилт"
                paragraph={`Олсны үзүүрийн хосолмолын суналтын туршилт: хайлшаар бэхлэх арга, өөрөө түгжигдэх клиптэй олсны ханцуйны арга, олсны хавчаар бэхлэх аргын статик суналтын туршилт.`}
                src="/q6.jpg"
                swap
            />
            <CustomSection
                title="Эскалаторын булны туршилт"
                paragraph={`Эскалатор болон явган замын булны туршилт: Төхөөрөмж нь антистатик, ачаалал, булны салалт, хагарал, элэгдлийн талаарх статистик мэдээллийг гаргаж, булны найдвартай байдлыг шалгадаг.`}
                src="/q7.jpg"
            />
        </>
    );
}
