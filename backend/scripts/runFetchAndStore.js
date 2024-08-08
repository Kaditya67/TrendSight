// scripts/runFetchAndStore.js
const mongoose = require('mongoose');
const saveStockData = require('../services/fetchAndStoreStockData');
require('dotenv').config(); // Load environment variables

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('MONGO_URI environment variable is not set.');
  process.exit(1);
}

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('Connected to MongoDB');
  try {
    await saveStockData();
    console.log('Stock data fetch and storage completed.');
  } catch (err) {
    console.error('Error during stock data fetch and storage:', err);
  } finally {
    mongoose.disconnect();
  }
})
.catch((err) => {
  console.error('Failed to connect to MongoDB:', err);
});
