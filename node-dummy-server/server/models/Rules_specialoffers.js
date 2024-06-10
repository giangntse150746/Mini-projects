const mongoose = require('mongoose');
const SpecialoffersSchema = new mongoose.Schema({
    nation :String,
    type_Rule : Number,
    name: String,
    message: String,
    //-----------------------
    enforce: Boolean,
    cumulative: Boolean,
    //-----------------------    
    /* minimum_stay */
    min_stay: Number,
    max_stay: Number,
    /* max_stay */
    max_pax: Number,
    arrive_within_rule_dates: Boolean,
    min_stay_in_occupied_days: Boolean,
    Must_stay: Number,
    extranet: Boolean,
    /* minimum_ages */
    min: Number,
    max: Number,
    /* maximum_ages */
    day: Number,

    /* Must Occupy On*/
    _Any: Boolean,
    _Mon : Boolean,
    _Tue : Boolean,
    _Wed: Boolean,
    _Thu : Boolean,
    _Fri: Boolean,
    _Sat : Boolean,
    _Sun: Boolean,
    
    /* Must Arrive On*/
    Any: Boolean,
    Mon : Boolean,
    Tue : Boolean,
    Wed: Boolean,
    Thu : Boolean,
    Fri: Boolean,
    Sat : Boolean,
    Sun: Boolean,
    //--------------------------------
    // option for pass client.
    checkin: Boolean,
    checkout: Boolean,
    blackoutdate: Boolean,
    latecheckout: Boolean,
    
    value: Number,
    numberOfRoomOnBooking: Number,
    minRoomGit: Number,
    maxRoomGit: Number,
    by: Number,
    action: Number,
    note: String,
    // bat Buoc
    Create: String,
    CreateBy: Date,
    Update: String,
    updateBy: Date,
    _ruleName: String
}, {
  versionKey: false
});


module.exports = mongoose.model('Specialoffers', SpecialoffersSchema);
