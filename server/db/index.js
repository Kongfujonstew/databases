var mysql = require('mysql');


module.exports.connection = mysql.createConnection({
  host: "localhost",
  user: 'root',
  database: 'chat',
  password: 'plantlife',
});






// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
