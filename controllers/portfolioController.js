const url = require('url');
let portfolioModel = require('../models/portfolioModel');
let portfolioDetailModel = require('../models/portfolioDetailModel');
let portfolioController = function () { }

portfolioController.index = function (req, res, next) {
    res.render('portfolio/index', { title: 'Portfolio' });
}

portfolioController.findAll = async function (req, res, next) {
    var tests = await portfolioModel.testPromiss();

    var portfolioList = [];

    //Promise.all ทำงานพร้อมกันจบ ค่อยรีเทิน 
    await Promise.all(
        tests.map(async test => {
            var pDetail = {};
            const details = await portfolioDetailModel.findByPId2(test.p_id)
            for (const [key, value] of Object.entries(test)) {
                if (key == 'p_id') {
                    pDetail['p_detail'] = details
                }
                pDetail[key] = value;
            }
            portfolioList.push(pDetail);
        })
    )

    //forof ทำงานตามลำดับ
    // for (let test of tests) {
    //     var pDetail = {};
    //     const details = await portfolioDetailModel.findByPId2(test.p_id)
    //     for (const [key, value] of Object.entries(test)) {
    //         if (key == 'p_id') {
    //             pDetail['p_detail'] = details
    //         }
    //         pDetail[key] = value;
    //     }
    //     portfolioList.push(pDetail);
    // }

    if (portfolioList != null) {
        res.status(200).json(portfolioList);
    } else {
        throw err;
    }
}

portfolioController.read2 = async function (req, res, next) {
    var tests = await portfolioModel.testPromiss();

    var portfolioList = [];

    //Promise.all ทำงานพร้อมกันจบ ค่อยรีเทิน 
    await Promise.all(
        tests.map(async test => {
            var pDetail = {};
            const details = await portfolioDetailModel.findByPId2(test.p_id)
            for (const [key, value] of Object.entries(test)) {
                if (key == 'p_id') {
                    pDetail['p_detail'] = details
                }
                pDetail[key] = value;
            }
            portfolioList.push(pDetail);
        })
    )

    //forof ทำงานตามลำดับ
    // for (let test of tests) {
    //     var pDetail = {};
    //     const details = await portfolioDetailModel.findByPId2(test.p_id)
    //     for (const [key, value] of Object.entries(test)) {
    //         if (key == 'p_id') {
    //             pDetail['p_detail'] = details
    //         }
    //         pDetail[key] = value;
    //     }
    //     portfolioList.push(pDetail);
    // }

    if (portfolioList != null) {
        res.status(200).json(portfolioList);
    } else {
        throw err;
    }
}

portfolioController.create = async function (req, res, next) {
    try {
        if (!req.body.userId != null && req.body.pTitle != null && req.body.pName != null) {
            const userId = req.body.userId
            const pTitle = req.body.pTitle
            const pName = req.body.pName
            var result = await portfolioModel.add(userId, pTitle, pName);
            return res.status(201).json({
                massage: 'success',
                response: result
            })
        } else {
            return res.status(200).json({
                massage: 'unsuccess',
                detail: 'please check body request.'
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send();
    }
}

portfolioController.findByPId = async function (req, res, next) {
    let pId = req.params.pId;
    var results = await portfolioModel.findById(pId);
    var portfolioList = [];
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
            portfolioList.push(pDetail);
        })
    )
    if (portfolioList != null) {
        res.status(200).json(portfolioList[0]);
    } else {
        throw err;
    }
}

portfolioController.ep = async function (req, res, next) {
    let pId = req.params.pId;
    var results = await portfolioModel.findById(pId);
    var portfolioList = [];
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
            portfolioList.push(pDetail);
        })
    )
    if (portfolioList != null) {
        return res.render('portfolio/ep', { title: 'Portfolio', data: portfolioList[0] });
    } else {
        throw err;
    }
}

module.exports = portfolioController