// server.js
// At the top of your main file (e.g., index.js or server.js)
require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const stockRoutes = require('./routes/stockRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', stockRoutes);

// server.js or app.js
// const testRoutes = require('./routes/test');

// app.use('/api', testRoutes);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
