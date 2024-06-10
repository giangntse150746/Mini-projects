const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LsimageSchema = new mongoose.Schema({
  nation: String,
  filename: String,
  path: String,
  folder: String
}, {
  versionKey: false
});
module.exports = mongoose.model('Lsimage', LsimageSchema);
