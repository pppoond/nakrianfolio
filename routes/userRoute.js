var express = require('express');
var routes = express.Router();

routes.get('/', function (req, res) {
    res.send('userrrr');
});

routes.get('/add', function (req, res) {
    res.send('adddddd userrrr');
});

module.exports = routes