let db = require('../db');
let userModel = {}

userModel.findAll = function (result) {
    let sql = "SELECT * FROM user";
    db.query(sql, function (err, res) {
        if (err) {
            return result(err, null);
        } else {
            return result(null, res);
        }
    });
}

userModel.login = function (username, password) {
    return new Promise(function (resolve, reject) {
        db.query("SELECT * FROM user WHERE username = ? AND password = ?", [username, password], function (err, res, fields) {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
}

userModel.findById = function (id, result) {
    let sql = "SELECT * FROM user WHERE user_id = " + id;
    db.query(sql, function (err, res) {
        if (err) {
            return result(err, null);
        } else {
            return result(null, res);
        }
    });
}


userModel.add = function () {

}

module.exports = userModel