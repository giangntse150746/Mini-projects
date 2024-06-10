const mongoose = require('mongoose');
const MapsSchema = new mongoose.Schema({
  nation: String,
  location: String,
  category :String,
  note: String,
  makers: [
      {
        tilte: String,
        description: String,
        lat : Number,
        lon : Number
      }
    ]
}, {
  versionKey: false
});
module.exports = mongoose.model('Maps', MapsSchema);
