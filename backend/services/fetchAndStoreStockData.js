// services/fetchAndStoreStockData.js
const axios = require('axios');
const mongoose = require('mongoose');
const Stock = require('../models/Stock'); // Adjust the path as needed

const API_KEY = 'BE19IFDXPS7QAV48';

// List of available stock symbols
const stockList = [
    { symbol: 'AAPL', name: 'Apple Inc.' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.' },
    { symbol: 'MSFT', name: 'Microsoft Corporation' },
    { symbol: 'AMZN', name: 'Amazon.com, Inc.' },
    { symbol: 'TSLA', name: 'Tesla, Inc.' },
    { symbol: 'NVDA', name: 'NVIDIA Corporation' },
    { symbol: 'META', name: 'Meta Platforms, Inc.' },
    { symbol: 'NFLX', name: 'Netflix, Inc.' },
    { symbol: 'ADBE', name: 'Adobe Inc.' },
    { symbol: 'INTC', name: 'Intel Corporation' }
];

const fetchStockData = async (symbol) => {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;

    try {
        const response = await axios.get(url);
        const data = response.data['Time Series (Daily)'];

        if (!data) {
            console.error(`No data found for symbol ${symbol}`);
            return null;
        }

        return Object.keys(data).map(date => ({
            date,
            open: parseFloat(data[date]['1. open']),
            high: parseFloat(data[date]['2. high']),
            low: parseFloat(data[date]['3. low']),
            close: parseFloat(data[date]['4. close']),
            volume: parseInt(data[date]['5. volume'])
        }));
    } catch (error) {
        console.error(`Error fetching data for symbol ${symbol}:`, error);
        return null;
    }
};

const saveStockData = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    for (const { symbol, name } of stockList) {
        console.log(`Fetching data for ${symbol}...`);
        const historicalPrices = await fetchStockData(symbol);

        if (historicalPrices) {
            await Stock.updateOne(
                { symbol },
                { symbol, name, historicalPrices },
                { upsert: true }
            );
            console.log(`Data for ${symbol} saved successfully.`);
        }
    }

    await mongoose.disconnect();
};

module.exports = saveStockData;
