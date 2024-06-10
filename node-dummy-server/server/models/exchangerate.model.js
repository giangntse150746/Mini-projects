const mongoose = require('mongoose');

const ExchangeRateSchema = new mongoose.Schema({
  nation: String,
  unit: Number,
  currency: String,
  beginDate: Date,
  endDate: Date,
  rates: [
    {
      name: String,
      value: Number,
    }
  ],

  groupId: String,
  groupName: String,
}, {
  versionKey: false
});
// module.exports = mongoose.model('ExchangeRate', ExchangeRateSchema);
module.exports = {
  ExchangeRate: mongoose.model('ExchangeRate', ExchangeRateSchema),
  ExchangeRateSchema: ExchangeRateSchema
}
