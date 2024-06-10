const Joi = require('joi');
const { Tours } = require('../models/tours.model');
const City = require('../models/City.model');
const Logclients = require('../models/Logclient');
const { ExchangeRate } = require('../models/exchangerate.model');
const Service = require('../models/Service.model');
const GuideScheduler = require('../models/GuideScheduler.model');
const Supplier = require('../models/Supplier');
const Suplanguage = require('../models/Suplanguage');
const Language = require('../models/Language');
const { Infohotel } = require('../models/infohotel.model');
const Gents_onlines = require('../models/agents_online.model');
const Procodes = require('../models/procodes.model');
const Market = require('../models/market.model');
const Maps = require('../models/Maps');
const mongoose = require('mongoose');
const TariffPeriod = require('../models/TariffPeriod');
const Tourduration = require('../models/Tourduration');
const TourCategory = require('../models/TourCategory');
const ServiceType = require('../models/ServiceType');
const logAgentLogin = require('../models/logAgentLogin');
const logLoginbackend = require('../models/logLoginbackend');
const BookingOnRequest = require('../models/OnRequest/BookingOnRequest');
const Airlines = require('../models/Airlines');
const Country = require('../models/Country.model');
const ChildPolicy = require('../models/ChildPolicy.model');
const Config = require('../models/config.model');

const config = require('../config/config');
const Base64 = require('js-base64').Base64;
const convertObjectId = mongoose.Types.ObjectId;
var _ = require('lodash');
const onehotelSchema = Joi.object({
  nation: Joi.string().required(),
  _id: Joi.string().required(),
});

// init data
initCountryDatabaseIfNotExist();
initConfigIfNotExist();

module.exports = {
  // ---------------------------------- Config
  getConfig,

  // ---------------------------------- Country
  getCountries,
  getChildPolicies,

  get_suplanguage,
  create_GuideSchedulers,
  update_GuideScheduler,
  destroy_GuideScheduler,
  get_GuideSchedulers,
  create_logClient,
  get_logClient,
  Client_Get,
  Client_Get_list,

  get_DataServiceForEdit,
  loginbyPassCode,
  gentsByID,
  list_market,
  find_language,
  getonehotel,
  list_exchangeRate,
  get_periodeClient,
  list_City,
  list_options,
  get_value_byCodeMd5,
  filter_Hotel,
  detailTour,
  exportdate_excel_excursions,
  recent_update_hotel,
  recent_promotions,
  recent_refurbishments,
  _logAgentLogin,
  logloginbackend,

  updateAgencyContracts,

  get_maps_by,
  bookingonrequest,
  getOneRequest,
  updateBookingOnRequest,
  deleteBookingOnRequest,
  bookingListGet,
  list_Airlines,
  list_Supplier,
  SearchForAirfare,
  SearchForAirfare2,
  getOneAirfare
}

// -------------------------------------------------------------- Config
async function initConfigIfNotExist() {
  let existConfig = await Config.countDocuments();
  if (existConfig === 0) {
    if (config.configDefault)
      await new Config(config.configDefault).save();
  }
}
async function getConfig(param) {
  return await Config.findOne({});
}

// -------------------------------------------------------------- Country
async function initCountryDatabaseIfNotExist() {
  let existCountries = await Country.countDocuments({});
  if (!existCountries) {
    let countryData = require('../data/countryData');
    let source = config.clientName;

    var countryClient = (countryData || []).find(c => c.source === source);
    if (countryClient && countryClient.ls_Country && countryClient.ls_Country.length > 0) {
      await Country.insertMany(countryClient.ls_Country);
      console.log("-------------------------: initCountryDatabaseIfNotExist(): Country - in auth.controller successfully.");
    }
  }

  return true;
}
async function getCountries(param) {
  return await Country.find({});
}
// -------------------------------------------------------------- Country End

async function getChildPolicies(param) {
  return await ChildPolicy.findOne({ nation: param.nation });
}

async function SearchForAirfare(body) {
  let _pageSize = body._pageSize;
  let _pageNumber = body._pageNumber;
  let _filter = body._filter;
  let params = {
    nation: body.nation,
    category: { $in: [_filter.category] },
    isActive: true,
    LinkExcursions: { $ne: true },
    Items_DirectMarkup: { $not: { $size: 0 } }
  };
  if (_filter && _filter.location && _filter.location !== "" && _filter.location !== "--")
    params.location = _filter.location;

  let filterBy = {};
  if (_filter && _filter.Date) {
    let _isDate = new Date(_filter.Date);
    filterBy['$and'] = [{ "Items_DirectMarkup_Select.begindate": { $lte: _isDate } }, { "Items_DirectMarkup_Select.enddate": { $gte: _isDate } }];
  }
  if (_filter.search) {
    var re = new RegExp(_filter.search.toLowerCase(), 'i');
    filterBy['$or'] = [
      { 'bookingName': { $regex: re } },
      { 'productCode': { $regex: re } },
      { 'Direct_Note': { $regex: re } },
      { 'content': { $regex: re } },
    ];
  }

  if (_filter && _filter.Airlines) filterBy['Items_DirectMarkup_Select.Airlines'] = _filter.Airlines;
  if (_filter && _filter.class) filterBy['Items_DirectMarkup_Select.class'] = _filter.class;
  if (_filter && _filter.from) filterBy['Items_DirectMarkup_Select.flightFromCity'] = _filter.from;
  if (_filter && _filter.to) filterBy['Items_DirectMarkup_Select.flightToCity'] = _filter.to;

  const isAggregate = [
    { $match: params },
    { $unwind: "$Items_DirectMarkup" },
    {
      $project: {
        _id: '$_id',
        Items_DirectMarkup_Select: '$Items_DirectMarkup',
        Curency: '$Curency',
        productCode: '$productCode',
        bookingName: '$bookingName',
        location: '$location',
        ageny: '$ageny',
        category: '$category',
        Direct_Note: '$Direct_Note',
        content: '$content',
        contents: '$contents',
        market: '$market',

        duration: '$duration',
        begindate: '$begindate',
        enddate: '$enddate',
        DateUpdate: '$DateUpdate',
        isoReps: '$isoReps',
        Items_ChildPolicy: '$Items_ChildPolicy',
        Items_Calculator: '$Items_Calculator',
        DateCreate: '$DateCreate',
        noteTiers: '$noteTiers',
        periods: '$periods',
        tiers: '$tiers',
        timeView: '$timeView',
        availab: '$availab',
        DMK: "$DMK",
        languageId: "$languageId",
        language: "$language",
        CRM: "$CRM",
        UngroupAcc: '$UngroupAcc',
        ValueEditModel: '$ValueEditModel',
        Groupcode: '$Groupcode'
      }
    }, { $match: filterBy },
    {
      '$facet': {
        Metas: [{ $count: "total" }, { $addFields: { page: _pageNumber } }],
        lsItems: [
          { $skip: (_pageNumber > 0 ? ((_pageNumber - 1) * _pageSize) : 0) },
          { $limit: _pageSize }
        ]
      }
    }
  ];
  return await Tours.aggregate(isAggregate).allowDiskUse(true).then(rs => {
    return {
      total: rs[0].Metas && rs[0].Metas.length > 0 ? rs[0].Metas[0].total : 0,
      items: rs[0].lsItems
    }
  });
}

async function SearchForAirfare2(body) {
  let _pageSize = body._pageSize;
  let markup = body._markup;
  let _pageNumber = body._pageNumber;
  let _filter = body._filter;

  let params = {
    ValueEditModel: 'EXCURSIONS',
    nation: body.nation,
    category: { $in: [_filter.category] },
    isActive: true,
    LinkExcursions: { $ne: true },
    Items_DirectMarkup: { $not: { $size: 0 } },

    market: { $in: [markup.market, 'WW'] },
    exceptMarket: { $ne: markup.market },
    exceptAgeny: { $ne: markup.md5code }
  };

  let filterBy = {
    $and: []
  };

  if (_filter.Date) {
    let _isDate = new Date(_filter.Date);
    filterBy.$and = [
      ...filterBy.$and,
      { "Items_DirectMarkup_Select.begindate": { $lte: _isDate } },
      { "Items_DirectMarkup_Select.enddate": { $gte: _isDate } }
    ];
  }

  if (_filter.search) {
    var re = new RegExp(_filter.search.toLowerCase(), 'i');
    filterBy.$and = [
      ...filterBy.$and,
      {
        "$or": [
          { 'bookingName': { $regex: re } },
          { 'productCode': { $regex: re } },
          { 'Direct_Note': { $regex: re } },
          { 'content': { $regex: re } },
        ]
      },
    ];
  }

  if (_filter.from)
    filterBy.$and = [
      ...filterBy.$and,
      {
        "$or": [
          { 'Items_DirectMarkup_Select.flightFromCity': _filter.from },
          { 'location': _filter.from },
        ]
      },
    ];
  if (_filter.to)
    filterBy.$and = [
      ...filterBy.$and,
      {
        "$or": [
          { 'Items_DirectMarkup_Select.flightToCity': _filter.to },
          // { 'Items_DirectMarkup_Select.flightToCity': null },
        ]
      },
    ];
  if (_filter.Airlines)
    filterBy.$and = [
      ...filterBy.$and,
      {
        "$or": [
          { 'Items_DirectMarkup_Select.Airlines': _filter.Airlines },
          // { 'Items_DirectMarkup_Select.Airlines': null },
        ]
      },
    ];
  if (_filter.class)
    filterBy.$and = [
      ...filterBy.$and,
      {
        "$or": [
          { 'Items_DirectMarkup_Select.class': _filter.class },
          // { 'Items_DirectMarkup_Select.class': null },
        ]
      },
    ];

  const isAggregate = [
    { $match: params },
    { $unwind: "$Items_DirectMarkup" },
    {
      $project: {
        _id: '$_id',
        Items_DirectMarkup_Select: '$Items_DirectMarkup',
        Curency: '$Curency',
        productCode: '$productCode',
        bookingName: '$bookingName',
        location: '$location',
        ageny: '$ageny',
        category: '$category',
        Direct_Note: '$Direct_Note',
        content: '$content',
        contents: '$contents',
        market: '$market',

        duration: '$duration',
        begindate: '$begindate',
        enddate: '$enddate',
        DateUpdate: '$DateUpdate',
        isoReps: '$isoReps',
        Items_ChildPolicy: '$Items_ChildPolicy',
        Items_Calculator: '$Items_Calculator',
        DateCreate: '$DateCreate',
        noteTiers: '$noteTiers',
        periods: '$periods',
        tiers: '$tiers',
        timeView: '$timeView',
        availab: '$availab',
        DMK: "$DMK",
        languageId: "$languageId",
        language: "$language",
        CRM: "$CRM",
        UngroupAcc: '$UngroupAcc',
        ValueEditModel: '$ValueEditModel',
        Groupcode: '$Groupcode'
      }
    }, { $match: filterBy },
    {
      '$facet': {
        Metas: [{ $count: "total" }, { $addFields: { page: _pageNumber } }],
        lsItems: [
          { $skip: (_pageNumber > 0 ? (_pageNumber - 1) * _pageSize : 0) },
          { $limit: _pageSize }
        ]
      }
    }
  ];
  return await Tours.aggregate(isAggregate).allowDiskUse(true).then(rs => {
    return {
      total: rs[0].Metas && rs[0].Metas.length > 0 ? rs[0].Metas[0].total : 0,
      items: rs[0].lsItems
    }
  });
}

async function getOneAirfare(body) {
  let params = {
    _id: convertObjectId(body._id),
    nation: body.nation,
    category: { $in: ["Airfare"] },
    isActive: true,
    LinkExcursions: { $ne: true },
    Items_DirectMarkup: { $not: { $size: 0 } }
  };
  const isAggregate = [
    { $match: params },
    {
      $project: {
        _id: '$_id',
        Items_DirectMarkup: '$Items_DirectMarkup',
        Curency: '$Curency',
        productCode: '$productCode',
        bookingName: '$bookingName',
        location: '$location',
        ageny: '$ageny',
        category: '$category',
        Direct_Note: '$Direct_Note',
        content: '$content',
        contents: '$contents',
        market: '$market'
      }
    }
  ];
  return await Tours.aggregate(isAggregate).allowDiskUse(true).then(rs => rs);
}

async function list_Supplier(body) {
  let params = {},
    _pageSize = body._pageSize,
    _pageNumber = body._pageNumber,
    _filter = body._filter;
  params.nation = body.nation;
  if (_filter && _filter.city) {
    params.location = _filter.city
  }
  if (_filter && _filter.servicetypes && _filter.servicetypes.length > 0) {
    params.servicetypes = { $in: _filter.servicetypes }
  }
  if (_filter && _filter.language) {
    params.language = { $in: [_filter.language] }
  }
  _filter.search = _filter && _filter.search ? _filter.search : '';
  var re = new RegExp(_filter.search.trim().toLowerCase(), 'i');
  params['$or'] = [
    { 'name': { $regex: re } },
    { 'ListService': { $elemMatch: { 'supplierServiceName': { $regex: re } } } },
    { 'ListService': { $elemMatch: { 'supplierServiceCode': { $regex: re } } } },
    { 'shortname': { $regex: re } }
  ];
  const isAggregate = [
    { $sort: { name: 1 } },
    { '$match': params },
    {
      '$facet': {
        Metas: [{ $count: "total" }, { $addFields: { page: _pageNumber } }],
        lsItems: [
          { $skip: (_pageNumber > 0 ? ((_pageNumber - 1) * _pageSize) : 0) },
          { $limit: _pageSize }
        ]
      }
    }
  ];
  return await Supplier.aggregate(isAggregate).allowDiskUse(true).then(rs => {
    return {
      total: rs[0].Metas && rs[0].Metas.length > 0 ? rs[0].Metas[0].total : 0,
      items: rs[0].lsItems
    }
  });
}
async function list_Airlines(body) {
  let params = {};
  params.nation = body.nation;
  return await Airlines.aggregate([
    { '$match': params },
    {
      $project: {
        _id: '$_id',
        nation: '$nation',
        code: '$code',
        name: '$name',
        fullName: { $concat: ["$code", " - ", "$name"] },
        class: '$class'
      }
    }
  ]);
}
async function bookingListGet(body) {
  let params = {};
  if (body.search && body.search != '') {
    var re = new RegExp(body.search.toLowerCase(), 'i');
    params['$or'] = [
      { 'nameTour': { $regex: re } },
      { 'note': { $regex: re } }
    ];
  }
  params.nation = body.nation;
  if (body.location && body.location.length > 0)
    params.location = { $in: body.location };

  const isAggregate = [
    { '$match': params },
    {
      $sort: { CreateDate: -1 }
    },
    {
      $project: {
        _id: '$_id',
        nameTour: '$nameTour',
        currency: '$currency',
        departureLocation: '$departureLocation',
        returnLocation: '$returnLocation',
        days: '$days',
        isHalf: '$isHalf',
        adultQuantity: '$adultQuantity',
        enddate: '$enddate',
        begindate: '$begindate',
        childQuantity: '$childQuantity',
        UpdateDate: '$UpdateDate',
        status: '$status'
      }
    },
    {
      '$facet': {
        Metas: [{ $count: "total" }, { $addFields: { page: body._pageNumber } }],
        lsItems: [
          { $skip: (body._pageNumber > 0 ? ((body._pageNumber - 1) * body._pageSize) : 0) },
          { $limit: body._pageSize }
        ]
      }
    }
  ];

  return await BookingOnRequest.aggregate(isAggregate).allowDiskUse(true).then(rs => {
    return {
      total: rs[0].Metas && rs[0].Metas.length > 0 ? rs[0].Metas[0].total : 0,
      items: rs[0].lsItems
    }
  });
}
async function getOneRequest(param) {
  const request = await BookingOnRequest.findOne({ _id: convertObjectId(param.id) });
  if (!request) {
    return null;
  }
  request.locations = request.locations.map(location => {
    delete location.content;
    return {
      ...location,
      citycode: location.citycode != '' ? location.citycode : ''
    }
  });
  return request;
}
async function bookingonrequest(param) {
  return await new BookingOnRequest(param).save();
}

async function updateBookingOnRequest(param) {
  try {
    let request = await BookingOnRequest.findById(param._id);
    if (!request) {
      return null;
    }
    request = await BookingOnRequest.findOneAndUpdate(
      { _id: convertObjectId(param._id) },
      { $set: param },
      { new: true, useFindAndModify: false }
    );
    return request;
  } catch (err) {
    console.log(err);
    return null;
  }
}

async function deleteBookingOnRequest(_id) {
  let request = await BookingOnRequest.findById(_id);
  if (!request) {
    return null;
  }
  return await BookingOnRequest.findByIdAndDelete(_id);
}

async function recent_refurbishments(body) {
  let params = {};
  params.isActive = true;
  params.nation = body.nation;
  var newDate = new Date();
  newDate.setDate(newDate.getDate() - 30);
  let isAggregate = [
    { '$match': params },
    { "$unwind": "$contracts" },
    { '$match': { 'contracts.isActive': true } },
    {
      $project: {
        _id: '$_id',
        name: '$name',
        rating: '$rating',
        City: '$City',
        contracts_name: '$contracts.name',
        contracts_beginDate: '$contracts.beginDate',
        contracts_endDate: '$contracts.endDate',
        contracts_currency: '$contracts.currency',
        contracts_market: '$contracts.market',
        periods: {
          $filter: {
            input: "$contracts.periods",
            as: "item",
            cond: { $or: [{ $gte: ['$$item.beginDate', newDate] }, { $gte: ['$$item.endDate', newDate] }] }
          }
        }
      }
    },
    {
      '$match': { periods: { $not: { $size: 0 } } }
    },
    { "$unwind": "$periods" },
    {
      '$match': { "periods._type": "Refurbish", 'periods.isActive': true }
    },
    {
      $project: {
        _id: '$_id',
        name: '$name',
        rating: '$rating',
        City: '$City',
        contracts_name: '$contracts_name',
        contracts_beginDate: '$contracts_beginDate',
        contracts_endDate: '$contracts_endDate',
        contracts_market: '$contracts_market',
        periods_id: '$periods._id',
        periods_name: '$periods.name',
        periods_beginDate: '$periods.beginDate',
        periods_type: '$periods._type',
        periods_endDate: '$periods.endDate',
        periods_DateUpdate: '$periods.DateUpdate',
        periods_DateCreate: '$periods.DateCreate',
        periods_description: '$periods.description',
      }
    },
    {
      $sort: { periods_DateUpdate: -1, periods_DateCreate: -1 }
    },
    {
      $group: {
        _id: {
          _id: '$_id',
          name: '$name',
          rating: '$rating',
          City: '$City',
          contracts_name: '$contracts_name',
          contracts_beginDate: '$contracts_beginDate',
          contracts_endDate: '$contracts_endDate',
          contracts_market: '$contracts_market',
        },
        periods: {
          $push: {
            _id: '$periods_id',
            name: '$periods_name',
            beginDate: '$periods_beginDate',
            endDate: '$periods_endDate',
            _type: '$periods_type',
            DateUpdate: '$periods_DateUpdate',
            DateCreate: '$periods_DateCreate',
            description: '$periods_description',
          }
        }
      }
    }
  ];
  return await Infohotel.aggregate(isAggregate).allowDiskUse(true);
}
async function recent_promotions(body) {
  let params = {};
  params.isActive = true;
  params.nation = body.nation;
  var newDate = new Date();
  newDate.setDate(newDate.getDate() - 30);
  let isAggregate = [
    { '$match': params },
    { "$unwind": "$contracts" },
    { '$match': { 'contracts.isActive': true } },
    {
      $project: {
        _id: '$_id',
        name: '$name',
        rating: '$rating',
        City: '$City',
        contracts_name: '$contracts.name',
        contracts_beginDate: '$contracts.beginDate',
        contracts_endDate: '$contracts.endDate',
        contracts_currency: '$contracts.currency',
        contracts_market: '$contracts.market',
        periods: {
          $filter: {
            input: "$contracts.periods",
            as: "item",
            cond: { $or: [{ $gte: ['$$item.beginDate', newDate] }, { $gte: ['$$item.endDate', newDate] }] }
          }
        }
      }
    },
    {
      '$match': { periods: { $not: { $size: 0 } } }
    },
    { "$unwind": "$periods" },
    {
      '$match': { "periods._type": "Promotion", 'periods.isActive': true }
    },
    {
      $project: {
        _id: '$_id',
        name: '$name',
        rating: '$rating',
        City: '$City',
        contracts_name: '$contracts_name',
        contracts_beginDate: '$contracts_beginDate',
        contracts_endDate: '$contracts_endDate',
        contracts_market: '$contracts_market',
        periods_id: '$periods._id',
        periods_name: '$periods.name',
        periods_beginDate: '$periods.beginDate',
        periods_endDate: '$periods.endDate',
        periods_type: '$periods._type',
        periods_DateUpdate: '$periods.DateUpdate',
        periods_DateCreate: '$periods.DateCreate',
        periods_description: '$periods.description',
      }
    },
    {
      $sort: { periods_DateUpdate: -1, periods_DateCreate: -1 }
    },
    {
      $group: {
        _id: {
          _id: '$_id',
          name: '$name',
          rating: '$rating',
          City: '$City',
          contracts_name: '$contracts_name',
          contracts_beginDate: '$contracts_beginDate',
          contracts_endDate: '$contracts_endDate',
          contracts_market: '$contracts_market',
        },
        periods: {
          $push: {
            _id: '$periods_id',
            name: '$periods_name',
            beginDate: '$periods_beginDate',
            endDate: '$periods_endDate',
            _type: '$periods_type',
            DateUpdate: '$periods_DateUpdate',
            DateCreate: '$periods_DateCreate',
            description: '$periods_description',
          }
        }
      }
    }
  ];
  return await Infohotel.aggregate(isAggregate).allowDiskUse(true);
}
async function recent_update_hotel(body) {
  let params = {};
  params.isActive = true;
  params.nation = body.nation;
  var newDate = new Date();
  newDate.setDate(newDate.getDate() - 30);
  let isAggregate = [
    { '$match': params },
    { "$unwind": "$contracts" },
    { '$match': { 'contracts.isActive': true } },
    {
      $project: {
        _id: '$_id',
        name: '$name',
        rating: '$rating',
        City: '$City',
        contracts_name: '$contracts.name',
        contracts_beginDate: '$contracts.beginDate',
        contracts_endDate: '$contracts.endDate',
        contracts_currency: '$contracts.currency',
        contracts_market: '$contracts.market',
        periods: {
          $filter: {
            input: "$contracts.periods",
            as: "item",
            cond: { $or: [{ $gte: ['$$item.DateUpdate', newDate] }, { $gte: ['$$item.DateCreate', newDate] }] }
          }
        }
      }
    },
    {
      '$match': { periods: { $not: { $size: 0 } } }
    },
    { "$unwind": "$periods" },
    {
      '$match': { "periods._type": "Normal", 'periods.isActive': true }
    },
    {
      $project: {
        _id: '$_id',
        name: '$name',
        rating: '$rating',
        City: '$City',
        contracts_name: '$contracts_name',
        contracts_beginDate: '$contracts_beginDate',
        contracts_endDate: '$contracts_endDate',
        contracts_market: '$contracts_market',
        periods_id: '$periods._id',
        periods_name: '$periods.name',
        periods_beginDate: '$periods.beginDate',
        periods_endDate: '$periods.endDate',
        periods_type: '$periods._type',
        periods_DateUpdate: '$periods.DateUpdate',
        periods_DateCreate: '$periods.DateCreate',
        periods_description: '$periods.description',
      }
    },
    {
      $sort: { periods_DateUpdate: -1, periods_DateCreate: -1 }
    },
    {
      $group: {
        _id: {
          _id: '$_id',
          name: '$name',
          rating: '$rating',
          City: '$City',
          contracts_name: '$contracts_name',
          contracts_beginDate: '$contracts_beginDate',
          contracts_endDate: '$contracts_endDate',
          contracts_market: '$contracts_market',
        },
        periods: {
          $push: {
            _id: '$periods_id',
            name: '$periods_name',
            beginDate: '$periods_beginDate',
            endDate: '$periods_endDate',
            _type: '$periods_type',
            DateUpdate: '$periods_DateUpdate',
            DateCreate: '$periods_DateCreate',
            description: '$periods_description',
          }
        }
      }
    }
  ];
  return await Infohotel.aggregate(isAggregate).allowDiskUse(true);
}
async function exportdate_excel_excursions(body) {
  let isAggregate = [];
  if (body.Cruises) {
    isAggregate = [
      { '$match': { $or: [{ _id: convertObjectId(body._id) }, { _idCode: body._id }] } },
      {
        "$project": {
          '_id': '$_id',
          'Isid': '$Isid',
          'periodSEASONAL': '$periodSEASONAL',
          'ValueEditModel': '$ValueEditModel',
          'tiers': '$tiers',
          'PaxMax': '$PaxMax',
          'availab': '$availab',
          'duration': '$duration',
          'Curency': '$Curency',
          'ageny': '$ageny',
          'periods': '$periods',
          'Items_DirectMarkup': '$Items_DirectMarkup',
          'shortContent': '$shortContent',
          'Direct_Note': '$Direct_Note',
          'area': '$area',
          'codeVersion': '$codeVersion',
          'Items_Calculator': '$Items_Calculator',
          'begindate': '$begindate',
          'enddate': '$enddate',
          'productCode': '$masterCode',
          'userCreate': '$userCreate',
          'bookingName': '$bookingName',
          'market': '$market',
          'location': '$location',
          'content': '$content',
          'DMK': '$DMK',
          'MarkupAllLanding': '$MarkupAllLanding',
          'MarkupAllHotel': '$MarkupAllHotel',
          'IshaveTransfer': '$IshaveTransfer',
          'TranferNameFrom': '$TranferNameFrom',
          'TranferAreaFrom': '$TranferAreaFrom',
          'TranferTimeFrom': '$TranferTimeFrom',
          'TranferNameTo': '$TranferNameTo',
          'TranferAreaTo': '$TranferAreaTo',
          'TranferTimeTo': '$TranferTimeTo',
          'startTime': '$startTime',
          'category': '$category'
        }
      },
      {
        "$group":
        {
          '_id':
          {
            '_id': '$_id',
            'periodSEASONAL': '$periodSEASONAL',
            'ValueEditModel': '$ValueEditModel',
            'tiers': '$tiers',
            'PaxMax': '$PaxMax',
            'availab': '$availab',
            'duration': '$duration',
            'category': '$category',
            'Curency': '$Curency',
            'ageny': '$ageny',
            'periods': '$periods',
            'shortContent': '$shortContent',
            'Direct_Note': '$Direct_Note',
            'area': '$area',
            'codeVersion': '$codeVersion',
            'begindate': '$begindate',
            'enddate': '$enddate',
            'productCode': '$productCode',
            'userCreate': '$userCreate',
            'bookingName': '$bookingName',
            'market': '$market',
            'location': '$location',
            'content': '$content',
            'DMK': '$DMK',
            'MarkupAllLanding': '$MarkupAllLanding',
            'MarkupAllHotel': '$MarkupAllHotel',
            'IshaveTransfer': '$IshaveTransfer',
            'TranferNameFrom': '$TranferNameFrom',
            'TranferAreaFrom': '$TranferAreaFrom',
            'Items_DirectMarkup': '$Items_DirectMarkup',
            'TranferNameTo': '$TranferNameTo',
            'TranferAreaTo': '$TranferAreaTo',
            'startTime': '$startTime'
          }
        }
      },
    ]
  }
  else {
    isAggregate = [
      { '$match': { nation: body.nation, $or: [{ _id: convertObjectId(body._id) }, { _idCode: body._id }] } },
      {
        "$project": {
          '_id': '$_id',
          'Isid': '$Isid',
          'periodSEASONAL': '$periodSEASONAL',
          'ValueEditModel': '$ValueEditModel',
          'tiers': '$tiers',
          'PaxMax': '$PaxMax',
          'availab': '$availab',
          'duration': '$duration',
          'Curency': '$Curency',
          'ageny': '$ageny',
          'periods': '$periods',
          'Items_DirectMarkup': '$Items_DirectMarkup',
          'shortContent': '$shortContent',
          'Direct_Note': '$Direct_Note',
          'area': '$area',
          'codeVersion': '$codeVersion',
          'Items_Calculator': '$Items_Calculator',
          'begindate': '$begindate',
          'enddate': '$enddate',
          'productCode': '$masterCode',
          'userCreate': '$userCreate',
          'bookingName': '$bookingName',
          'market': '$market',
          'location': '$location',
          'content': '$content',
          'DMK': '$DMK',
          'MarkupAllLanding': '$MarkupAllLanding',
          'MarkupAllHotel': '$MarkupAllHotel',
          'IshaveTransfer': '$IshaveTransfer',
          'TranferNameFrom': '$TranferNameFrom',
          'TranferAreaFrom': '$TranferAreaFrom',
          'TranferTimeFrom': '$TranferTimeFrom',
          'TranferNameTo': '$TranferNameTo',
          'TranferAreaTo': '$TranferAreaTo',
          'TranferTimeTo': '$TranferTimeTo',
          'startTime': '$startTime',
          'category': '$category'
        }
      },
      { $unwind: '$Items_Calculator' },
      {
        "$group":
        {
          '_id':
          {
            '_id': '$_id',
            'periodSEASONAL': '$periodSEASONAL',
            'ValueEditModel': '$ValueEditModel',
            'tiers': '$tiers',
            'Isid': '$Isid',
            'PaxMax': '$PaxMax',
            'availab': '$availab',
            'duration': '$duration',
            'category': '$category',
            'Curency': '$Curency',
            'ageny': '$ageny',
            'periods': '$periods',
            'shortContent': '$shortContent',
            'Direct_Note': '$Direct_Note',
            'area': '$area',
            'codeVersion': '$codeVersion',
            'begindate': '$begindate',
            'enddate': '$enddate',
            'productCode': '$productCode',
            'userCreate': '$userCreate',
            'bookingName': '$bookingName',
            'market': '$market',
            'location': '$location',
            'content': '$content',
            'DMK': '$DMK',
            'MarkupAllLanding': '$MarkupAllLanding',
            'MarkupAllHotel': '$MarkupAllHotel',
            'IshaveTransfer': '$IshaveTransfer',
            'TranferNameFrom': '$TranferNameFrom',
            'TranferAreaFrom': '$TranferAreaFrom',
            'Items_DirectMarkup': '$Items_DirectMarkup',
            'TranferNameTo': '$TranferNameTo',
            'TranferAreaTo': '$TranferAreaTo',
            'startTime': '$startTime'
          },
          Items_Calculator: {
            $push: {
              name: '$Items_Calculator.name',
              IsItem: '$Items_Calculator.IsItem',
              min: '$Items_Calculator.min',
              max: '$Items_Calculator.max',
              Date: '$Items_Calculator.Date',
              types: '$Items_Calculator.types',
              PriceType: '$Items_Calculator.PriceType',
              price: '$Items_Calculator.price',
              namePeriod: '$Items_Calculator.namePeriod',
              listOrtherData: '$Items_Calculator.listOrtherData',
              tariffPeriodName: '$Items_Calculator.tariffPeriodName',
              category: '$Items_Calculator.category',
              pax0: '$Items_Calculator.pax0',
              pax1: '$Items_Calculator.pax1',
              pax2: '$Items_Calculator.pax2',
              pax3: '$Items_Calculator.pax3',
              pax4: '$Items_Calculator.pax4',
              pax5: '$Items_Calculator.pax5',
              pax6: '$Items_Calculator.pax6',
              pax7: '$Items_Calculator.pax7',
              pax8: '$Items_Calculator.pax8',
              numberday: '$Items_Calculator.numberday',
              supplierName: 'infoService.name',
              supplierBeginDate: '$Items_Calculator.infoService.beginDate',
              supplierEndDate: '$Items_Calculator.infoService.endDate',
              supplier: '$Items_Calculator.infoService.supplier',
              supplierTourCode: '$Items_Calculator.infoService.supplierTourCode',
              supplierServiceName: '$Items_Calculator.infoService.ServiceName',
              supplierLocation: '$Items_Calculator.infoService.location'
            }
          }
        }
      },
    ]
  }
  return await Tours.aggregate(isAggregate).allowDiskUse(true).then(async rs => {
    let ex_params = {};
    ex_params.nation = body.nation;
    let object = rs.find(x => x._id._id == body._id);
    let newDate = new Date(object._id.begindate);
    newDate.setDate(newDate.getDate() + 1);
    ex_params['$and'] = [{ "beginDate": { $lte: newDate } }, { "endDate": { $gte: newDate } }];
    const exchangerate = await ExchangeRate.findOne(ex_params);
    const Period_surcharge = await TariffPeriod.find({ nation: body.nation, tariffType: { $ne: 'client' } });
    return {
      item: rs,
      exchangerate: object._id.Curency !== "USD" ? (exchangerate ? exchangerate.unit : 1) : 1,
      Period_surcharge: Period_surcharge
    }
  });
}

async function detailTour(params) {
  return {
    item: Base64.encode(JSON.stringify(await Tours.findOne(params))),
    ExchangeRate: await ExchangeRate.find({ nation: params.nation })
  }
}

async function filter_Hotel(body) {
  let params = {
    isActive: true,
    nation: body.nation,

    "contracts.isActive": true,
    "contracts.periods.isActive": true,
  };
  let re = new RegExp(body.search.toLowerCase(), 'i');
  params['$or'] = [
    { 'name': { $regex: re } }
  ];
  if (body.rating)
    params.rating = body.rating;
  if (body.City)
    params.City = convertObjectId(body.City);
  if (body.httype && body.httype.length)
    params.httype = { $in: body.httype };
  if (body.Category) {
    if (body.Category == 'Hotel') {
      params.Category = { $in: ['Hotel', undefined, null, ''] }
    }
    else
      params.Category = body.Category
  }

  body.begindate = body.begindate ? new Date(body.begindate) : body.begindate;
  body.enddate = body.enddate ? new Date(body.enddate) : body.enddate;

  if (body.begindate && body.enddate) {
    params = {
      ...params,
      "contracts.beginDate": { $lte: body.begindate },
      "contracts.endDate": { $gte: body.enddate },
      $nor: [
        { "contracts.periods.begindate": { $gt: body.enddate } },
        { "contracts.periods.enddate": { $lt: body.begindate } },
      ]
    }
  }

  if (body.market) {
    params = {
      ...params,
      "contracts.market": { $in: [body.market, 'WW'] },
      "contracts.exceptMarket": { $ne: body.market },
    }
  }

  const isAggregate = [
    { '$match': params },
    {
      "$project": {
        '_id': 1,
        'name': 1,
        'brandName': 1,
        'location': 1,
        'City': 1,
        'address': 1,
        'tel': 1,
        'rating': 1,

        'contracts.name': 1,
        'contracts.beginDate': 1,
        'contracts.endDate': 1,
        'contracts.currency': 1,
        'contracts.market': 1,
        'contracts.exceptMarket': 1,
        'contracts.isActive': 1,
        'contracts._idContracts': 1,
      }
    },
    {
      $sort: { 'rating': -1, 'name': 1 }
    },
    {
      '$facet': {
        Metas: [{ $count: "total" }, { $addFields: { page: body._pageNumber } }],
        lsItems: [
          { $skip: (body._pageNumber > 0 ? ((body._pageNumber - 1) * body._pageSize) : 0) },
          { $limit: body._pageSize },
        ]
      }
    }
  ];

  return await Infohotel.aggregate(isAggregate).allowDiskUse(true).then(rs => {
    return {
      total: rs[0].Metas && rs[0].Metas.length > 0 ? rs[0].Metas[0].total : 0,
      items: rs[0].lsItems.map(x => {
        return {
          _id: {
            _id: x._id,
            name: x.name,
            brandName: x.brandName,
            location: x.location,
            City: x.City,
            address: x.address,
            tel: x.tel,
            rating: x.rating,
          },
          items: x.contracts.filter(c => c.isActive && !(new Date(x.beginDate) > body.enddate || new Date(x.enddate) < body.begindate))
        };
      })
    }
  });
}
async function filter_Hotel2(body) {
  let params = {
    isActive: true,
    nation: body.nation
  };
  let re = new RegExp(body.search.toLowerCase(), 'i');
  params['$or'] = [
    { 'name': { $regex: re } }
  ];
  if (body.rating)
    params.rating = body.rating;
  if (body.City)
    params.City = convertObjectId(body.City);
  if (body.httype && body.httype.length)
    params.httype = { $in: body.httype };
  if (body.Category) {
    if (body.Category == 'Hotel') {
      params.Category = { $in: ['Hotel', undefined, null, ''] }
    }
    else
      params.Category = body.Category
  }

  let params_contracts = {
    'contracts.isActive': true,
  };

  if (body.begindate && body.enddate) {
    params_contracts = {
      ...params_contracts,
      "contracts.beginDate": { $lte: new Date(body.begindate) },
      "contracts.endDate": { $gte: new Date(body.enddate) }
    }
    console.log("params_contracts: ", JSON.stringify(params_contracts, null, 4));
  }

  const isAggregate = [
    { '$match': params },
    {
      "$project": {
        '_id': '$_id',
        'name': '$name',
        'brandName': '$brandName',
        'location': '$location',
        'City': '$City',
        'address': '$address',
        'tel': '$tel',
        'rating': '$rating',
        'contracts': '$contracts'
      }
    },
    { $unwind: "$contracts" },
    { $match: params_contracts },
    {
      $project: {
        '_id': '$_id',
        'name': '$name',
        'brandName': '$brandName',
        'location': '$location',
        'City': '$City',
        'address': '$address',
        'tel': '$tel',
        'rating': '$rating',
        _name: '$contracts.name',
        _beginDate: '$contracts.beginDate',
        _endDate: '$contracts.endDate',
        _currency: '$contracts.currency',
        _market: '$contracts.market',
        _exceptmarket: '$contracts.exceptMarket',
        _isActive: '$contracts.isActive',
        _idContracts: '$contracts._idContracts',
      }
    },
    {
      $sort: { _beginDate: -1 },
    },
    {
      $group: {
        '_id': {
          '_id': '$_id',
          'name': '$name',
          'brandName': '$brandName',
          'location': '$location',
          'City': '$City',
          'address': '$address',
          'tel': '$tel',
          'rating': '$rating',
        },
        items: {
          $push: {
            name: '$_name',
            beginDate: '$_beginDate',
            endDate: '$_endDate',
            currency: '$_currency',
            market: '$_market',
            exceptMarket: '$_exceptmarket',
            isActive: '$_isActive',
            idContracts: '$_idContracts',
          }
        }
      }
    },
    {
      $sort: { '_id.rating': -1, '_id.name': 1 }
    },
    {
      '$facet': {
        Metas: [{ $count: "total" }, { $addFields: { page: body._pageNumber } }],
        lsItems: [
          { $skip: (body._pageNumber > 0 ? ((body._pageNumber - 1) * body._pageSize) : 0) },
          { $limit: body._pageSize },
        ]
      }
    }
  ];
  return await Infohotel.aggregate(isAggregate).allowDiskUse(true).then(rs => {
    return {
      total: rs[0].Metas && rs[0].Metas.length > 0 ? rs[0].Metas[0].total : 0,
      items: rs[0].lsItems
    }
  });
}

async function get_value_byCodeMd5(params) {
  return await Procodes.findOne(params)
}

async function list_options(params) {
  let Category = await TourCategory.find(params);
  let duration = await Tourduration.find(params);  
  return {
    Category: Category,
    duration: duration,    
  }
}
async function list_City(params) {
  return await City.find(params);
}
async function get_periodeClient(params) {
  params.tariffType = "client";
  const temp = await TariffPeriod.findOne(params);
  if (temp)
    return temp.lsPeriod
  else return null;
}
async function list_exchangeRate(params) {
  return await ExchangeRate.find(params);
}
async function Client_Get(body) {
  // console.log(JSON.stringify(body, null, 4));

  let params = {},
    _pageSize = body._pageSize,
    markup = body._markup,
    _pageNumber = body._pageNumber,
    _filter = body._filter;

  params.$and = [];

  params.LinkExcursions = { $ne: true };
  params.isActive = true;
  // params.ageny = { $in: _filter.isJourney };
  params.nation = _filter.nation;

  params.$and = [
    ...params.$and,
    {
      $or: [
        { ageny: { $in: _filter.isJourney } },
        { ageny: { $size: 0 } },
      ],
    }
  ];

  if (_filter && _filter.location && _filter.location.length > 0)
    params.location = { $in: _filter.location };
  if (_filter && _filter.area && _filter.area.length > 0)
    params.area = { $in: _filter.area };
  if (_filter && _filter.category && _filter.category.length > 0)
    params.category = { $in: _filter.category };
  if (_filter && _filter.duration && _filter.duration.length > 0)
    params.duration = { $in: _filter.duration };

  if (_filter && _filter.proposal === true)
    params.ValueEditModel = { $in: ['PROPOSAL'] };
  else {
    params.ValueEditModel = { $in: ['EXCURSIONS', 'PACKAGE'] };
  }

  if (_filter && _filter.enddate && _filter.begindate && !_filter.proposal) {
    if (_filter.OnRequest) {
      let values = [{ "begindate": { $lte: new Date(_filter.begindate) } }, { "enddate": { $gte: new Date(_filter.enddate) } }];
      // let tempduration = _filter.duration ? (_filter.duration.find(item => item == 'Packages') ? true : false) : false;
      // if (tempduration) values.push({ category: { $ne: 'Cruises' } })

      params.$and = [
        ...params.$and,
        ...values,
      ];

    }
    else {
      let _isstartDate = new Date(_filter.begindate);
      let _isendDate = new Date(_filter.enddate);
      params.$and = [
        ...params.$and,
        {
          $or: [
            { $and: [{ "begindate": { $gte: _isstartDate } }, { "begindate": { $lte: _isendDate } }] },
            { $and: [{ "enddate": { $gte: _isstartDate } }, { "enddate": { $lte: _isendDate } }] }
          ]
        }
      ];
    }
  }

  if (_filter.duration && _filter.duration.includes('Packages')) {
    params.$and = [
      ...params.$and,
      { category: { $ne: 'Cruises' } }
    ];
  }
  else if (_filter.category && _filter.category.includes('Cruises')) {
    params.$and = [
      ...params.$and,
      { Items_DirectMarkup: { $not: { $size: 0 } } },
    ];
  }

  if (_filter && _filter.isnew) {
    var d = new Date();
    d.setMonth(d.getMonth() - 1);
    params.DateCreate = { $gte: d };
  }
  if (_filter && _filter.isupdate) {
    var d = new Date();
    d.setMonth(d.getMonth() - 1);
    params.DateUpdate = { $gte: d };
  }
  params.market = { $in: [markup.market, 'WW'] };
  params.exceptMarket = { $ne: markup.market };
  params.exceptAgeny = { $ne: markup.md5code };

  if (_filter.search) {
    var re = new RegExp(_filter.search.toLowerCase(), 'i');
    params.$and = [
      ...params.$and,
      {
        $or: [
          { 'productCode': { $regex: re } },
          { 'bookingName': { $regex: re } },
          { 'masterCode': { $regex: re } },
          { 'location': { $regex: re } },
          { 'category': { $regex: re } },
          { 'duration': { $regex: re } },
          { 'content': { $regex: re } }
        ]
      }
    ];
  }

  // console.log("Client_Get: ", JSON.stringify(params, null, 4));

  const exchangeRate = await ExchangeRate.find({ nation: _filter.nation });
  return await Tours.aggregate([
    { '$match': params },
    {
      "$addFields": {
        "forSort": {
          $cond: { if: { $in: [markup.md5code, "$ageny"] }, then: 1, else: 0 }
        }
      }
    },
    { $sort: { forSort: -1 } },
    {
      $group: {
        _id: "$productCode",
        "doc": { "$first": "$$ROOT" }
      }
    },
    {
      '$facet': {
        Metas: [{ $count: "total" }, { $addFields: { page: _pageNumber } }],
        lsItems: [
          { $skip: _pageNumber > 0 ? (_pageNumber - 1) * _pageSize : 0 },
          { $limit: _pageSize }
        ]
      }
    }
  ]).allowDiskUse(true).then(rs => {
    return {
      total: rs[0].Metas && rs[0].Metas.length > 0 ? rs[0].Metas[0].total : 0,
      items: Base64.encode(JSON.stringify(rs[0].lsItems.map(x => x.doc))),
      ExchangeRate: exchangeRate
    }
  });
}
async function Client_Get_list(body) {
  // console.log(JSON.stringify(body, null, 4));

  let params = {},
    _pageSize = body._pageSize,
    markup = body._markup,
    _pageNumber = body._pageNumber,
    _filter = body._filter;

  params.$and = [];

  params.LinkExcursions = { $ne: true };
  params.isActive = true;
  // params.ageny = { $in: _filter.isJourney };
  params.nation = _filter.nation;

  params.$and = [
    ...params.$and,
    {
      $or: [
        { ageny: { $in: _filter.isJourney } },
        { ageny: { $size: 0 } },
      ],
      $or: [
        { Items_DirectMarkup: { $not: { $size: 0 } } },
        { Items_Calculator: { $not: { $size: 0 } } },
      ],
    }
  ];

  if (_filter && _filter.location && _filter.location.length > 0)
    params.location = { $in: _filter.location };
  if (_filter && _filter.area && _filter.area.length > 0)
    params.area = { $in: _filter.area };
  if (_filter && _filter.category && _filter.category.length > 0)
    params.category = { $in: _filter.category };
  if (_filter && _filter.duration && _filter.duration.length > 0)
    params.duration = { $in: _filter.duration };

  if (_filter && _filter.proposal === true)
    params.ValueEditModel = { $in: ['PROPOSAL'] };
  else {
    params.ValueEditModel = { $in: ['EXCURSIONS', 'PACKAGE'] };
  }

  if (_filter && _filter.enddate && _filter.begindate && !_filter.proposal) {
    if (_filter.OnRequest) {
      let values = [{ "begindate": { $lte: new Date(_filter.begindate) } }, { "enddate": { $gte: new Date(_filter.enddate) } }];
      // let tempduration = _filter.duration ? (_filter.duration.find(item => item == 'Packages') ? true : false) : false;
      // if (tempduration) values.push({ category: { $ne: 'Cruises' } });

      params.$and = [
        ...params.$and,
        ...values,
      ];
    }
    else {
      let _isstartDate = new Date(_filter.begindate);
      let _isendDate = new Date(_filter.enddate);
      params.$and = [
        ...params.$and,
        {
          $or: [
            { $and: [{ "begindate": { $gte: _isstartDate } }, { "begindate": { $lte: _isendDate } }] },
            { $and: [{ "enddate": { $gte: _isstartDate } }, { "enddate": { $lte: _isendDate } }] }
          ]
        }
      ];
    }
  }

  if (_filter.duration && _filter.duration.includes('Packages')) {
    params.$and = [
      ...params.$and,
      { category: { $ne: 'Cruises' } }
    ];
  }
  else if (_filter.category && _filter.category.includes('Cruises')) {
    params.$and = [
      ...params.$and,
      { Items_DirectMarkup: { $not: { $size: 0 } } },
    ];
  }

  if (_filter && _filter.isnew) {
    var d = new Date();
    d.setMonth(d.getMonth() - 1);
    params.DateCreate = { $gte: d };
  }

  if (_filter && _filter.isupdate) {
    var d = new Date();
    d.setMonth(d.getMonth() - 1);
    params.DateUpdate = { $gte: d };
  }

  params.market = { $in: [markup.market, 'WW'] };
  params.exceptMarket = { $ne: markup.market };
  params.exceptAgeny = { $ne: markup.md5code };

  if (_filter.search) {
    var re = new RegExp(_filter.search, 'i');
    params.$and = [
      ...params.$and,
      {
        $or: [
          { 'productCode': { $regex: re } },
          { 'bookingName': { $regex: re } },
          { 'masterCode': { $regex: re } },
          { 'location': { $regex: re } },
          { 'category': { $regex: re } },
          { 'duration': { $regex: re } },
          { 'content': { $regex: re } }
        ]
      }
    ];
  }

  // console.log("Client_Get_list: ", JSON.stringify(params, null, 4));

  const exchangeRate = await ExchangeRate.find({ nation: _filter.nation });
  return await Tours.aggregate([
    { '$match': params },
    {
      $project: {
        '_id': '$_id',
        'productCode': '$productCode',
        'bookingName': '$bookingName',
        'noteTiers': '$noteTiers',
        'DateUpdate': '$DateUpdate',

        'DateCreate': '$DateCreate',
        'duration': '$duration',
        'category': '$category',
        'location': '$location',
        'begindate': '$begindate',

        'enddate': '$enddate',
        'bookingName': '$bookingName',

        'ageny': '$ageny',
      }
    },
    {
      "$addFields": {
        "forSort": {
          $cond: { if: { $in: [markup.md5code, "$ageny"] }, then: 1, else: 0 }
        }
      }
    },
    { $sort: { forSort: -1 } },
    {
      $group: {
        _id: "$productCode",
        "doc": { "$first": "$$ROOT" }
      }
    },
    {
      '$facet': {
        Metas: [{ $count: "total" }, { $addFields: { page: _pageNumber } }],
        lsItems: [
          { $skip: (_pageNumber > 0 ? ((_pageNumber - 1) * _pageSize) : 0) },
          { $limit: _pageSize }
        ]
      }
    }
  ]).allowDiskUse(true).then(rs => {
    return {
      total: rs[0].Metas && rs[0].Metas.length > 0 ? rs[0].Metas[0].total : 0,
      items: Base64.encode(JSON.stringify(rs[0].lsItems.map(x => x.doc))),
      // items: rs[0].lsItems.map(x => x.doc),
      ExchangeRate: exchangeRate
    }
  });
}

async function getonehotel(param) {
  param = await Joi.validate(param, onehotelSchema, { abortEarly: false });
  const item = await Infohotel.findOne(param);
  const exchangeRate = await ExchangeRate.find({ nation: param.nation });
  return { item: Base64.encode(JSON.stringify(item)), exchangeRate: Base64.encode(JSON.stringify(exchangeRate)) };
}

async function find_language(param) {
  return await Language.find(param);
}
async function list_market(params) {
  return await Market.aggregate([
    { $match: params },
    {
      "$project": {
        childs: '$childs',
        code: '$code'
      }
    }
  ]);
}

async function gentsByID(filter) {
  const value = await Procodes.findOne(filter);
  if (value) {
    return { _id: value._id, period: value.period }
  }
  else return false
}
async function loginbyPassCode(filter) {
  let params = {};
  params.code = filter.code.toUpperCase();
  let aggregates = [
    {
      $match: {
        $or: [
          { code: params.code },
          { 'contacts.code': params.code }
        ]
      }
    },
    {
      "$lookup": {
        "from": "procodes",
        "let": { "isId": "$_id" },
        "pipeline": [
          { "$match": { "$expr": { "$eq": ["$gents_onlines", "$$isId"] }, nation: filter.nation } }
        ],
        "as": "items"
      }
    },
    { $unwind: '$items' },
    {
      "$project": {
        '_id': '$_id',
        'agency_id': '$items._id',
        'md5code': '$items.md5code',
        'nation': '$items.nation',
        'period': '$items.period',
        'cname': '$items.cname',
        'cemail': '$items.cemail',
        'market': '$items.cmarket',
        'online': '$items.online',
        'language': '$items.language',
        'currency': '$items.ccurrency',
        'isoReps': '$items.isoReps',
        'private_code': '$items.private_code',
        'name': '$name',
        'ref': '$ref',
        'code': '$code',
        'contacts': '$contacts'
      }
    }
  ]
  const temp = await Gents_onlines.aggregate(aggregates).allowDiskUse(true);
  if (temp && temp.length > 0) {
    if (temp[0] && temp[0].md5code) {
      return temp[0];
    }
    else return false;
  }
  else return false;
}
async function _logAgentLogin(param) {
  return await new logAgentLogin(param).save();
}
async function logloginbackend(param) {
  return await new logLoginbackend(param).save();
}

// param = { _id: "", contacts: [] }
async function updateAgencyContracts(param) {
  return await Gents_onlines.findOneAndUpdate(
    { _id: convertObjectId(param._id) },
    { contacts: param.contacts },
    { upsert: true, new: true }
  );
}

// Tours
// -----------------------------------------------------------------------
async function get_DataServiceForEdit(body) {
  var name = {};
  body.name;
  // Phan trang
  var _pageNumber = body._pageNumber,
    _pageSize = body._pageSize,
    _filter = body._filter;
  var params = [];

  params.push({ 'nation': { $in: [_filter.nation] } });
  if (_filter && _filter.Geotree && _filter.Geotree !== "")
    params.push({ 'location': { $in: [_filter.Geotree] } });
  if (_filter && _filter.Supplier && _filter.Supplier !== "")
    params.push({ 'supplier': { $in: [_filter.Supplier] } });
  if (_filter && _filter.ServiceType && _filter.ServiceType !== "")
    params.push({ 'types': { $in: [_filter.ServiceType] } });
  if (_filter && _filter.name && _filter.name !== "") {
    var re = new RegExp(_filter.name.toLowerCase(), 'i');
    params.push({ 'name': { $regex: re } });
  }
  if (_filter && _filter.Date) {
    params.push({ 'beginDate': { $lt: new Date(_filter.Date) } });
    params.push({ 'endDate': { $gt: new Date(_filter.Date) } });
  }


  // Diều kiện Lọc data.
  var lookup = {};
  var match = {};

  if (body.name === 'Group / Person') {
    params.push({ "group.price": { $gt: 0 } });
    match = {
      $match: { $and: params }
    };
  }
  else if (body.name === 'Accumulated') {
    params.push({ "accumulated.price": { $gt: 0 } });
    match = {
      $match: { $and: params }
    };
  }
  else if (body.name === 'Price Band') {
    params.push({ "priceband.list.0": { $exists: true } });
    match = {
      $match: { $and: params }
    };
  }
  else {
    match = {
      $match: { $and: params }
    };
  }
  var page = {
    $facet: {
      list: [
        { $skip: _pageSize * (_pageNumber - 1) },
        { $limit: _pageSize },
      ],
      pageInfo: [
        { $group: { _id: null, count: { $sum: 1 } } },
      ]
    }
  };
  return await Service.aggregate([match, page]).allowDiskUse(true);
}

async function get_suplanguage(body) {
  let params = {};
  params.nation = body.nation;
  return await Suplanguage.find(params);
}
async function create_GuideSchedulers(param) {
  return await new GuideScheduler(param).save();
}
async function update_GuideScheduler(body) {
  return await GuideScheduler.updateOne(
    { id: body.id },
    { $set: { Code: body.Code } },
    { upsert: true, new: true });
}
async function destroy_GuideScheduler(param) {
  return await GuideScheduler.remove({ id: param.id });
}
async function get_GuideSchedulers(body) {
  let _id = body._id,
    params = {};

  if (_id && _id !== '') {
    params._id = convertObjectId(_id);
  }
  if (body.nation && body.nation !== '') {
    params.nation = body.nation;
  }
  params.servicetypes = { $in: ["Guide"] };
  return await Supplier.aggregate([
    { $match: params },
    { $lookup: { from: 'guideschedulers', localField: 'Isid', foreignField: 'guide', as: 'data' } },
    {
      $project: {
        id: '$_id',
        value: '$Isid',
        label: '$name',
        type: '$numberOfWorkingYear',
        bookingName: '$bookingName',
        languge: '$language',
        phone: '$phone',
        data: '$data'
      }
    }
  ]).allowDiskUse(true);
}

async function create_logClient(param) {
  console.log('------------- CLIENT LOG ------------------')
  console.log('nation: ', param.nation)
  console.log('Page: ', param.page)
  console.log('Consultant: ', param.Consultant)
  console.log('Agent: ', param.Agent)
  console.log('country: ', param.country)
  console.log('region: ', param.region)
  console.log('ip: ', param.ip)
  console.log('Time Local: ', param.TimeString)
  console.log('Time Server: ', new Date())
  console.log('-------------------------------------------')
  return await new Logclients(param).save();
}
async function get_logClient(body) {
  const page = body.page;
  const isAggregate = [
    { '$match': body.filter },
    {
      '$facet': {
        Metas: [{ $count: "total" }, { $addFields: { page: page._pageNumber } }],
        lsItems: [
          { $skip: (page._pageNumber > 0 ? ((page._pageNumber - 1) * page._pageSize) : 0) },
          { $limit: page._pageSize }
        ]
      }
    }
  ];
  return await Logclients.aggregate(isAggregate).allowDiskUse(true);
}
async function get_maps_by(param) {
  let serviceType = await ServiceType.find({ nation: param.nation });
  return {
    ServiceType: serviceType,
    Maps: await Maps.find({ nation: param.nation })
  };
}