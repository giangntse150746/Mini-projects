const mongoose = require('mongoose');
const MarketSchema = new mongoose.Schema({
    nation :String,
    description: String,
    code : String,
    childs : [{
      parent: String,
      description: String,
      code : String,
    }],
    // bat Buoc
    Create: String,
    CreateBy: Date,
    Update: String,
    updateBy: Date,
}, {
  versionKey: false
});
module.exports = mongoose.model('Markets', MarketSchema);
