import { HistoricalReports } from "@/types";
import { sleep } from "@/util";
import { faker } from "@faker-js/faker";
import { unstable_cacheLife as cacheLife } from "next/cache";

export const getHistoricalReports = async (): Promise<HistoricalReports[]> => {
    "use cache";
    cacheLife("historicalReports");
    await sleep(500);
    return Array.from({ length: 30 }, (_, index) => {
        const basePrice = faker.number.float({ min: 100, max: 1000, fractionDigits: 2 });
        const variance = basePrice * 0.1; // 10% variance

        return {
            date: faker.date
                .recent({ days: 30 - index })
                .toISOString()
                .split("T")[0],
            openPrice: basePrice,
            closePrice: faker.number.float({
                min: basePrice - variance,
                max: basePrice + variance,
                fractionDigits: 2,
            }),
            highPrice: faker.number.float({
                min: basePrice,
                max: basePrice + variance,
                fractionDigits: 2,
            }),
            lowPrice: faker.number.float({
                min: basePrice - variance,
                max: basePrice,
                fractionDigits: 2,
            }),
            volume: faker.number.int({ min: 100000, max: 10000000 }),
        };
    }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};
