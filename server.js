var express = require('express');
var app = express();
var port = process.env.PORT || 3000;// set our port

var mysql = require("mysql");
var path     = require('path'); //Add path into our required list

var db = require('./config/database');// config files

 app.use(express.static(path.join(__dirname, '/public')));



/*con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});*/


// routes ==================================================
require('./app/routes/routes')(app, db); // configure our routes


// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

// expose app
exports = module.exports = app;
