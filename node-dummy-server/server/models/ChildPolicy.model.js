const mongoose = require('mongoose');

// copy from tours.model
const paxBreak = new mongoose.Schema(
  {
    pax: Number,
    number: Number,
    pricesell: Number,
    pricebuy: Number,
    // tour leader
    pricesellTLs: Number,
    pricebuyTLs: Number,
    hiden: Boolean,
  }
);

const ChildPolicySchema = new mongoose.Schema({
  nation: String,
  childPolicies: [{
    // copy from Items_ChildPolicy in tours.model
    from: Number,
    to: Number,
    IsItem: String,
    option: String,
    value: Number,
    note: String,
    cellRol: String,
    totalPriceGround: Number,
    paxBreak: [paxBreak],

    // for general
    beginDate: Date,
    endDate: Date,
    currency: String,
  }]
}, {
  versionKey: false
});

module.exports = mongoose.model('child_policies', ChildPolicySchema);
