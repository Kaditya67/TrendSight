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

const stockSchema = new mongoose.Schema({
  symbol: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  sector: { type: String },
  industry: { type: String },
  marketCap: { type: Number },
  historicalPrices: [historicalDataSchema],
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
