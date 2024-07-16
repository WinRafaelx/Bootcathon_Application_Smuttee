// config/passportConfig.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const WorkshopAuthenticationModel = require('../models/WorkshopAuthenticationModel');

// Define the LocalStrategy
passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await WorkshopAuthenticationModel.findOne({ username });
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      return done(null, user); // Passes user object to serializeUser
    } catch (err) {
      return done(err);
    }
  }
));

// Serialize user to store in session
passport.serializeUser((user, done) => {
  done(null, user._id); // Store user's _id in session
});

// Deserialize user to retrieve from session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await WorkshopAuthenticationModel.findById(id);
    done(null, user); // Retrieves user object from session
  } catch (err) {
    done(err);
  }
});

module.exports = passport;
