export type Ticker = {
    _id: string;
    name: string;
    currentPrice: number;
    ticker: string;
    exchange: string;
};

export type TickersProps = {
    tickers: Ticker[];
};