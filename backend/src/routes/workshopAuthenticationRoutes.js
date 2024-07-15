const express = require('express');
const router = express.Router();
const workshopAuthController = require('../controllers/workshopAuthenticationController');

router.post('/register', workshopAuthController.registerWorkshop); 
router.post('/login', workshopAuthController.loginWorkshop);

module.exports = router;
