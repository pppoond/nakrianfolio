var express = require('express');
var routes = express.Router();
var portfolioController = require('../controllers/portfolioController');

routes.get('/', portfolioController.index);
routes.get('/ep/:pId', portfolioController.ep);

//service
routes.get('/service/ep/:pId', portfolioController.findByPId);

//api
routes.get('/read', portfolioController.read);
routes.get('/read2', portfolioController.read2);

module.exports = routes