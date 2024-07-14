const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/chat', chatController.chat);

module.exports = router;
