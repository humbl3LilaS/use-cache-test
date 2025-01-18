import { LiveQuote } from "@/types";
import { sleep } from "@/util";
import { faker } from "@faker-js/faker";
import { unstable_cacheLife as cacheLife } from "next/cache";

export const getLiveQuotes = async (): Promise<LiveQuote> => {
    "use cache";
    cacheLife("liveQuote");
    await sleep(500);

    const basePrice = faker.number.float({ min: 100, max: 1000, fractionDigits: 2 });
    const change = faker.number.float({ min: -20, max: 20, fractionDigits: 2 });
    const changePercentage = (change / basePrice) * 100;

    return {
        symbol: faker.finance.currencyCode(),
        companyName: faker.company.name(),
        price: basePrice,
        change,
        changePercentage,
        timeStamp: new Date().toLocaleDateString(),
    };
};
