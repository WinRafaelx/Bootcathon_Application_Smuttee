const express = require('express');
const app = express();
const { connectDB } = require('./config/db');
const middleware = require('./middleware');
const ensureAuthenticated = require('./middleware/auth');
const chatRoutes = require('./routes/chatRoutes');
const workshopAdminRoutes = require('./routes/workshopAdminRoutes');
const workshopRoutes = require('./routes/workshopRoutes');
const clientReservationRoutes = require('./routes/clientReservationRoutes');

// Connect to database
connectDB();

// Apply middlewares
middleware(app);

// Define routes
app.use('/api/chat', chatRoutes);  
app.use('/api/workshops', workshopRoutes);
app.use('/api/reservations', clientReservationRoutes);
app.use('/api/workshop_admin', workshopAdminRoutes);

module.exports = app;
