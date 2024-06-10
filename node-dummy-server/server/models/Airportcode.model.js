const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AirportCodeSchema = new mongoose.Schema({
  airportName: {
    type: String
  },
  country: {
    type: String
  },
  idCountry: {
    type: String
  },
  city: {
    type: String
  },
  iscity: {
    type: String
  },
  code: {
    type: String
  },
}, {
  versionKey: false
});
module.exports = mongoose.model('Airportcode', AirportCodeSchema);
