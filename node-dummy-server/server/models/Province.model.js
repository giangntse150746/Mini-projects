const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProvinceSchema = new mongoose.Schema({
  name: {
    type: String
  },
  province: {
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
  },Zone: {
    type: Schema.Types.ObjectId,
    ref: 'Zone'
  }
}, {
  versionKey: false
});
module.exports = mongoose.model('Province', ProvinceSchema);
