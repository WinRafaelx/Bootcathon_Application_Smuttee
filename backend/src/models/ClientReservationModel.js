const mongoose = require('mongoose');

const clientReservationSchema = new mongoose.Schema({
  license_plate: { type: String, required: true },
  car_brand: { type: String, required: true },
  model: { type: String, required: true },
  problem_description: { type: String, required: true },
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  tel: { type: String, required: true },
  email: { type: String },
  service: { type: String, required: true },
  workshop_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Workshop', required: true },
  reserved_datetime: { type: Date, required: true }
});

const ClientReservationModel = mongoose.model('ClientReservation', clientReservationSchema);

module.exports = ClientReservationModel;
