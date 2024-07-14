const express = require('express');
const app = express();
const middleware = require('./middleware');
const chatRoutes = require('./routes/chatRoutes');

// Apply middlewares
middleware(app);

// Define routes
app.use('/api', chatRoutes);  

module.exports = app;
