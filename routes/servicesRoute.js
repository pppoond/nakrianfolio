var express = require('express');
var routes = express.Router();

var portfolioController = require('../controllers/portfolioController');
var userController = require('../controllers/userController');

//service
routes.get('/', async function (req, res) {
    res.send('Hello services.');
})

//portfolio
routes.get('/portfolio', portfolioController.findAll);
routes.get('/portfolio/ep/:pId', portfolioController.ep);
routes.post('/portfolio', portfolioController.create);

//user
routes.get('/user', userController.findAll);

module.exports = routes