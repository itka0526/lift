import { GoBackButton } from "@/components/ui/go-back-button";

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center h-full w-fulls gap-6">
            <h1 className="text-2xl">Хуудас олдсонгүй!</h1>
            <GoBackButton />
        </div>
    );
}
