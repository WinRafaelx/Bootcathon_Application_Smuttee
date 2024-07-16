const router = require('express').Router();
const adminController = require('../controllers/adminController');

router.post('/getReservations', adminController.getReservationFromWorkshopID); // Get all reservations

module.exports = router;