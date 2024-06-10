const mongoose = require('mongoose');
const TourdurationSchema = new mongoose.Schema({
  nation :String,
  name: String,
  sort: Number,
  show: Boolean,
  code: String
}, {
  versionKey: false
});
module.exports = mongoose.model('Tourduration', TourdurationSchema);
