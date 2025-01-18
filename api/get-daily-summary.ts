import { DailySummary } from "@/types";
import { sleep } from "@/util";
import { faker } from "@faker-js/faker";

export const getDailySummary = async (): Promise<DailySummary> => {
    await sleep(2000);
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
