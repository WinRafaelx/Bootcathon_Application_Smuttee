const express = require('express');
const router = express.Router();
const workshopAdminAuthController = require('../controllers/workshopAdminAuthController');
const ensureAuthenticated = require('../middleware/auth');
const adminController = require('../controllers/adminController');

router.post('/register', workshopAdminAuthController.registerWorkshop); // Workshop registers
router.post('/login', workshopAdminAuthController.loginWorkshop); // Workshop logs in
router.get('/getReservations', ensureAuthenticated, adminController.getReservationFromWorkshopID); 

module.exports = router;
