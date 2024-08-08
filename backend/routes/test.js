// routes/test.js (or any suitable location)
const express = require('express');
const router = express.Router();
const StockIndicator = require('../models/StockIndicator');

// Route to get all indicators
router.get('/test/indicators', async (req, res) => {
  try {
    const indicators = await StockIndicator.find();
    res.json(indicators);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
