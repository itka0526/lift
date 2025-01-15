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
            <Section>
                <H1>Монгол дахь албан ёсны гэрээт борлуулагч</H1>
                <P className="">
                    “Төгс Бүтээн Босголт” ХХК нь 2013 онд үүсгэн байгуулагдсан бөгөөд барилга угсралт, засал чимэглэл, барилгын материал ханган
                    нийлүүлэлтээр тасралтгүй үйл ажиллагаа эрхэлж, 2023 оноос БНСУлсдаа шилдэг үйлдвэрлэгчээр шалгарсан SEOHYUN elevator, SILVER
                    elevator, БНХАУлсдаа шилдэг 10 үйлдвэрлэгч буюу бүх Хятад улсын Цахилгаан шатны үндэсний холбоонд бүртгэлтэй FUJI precision
                    elevator үйлдэрлэгчийн албан ёсны онцгой эрхт дистрибьютерээр одоог хүртэл ажиллаж байна. Тус компаний үндсэн хамт олон 10 жилийн
                    туршлагатай мэргэшсэн инженер 2, лифтний засварын механикч 2, ХАБЭАжилтан 1, бусад туслах 2 бригадтай хамтран ажиллаж байна.
                </P>
                <div className="text-lg md:text-xl space-y-4">
                    <ul>
                        <li>• ЦАХИЛГААН ШАТ.</li>
                        <li className="pl-4">- Зорчигчийн</li>
                        <li className="pl-4">- Ачааны </li>
                        <li className="pl-4">- Эмнэлгийн </li>
                        <li className="pl-4">- Амины орон сууцны</li>
                        <li className="pl-4">- Зоогийн газрын </li>
                        <li className="pl-4">- Автомашины</li>
                    </ul>
                    <ul>
                        <li>• УРСДАГ ШАТ</li>
                    </ul>
                    <ul>
                        <li>• УРСДАГ ЗАМ</li>
                    </ul>
                    <ul>
                        <li>• АВТО ЗОГСООЛ</li>
                    </ul>
                    <ul>
                        <li>• ХӨГЖЛИЙН БЭРХШЭЭЛТЭЙ ИРГЭДЭД зориулсан шатны өргөгчийг тус бүр захиалгаар үйлдвэрлэж нийлүүлнэ.</li>
                    </ul>
                    <p className="text-gray-800 leading-relaxed">
                        Дээрх үйлдвэрүүд нь 20, 33 жилийн түүхтэй Азидаа болон Европ, Дэлхийн зах зээл дээрх томоохонд тооцогддог (OEM буюу Original
                        Equipment manufacturer) үйлдвэрлэгч нар бөгөөд орон сууц, худалдаа үйлчилгээний төв, амины орон сууц, хүнд үйлдвэрийн
                        зориулалттай барилгад тохирох бүх төрлийн Цахилгаан шат, урсдаг шат, урсдаг зам, автомат зогсоолын систем, тусгай хэрэгцээт
                        тавцант төхөөрөмжийг Барууны улс болон Европ, Ази тив зэрэг нийт 98 улсад өөрсдийн салбар компани, борлуулалтын сүлжээгээр
                        дамжуулан хүргэсээр байна.
                    </p>
                    <p className="text-gray-800 leading-relaxed">
                        30 гаруй жил туршигдан баталгаажсан инновцлаг, аюулгүй, өндөр чанар бүхий Европ стандарт бүтээгдэхүүнийг барилга бүрийн
                        архитектур, дизайн болон инженерчлэлд зориулан бүтээдгээрээ харилцагчдаас өндөр үнэлгээ авсан давуу талтай юм.
                    </p>
                    <p className="text-gray-800 leading-relaxed">
                        Манай үйлдвэрүүд өвөрмөц тод өнгийн, далд гэрэлтүүлэгтэй, орон зайн өвөрмөц мэдрэмж бүрдүүлэх вааран, дугуй хэлбэрийн лифтний
                        бүхээг болон хаалганы шийдлүүдийг нийтэд танилцуулсан.
                    </p>
                </div>

                <div className="mt-8 space-y-4 text-lg md:text-xl">
                    <h2 className="text-xl font-semibold text-gray-900">МАНАЙ БАГ БҮРЭЛДЭХҮҮН ХЭРХЭН АЖИЛЛАДАГ ВЭ?</h2>
                    <p className="text-gray-800 leading-relaxed">
                        Захиалагчийн барилгын зураг төсөл зохиохоос эхлэн цахилгаан шат, урсдаг шатны төлөвлөлт, хэрэгцээ шаардлагыг тодорхойлон
                        мэргэжлийн зөвлөгөө өгч, төслийн талбай дээр хяналтын хэмжилт болон техникийн шийдлүүд дээр ажилладаг.
                    </p>
                </div>

                <div className="mt-6 space-y-4 text-lg md:text-xl">
                    <h2 className="text-xl font-semibold text-gray-900">ИНЖЕНЕР, ТЕХНИКИЙН АЛБА</h2>
                    <p className="text-gray-800 leading-relaxed">
                        Өргөн тээвэрлэх, машин механизмын салбарт ажиллаж буй 10 гаруй жилийн туршлагатай зөвлөх инженер, засварын механикийн
                        инженерүүдээр удирдуулсан мэргэжлийн өндөр чадвартай, хариуцлагатай угсралт, суурилуулалт, засвар үйлчилгээний баг хамт олон
                        зорчигчдийн аюулгүй байдлыг хангаж ажилладаг.
                    </p>
                </div>

                <div className="mt-6 space-y-4 text-lg md:text-xl">
                    <h2 className="text-xl font-semibold text-gray-900">ЗАСВАР ҮЙЛЧИЛГЭЭ</h2>
                    <p className="text-gray-800 leading-relaxed">
                        Мэргэшсэн инженер, техникийн баг цахилгаан шат, урсдаг шатны техникийн бүрэн бүтэн байдал, хэвийн үйл ажиллагааг хангах
                        дараахи үйлчилгээг үзүүлэн ажилладаг.
                    </p>
                    <ul className="list-disc list-inside text-gray-800 leading-relaxed pl-4">
                        <li>Сар бүрийн техник үйлчилгээ үзлэг, оношилгоо, тохиргоо, цэвэрлэгээ</li>
                        <li>Техникийн магадлал, дүгнэлт</li>
                        <li>24/7 цагийн дуудлага</li>
                        <li>Техникийн зөвлөгөө, мэдээлэл</li>
                        <li>Бүх төрлийн сэлбэг хэрэгслийн ханган нийлүүлэлт</li>
                    </ul>
                </div>
            </Section>
        </>
    );
}
