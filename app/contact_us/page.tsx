import Image from "next/image";
import React from "react";
import CU from "@/public/cu1.jpg";

export default function Page() {
    return (
        <>
            <section className="w-full">
                <Image alt="cu1" src={CU} placeholder="blur" blurDataURL="/cu1-b.jpg" />
                <div className="border border-slate-100 p-4 my-8">
                    <p>Холбогдох дугаар: 8558-3300, 7233-7300.</p>
                    <p>Оффис дугаар: 7013-7300</p>
                    <p>
                        Хаяг нь: Монгол Улс Улаанбаатар хот, Сүхбаатар дүүрэг, 9 дүгээр хороо, Дөлгөөн нуур гудамж, Компьютер молл төв, 10 давхарт,
                        10006Б тоот.
                    </p>
                </div>
            </section>
        </>
    );
}
