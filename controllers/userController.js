const url = require('url');
let userModel = require('../models/userModel');
let userController = function () { }

userController.index = function (req, res, next) {
    res.render('user/index', { title: 'User' });
}

userController.add = function (req, res, next) {
    res.render('user/add', { title: 'Add Page' });
}

userController.findAll = async function (req, res, next) {
    try {
        var results = await userModel.findAll();
        return res.status(200).json(results);
    } catch (error) {
        console.log(error.massage);
        return res.status(500).send();
    }
}

userController.findByPId = async function (req, res, next) {
    let pId = req.params.pId;
    var results = await userModel.findById(pId);
    var userList = [];
    await Promise.all(
        results.map(async result => {
            var pDetail = {};
            const details = await portfolioDetailModel.findByPId2(result.p_id)
            for (const [key, value] of Object.entries(result)) {
                if (key == 'p_id') {
                    pDetail['p_detail'] = details
                }
                pDetail[key] = value;
            }
            userList.push(pDetail);
        })
    )
    if (userList != null) {
        res.status(200).json(userList[0]);
    } else {
        throw err;
    }
}

userController.ep = async function (req, res, next) {
    let pId = req.params.pId;
    var results = await userModel.findById(pId);
    var userList = [];
    await Promise.all(
        results.map(async result => {
            var pDetail = {};
            const details = await portfolioDetailModel.findByPId2(result.p_id)
            for (const [key, value] of Object.entries(result)) {
                if (key == 'p_id') {
                    pDetail['p_detail'] = details
                }
                pDetail[key] = value;
            }
            userList.push(pDetail);
        })
    )
    console.log(userList[0])
    if (userList != null) {
        return res.render('portfolio/ep', { title: 'Portfolio', data: userList[0] });
    } else {
        throw err;
    }
}

userController.read = function (req, res, next) {
    userModel.findAll(async function (err, result) {
        let dataArr = [];
        if (err) {
            res.status(400).send();
            throw err;
        } else {
            await result.forEach(async element => {
                let item1 = {};
                for await (const [key, value] of Object.entries(element)) {
                    if (key == 'p_id') {
                        let item2;
                        portfolioDetailModel.findByPId(value, function (result) {
                            item2 = result
                        });
                        item1['p_detail'] = item2
                    }
                    // console.log(key, value);
                    item1[key] = value;
                }
                dataArr.push(item1);
            });
            // portfolioDetailModel.findByPId(i)
            await res.status(200).json(dataArr);
        }
    })
}

module.exports = userController