// services/calculateIndicators.js
const { EMA, RSI, SMA } = require('technicalindicators');
const Stock = require('../models/Stock');
const StockIndicators = require('../models/StockIndicators');

const calculateEMA = (prices, period) => {
  return EMA.calculate({ period, values: prices });
};

const calculateRSI = (prices, period) => {
  return RSI.calculate({ period, values: prices });
};

const calculateMomentum = (prices, period) => {
  return prices.slice(period).map((price, index) => price - prices[index]);
};

const calculateIndicators = async () => {
  const stocks = await Stock.find();
  for (const stock of stocks) {
    const prices = stock.historicalPrices.map((data) => data.close);
    const volumes = stock.historicalPrices.map((data) => data.volume);
    const dates = stock.historicalPrices.map((data) => data.date);

    const ema7 = calculateEMA(prices, 7);
    const ema20 = calculateEMA(prices, 20);
    const ema50 = calculateEMA(prices, 50);
    const ema100 = calculateEMA(prices, 100);
    const ema200 = calculateEMA(prices, 200);

    const rsi14 = calculateRSI(prices, 14);

    const momentum = calculateMomentum(prices, 10);

    const indicators = dates.slice(200).map((date, index) => ({
      date,
      ema7: ema7[index],
      ema20: ema20[index],
      ema50: ema50[index],
      ema100: ema100[index],
      ema200: ema200[index],
      rs: rsi14[index], // Placeholder for RS
      rsi: rsi14[index],
      volume: volumes[index + 200],
      momentum: momentum[index],
    }));

    const existingIndicators = await StockIndicators.findOne({ stock: stock._id });

    if (existingIndicators) {
      existingIndicators.indicators = indicators;
      await existingIndicators.save();
    } else {
      await StockIndicators.create({
        stock: stock._id,
        indicators,
      });
    }

    console.log(`Indicators for ${stock.symbol} calculated and stored.`);
  }
};

module.exports = calculateIndicators;
