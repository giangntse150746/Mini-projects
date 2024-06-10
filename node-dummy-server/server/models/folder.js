const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FolderSchema = new mongoose.Schema({
    nation :String,
    name: String
}, {
  versionKey: false
});
module.exports = mongoose.model('Folder', FolderSchema);
