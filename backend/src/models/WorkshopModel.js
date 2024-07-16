const mongoose = require('mongoose');

const workshopSchema = new mongoose.Schema({
  workshop_name: { type: String, required: true },
  address: { type: String, required: true }
});

const WorkshopModel = mongoose.model('Workshop', workshopSchema);

module.exports = WorkshopModel;
