var express = require('express');
var routes = express.Router();
var controllers = require('../controllers');

routes.get('/', controllers.portfolioDetailController.index);

routes.get('/add', function (req, res) {
    res.send('adddddd userrrr');
});

module.exports = routes