const mongoose = require("mongoose");
const ClientReservationModel = require("../models/ClientReservationModel");
const WorkshopModel = require("../models/WorkshopModel");

const addReservation = async (req, res) => {
  const {
    license_plate,
    car_brand,
    model,
    problem_description,
    name,
    lastname,
    tel,
    email,
    service,
    workshop_id,
    reserved_datetime,
  } = req.body;

  try {
    // Check if client reservation already exists
    const existingReservation = await ClientReservationModel.findOne({
      license_plate,
      reserved_datetime,
    });
    
    if (existingReservation) {
      return res.status(400).json({ error: "Reservation already exists" });
    }

    // Convert workshop_id to ObjectId
    const workshop_id_obj = new mongoose.Types.ObjectId(workshop_id);

    // Check if workshop exists
    const workshop = await WorkshopModel.findById(workshop_id_obj);
    if (!workshop) {
      return res.status(404).json({ error: "Workshop not found" });
    }

    // Create a new reservation document
    const reservation = await ClientReservationModel.create({
      license_plate,
      car_brand,
      model,
      problem_description,
      name,
      lastname,
      tel,
      email,
      service,
      workshop_id: workshop_id_obj, // Use workshop_id_obj directly
      reserved_datetime,
    });

    res.status(201).json({ reservation });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding reservation");
  }
};

module.exports = { addReservation };
