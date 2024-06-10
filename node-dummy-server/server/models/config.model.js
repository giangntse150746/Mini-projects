const mongoose = require('mongoose');
const ConfigSchema = new mongoose.Schema({
  imgeLogo: String, // home image
  imgeLogo2: String, // header image
  exportNoEmail: Boolean,
  configHome: {
    color: String,
    background: String
  }
}, {
  versionKey: false
});
module.exports = mongoose.model('Config', ConfigSchema);
