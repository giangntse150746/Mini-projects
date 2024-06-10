const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const logLoginbackendSchema = new mongoose.Schema({
  nation:String,
  username: String,
  fullname: String,
  _type: String,
  action: String,
  ip : String,
  country: String,
  region: String,
  latitude: Number,
  longitude: Number,
  reference: String,
  TimeString: String,
  TimeDate : Date
}, {
  versionKey: false
});
module.exports = mongoose.model('logLoginbackend', logLoginbackendSchema);
