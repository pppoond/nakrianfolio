var express = require('express');
var routes = express.Router();
var controllers = require('../controllers');

var userRoute = require('./userRoute');
var portfolioDetailRoute = require('./portfolioDetailRoute');
var portfolioRoute = require('./portfolioRoute');

//home page routes
routes.get('/', controllers.homeController.index);

//user page routes
routes.use('/user', userRoute);

//portfolio detail routes
routes.use('/portfolio_detail', portfolioDetailRoute);

//portfolio routes
routes.use('/portfolio', portfolioRoute);



module.exports = routes;