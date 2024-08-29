import { HTMLAttributes, PropsWithChildren } from "react";

export const H1 = ({ children, className, ...rest }: PropsWithChildren & HTMLAttributes<HTMLParagraphElement>) => (
    <h1 {...rest} className={`text-2xl font-medium ${className ?? ""}`}>
        {children}
    </h1>
);
export const P = ({ children, className, ...rest }: PropsWithChildren & HTMLAttributes<HTMLParagraphElement>) => (
    <p {...rest} className={`text-lg md:text-xl ${className ?? ""}`}>
        {children}
    </p>
);
export const Section = ({ children, className, ...rest }: PropsWithChildren & HTMLAttributes<HTMLElement>) => (
    <section
        className={`w-full bg-slate-100 rounded-md flex flex-col gap-8 md:gap-12 justify-center items-center px-8 py-4 md:px-32 md:py-16 ${
            className ?? ""
        }`}
        {...rest}
    >
        {children}
    </section>
);
export const SectionFlexible = ({ children, className, ...rest }: PropsWithChildren & HTMLAttributes<HTMLElement>) => {
    return (
        <section {...rest} className={`w-full h-full grid grid-cols-1 md:grid-cols-2 px-8 py-4 md:px-32 md:py-16 gap-4 ${className ?? ""}`}>
            {children}
        </section>
    );
};
export const DivFlexible = ({ children, className, ...rest }: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...rest} className={`flex flex-col items-center justify-center w-full h-full gap-4 ${className ?? ""} `}>
            {children}
        </div>
    );
};
