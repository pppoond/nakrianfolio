var express = require('express');
var routes = express.Router();

var homeController = require('../controllers/homeController');
var userController = require('../controllers/userController');
var portfolioController = require('../controllers/portfolioController');

//pages

//index
routes.get('/', homeController.index);

//portfolio
// routes.get('/portfolio', portfolioController.index);
routes.get('/portfolio/ep/:pId', portfolioController.ep);

//user
routes.get('/user', userController.index);

module.exports = routes