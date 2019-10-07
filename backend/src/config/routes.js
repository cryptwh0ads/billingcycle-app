const express = require('express');

module.exports = server => {
  // Define bases URL
  const router = express.Router();
  server.use('/api', router);

  // Routes BillingCycle
  const BillingCycle = require('../api/billingCycle/billingCycleService');
  BillingCycle.register(router, '/billingCycles');
};
