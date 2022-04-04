var express = require('express');
var routes = express.Router();
var controllers = require('../controllers');

routes.get('/', controllers.portfolioController.index);

//api
routes.get('/read', controllers.portfolioController.read);
routes.get('/read2', controllers.portfolioController.read2);

module.exports = routes