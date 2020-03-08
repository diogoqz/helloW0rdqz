const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: { type: String},
    value: {type: Number}
})

const debtSchema = new mongoose.Schema({
    name: { type: String},
    value: {type: Number},
    status: {type: String, required: false, uppercase: true,
    enum: ['PREMIUM', 'FREE', 'CORTESIA', 'PAGO', 'AGENDADO', 'PENDENTE']}
})


const billingCycleSchema = new mongoose.Schema({
    name: { type: String},
    nome: { type: String},
    email: { type: String},
    premium: { type: Boolean},
    month: { type: Number},
    year: { type: Number},
    telefone: { type: String, required: true},
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)