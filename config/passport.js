// config/passport.js

// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;

var db = require('../config/database');// config files

// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.user);
    });

    // used to deserialize the user
    passport.deserializeUser(function(user, done) {
      db.query("select * from users where user = "+user,function(err,rows){
            done(err, rows[0]);
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

            db.query("SELECT * FROM `user` WHERE `user` = '" + user + "'",function(err,rows){
                  			if (err)
                                  return done(err);
                  			 if (!rows.length) {
                           console.log("no user found");
                                  return done(null, { error: 'No user found. ' }); // req.flash is the way to set flashdata using connect-flash
                              }

                  			// if the user is found but the password is wrong
                              if (!( rows[0].password == password))
                              {
                                console.log("no user found");
                                return done(null, { error: 'Oops! Wrong password.' }); // create the loginMessage and save it to session as flashdata

                              }

                              console.log("all is well");

                              // all is well, return successful user
                              return done(null, rows[0]);

                  		});
          });
      }));

    };
