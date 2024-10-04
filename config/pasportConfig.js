const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/signUp/signUp_model'); // Make sure this path is correct
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy(
  { usernameField: 'email' },
  async (email, password, done) => {
    const foundUser = await User.findOne({ email: email });
      if (!foundUser) {
        console.log('User not found');
        return done(null, false); // User not found
      }
      console.log('Found user:', foundUser);
      if (!foundUser.password) {
        console.log('Password field is missing in user object');
        return done(null, false);
      }

      const isMatch = await bcrypt.compare(password, foundUser.password);
      if (isMatch) {
        console.log("pass matched");
        
        return done(null, foundUser); // Password matched
      } else {
        console.log('Password did not match');
        return done(null, false); // Password didn't match
      }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

module.exports = passport;
