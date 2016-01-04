var express = require('express');
var app = express();
var port = process.env.PORT || 3000;// set our port
var cookieParser = require('cookie-parser');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var morgan       = require('morgan');
var session      = require('express-session');

var mysql = require("mysql");
var path     = require('path'); //Add path into our required list

var db = require('./config/database');// config files

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json());// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));// parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true }));// parse application/x-www-form-urlencoded




// required for passport
app.use(session({secret: 'hello'}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions



 app.use(express.static(path.join(__dirname, '/public')));



/*con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});*/


// routes ==================================================
require('./app/routes/routes')(app, db, passport); // configure our routes
require('./app/routes/editRoutes')(app, db, passport); // configure our routes


// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

// expose app
exports = module.exports = app;
