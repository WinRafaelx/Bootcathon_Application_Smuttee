const express = require('express');
const router = express.Router();
const ClientReservation = require('../controllers/clientReservationController');

// Route to add a new reservation
router.post('/add', ClientReservation.addReservation); // Client adds a reservation

module.exports = router;
