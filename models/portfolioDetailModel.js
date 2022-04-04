let db = require('../db');
let portfolioDetailModel = {}

portfolioDetailModel.findAll = function (result) {
    let sql = "SELECT * FROM portfolio_detail";
    db.query(sql, function (err, res) {
        if (err) {
            return result(err, null);
        } else {
            return result(null, res);
        }
    });
}

portfolioDetailModel.findByPId = function (id, result) {
    let sql = "SELECT * FROM portfolio_detail WHERE p_id = " + id;
    db.query(sql, function (err, res) {
        if (err) {
            return result(err, null);
        } else {
            return result(null, res);
        }
    });
}

portfolioDetailModel.findByPId2 = function (id) {
    return new Promise(function (resolve, reject) {
        db.query("SELECT * FROM portfolio_detail WHERE p_id = " + id, function (err, res) {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
}

portfolioDetailModel.add = function () {

}

module.exports = portfolioDetailModel