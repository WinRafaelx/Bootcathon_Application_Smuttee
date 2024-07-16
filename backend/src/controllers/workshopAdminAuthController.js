const bcrypt = require('bcrypt');
const WorkshopAuthenticationModel = require('../models/WorkshopAuthenticationModel');
const WorkshopModel = require('../models/WorkshopModel');
const passport = require('passport');

const registerWorkshop = async (req, res) => {
  const { username, password, workshop_name, address } = req.body;

  try {
    // Check if username already exists
    const existingUser = await WorkshopAuthenticationModel.findOne({ username });
    const existingWorkshop = await WorkshopModel.findOne({ workshop_name });

    if (existingUser || existingWorkshop) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));

    // Create a new Workshop
    const workshop = await WorkshopModel.create({
      workshop_name,
      address
    });

    // Create a new WorkshopAuthentication with hashed password and linking to the created Workshop
    const workshopAuth = await WorkshopAuthenticationModel.create({
      username,
      password: hashedPassword,
      workshop: workshop._id // Link WorkshopAuthentication to the Workshop
    });

    res.status(201).json({ workshopAuth, workshop });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error registering workshop');
  }
};

const loginWorkshop = async (req, res, next) => {
  passport.authenticate('local', async (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ error: 'Incorrect username or password' });
    }

    req.session.workshop_id = user.workshop; // Store the workshop_id in session

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.status(200).json({ message: 'Login successful', user });
    });
  })(req, res, next);
};

module.exports = { registerWorkshop, loginWorkshop };
