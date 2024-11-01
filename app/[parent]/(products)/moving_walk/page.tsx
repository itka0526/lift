import { Block } from "@/components/ui/block";
import { ContactUs } from "@/components/ui/contact-us";
import { COP_LOP_LANDING_DOOR_CEILING } from "@/components/ui/COP_LOP_LANDING_DOOR_CEILING";
import { ImageBlock } from "@/components/ui/imageBlock";
import { MoreDecorations } from "@/components/ui/more-decorations";
import MAIN from "@/public/mv1.jpg";

import LL1 from "@/public/mm1.jpg";
import LL2 from "@/public/mm2.jpg";
import LL3 from "@/public/mm3.jpg";
import LL4 from "@/public/ll4.jpg";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <Block
                title="Хөдөлгөөнт зам"
                body="ДFUJI Precision-ийн хөдөлгөөнт зам нь дэлгүүрийн төвүүд, нисэх онгоцны буудал, метроны станцууд зэрэг олон нийтийн газруудад зориулсан тохиромжтой тээврийн арга юм. Энэ нь зөвхөн үр ашигтай, аюулгүй, тав тухтай бус, мөн янз бүрийн газруудын шаардлагыг хангахад зориулсан захиалгат боломжтой. Манай хөдөлгөөнт зам нь өндөр тогтвортой байдал, бага дуу чимээ, бага засвар үйлчилгээний зардал зэрэг давуу талуудтай. Мөн байгальд ээлтэй, эрчим хүч хэмнэлттэй тээврийн арга юм. Бид бүх хэрэглэгчдэд тээврийн туршлагыг хангахдаа тууштай, таны алхмыг хөнгөвчлөх ба тээвэрлэх явцад илүү тав тухтай болгохыг зорино. Одоо чатлаарай!"
                imageAlt="Moving Walkway 1"
                image={MAIN}
                imageBlur="/mv1-b.jpg"
                bodyChildren={<ContactUs />}
            ></Block>

            <section>
                <h1 className="text-2xl md:text-3xl text-center">FUJI Precision, зам нь таны хөлд, үзэсгэлэн таны давах</h1>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 my-4 md:my-8">
                    {[
                        "Дотоодын VVVF хөдөлгөөнт зам",
                        "Хөдөлгөөнт зам сайн үнэ, гүйцэтгэлтэй эхлэл, намхан тав тух",
                        "Хөдөлгөөнт зам алдартай брэнд, сайн үнэ, үйлдвэрээр үйлдвэрлэсэн",
                        "Хөнгөвчлөн суурилуулах хөдөлгөөнт зам",
                        "Илүүдтэй хөдөлгөөнт зам",
                        "FUJI сайн чанарын хөдөлгөөнт зам",
                        "Тогтмол хэлхээтэй хөдөлгөөнт зам",
                        "FUJI хажуу замууд",
                        "Эрчим хүч хэмнэлттэй хөдөлгөөнт зам",
                        "Тэгш хөдөлгөөнт зам",
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

            <section className="mb-16 w-full flex flex-col justify-center items-center max-w-7xl">
                <div className="flex flex-col md:flex-row">
                    <div className="">
                        <Image src={LL1} alt="Moving walkway Image 1" className="object-contain" />
                    </div>
                    <div className="">
                        <Image src={LL2} alt="Moving walkway Image 2" className="object-contain" />
                    </div>
                </div>
                <div className="">
                    <Image src={LL3} alt="Moving walkway Image 3" className="object-contain" />
                </div>
                <div>
                    <div className="">
                        <Image src={LL4} alt="Moving walkway Image 4" className="object-contain" />
                    </div>
                </div>
            </section>
        </>
    );
}
