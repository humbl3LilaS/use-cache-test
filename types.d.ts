export interface LiveQuote {
    symbol: string;
    companyName: string;
    price: number;
    change: number;
    changePercentage: number;
    timeStamp: string;
}

export interface DailySummary {
    totalTrades: number;
    volume: number;
    topGainers: {
        symbol: string;
        change: number;
    }[];
    topLosers: {
        symbol: string;
        change: number;
    }[];
}

export interface HistoricalReports {
    date: string;
    openPrice: number;
    closePrice: number;
    highPrice: number;
    lowPrice: number;
    volume: number;
}
