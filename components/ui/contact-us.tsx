import Link from "next/link";

export function ContactUs() {
    return (
        <div className="flex justify-start items-center">
            <Link className="px-8 py-4 rounded-md bg-main_blue text-white" href={"/contact_us"}>
                Холбогдох
            </Link>
        </div>
    );
}
