const bcrypt = require('bcrypt');
const WorkshopAuthenticationModel = require('../models/WorkshopAuthenticationModel');
const WorkshopModel = require('../models/WorkshopModel');

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

const loginWorkshop = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if username exists
    const user = await WorkshopAuthenticationModel.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    // Passwords match, login successful
    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error logging in');
  }
};

module.exports = { registerWorkshop, loginWorkshop };
