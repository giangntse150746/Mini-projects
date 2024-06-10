const mongoose = require('mongoose');
const TariffPeriodSchema = new mongoose.Schema({
  nation :String,
  groupPeriod:String,
  tariffType: String,
  no: Number,
  lsPeriod: [{
    date: Date,
    begindate: Date,
    enddate: Date,
    name: String,
    no: Number,
    opeNote: String,
    description: String
  }]
}, {
  versionKey: false
});
module.exports = mongoose.model('TariffPeriods', TariffPeriodSchema);
