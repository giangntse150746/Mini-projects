const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const logAgentLoginSchema = new mongoose.Schema({
  nation:String,
  action: String,
  passCode: String,
  ip : String,
  country: String,
  region: String,
  latitude: Number,
  longitude: Number,
  Agent: String,
  reference: String,
  TimeString: String,
  TimeDate : Date
}, {
  versionKey: false
});
module.exports = mongoose.model('logAgentLogin', logAgentLoginSchema);
