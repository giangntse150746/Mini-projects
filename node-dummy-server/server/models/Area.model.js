const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AreaSchema = new mongoose.Schema({
  name: {
    type: String
  },
  lat: {
    type: Number
  },
  lon: {
    type: Number
  },
  level: {
    type: Number,
  },
  nation: {
    type: String
  },
  zoom: {
    type: Number
  },
  content: {
    type: String
  },
  City: {
    type: Schema.Types.ObjectId,
    ref: 'City'
  }
}, {
  versionKey: false
});
module.exports = mongoose.model('Area', AreaSchema);
