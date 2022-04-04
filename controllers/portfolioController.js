const url = require('url');
let portfolioModel = require('../models/portfolioModel');
let portfolioDetailModel = require('../models/portfolioDetailModel');
let portfolioController = function () { }

portfolioController.index = function (req, res, next) {
    portfolioModel.findAll(function (err, result) {
        if (err) {
            res.status(400).send();
            throw err;
        } else {
            res.status(200).json(result);
        }
    })
}

portfolioController.read2 = async function (req, res, next) {
    var tests = await portfolioModel.testPromiss();

    var portfolioList = [];
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
    if (portfolioList != null) {
        res.status(200).json(portfolioList);
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