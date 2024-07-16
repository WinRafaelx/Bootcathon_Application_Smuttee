const mongoose = require("mongoose");
const ClientReservationModel = require("../models/ClientReservationModel");

const getReservationFromWorkshopID = async (req, res) => {
  const { workshop_id } = req.params;

  try {
    const reservations = await ClientReservationModel.find({ workshop_id: workshop_id });
    console.log(reservations);
    res.json(reservations);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error getting reservations");
  }
};

module.exports = { getReservationFromWorkshopID };
