import Image from "next/image";
import React from "react";
import CU from "@/public/cu1.jpg";
import { QrFuji } from "./QrFuji";

export default function Page() {
    return (
        <>
            <section className="w-full">
                <Image alt="cu1" src={CU} placeholder="blur" blurDataURL="/cu1-b.jpg" />
                <div className="border border-slate-100 p-4 my-8 grid grid-cols-2 max-md:grid-cols-1">
                    <div>
                        <p>Perfect Construction International LLC.</p>
                        <p>Хаяг: Сүхбаатар дүүрэг, 9-р хороо, Дөлгөөн нуур гудамж, Компьютер молл төв, Улаанбаатар хот, Монгол улс.</p>
                        <p>Имэйл: perfectreconstruction@gmail.com</p>
                        <p>Утас: 7013-7300, 7233-7300, 8558-3300</p>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <QrFuji />
                    </div>
                </div>
            </section>
        </>
    );
}
