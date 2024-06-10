const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const value = new mongoose.Schema(
{
  _isType: String,
  agency: String,
  unit_0: Number,
  unit_1: Number,
  unit_2: Number,
  unit_3: Number,
  unit_4: Number,
  unit_5: Number,
  unit_6: Number,

  release_period_0: Number,
  release_period_1: Number,
  release_period_2: Number,
  release_period_3: Number,
  release_period_4: Number,
  release_period_5: Number,
  release_period_6: Number,

  max_per_day_0: Number,
  max_per_day_1: Number,
  max_per_day_2: Number,
  max_per_day_3: Number,
  max_per_day_4: Number,
  max_per_day_5: Number,
  max_per_day_6: Number,

  cut_off_0: Number,
  cut_off_1: Number,
  cut_off_2: Number,
  cut_off_3: Number,
  cut_off_4: Number,
  cut_off_5: Number,
  cut_off_6: Number,
});
const agency = new mongoose.Schema(
{
  _isType: String,
  agency_code: String,
  value : value,
});
const Allotmentchema = new mongoose.Schema({    
    _idContracts: String,
    id_hotel: {type: ObjectId},
    assignment :[{
      _isType: String,
      value : value,
      beginDate: Date,
      endDate: Date,
      agencys: [agency]
    }],
    stop_sales : [{
      _category: String,
      data: [{
          color: String,
          create: Date,
          endDate: Date,
          id: Number,
          name: String,
          startDate: String,
          u_create: String,
          update: Date,
          location: String,
          u_update: String,
      }]
    }],
        
}, {
  versionKey: false
});
module.exports = mongoose.model('Allotments', Allotmentchema);
