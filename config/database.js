// config/db.js
  var mysql = require("mysql");
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "IoTbin",
    database: "iotsmartbin"
  });

  con.connect(function(err){
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });
    module.exports = con;// First you need to create a connection to the db
