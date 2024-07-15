const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('', chatController.chat);  // Call typhoon API

module.exports = router;
