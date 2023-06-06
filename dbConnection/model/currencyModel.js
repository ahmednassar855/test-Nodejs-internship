import mongoose from "mongoose";

const currencySchema = mongoose.Schema({
    element: {
        type: String,
    },
    name: {
        type: String,
    },
    last: {
        type: String,
    },
    buy: {
        type: String,
    },
    sell: {
        type: String,
    },
    volume: {
        type: String,
    },
    base_unit: {
        type: String,
    },
    
}, { timestamps: true })


export const currencyModel = mongoose.model('currency', currencySchema)