let portfolioDetailModel = require('../models/portfolioDetailModel');
let portfolioDetailController = function () { }

portfolioDetailController.index = function (req, res, next) {
    portfolioDetailModel.findAll(function (err, result) {
        if (err) {
            res.status(400).send();
            throw err;
        } else {
            res.status(200).json(result);
        }
    })
}

module.exports = portfolioDetailController