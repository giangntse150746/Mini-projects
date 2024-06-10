const mongoose = require('mongoose');
const AirlinesSchema = new mongoose.Schema({
    nation :String,
    code: String,
    name: String,
    class: [
      {
        code: String,
        name : String,
        luggageAllowance: String
      }
    ]
}, {
  versionKey: false
});
module.exports = mongoose.model('Airlines', AirlinesSchema);