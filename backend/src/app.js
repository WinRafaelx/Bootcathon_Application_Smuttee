const express = require('express');
const app = express();
const { connectDB } = require('./config/db');
const middleware = require('./middleware');
const chatRoutes = require('./routes/chatRoutes');
const workshopAuthenticationRoutes = require('./routes/workshopAuthenticationRoutes');
const workshopRoutes = require('./routes/workshopRoutes');
const clientReservationRoutes = require('./routes/clientReservationRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Connect to database
connectDB();

// Apply middlewares
middleware(app);

// Define routes
app.use('/api/chat', chatRoutes);  
app.use('/api/workshop_auth', workshopAuthenticationRoutes);
app.use('/api/workshops', workshopRoutes);
app.use('/api/reservations', clientReservationRoutes);
app.use('/api/admin', adminRoutes);

module.exports = app;
