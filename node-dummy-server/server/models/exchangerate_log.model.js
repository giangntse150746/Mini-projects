const mongoose = require('mongoose');
const { ExchangeRateSchema } = require('./exchangerate.model');

const ExchangeRateLogSchema = new mongoose.Schema({
  updatedDate: Date,
  updatedBy: String,
  action: String, // delete, change, insert

  from: ExchangeRateSchema, // for delete, change
  to: ExchangeRateSchema // for change, insert
}, {
  versionKey: false
});
module.exports = mongoose.model('ExchangeRate_Log', ExchangeRateLogSchema);
