const mongoose = require('mongoose');
const TopupSchema = new mongoose.Schema({
  nation :String,
  name: String,  
  phone: String,
  email: String,
  location: String,
  address: String,
  market:Array,
  bankaccount:String,
  bankname:String,
  bankaddress:String,
  topupcommision:Number,
  topupcommision_land:Number
  }, {
  versionKey: false
});
module.exports = mongoose.model('topup', TopupSchema);
