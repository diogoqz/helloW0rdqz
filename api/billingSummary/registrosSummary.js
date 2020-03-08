const _ = require('lodash')
const regCycle = require('../billingCycle/registroCycle')

// Mais uma função middleware
function regSummary(req, res) {
    let query = {};
    let page = req.query.page;
    let limit = 100;
    let skip = limit * (page - 1);
    regCycle.find(query).sort([['timeInMs', 'descending']]).skip(skip).limit(limit).exec((err, value)=>{
        if(err){
            res,status(500).json({errors: [err]})
        } else {
            res.json({value})
        }
    });
}

module.exports = { regSummary }
