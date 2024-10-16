import Link from "next/link";
import { H1, P } from "./text";

export function COP_LOP_LANDING_DOOR_CEILING() {
    return (
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
    );
}
