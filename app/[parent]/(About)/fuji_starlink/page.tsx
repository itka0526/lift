import React from "react";

import Image from "next/image";
import StarLinkImage from "@/public/starlink.gif";
import StarLinkImage2 from "@/public/starlink-img02.jpg";
import StarLinkImage3 from "@/public/starlink-img03.jpg";
import { H1, P } from "@/components/ui/text";
import { timelineData2 } from "@/lib/data";
import { Circle } from "lucide-react";

export default function Page() {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="w-full">
                    <Image src={StarLinkImage} alt="starlink.gif" placeholder="blur" blurDataURL="/starlink-blur.png" />
                </div>
                <div className="flex flex-col gap-4">
                    <H1>
                        {`"FUJI Precision"-ийн Starlink төлөвлөгөө "FUJI Precision" цахилгаан шатны компани шинэ бизнес хөгжүүлэлтийн загвар болох "FUJI`}
                    </H1>
                    <p className="md:text-lg">
                        {` Starlink" төлөвлөгөөг эхлүүлэх гэж байна. Энэхүү төлөвлөгөө нь брэндийн монополио халах, цахилгаан шат үйлдвэрлэлийн салбарын
                    байгууллагын хязгаарлалт, техникийн саадыг арилгахад чиглэгдсэн. Бид дэлхий даяар 100 үнэнч түнш хайж, тэдний бүх талын чадамжийг
                    сайжруулж, орон нутгийн цахилгаан шат үйлдвэрлэлийн үйлдвэрүүдийг байгуулахыг дэмжиж, дэлхийн цахилгаан шатны үйлдвэрлэлийн
                    сүлжээг бий болгож, цахилгаан шатны үйлдвэрлэлийн салбарт "FUJI Precision" цахилгаан шатны үйлдвэрлэлийн холбоог хамтдаа бүтээхийг
                    эрмэлзэж байна.`}
                    </p>
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                <div className="flex items-center justify-center flex-col">
                    <div className="flex flex-col gap-4">
                        <H1>Гурван шатлалт төлөвлөгөө</H1>
                        <ul className="steps steps-vertical">
                            <li className="step">Шинийг санаачла</li>
                            <li className="step">Хөгжүүл</li>
                            <li className="step">Хамтдаа ялалт байгуулах</li>
                            <li className="step">Ирээдүйг хамтдаа бүтээе - дэлхийн цахилгаан шатны түншүүдийг хайж байна</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full">
                    <Image src={StarLinkImage2} alt="starlink-img02.jpg" placeholder="blur" blurDataURL="/starlink-img-02-blur.png" />
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="w-full">
                    <Image src={StarLinkImage3} alt="starlink-img03.jpg" placeholder="blur" blurDataURL="/starlink-img-03-blur.png" />
                </div>
                <div className="flex items-center justify-center">
                    <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
                        {timelineData2.map((x, index) => (
                            <li key={x.title}>
                                {index ? <hr /> : null}
                                <div className="timeline-middle">
                                    <Circle />
                                </div>
                                <div className={`timeline-start mb-10`}>
                                    <div className="text-lg font-black">{x.title}</div>
                                    <div>{x.content}</div>
                                </div>
                                {timelineData2.length - 1 === index ? null : <hr />}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section
                className="mb-10 min-h-[600px] w-full bg-no-repeat bg-center bg-cover px-16 py-10 flex items-center justify-center"
                style={{ backgroundImage: `url(/starlink-img04.jpg)` }}
            >
                <div className="text-center p-8 bg-[rgba(255,255,255,0.55)]">
                    <span className="text-2xl">
                        Бид түншүүдтэйгээ хамтран хөгжилд хүрч, хүчээ нэгтгэн, <br /> хамтран бүтээж, эрсдлийг хуваалцан, брэндээ хамтдаа өсгөн,{" "}
                        <br /> ялалт ба ашигтай байдлыг хамтдаа бий болгохыг эрмэлздэг.
                    </span>
                </div>
            </section>
        </>
    );
}
