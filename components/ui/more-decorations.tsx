import Link from "next/link";

export function MoreDecorations() {
    return (
        <section className="grid items-center pb-8 pt-4">
            <Link className="px-8 py-4 rounded-md bg-main_blue text-white" href={"/beautiful_elevators"}>
                Илүү их тоноглол
            </Link>
        </section>
    );
}
