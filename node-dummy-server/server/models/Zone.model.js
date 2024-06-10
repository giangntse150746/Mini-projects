const mongoose = require('mongoose');
const ZoneSchema = new mongoose.Schema({
  name: {
    type: String
  },
  nation: {
    type: String
  },
  lat: {
    type: Number
  },
  level: {
    type: Number,
  },
  lon: {
    type: Number
  },
  zoom: {
    type: Number
  }  
}, {
  versionKey: false
});
module.exports = mongoose.model('Zone', ZoneSchema);
