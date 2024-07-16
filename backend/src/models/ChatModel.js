const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  prompt: { type: String, required: true },
  datetime: { type: Date, default: Date.now }
});

const chatModel = mongoose.model('Chat', chatSchema);

module.exports = chatModel;
