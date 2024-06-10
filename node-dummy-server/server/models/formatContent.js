const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FormatContentSchema = new mongoose.Schema({
    nation :String,
    namtheme: String,
    cover: String,
    formats : [
      {
        _type : String, //Productname, Itineraries, dayByDay, heading
        shading:String,
        font: String,
        fontWeight:String,
        fontSize:String,
        fontColor: String,
        alignment: String,
        lineSpacing : String,
        paragraphSpacing: String,
      }
    ],
    policy: String
}, {
  versionKey: false
});
module.exports = mongoose.model('FormatContent', FormatContentSchema);
