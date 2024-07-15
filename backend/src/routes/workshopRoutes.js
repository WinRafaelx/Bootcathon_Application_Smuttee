const express = require('express');
const router = express.Router();
const workshopController = require('../controllers/workshopController');

router.get('', workshopController.getAllWorkshops);

module.exports = router;
