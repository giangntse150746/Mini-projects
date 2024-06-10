const mongoose = require('mongoose');

const CurrencySelectedSchema = new mongoose.Schema({
  securityStamp: String, // A random value that must change whenever this object change
  
  selecteds: [{
    nation: String,
    currencies: Array
  }],
  logs: [{
    updatedDate: Date,
    updatedBy: String,

    nation: String,
    currencies: Array
  }]
}, {
  versionKey: false
});
module.exports = mongoose.model('CurrencySelected', CurrencySelectedSchema);

