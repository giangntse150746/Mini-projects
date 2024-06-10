const mongoose = require('mongoose');

const ServiceTypeSchema = new mongoose.Schema({
  nation :String,
  name: String,
  code: String,
  accountNumber: String,
}, {
  versionKey: false
});
module.exports = mongoose.model('ServiceTypes', ServiceTypeSchema);
