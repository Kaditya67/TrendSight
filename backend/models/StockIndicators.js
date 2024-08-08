// models/StockIndicators.js
const mongoose = require('mongoose');

const indicatorDataSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  ema7: { type: Number },
  ema20: { type: Number },
  ema50: { type: Number },
  ema100: { type: Number },
  ema200: { type: Number },
  rs: { type: Number },
  rsi: { type: Number },
  volume: { type: Number },
  momentum: { type: Number },
});

const stockIndicatorsSchema = new mongoose.Schema({
  stock: { type: mongoose.Schema.Types.ObjectId, ref: 'Stock', required: true },
  indicators: [indicatorDataSchema],
});

const StockIndicators = mongoose.model('StockIndicators', stockIndicatorsSchema);

module.exports = StockIndicators;
