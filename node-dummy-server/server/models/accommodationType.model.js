const mongoose = require('mongoose');
const AccommodationTypesSchema = new mongoose.Schema({
  nation: String,
  name: String
}, {
  versionKey: false
});

module.exports = mongoose.model('AccommodationTypes', AccommodationTypesSchema);
