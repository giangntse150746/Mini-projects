const mongoose = require('mongoose');
const TourCategorySchema = new mongoose.Schema({
  nation :String,
  name: String,
  code: String
}, {
  versionKey: false
});
module.exports = mongoose.model('TourCategory', TourCategorySchema);
