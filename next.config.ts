import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        dynamicIO: true,
        cacheLife: {
            liveQuote: {
                stale: undefined,
                revalidate: 1,
                expire: 60,
            },
            dailySummary: {
                stale: 5,
                revalidate: 30,
                expire: 120,
            },
            historicalReports: {
                stale: 30,
                revalidate: 60,
                expire: 600,
            },
        },
    },
};

export default nextConfig;
