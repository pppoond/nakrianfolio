let db = require('../db');
let portfolioDetailModel = require('../models/portfolioDetailModel')
let portfolioModel = {}

portfolioModel.findAll = function (result) {
    let sql = "SELECT * FROM portfolio ORDER BY ASC";
    db.query(sql, function (err, res) {
        if (err) {
            return result(err, null);
        } else {
            return result(null, res);
        }
    });
    // return result(null, testQuery());

    // let arrayData = [];
    // try {
    //     let sql = "SELECT * FROM portfolio";
    //     const rows = await dbcall(sql);
    //     rows.forEach(async (row) => {
    //         const imageData = await dbcall("SELECT * FROM `portfolio_detail` WHERE p_id = 4");
    //         console.log(imageData);
    //         arrayData.push({
    //             p_id: row.p_id,
    //             images: imageData
    //         });
    //     });
    //     console.log(arrayData);
    //     return result(null, arrayData);
    // } catch (error) {
    //     console.log(error);
    // }



    // db.query("SELECT * FROM portfolio", function (err, res) {
    //     if (err) {
    //         return result(err, null);
    //     } else {
    //         var arrayData = [];
    //         for (var i in res) {
    //             let detail = [];
    //             var p_query = 'SELECT * FROM portfolio_detail WHERE p_id = 4';
    //             db.query(p_query, function (emp_err, emp_rows, emp_fields) {
    //                 if (emp_err) throw emp_err;
    //                 for (var e in emp_rows) {
    //                     detail.push(emp_rows[e]);
    //                     // console.log(emp_rows[e]);
    //                 }
    //             });
    //             arrayData.push({
    //                 p_id: detail
    //             });
    //         }
    //         setTimeout(() => {
    //             return result(null, arrayData);
    //         }, 5);

    //     }
    // });

    // dbcall("SELECT * FROM portfolio", function (res) {
    //     let dataRows = [];
    //     res.forEach(element => {
    //         let itemFirst = {};
    //         for (const [key, value] of Object.entries(element)) {
    //             if (key == 'p_id') {
    //                 dbcall("SELECT * FROM portfolio_detail WHERE p_id = " + value, function (res) {
    //                     itemFirst['p_detail'] = res
    //                 });
    //             }
    //             // console.log(key, value);
    //             itemFirst[key] = value;
    //         }
    //         dataRows.push(itemFirst)
    //     });
    //     setTimeout(() => {
    //         return result(null, dataRows);
    //     }, 1500);
    // })
}

portfolioModel.testPromiss = function () {
    return new Promise(function (resolve, reject) {
        db.query("SELECT * FROM portfolio ORDER BY p_id DESC", function (err, res) {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
}

portfolioModel.findById = function (id) {
    return new Promise(function (resolve, reject) {
        db.query("SELECT * FROM portfolio WHERE p_id = ?", [id], function (err, res) {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
}

portfolioModel.add = function () {

}

const dbcall = (query, callback) => {
    new Promise((resolve, reject) => {
        db.query(
            query,
            (error, rows, results) => {
                if (error) return reject(error);
                callback(rows)
            });
    });
};

module.exports = portfolioModel