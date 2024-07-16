const mongoose = require('mongoose');

const workshopAuthenticationSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  workshop: { type: mongoose.Schema.Types.ObjectId, ref: 'Workshop', required: true, unique: true }
});

const WorkshopAuthenticationModel = mongoose.model('WorkshopAuthentication', workshopAuthenticationSchema);

module.exports = WorkshopAuthenticationModel;
