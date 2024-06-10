const mongoose = require('mongoose');

const CurrencySchema = new mongoose.Schema({
  nationAvailables: Array, // ex: ["vn", "tl"], admin select currency for nation // not use, remove in future

  // info
  code: String, // currency code
  name: String, // currency name
  symbol: String,
  priority: Number, // sort asc
  flag: String, // flag file name
  nameByNations: [{
    nation: String, // nation code in lower case, ex: vn, tl, ca, ...
    name: String // // currency name in language by nation
  }],
  priorityByNations: [{
    nation: String, // nation code in lower case, ex: vn, tl, ca, ...
    priority: Number, // sort asc
  }]
}, {
  versionKey: false
});
module.exports = mongoose.model('Currency', CurrencySchema);

