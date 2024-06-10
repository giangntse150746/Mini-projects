const mongoose = require('mongoose');
const LogclientsSchema = new mongoose.Schema({
    nation: String,
  	page: String,
  	ip : String,
    country: String,
    region: String,
    latitude: Number,
    longitude: Number,
    reference: String,
    currency: String,
    currencycode: String,
    Agent: String,
    Consultant : String,
    TimeString: String,
    filter : String,
    TimeDate : Date,
    IdContract: String,
    NameContract: String,
    Code : String
}, {
  versionKey: false
});
module.exports = mongoose.model('Logclients', LogclientsSchema);