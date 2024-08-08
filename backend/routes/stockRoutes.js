// routes/stockRoutes.js
const express = require('express');
const Stock = require('../models/Stock');
const StockIndicators = require('../models/StockIndicators');

const router = express.Router();

// Get stock by symbol
router.get('/stocks/:symbol', async (req, res) => {
  try {
    const stock = await Stock.findOne({ symbol: req.params.symbol });
    if (!stock) return res.status(404).json({ msg: 'Stock not found' });
    res.json(stock);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get indicators for a stock by symbol
router.get('/stocks/indicators/:symbol', async (req, res) => {
  try {
    const stock = await Stock.findOne({ symbol: req.params.symbol });
    if (!stock) return res.status(404).json({ msg: 'Stock not found' });

    const indicators = await StockIndicators.findOne({ stock: stock._id });
    if (!indicators) return res.status(404).json({ msg: 'Indicators not found' });

    res.json(indicators);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Filter stocks based on indicators
router.get('/stocks/filter', async (req, res) => {
  const { ema7, ema20, rsi } = req.query;

  try {
    const query = {};

    if (ema7) query['indicators.ema7'] = { $gte: parseFloat(ema7) };
    if (ema20) query['indicators.ema20'] = { $gte: parseFloat(ema20) };
    if (rsi) query['indicators.rsi'] = { $lt: parseFloat(rsi) };

    const stocks = await StockIndicators.find(query).populate('stock');

    res.json(stocks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
