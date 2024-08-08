// models/Stock.js
const mongoose = require('mongoose');

const historicalDataSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  open: { type: Number, required: true },
  close: { type: Number, required: true },
  high: { type: Number, required: true },
  low: { type: Number, required: true },
  volume: { type: Number, required: true },
});

const StockSchema = new mongoose.Schema({
    symbol: { type: String, required: true },
    name: { type: String, required: true },
    historicalPrices: [{
        date: { type: String, required: true },
        open: { type: Number, required: true },
        high: { type: Number, required: true },
        low: { type: Number, required: true },
        close: { type: Number, required: true },
        volume: { type: Number, required: true }
    }]
});

module.exports = mongoose.model('Stock', StockSchema);
