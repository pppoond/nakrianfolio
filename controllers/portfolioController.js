const url = require('url');
let portfolioModel = require('../models/portfolioModel');
let portfolioDetailModel = require('../models/portfolioDetailModel');
let portfolioController = function () { }

portfolioController.index = function (req, res, next) {
    res.render('portfolio/index', { title: 'Portfolio' });
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
    console.log(portfolioList[0])
    if (portfolioList != null) {
        return res.render('portfolio/ep', { title: 'Portfolio', data: portfolioList[0] });
    } else {
        throw err;
    }
}

portfolioController.read = function (req, res, next) {
    portfolioModel.findAll(async function (err, result) {
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

module.exports = portfolioController