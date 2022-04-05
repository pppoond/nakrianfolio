var express = require('express');
var routes = express.Router();
var registerController = require('../controllers/registerController');

routes.get('/', registerController.index);

//api
// routes.get('/read', controllers.registerController.read);
// routes.post('/auth', registerController.auth);

module.exports = routes