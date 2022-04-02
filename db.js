var mysql = require('mysql');
var config = require('./config');
connection = mysql.createConnection(config.database);

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to MySQL database = ', err)
        return;
    }
    console.log('MySQL successfully connected.')
})

module.exports = connection;