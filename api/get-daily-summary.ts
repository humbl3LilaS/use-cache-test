import { DailySummary } from "@/types";
import { sleep } from "@/util";
import { faker } from "@faker-js/faker";
import { unstable_cacheLife as cacheLife } from "next/cache";

export const getDailySummary = async (): Promise<DailySummary> => {
    "use cache";
    cacheLife("dailySummary");
    await sleep(500);
    return {
        totalTrades: faker.number.int({ min: 10000, max: 1000000 }),
        volume: faker.number.int({ min: 1000000, max: 100000000 }),
        topGainers: Array.from({ length: 5 }, () => ({
            symbol: faker.finance.currencySymbol(),
            change: faker.number.float({ min: 2, max: 10, fractionDigits: 2 }),
        })),
        topLosers: Array.from({ length: 5 }, () => ({
            symbol: faker.finance.currencySymbol(),
            change: faker.number.float({ min: -10, max: -2, fractionDigits: 2 }),
        })),
    };
};
