var express = require('express');
var routes = express.Router();
var loginController = require('../controllers/loginController');

routes.get('/', loginController.index);

//api
// routes.get('/read', controllers.loginController.read);
routes.post('/auth', loginController.auth);

module.exports = routes