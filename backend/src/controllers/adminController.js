const mongoose = require("mongoose");
const ClientReservationModel = require("../models/ClientReservationModel");
const WorkshopAuthenticationModel = require("../models/WorkshopAuthenticationModel");

const getReservationFromWorkshopID = async (req, res) => {
  const user_id = req.session.passport.user;
    const workshop = await WorkshopAuthenticationModel.findById(user_id);

  try {
    const reservations = await ClientReservationModel.find({ workshop_id: workshop.workshop });
    console.log(reservations);
    res.json(reservations);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error getting reservations");
  }
};

module.exports = { getReservationFromWorkshopID };
