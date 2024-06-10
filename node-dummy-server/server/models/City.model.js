const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CitySchema = new mongoose.Schema({
  name: {
    type: String
  },
  citycode: {
    type: String
  },
  lat: {
    type: Number
  },
  lon: {
    type: Number
  },
  nation: {
    type: String
  },
  level: {
    type: Number,
  },
  zoom: {
    type: Number
  },
  content: {
    type: String
  },
  Province: {
    type: Schema.Types.ObjectId,
    ref: 'Province'
  }
}, {
  versionKey: false
});
module.exports = mongoose.model('City', CitySchema);
