const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = mongoose.connect("mongodb+srv://sistema:sistemamrs@sistema-mrs-xokwv.mongodb.net/sistema", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
