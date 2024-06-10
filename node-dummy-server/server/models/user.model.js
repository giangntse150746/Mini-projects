const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nation: String,// quốc gia ...
  fullname: String,
  email: String,
  usercode: String,
  company: String,
  department: String,
  username: String,
  address: String,
  pass: String,
  phone: String,
  title: String,

  active: Boolean,
  location: Array,
  serviceType: Array,
  multiNation: Array,
  nameImg: String,
  time: Number,

  auto: Boolean,
  multiNation: Array,
  role: [{
    name: String,
    code: String,
    active: Boolean,
  }],
  // exchange rate group id
  exchangeRateGroupId: String,
}, {
  versionKey: false
});

module.exports = mongoose.model('User', UserSchema);
