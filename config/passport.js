// config/passport.js

// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;


// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(leerkracht, done) {
        done(null, leerkracht.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        models.Leerkracht.findById(id, function(err, leerkracht) {
            done(err, leerkracht);
        });
    });

    // =========================================================================
      // LOCAL LOGIN =============================================================
      // =========================================================================
      passport.use('local-login', new LocalStrategy({
          // by default, local strategy uses username and password, we will override with email
          usernameField : 'user',
          passwordField : 'password',
          passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
      },
      function(req, user, password, done) {
          if (user)
              user = user.toLowerCase();

          // asynchronous
          process.nextTick(function() {
              models.Leerkracht.findOne({ 'email' :  email }, function(err, leerkracht) {
                  // if there are any errors, return the error
                  if (err)
                      return done(err);

                  // if no user is found, return the message
                  if (!leerkracht)
                      return done(null, { error: 'No user found. ' });

                  if (!leerkracht.validPassword(password))
                      return done(null, { error: 'Oops! Wrong password.' });

                  // all is well, return user
                  else
                      return done(null, leerkracht);
              });
          });
      }));
