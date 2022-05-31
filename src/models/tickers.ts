const mongoose = require("mongoose");
const { Schema } = mongoose;

const TickerSchema = Schema(
    {
        ticker: { type: String, required: true },
        exchange: { type: String, required: true },
        lastPrice: { type: Number, required: true },
        name: { type: String },
        shortDescrtiption: { type: String },
    },
);

export default mongoose.models["Ticker"] || mongoose.model("Ticker", TickerSchema, "tickers");
