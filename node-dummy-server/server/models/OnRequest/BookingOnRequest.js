const mongoose = require('mongoose');
const BookingOnRequestSchema = new mongoose.Schema({
  nation: String,
  nameTour: String,
  tourConsultant: String,
  currency: String,
  agentMd5Code: String,
  agentName: String,
  agentRef: String,

  agentEmail: String,
  Code: String,
  begindate: Date,
  enddate: Date,
  locations: Array, // city model
  departureLocation: { // city model
    type: Object,
    default: {}
  },
  returnLocation: { // city model
    type: Object,
    default: {}
  },
  isHalf: { // false: x Days x Nights, true: 	x Days (x-1) Nights
    type: Boolean,
    default: false
  },
  adultQuantity: Number,
  childQuantity: Number,
  lsChildren: [{
    No: Number,
    age: Number,
    price: Number,
  }],
  total: {
    type: Number,
    default: 0
  },
  note: String,
  Tours: [
    {
      Day: Number,
      date: Date,
      Activities: {
        type: [mongoose.Schema.Types.Mixed],
        ref: 'OnrequestActivity',
        default: []
      },
      total: {
        type: Number,
        default: 0
      },
      locations: {
        type: [{}],
        default: []
      }
    }
  ],
  days: {
    type: Number,
    default: 0
  },
  comment: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    unum: ['feedback', 'approved', 'draft', 'requested', 'cancelled'],
    default: 'draft'
  },
  UpdateBy: {
    type: mongoose.Schema.Types.Mixed
  },
  UpdateDate: {
    type: Date,
    default: Date.now
  },
  CreateBy: {
    type: mongoose.Schema.Types.Mixed
  },
  CreateDate: {
    type: Date,
    default: Date.now
  },
  proposalId: String,
  markupInfo: { // copy from procodes.model.js
    p_begin: Date,
    p_end: Date,
    p_htpro: Number,
    p_tourpro: Number,
    p_airfare: Number,
    p_buffer: Number,
  },
  agencyContacts: [{ // copy from agents_online.js
    name: String,
    title: String,
    tel: String,
    email: String,
    url: String
  }],
  adminNotes: [{ // note for reject, cancel
    type: String, // "reject", "cancel"
    date: Date,
    by: String,
    note: String
  }],
  isoReps: [{ // copy from procodes.model.js
    idReps: String,
    name: String,
    topupcommision: Number,
    topupcommision_land: Number,
  }],
}, {
  versionKey: false
});
module.exports = mongoose.model('BookingOnRequest', BookingOnRequestSchema);
