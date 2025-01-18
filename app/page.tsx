import { getLiveQuotes } from "@/api/get-live-quotes";
import { format } from "date-fns";

export default async function Home() {
    const lq = await getLiveQuotes();
    return (
        <section className={"p-4 rounded-xl border border-stone-600 text-black"}>
            <div className="flex items-center justify-between mb-3">
                <h1 className="font-bold">Live Quote</h1>
                <p className="font-semibold text-xs text-black/50">{lq.companyName}</p>
            </div>
            <div>
                <p className="font-bold text-lg mb-4">
                    {lq.symbol}&nbsp;{lq.price}
                </p>
                <p className="mb-4 text-black/50 text-sm font-semibold">
                    <span>
                        {lq.change}&nbsp;({lq.changePercentage.toFixed(2)}%)
                    </span>
                </p>
                <p className="mb-4 text-black/50 font-semibold text-sm">
                    Last Updated: {format(lq.timeStamp, "do MMM yyyy")}
                </p>
            </div>
        </section>
    );
}
