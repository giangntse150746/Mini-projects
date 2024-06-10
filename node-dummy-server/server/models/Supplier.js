const mongoose = require('mongoose');
const SupplierSchema = new mongoose.Schema({
  nation: String,
  Isid: String,
  name: String,
  code: String,
  shortname: String,

  ServiceName: String,
  address: String,
  txtID: String,
  numberID: Number,
  supplierID: String,

  // for Guide
  locationCode: String,
  location: String,
  locationIds: String,
  email: String,
  website: String,
  country: String,
  market: Array,
  taxcode: String,
  province: String,
  idCountry: String,
  phone: String,
  Contact: [
    {
      Isid: String,
      person: String,
      title: String,
      email: String,
      tel: String,
      office: String,
      serviceID: String,
    }
  ],

  ListService: [{
    Isid: String,
    supplierServiceCode: String,
    supplierServiceName: String,
    address: String,
    tel: String,

    website: String,
    txtID: String,
    txtServiceID: String,
    serviceID: String,
    numberID: Number,

    types: String,
    numbercutoffday: Number,
    location: String,
    locationId: String,
    locationIds: String,
    idCountry: String,
    // for Guide
    license: String,
    ranking: Number,
    numberOfWorkingYear: Number,
    workFrom: Date,
    language: Array,
    phone: String,

    taxcode: String,
    currency: String,
    typeBased: String,
    ByUnit: String,

    inputlist: [{
      name: String,
      min: Number,
      max: Number,
      unit: Number,
      inputprice: Number,
      price: Number
    }],
    list: [{
      name: String,
      min: Number,
      max: Number,
      unit: Number,
      inputprice: Number,
      price: Number,

      Idsupplier: String,
      IdService: String,
      serviceName: String,
    }],
  }],
  Service: [
    {
      ServiceName: String,
      servicetypes: String,
      contractAgreement: String,
      validFrom: Date,
      validTo: Date,
      status: String,
      sentReceivedDate: Date,
      Note: String
    }
  ],
  bankaccount: [{
    Isid: String,
    bankaccount: String,
    bankname: String,
    bankaddress: String,
    credittype: String,
    creditamount: Number,
    numbercutoffday: Number,
    CreditLimit: Number,
    validbegin: Date,
    validend: Date,
    swiftcode: String,
    TaxOffice: Number,

    TaxNumber: Number,
    BankTel: String,
    serviceID: String,
  }],
}, {
  versionKey: false
});
module.exports = mongoose.model('Supplier', SupplierSchema);
