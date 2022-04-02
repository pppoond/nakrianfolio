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

portfolioDetailModel.add = function () {

}

module.exports = portfolioDetailModel