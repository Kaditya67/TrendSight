// scripts/runCalculations.js
const mongoose = require('mongoose');
const calculateIndicators = require('../services/calculateIndicators');

mongoose
  .connect('mongodb://localhost:27017/stock_market_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(async () => {
    console.log('Connected to MongoDB');
    await calculateIndicators();
    mongoose.disconnect();
  })
  .catch((err) => console.error('Failed to connect to MongoDB:', err));
