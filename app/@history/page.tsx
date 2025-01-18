import { getHistoricalReports } from "@/api/get-historical-reports";

const HistoryPage = async () => {
    const reports = await getHistoricalReports();
    return (
        <section className={"col-span-2 p-4 rounded-xl border border-stone-600 text-black"}>
            <h2 className="mb-6 font-bold">Historical Reports</h2>
            <div className="grid grid-cols-2 gap-5">
                {reports.map((item, idx) => (
                    <div className="p-4 rounded-xl border border-stone-600" key={idx}>
                        <p className="font-bold">{item.date}</p>
                        <p>Open: ${item.openPrice}</p>
                        <p>Close: ${item.closePrice}</p>
                        <p>High: ${item.highPrice}</p>
                        <p>Low: ${item.lowPrice}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HistoryPage;
