import { LiveQuote } from "@/types";
import { sleep } from "@/util";
import { faker } from "@faker-js/faker";

export const getLiveQuotes = async (): Promise<LiveQuote> => {
    await sleep(1000);

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
