var express = require('express');
var routes = express.Router();
var userRoute = require('./userRoute');
var portfolioDetailRoute = require('./portfolioDetailRoute');
var loginRoute = require('./loginRoute');
var registerRoute = require('./registerRoute');
var servicesRoute = require('./servicesRoute');
var pageRoute = require('./pageRoute');

let session = {};

var authenticate = function (req, res, next) {
    if (req.session.userId != null) {
        session['userId'] = req.session.userId
        res.locals.session = session
        next();
    } else {
        res.redirect('/login');
    }
}

//home page routes
// routes.get('/', controllers.homeController.index);

//user page routes
routes.use('/user', authenticate, userRoute);

//portfolio detail routes
routes.use('/portfolio_detail', authenticate, portfolioDetailRoute);

//login routes
routes.use('/login', loginRoute);

//login routes
routes.use('/register', registerRoute);

//service
routes.use('/services', servicesRoute);

//page
routes.use('/', pageRoute);



module.exports = routes;