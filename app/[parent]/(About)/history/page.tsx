import { timelineData } from "@/lib/data";
import { Circle, Section } from "lucide-react";

export default function Page() {
    const TimelineItem = ({ index, year, content }: { index: number; year: number; content: string }) => (
        <li>
            {index ? <hr /> : null}
            <div className="timeline-middle">
                <Circle />
            </div>
            <div className={`${index & 1 ? "timeline-end" : "timeline-start md:text-end"} border px-4 py-2 rounded-md shadow-md mb-10`}>
                <time className="font-mono italic">{year}</time>
                <div>{content}</div>
            </div>
            {timelineData.length - 1 === index ? null : <hr />}
        </li>
    );

    return (
        <>
            <section className="mt-4">
                <p className="text-lg md:text-xl">
                    1999 онд эхэлж, 2006 онд үүсгэн байгуулагдсан Suzhou FUJI Precision Elevator Co.,Ltd нь томоохон амжилт, дэвшил гаргасан. Өнөөдөр
                    бид шинэ боломж, сорилтуудтай тулгарч буй өргөн цар хүрээтэй өөрчлөлт, хөгжлийг дагуулсан салбар болсон.
                </p>
            </section>
            <section className="my-10">
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {timelineData.map((x, i) => (
                        <TimelineItem key={x.year} {...x} index={i} />
                    ))}
                </ul>
            </section>
        </>
    );
}
