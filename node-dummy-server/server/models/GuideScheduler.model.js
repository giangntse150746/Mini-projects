const mongoose = require('mongoose');
const GuideSchedulerchema = new mongoose.Schema({    
  nation :String,
  name: String,
  id:String,
  start_date:String,
  end_date:String,
  text:String,
  guide:String,
  status:String,
  tourcode: String,
  idCode: String,
  description: String,
  lsConntentCheckBoxAss : [
    {
      id: String,
      id_item: String,
      date: String,
      name: String,
      location: String,
      content: String
    }
  ]        
}, {
  versionKey: false
});
module.exports = mongoose.model('GuideScheduler', GuideSchedulerchema);
