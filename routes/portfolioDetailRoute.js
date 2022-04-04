var express = require('express');
var routes = express.Router();
var controllers = require('../controllers');

routes.get('/', controllers.portfolioDetailController.index);

//api
// routes.get('/read', controllers.portfolioDetailController.read);

module.exports = routes