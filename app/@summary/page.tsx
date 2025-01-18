import { getDailySummary } from "@/api/get-daily-summary";

const SummaryPage = async () => {
    const summary = await getDailySummary();
    return (
        <section className={"p-4 rounded-xl border border-stone-600 text-black"}>
            <h2 className="mb-8">Daily Summary</h2>
            <p>
                <span>Total Volume:</span>
                &nbsp; &nbsp;
                <span className="font-bold">${summary.volume}</span>
            </p>
            <p>
                <span>Total Trade:</span>
                &nbsp; &nbsp;
                <span className="font-bold">${summary.totalTrades}</span>
            </p>
        </section>
    );
};

export default SummaryPage;
