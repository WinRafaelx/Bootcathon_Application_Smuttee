const express = require('express');
const router = express.Router();
const workshopAuthController = require('../controllers/workshopAuthenticationController');

router.post('/register', workshopAuthController.registerWorkshop); // Workshop registers
router.post('/login', workshopAuthController.loginWorkshop); // Workshop logs in

module.exports = router;
