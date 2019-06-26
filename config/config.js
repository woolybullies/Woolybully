

var mysql = require('mysql');

var connection;
if (process.env.DB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.DB_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
        port: 3306,
        host: 'v02yrnuhptcod7dk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'qvi25n47mbm3c8da',
        password: ' ffx51olsemcudjmv',
        database: 'w5rf5aqxit0qej3v'
    })
};


module.exports = connection;