const BillingCycle = require('./billingCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({ new: true, runValidators: true });

BillingCycle.route('count', (req, res, next) => {
  BillingCycle.count((error, value) => {
    if (error) {
      res.status(500).json({ errors: [error] });
    } else {
      res.json({ value });
    }
  });
});

BillingCycle.route('summary', (req, res, next) => {
  // res.send('ok')
  BillingCycle.aggregate(
    [
      {
        $project: {
          credit: { $sum: '$credits.value' },
          debit: { $sum: '$debits.value' },
        },
      },
      {
        $group: {
          _id: null,
          credit: { $sum: '$credit' },
          debit: { $sum: '$debit' },
        },
      },
      {
        $project: { _id: 0, credit: 1, debit: 1 },
      },
    ],
    (error, result) => {
      if (error) {
        res.status(500).json({ errors: [error] });
      } else {
        res.json(result[0] || { credit: 0, debt: 0 });
      }
    }
  );
});

module.exports = BillingCycle;
