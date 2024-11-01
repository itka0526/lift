import { Block } from "@/components/ui/block";
import { ContactUs } from "@/components/ui/contact-us";
import { COP_LOP_LANDING_DOOR_CEILING } from "@/components/ui/COP_LOP_LANDING_DOOR_CEILING";
import { ImageBlock } from "@/components/ui/imageBlock";
import { MoreDecorations } from "@/components/ui/more-decorations";
import { H1 } from "@/components/ui/text";
import MAIN from "@/public/d1.jpg";

import Image from "next/image";

export default function Page() {
    return (
        <>
            <Block
                title="Дамбвэйтер"
                body="FUJI Precision-ийн дамбвэйтер нь мэргэжлийн дамбвэйтер брэнд бөгөөд манай дамбвэйтерууд ресторан, зочин буудал, номын дэлгүүр, банк, уулзалтын төв, эмнэлэг, корпоратив хоолны газар гэх мэт янз бүрийн газруудад тохиромжтой. Бид өндөр чанартай, үр ашигтай дамбвэйтер үйлчилгээ үзүүлэхэд зориулж тууштай хүчин чармайж байна. Манай дамбвэйтерууд нь гоо үзэмжийн шаардлагыг хангахаас гадна хэрэглээний тав тух ба аюулгүй байдлыг баталгаажуулдаг.

Тэд мөн ухаалаг удирдлагын функцуудтай тоноглогдсон бөгөөд үйл ажиллагааны байдлыг автоматаар хянаж, тохируулж чаддаг тул үйл ажиллагааны үр ашгийг болон үйлчилгээгийн амьдралыг ихээхэн сайжруулдаг. Одоо чатлаарай!"
                imageAlt="Dumbwaiter 1"
                image={MAIN}
                imageBlur="/d1-b.jpg"
                bodyChildren={<ContactUs />}
            ></Block>

            <section>
                <h1 className="text-2xl md:text-3xl text-center">FUJI Precision Dumbwaiter таны амьдралыг хялбар болгоно</h1>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 my-4 md:my-8">
                    {[
                        "Тохиромжтой ба хурдан дамбвэйтер",
                        "Оршин суугч ба арилжааны зориулалттай дамбвэйтер лифт",
                        "Цонхны хэв маягийн дамбвэйтер",
                    ].map((desc, idx) => {
                        return (
                            <ImageBlock
                                description={desc}
                                src={`/m${idx + 1}.jpg`}
                                alt={`${desc} ${idx + 1}`}
                                key={`preview-moving-walkway-${idx}`}
                            />
                        );
                    })}
                    -{" "}
                </div>
            </section>
            <MoreDecorations />
            <COP_LOP_LANDING_DOOR_CEILING />

            <section className="my-16 max-md:mt-8 w-full flex flex-col justify-center items-center">
                <div className=" text-black w-full">
                    <div className="bg-slate-100 px-8 py-4 pt-2">
                        <H1 className="my-4">Хагас хаалга</H1>
                        <ul className="list-decimal px-6 space-y-2">
                            <li>Нэгтгэгдсэн лифтийн машин, машин платформын даралтыг тэсвэрлэх чадвар, машин толгойн уян хатан чанар;</li>
                            <li>Хаалга систем нь галаалдаггүй материалуудаас бүтээгдсэн;</li>
                            <li>
                                Машины хамгаалалтын туузыг удаашруулах систем хэрэглэсэн бөгөөд үйлдэл нь хөнгөн, гүйцэтгэлтэй бөгөөд шалгах
                                гүйцэтгэлээс огтлолдохгүй ажиллана;
                            </li>
                            <li>Бага агуулах болон дээш тал нь барилгын орон зайнг багасгана;</li>
                            <li>
                                Хаалга панель болон хаалга замбын тусдаа бие даасан байдал нь хаалга замбын цөөхөн ачаа болон ачааны тэвчээрийг
                                бууруулна. Гоо үзэмжтэй бөгөөд суурилуулалтын хувьд хялбар.
                            </li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div>
                            <Image alt={"Dumbwaiter 1"} src={"/de1.jpg"} width={1024} height={1024} className="object-contain" />
                        </div>
                        <div>
                            <Image alt={"Dumbwaiter 2"} src={"/de2.jpg"} width={1024} height={1024} className="object-contain" />
                        </div>
                    </div>
                </div>
                <div className=" text-black w-full">
                    <div className="bg-slate-100 px-8 py-4 pt-2">
                        <H1 className="my-4">Дээшээ нүүлгэн шилжүүлэх хана хаалга</H1>
                        <ul className="list-decimal px-6 space-y-2">
                            <li>
                                Хаалга удирдах шугам нь хаалга цэвэр бусийг хангах төдийгүй хаалга панельүүдийг хөнгөн, гүйцэтгэлтэй хөдөлгөх
                                боломжийг олгодог;
                            </li>
                            <li>Шахны гаднах орон зайг эзэлдэггүй;</li>
                            <li>Агуулга болон дээш тал бага байгаа тул барилгын орон зайнг хамгийн их хадгална;</li>
                            <li>Бүх цаасан хаалга (төрөл нь буудлын хаалгатай ижил);</li>
                            <li>
                                Хаалга систем нь нэгэн бүтэн цуглуулж, суурилуулсан бөгөөд компаниас салгаж суурилуулалтын технологийг сайжруулсан.
                            </li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div>
                            <Image alt={"Dumbwaiter 3"} src={"/de3.jpg"} width={1024} height={1024} className="object-contain" />
                        </div>
                        <div>
                            <Image alt={"Dumbwaiter 4"} src={"/de4.jpg"} width={1024} height={1024} className="object-contain" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
