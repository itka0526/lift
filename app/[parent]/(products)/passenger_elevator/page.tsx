import { Block } from "@/components/ui/block";
import React from "react";

import PA1 from "@/public/pa1.jpg";
import { ContactUs } from "@/components/ui/contact-us";
import { ImageBlock } from "@/components/ui/imageBlock";
import Image from "next/image";
import { H1, P } from "@/components/ui/text";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <Block
                title="Зорчигчийн цахилгаан шат"
                body={`FUJI Precision цахилгаан шатууд нь орон сууцны, арилжааны болон олон нийтийн барилгуудад зорчигчдыг аюулгүй, найдвартай, тав тухтайгаар тээвэрлэхээр бүтээгдсэн. Эдгээр нь бага давхар, дунд давхар, өндөр давхар барилгуудад зориулсан тодорхой хэрэгцээнд тохирсон янз бүрийн хэмжээ, загвар, тохиргоотойгоор үйлдвэрлэгддэг. Бид MR зорчигчийн цахилгаан шат, MRL зорчигчийн цахилгаан шат болон бусад төрлийг үйлдвэрлэх боломжтой. Одоо чатлаарай!`}
                imageAlt="Passenger Elevator 1"
                imageBlur="/pa1-b.jpg"
                image={PA1}
                bodyChildren={<ContactUs />}
            />
            <section>
                <h1 className="text-2xl md:text-3xl">FUJI Precision манай үйлчлүүлэгчдэд өндөр чанартай цахилгаан шат нийлүүлдэг.</h1>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 my-4 md:my-8">
                    {[
                        "Өндөр чанартай лифт үйлдвэрлэл",
                        "Машины өрөөний зорчигчийн цахилгаан шат",
                        "Өрөөгүй зорчигчийн цахилгаан шат",
                        "Алтан сайхан бүхээгийн араагүй лифт",
                        "Хятад үйлдвэр цахилгаан шаттай",
                        "Хятад дахь FUJI цахилгаан шатны компани",
                        "Таталтын машин лифтний компани",
                        "FUJI өндөр чанартай цахилгаан шат",
                        "FUJI өндөр чанарын зорчигчийн цахилгаан шат",
                        "Машины өрөөний зорчигчийн өргөгч",
                    ].map((desc, idx) => {
                        return (
                            <ImageBlock
                                description={desc}
                                src={`/pa${idx + 2}.jpg`}
                                alt={`Elevator Preview ${idx + 2}`}
                                key={`preview-elevator-${idx}`}
                            />
                        );
                    })}
                </div>
            </section>
            <section className="grid gap-4 md:grid-cols-2 my-4">
                <div className="flex flex-col items-center ">
                    <div className="my-12 flex justify-center items-center">
                        <H1>SMR ЗОРЧИГЧИЙН ЛИФТ</H1>
                    </div>
                    <Image
                        src={"/pa12.jpg"}
                        alt="Structure 1"
                        width={512}
                        height={512}
                        className="hover:scale-110 transition-transform duration-300"
                    />
                    <div className="w-4/5 shadow-md rounded-md p-4 text-sm bg-white">
                        <p>
                            Машины өрөөний жижиг лифт Өндөр үр ашигтай, бага хурдтай байнгын соронзон синхрон араа татах машиныг ашигласан. Ачааллын
                            түвшинтэй араатай цахилгаан шаттай харьцуулахад эрчим хүчний 35% хэмнэнэ. Орон зай хэмнэх Жижиг машины өрөөний загварт
                            машины өрөө нь босоо амны зүгээр л дээш чиглэсэн өргөтгөл бөгөөд тусгайлан зохион бүтээсэн жижиг эзэлхүүний хяналтын
                            кабинеттай хослуулан зай ашиглалтыг сайжруулж, машины өрөөний талбайг ихээхэн хэмнэдэг. мөн барилгын өртгийг бууруулдаг
                            Уян хатан дизайн Бүтцийн оновчтой загвар нь илүү уян хатан, чөлөөтэй, олон янз байж болох бөгөөд энэ нь архитектурын хэв
                            маягийг төгс харуулдаг. Суурилуулалтын үр ашгийг дээшлүүл. Суурилуулалтын ерөнхий процесс нь илүү тохиромжтой, хурдан
                            байдаг. Энэ нь анхдагч эсвэл шинэчлэгдсэн эсэхээс үл хамааран амархан хүрч болно.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="my-12 flex justify-center items-center">
                        <H1>MRL ЗОРЧИГЧИЙН ЛИФТ</H1>
                    </div>
                    <Image
                        src={"/pa13.jpg"}
                        alt="Structure 1"
                        width={512}
                        height={512}
                        className="hover:scale-110 transition-transform duration-300"
                    />
                    <div className="shadow-md rounded-md p-4 text-sm bg-white mt-8">
                        <p>
                            Машины тасалгаагүй цахилгаан шат нь босоо амны дээд хэсэгт байрлах машины өрөөний зайг хэмнэж, барилгын дизайныг илүү уян
                            хатан болгодог. Жижиг өндөр барилгуудад илүү олон сонголтыг өгөхийн тулд дэвшилтэт дизайны үзэл баримтлал, боловсронгуй
                            хяналтын технологийг нэвтрүүлэх. Хяналтын алгоритм, өгөгдлийн бүтцийг оновчтой болгохын тулд машин тасалгаагүй хяналтын
                            систем нь тооцоолох хурдыг ихээхэн сайжруулж, илүү тогтвортой, илүү үр ашигтай болсон. Удирдлагын системийн бүрэлдэхүүн
                            хэсгүүдийг оновчтой болгож, хяналтын системийн 25 орчим хувийн утсыг багасгаж, системийг нэгтгэж, модульчлах, суулгах,
                            туршихад хялбар болно. Хяналтын системийн илүүдэл бүрэлдэхүүн хэсгүүдийг арилгах, системийг ажиллуулах явцад гол гэмтэлтэй
                            эх үүсвэрүүдийг багасгах, системийн үйл ажиллагааны найдвартай байдлыг мэдэгдэхүйц сайжруулах. Өрөөгүй машинд зориулсан
                            синхрон уралдаангүй зүтгүүрийг ашигладаг бөгөөд энэ нь босоо амны зайг ихээхэн хэмнэж, маш сайн ажиллагаатай, илүү хүчтэй
                            хүчийг хэмнэдэг.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-main_blue text-center text-white px-4 md:px-12 py-6">
                <H1 className="my-4">Та цахилгаан шатны гоёл чимэглэлийг өөрийн хүссэнээр тохируулж болно</H1>
                <P>
                    Дохиоллын систем (COP, LOP, LED Dot Matrix үндсэн загвар, LCD дэлгэцийн зурагт төрөл, Видео төрлийн LCD дэлгэц, товчлуур гэх мэт);
                    Давхарын хаалганы цуврал (Будагдсан ган өнгө); Таазны цуврал, Гар түшлэг, Шал гэх мэт, бид танд олон төрлийн сонголт санал болгож
                    байна.
                </P>
                <div className="w-full grid grid-cols-2 md:grid-cols-4 mb-4 mt-12 items-center justify-center gap-4 md:gap-8">
                    <div className="w-full md:px-10">
                        <Link
                            // TODO: Finish
                            href={"/beautiful_elevators/cop/"}
                            className="bg-white border rounded-sm flex justify-center items-center text-lg text-black transition-all duration-300 hover:bg-black hover:text-white"
                        >
                            COP
                        </Link>
                    </div>
                    <div className="w-full md:px-10">
                        <Link
                            // TODO: Finish
                            href={"/beautiful_elevators/lop/"}
                            className="bg-white border rounded-sm flex justify-center items-center text-lg text-black transition-all duration-300 hover:bg-black hover:text-white"
                        >
                            LOP
                        </Link>
                    </div>
                    <div className="w-full md:px-10">
                        <Link
                            // TODO: Finish
                            href={"/beautiful_elevators/door/"}
                            className="bg-white border rounded-sm flex justify-center items-center text-lg text-black transition-all duration-300 hover:bg-black hover:text-white"
                        >
                            Хаалга
                        </Link>
                    </div>
                    <div className="w-full md:px-10">
                        <Link
                            // TODO: Finish
                            href={"/beautiful_elevators/ceiling/"}
                            className="bg-white border rounded-sm flex justify-center items-center text-lg text-black transition-all duration-300 hover:bg-black hover:text-white"
                        >
                            Тааз
                        </Link>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-6 pb-24">
                <div className="grid md:grid-cols-5 gap-4 p-2 bg-slate-100 text-black">
                    <div className="md:col-span-2 w-full min-h-96 h-full relative flex items-center">
                        <Image alt="ap1" src={"/ap1.jpg"} fill className="object-contain md:object-left" />
                    </div>
                    <div className="md:col-span-3 flex flex-col p-4 justify-center">
                        <H1 className="my-4">Удирдлагын систем</H1>
                        <ol>
                            <li>
                                1. Шинэ улсын стандартын UCMP самбарыг нэмэгдүүлж, цахилгаан шатны тасалгааг санамсаргүйгээр хөдлөхөөс урьдчилан
                                сэргийлнэ.
                            </li>
                            <li>
                                2. Нэгдсэн үндсэн удирдлагын систем, системийн нэгдмэл байдлыг сайжруулж, системийн ажиллагааны гол эвдрэлийн эх
                                үүсвэрийг бууруулан, системийг илүү найдвартай болгоно.
                            </li>
                            <li>
                                3. CANBUS+автобусны технологи, харилцааны чадвар болон хурд мэдэгдэхүйц нэмэгдэж, саад тотгорын эсрэг чадвар
                                сайжирсан.
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="grid md:grid-cols-5 gap-4 p-2 bg-slate-100 text-black">
                    <div className="md:col-span-3 flex flex-col p-4 justify-center">
                        <H1 className="my-4">Таталтын машин</H1>
                        <p>
                            Байнгын соронзон синхрон араагүй таталтын машин. Энэ нь өндөр үзүүлэлттэй байнгын соронзон материал болон тусгай моторын
                            бүтэцтэй бөгөөд коаксиаль дамжуулах технологи, дижитал давтамж хувиргах технологи, өндөр дамжуулах үр ашиг, бага эрчим
                            хүчний алдагдлыг бүрэн нэгтгэсэн. Өндөр эргэлтийн нягтын загвар, дугуйны ховилын оновчтой загвар нь зорчигчийн тав тухыг
                            сайжруулдаг. Өндөр ачааллын загвар, том тэнхлэгийн ачаалал нь цахилгаан шатны хэвийн бус чичиргээ эсвэл дуу чимээг үр
                            дүнтэй бууруулж, ажиллагааг илүү тогтвортой болгодог. Тулах хаалтгүй тоормос, хурдан хариу үйлдэлтэй, өндөр найдвартай
                            байдалтай. Таталтын машины үндсэн болон суурийн хооронд өндөр үзүүлэлттэй чичиргээ шингээгч материалыг ашиглаж, утсан
                            олсоор дамжин машинд үүсэх чичиргээг мэдэгдэхүйц бууруулдаг.
                        </p>
                    </div>
                    <div className="md:col-span-2 w-full min-h-96 h-full relative flex items-center">
                        <Image alt="ap2" src={"/ap2.jpg"} fill className="object-contain md:object-right" />
                    </div>
                </div>

                <div className="grid md:grid-cols-5 gap-4 p-2 bg-slate-100 text-black">
                    <div className="md:col-span-2 w-full min-h-96 h-full relative flex items-center">
                        <Image alt="ap3" src={"/ap3.jpg"} fill className="object-contain md:object-left " />
                    </div>
                    <div className="md:col-span-3 flex flex-col p-4 justify-self-center">
                        <H1 className="my-4 mt-0">Байнгын соронзон давтамжтай хаалганы машин</H1>
                        <p>
                            Цахилгаан шатанд тохируулагдсан байнгын соронзон давтамжтай хаалга нь хамгийн сүүлийн үеийн тасралтгүй хурдны хяналттай,
                            давтамжаар удирддаг хаалганы хөдөлгүүрийн системийг ашигладаг бөгөөд хаалга нээх, хаах векторыг хянан удирдах, хаалттай
                            гогцооны векторыг хянах, хурдны бодит цагийн саналыг буцааж, хурдны нарийвчлал 0.1%-д хүрдэг. Хамгийн сүүлийн үеийн
                            байнгын соронзон синхрон мотор болон тасралтгүй хурдны хяналттай, давтамж удирдлагатай хаалганы систем нь эрчим хүчний
                            хэмнэлтийг 60%-иас дээш байлгадаг. 220V ± 20% оролтын хүчдэлтэй өргөн хүчдлийн бүслүүрийн загвар, өндөр дасан зохицох
                            чадвартай. Гол механик эд ангиуд нь стандартчилагдсан загварыг ашиглаж, гурван хэмжээст загварчлал, эцсийн элементийн
                            анализ зэрэг дизайны шалгалтуудыг нарийн хийж гүйцэтгэсэн. Механик бүтэц болон удирдлагын систем нь найдвартай байдал,
                            хэвийн бус байдал, үйл ажиллагааны туршилтын баталгаажуулалтад тэнцсэн. 3 сая удаагийн үйл ажиллагааны найдвартай байдал,
                            функциональ тестийн баталгаажуулалт нь бүтээгдэхүүний найдвартай байдлыг хангадаг. Давтагдашгүй саад бэрхшээлийн санах ойн
                            хамгаалалт, хаалганы хутганы нээх/хаах муруйг тохируулах, синхрон/асинхрон хаалганы хутганы сонголт, удаашруулан хаах
                            функц, энкодерийн алдааны хамгаалалт, хавчих моментийг илрүүлэх нэмэлт функцууд гэх мэт. Мөн хаалганы машин нь жигд
                            ажиллагаа, өндөр тав тух, бага дуу чимээний шинж чанартай.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}