const _ = require('lodash')
const Registro = require('./registroCycle')

Registro.methods(['get', 'post', 'put', 'delete'])
Registro.updateOptions({new: true, runValidators: true})

Registro.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
  const bundle = res.locals.bundle

  if(bundle.errors) {
    var errors = parseErrors(bundle.errors)
    res.status(500).json({errors})
  } else {
    next()
  }
}

function parseErrors(nodeRestfulErrors) {
  const errors = []
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}

Registro.route('count', function(req, res, next) {
    Registro.count(function(error, value) {
    if(error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json({value})
    }
  })
})

Registro.route('lista', function (req, res, next){
    Registro.find({}).exec((err, value)=>{
      if(err){
          res,status(500).json({errors: [err]})
      } else {
          res.json({value})
      }
  })

})

Registro.route('diario', function (req, res, next){
    var moment = require("moment")
    var dia = moment().format('DD/MM/YY')
    Registro.find({data: dia}).exec((err, value)=>{
      if(err){
          res,status(500).json({errors: [err]})
      } else {
          res.json({value})
      }
  })

})

module.exports = Registro
