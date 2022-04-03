var mysql = require('mysql');
var config = require('./config');
// connection = mysql.createConnection(config.database);
var connection = mysql.createPool(config.database);
module.exports = connection;