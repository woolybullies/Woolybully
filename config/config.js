

var mysql = require('mysql');

var connection;
if (process.env.DB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.DB_URL);
} else {
    console.log(`Cannot to connect to mysql`)
};


module.exports = connection;