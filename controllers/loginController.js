const url = require('url');
let userModel = require('../models/userModel');
let loginController = function () { }

loginController.index = function (req, res, next) {
    res.render('login/index', { title: 'Login' });
}

loginController.auth = async function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var results = await userModel.login(username, password);
    if (results.length >= 1) {
        res.status(200).json({
            title: 'login',
            msg: 'success',
        });
    } else {
        res.status(200).json({
            title: 'login',
            msg: 'unsuccess',
        });
        // throw err;
    }
}

// loginController.read = async function (req, res, next) {
//     var tests = await userModel.findAll();

//     var portfolioList = [];
//     await Promise.all(
//         tests.map(async test => {
//             var pDetail = {};
//             const details = await portfolioDetailModel.findByPId2(test.p_id)
//             for (const [key, value] of Object.entries(test)) {
//                 if (key == 'p_id') {
//                     pDetail['p_detail'] = details
//                 }
//                 pDetail[key] = value;
//             }
//             portfolioList.push(pDetail);
//         })
//     )
//     if (portfolioList != null) {
//         res.status(200).json(portfolioList);
//     } else {
//         throw err;
//     }
// }

module.exports = loginController