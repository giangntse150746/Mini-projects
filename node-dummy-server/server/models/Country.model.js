const mongoose = require('mongoose');
const CountrySchema = new mongoose.Schema({
  nation: String,
  name: String,
  currency: String,
  symbol: String,
  contentExport: {
    Company: String,
    Address: String
  },
  InvoiceOption: {
    theme: String,
    bank: String
  },
  lsbank: Array,
  policy: String
}, {
  versionKey: false
});

module.exports = mongoose.model('Countries', CountrySchema);
