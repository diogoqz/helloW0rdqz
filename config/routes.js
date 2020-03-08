const express = require('express')

module.exports = function(server) {

  // API Routes
  const router = express.Router()
  server.use('/api', router)

  // rotas da API
  const billingCycleService = require('../api/billingCycle/billingCycleService')
  billingCycleService.register(router, '/billingCycles')

  const registro = require('../api/billingCycle/registrosService')
  registro.register(router, '/registros')

  const billingSummaryService = require('../api/billingSummary/billingSummaryService')
  router.route('/billingSummary').get(billingSummaryService.getSummary)

  const regSummaryService = require('../api/billingSummary/registrosSummary')
  router.route('/regSummary').get(regSummaryService.regSummary)
}
