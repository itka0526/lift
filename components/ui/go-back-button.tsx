"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button";

export const GoBackButton = () => {
    const router = useRouter();

    return (
        <Button
            className="bg-slate-200 hover:bg-slate-100"
            onClick={() => {
                router.back();
            }}
        >
            Буцах
        </Button>
    );
};
