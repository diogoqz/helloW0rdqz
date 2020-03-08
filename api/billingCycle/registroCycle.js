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


const registrosSchema = new mongoose.Schema({
    intent: { type: String},
    nome: { type: String},
    retorno: { type: String},
    data: { type: String},
    hora: { type: String},
    timeInMs: { type: Number},
    telefone: { type: String},
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restful.model('Registros', registrosSchema)