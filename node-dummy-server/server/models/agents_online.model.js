const { boolean } = require('joi');
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Gents_onlinesSchema = new mongoose.Schema({
    ref :String,
    name: String,
    code: String,
    cid: String,
    agid: String,
    email: String,
    country: String,
    address: String,
    adtel: String,
    booker_email: String,
    agencygroup: String,
    aconsortia: String,
    procodes: {type: ObjectId, ref: 'Procodes'},
    isActive :Boolean,
    contacts : [{
      active: Boolean,
      code: String,
      name: String,
      title: String,
      tel: String,
      email: String,
      url: String
    }]
}, {
  versionKey: false
});
module.exports = mongoose.model('Gents_onlines', Gents_onlinesSchema);
