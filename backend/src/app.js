const express = require('express');
const app = express();
const { connectDB } = require('./config/db');
const middleware = require('./middleware');
const chatRoutes = require('./routes/chatRoutes');

// Connect to database
connectDB();

// Apply middlewares
middleware(app);

// Define routes
app.use('/api', chatRoutes);  

module.exports = app;
