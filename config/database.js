// config/db.js
  var mysql = require("mysql");
  var con = mysql.createConnection({
    host: "sql4.freemysqlhosting.net",
    user: "sql4101596",
    password: "1sYWS9mAnB",
    database: "sql4101596"
  });

  con.connect(function(err){
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });
    module.exports = con;// First you need to create a connection to the db
