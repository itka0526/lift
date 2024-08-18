import { data } from "@/lib/data";
import { notFound, redirect } from "next/navigation";

type Props = { readonly params: { readonly parent: string } };

export default function Page({ params: { parent } }: Props) {
    const res = data.find((x) => x.url === "/" + parent);
    if (!res) {
        return notFound();
    } else {
        return redirect(res.items.length > 0 ? res.items[0].url : "/");
    }
}
