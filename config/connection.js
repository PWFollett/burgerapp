var mysql = require('mysql');
var connection;

// For Heroku Deployment vs. Local MySQL Database
if(process.env.db){
  connection = mysql.createConnection(process.env.db); //add correct database
}
else{
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '', // Add your password
    database : 'burgers_db' // Add your database
  });
}


// Export the Connection
module.exports = connection;