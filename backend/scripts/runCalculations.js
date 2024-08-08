// scripts/runCalculations.js
require('dotenv').config();
const mongoose = require('mongoose');
const calculateIndicators = require('../services/calculateIndicators');

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(async () => {
    console.log('Connected to MongoDB');
    await calculateIndicators();
    await mongoose.disconnect();
  })
  .catch((err) => console.error('Failed to connect to MongoDB:', err));
