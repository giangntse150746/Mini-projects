const mongoose = require('mongoose');
const SuplanguageSchema = new mongoose.Schema({
    nation :String,
    name: String,
    code: String    
}, {
  versionKey: false
});
module.exports = mongoose.model('Suplanguage', SuplanguageSchema);