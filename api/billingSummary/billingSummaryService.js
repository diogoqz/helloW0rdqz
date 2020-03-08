const _ = require('lodash')
const BillingCycle = require('../billingCycle/billingCycle')

// Mais uma função middleware
function getSummary(req, res) {
    let query = {};
    let page = req.query.page;
    let limit = 50;
    let skip = limit * (page - 1);
    BillingCycle.find(query).sort([['timeInMs', 'descending']]).skip(skip).limit(limit).exec((err, value)=>{
        if(err){
            res,status(500).json({errors: [err]})
        } else {
            res.json({value})
        }
    });
}

module.exports = { getSummary }
