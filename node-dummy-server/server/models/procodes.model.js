const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const ProcodesSchema = new mongoose.Schema({
  nation: String,
  gents_onlines: {type: ObjectId, ref: 'Gents_onlines'},
  cname: String,
  chname: String,
  cemail: String,
  agid: String,
  ccode: String,
  md5code: String,
  cmarket: String,
  ccurrency: String,
  agencyType: String,
  active: Boolean,
  online: Boolean,
  private_code: Boolean,
  isoReps : [{
    idReps: String,
    name: String,
    topupcommision: Number,
    topupcommision_land: Number,
  }],
  period: [{
    p_begin: Date,
    p_end : Date,
    p_htpro: Number,
    p_tourpro: Number,
    p_airfare: Number,
    p_buffer: Number,
  }],
  messenger : [{
    content: String,
    byUser: String,
    dated : Date
  }],
  creditlimit: String,
  credittype: String,    
  bankname: String,
  accountname: String,
  accountnumber: Number,
  swift: String,
  taxoffice: String,
  taxnumber: Number,
  banktel: String,
  bankaddess: String,
}, {
  versionKey: false
});

module.exports = mongoose.model('Procodes', ProcodesSchema);
