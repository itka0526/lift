import { HTMLAttributes, PropsWithChildren } from "react";

export const H1 = ({ children }: PropsWithChildren) => <h1 className="text-2xl font-medium">{children}</h1>;
export const P = ({ children }: PropsWithChildren) => <p className="text-lg md:text-xl">{children}</p>;
export const Section = ({ children, className, ...rest }: PropsWithChildren & HTMLAttributes<HTMLElement>) => (
    <section
        className={`w-full bg-slate-100 rounded-md flex flex-col gap-8 md:gap-12 justify-center items-center px-8 py-4 md:px-32 md:py-16 ${className}`}
        {...rest}
    >
        {children}
    </section>
);
