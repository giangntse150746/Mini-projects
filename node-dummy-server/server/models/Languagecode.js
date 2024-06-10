const mongoose = require('mongoose');
const LanguageCodeSchema = new mongoose.Schema({
    language: String,
    code: String
}, {
  versionKey: false
});
module.exports = mongoose.model('languagecodes', LanguageCodeSchema);