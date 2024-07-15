const WorkshopModel = require('../models/WorkshopModel');

const getAllWorkshops = async (req, res) => {
    try {
        const workshops = await WorkshopModel.find();
        res.json(workshops);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error getting workshops');
    }
};

module.exports = { getAllWorkshops };