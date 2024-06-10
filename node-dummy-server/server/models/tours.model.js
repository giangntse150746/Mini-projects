'use strict';
const mongoose = require('mongoose');
const isperiods = new mongoose.Schema(
  {
    date: Date,
    begindate: Date,
    enddate: Date,
    name: String,
    no: Number,
  });
const context = new mongoose.Schema(
  {
    id: String,
    language: String,
    language_en: String,
    text: String,
    text_en: String,
    wikidata: String,
  });
const place = new mongoose.Schema(
  {
    place_name: String,
    place_id: String,
    place_type: Array,
    context: [context]
  });
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

const ifo_rules = new mongoose.Schema(
  {
    _isId: String,
    _rulesID: String,
    type_Rule: Number,
    numberDay: Number,
    travelingdate: Boolean,
    bookingdate: Boolean,
    benefits: String,
    begin: Date,
    type: Number,
    end: Date,
    accumulative: Boolean,
    ls_option_by_rooms: [
      {
        _idRoom: String,
        name: String,
        exbedA: Boolean,
        exbedC: Boolean,
        mealPlan: Boolean
      }
    ],
    periods: [{
      beginDate: Date,
      endDate: Date
    }]
  });
const rules = new mongoose.Schema(
  {
    option_by_rooms: {
      _idRoom: String,
      name: String,
      exbedA: Boolean,
      exbedC: Boolean,
      mealPlan: Boolean
    },
    rules: ifo_rules
  }
);
const periods = new mongoose.Schema(
  {
    _idperiod: String,
    begindate: Date,
    enddate: Date,
    namePeriod: String,
    paxBreak: [paxBreak],

    SGLSuppl: Number,
    SGLSupplMk: Number
  }
);

const tiers = new mongoose.Schema(
  {
    pax: Number,
    markUp: Number,
    number: Number,
    price: Number, // sẻ "Xoá" vì chuyển đổi cấu trúc
    priceTLs: Number, // sẻ "Xoá" vì chuyển đổi cấu trúc
    priceby: Number, // sẻ "Xoá" vì chuyển đổi cấu trúc
    pricebyTLs: Number, // sẻ "Xoá" vì chuyển đổi cấu trúc
    profit: Number, // sẻ "Xoá" vì chuyển đổi cấu trúc
    margin: Number // sẻ "Xoá" vì chuyển đổi cấu trúc
  }
);
const maps = new mongoose.Schema(
  {
    city_info: String,
    city_long: Number,
    city_lat: Number,
    city_name: String,
    city_offset: Array,
    city_anchor: String,
    city_source: {
      cjdsigxek0yxx2ss2d29xfatn: Boolean,
      cjdst1crt07gr2spe5w4d3jkv: Boolean,
      cjdsijmo902ib2smo8yyt05a9: Boolean
    },
    city_textsize: Number,
    city_flight_path: String,
    city_alias: String,
    archived: Boolean
  }
);
const listOrtherData = new mongoose.Schema(
  {
    name: String,
    supplierName: String,
    price: Number,
    inputprice: Number, // for listOrtherData_input only
    priceDMK: Number,
    min: Number,
    max: Number,

    markup: Number,
    mkChange: Boolean,
    priceMarkup: Number,
    priceSellUp: Number,

    // Tour Leader
    priceTLs: Number,
    markupTLs: Number,
    mkChangeTLs: Boolean,
    priceMarkupTLs: Number,

    Idsupplier: String,
    IdService: String,
    serviceName: String,
  }
);
const Items_DirectMarkup = new mongoose.Schema(
  {
    serviceType: String,
    flightFromCity: String,
    flightToCity: String,

    byPriceChild: Number,
    priceChild: Number, // em lay gia nay view client luon vi no mk roi.
    childAgeFrom: Number,
    childAgeTo: Number,

    _idperiod: String,
    namePeriod: String,
    begindate: Date,
    enddate: Date,

    name: String,
    chargepolicy: String,
    occpolicy: Number,


    byPrice: Number,
    price: Number, // em lay gia nay view client cai nay thi hien tai co roi.. ke no..
    directMarkup: Number,

    class: String,
    Airlines: String,
    note: String,
    IsItem: String,
    Date: String, // groupBuy.
    types_name: String, // 1: normal 2: promotion 3: refurbishment

    // Service
    _idService: String,
    _idPeriodsService: String,
    infoService: {
      id: String,
      name: String,
      CodeService: String,
      beginDate: Date,
      endDate: Date,
      supplier: String,
      supplierTourCode: String,
      serviceSupplierId: String,
      ServiceName: String,
      location: String,
      address: String,
      note: String,
      supplierID: String,
      serviceID: String,
      optionID: String,
    },
  }
);

const Items_ChildPolicy = new mongoose.Schema(
  {
    from: Number,
    to: Number,
    IsItem: String,
    option: String,
    value: Number,
    note: String,
    cellRol: String,
    totalPriceGround: Number,
    paxBreak: [paxBreak],
  }
);
const receivedpayment = new mongoose.Schema({
  DateCreate: Date,
  DateUpdate: Date,
  DatePaid: Date,
  InvoicedRef: String,
  userCreate: String,
  userUpdate: String,
  Paid: Number,
  Balance: Number,
  note: String,
  paymentMethod: String,
});
const lsPassenger = new mongoose.Schema(
  {
    code: String,
    id: String,
    refId: String, // ref to passenger model
    isTourleader: Boolean,
    QuotePriceIsItem: String,

    firstName: String,
    middleName: String,
    lastName: String,
    birthday: Date,
    sex: String,

    age: String,
    ageChild: Number,
    passport: String,
    validity: Date,
    nationality: String,

    note: String,
    assignedBy: String,
    options: Array,  // enum: 'With Parents', 'Extra Bed (C)', 'Extra Bed (A)', 'Breakfast A', 'Breakfast C'

    ArrivalDate: Date,
    ArrivalFlight: String,
    ArrivalLocation: String,

    DepartureDate: Date,
    DepartureFlight: String,
    DepartureLocation: String,
    
    TravelWith: Array,
    ReservationCode: String,
    CabinRooms: String
  }
);

const tourLeader = new mongoose.Schema(
  {
    paxBreak: [paxBreak],
    SGLSuppl: Number,
    SGLSupplMk: Number
  }
);

const lsAssignedService_priceOrigin = new mongoose.Schema(
  {
    Curency: String,

    actualCost_unit: Number,
    unit: Number,
    nights: Number,
    exbed_unit: Number,
    breakfast_unit: Number,

    // child price for landing
    childPrices: [{
      IsItem: String,
      agefrom: Number,
      ageto: Number,

      actualCost_unit: Number,
      unit: Number,
    }],

    // sgl
    actualCost_unit_sgl: Number,
    unit_sgl: Number,
    nights_sgl: Number,
    exbed_unit_sgl: Number,
    breakfast_unit_sgl: Number,

    // late checkout
    actualCost_unit_lc: Number,
    unit_lc: Number,

    // other service for hotel
    otherServices: [{
      IsItem: String,
      name: String,

      actualCost_unit: Number,
      unit: Number,
    }],
  }
);

const lsAssignedService = new mongoose.Schema(
  {
    id: String,
    idCountry: String,
    _idService: String,
    servicetypes: String,
    language: String, // for filter
    languageGuide: Array,
    date: Date,

    begindate: Date, // Guide
    enddate: Date, // Guide
    phone: String,
    note: String,
    Curency: String,

    serviceName: String,
    serviceCode: String,
    SupplierId: String,
    SupplierObjectId: String,

    location: String,
    refu_No: String,

    // price for all: landing, acc
    actualCost: Number,
    actualCost_unit: Number,
    unit: Number,
    nights: Number, // for acc only
    totalCost_tws: Number,
    totalCost_unit_tws: Number,

    // child price for landing
    childPrices: [{
      IsItem: String,
      agefrom: Number,
      ageto: Number,

      actualCost: Number,
      actualCost_unit: Number,
      unit: Number,
      totalCost_tws: Number,
      totalCost_unit_tws: Number,
    }],

    // hotel
    hotelName: String,
    hotelRoomCategory: String,

    exbed: Number,
    exbed_unit: Number,
    breakfast: Number,
    breakfast_unit: Number,

    actualCost_sgl: Number,
    actualCost_unit_sgl: Number,
    unit_sgl: Number,
    nights_sgl: Number,

    exbed_sgl: Number,
    exbed_unit_sgl: Number,
    breakfast_sgl: Number,
    breakfast_unit_sgl: Number,
    totalCost_sgl: Number,
    totalCost_unit_sgl: Number,

    // late checkout
    actualCost_lc: Number,
    actualCost_unit_lc: Number,
    unit_lc: Number,

    totalCost_lc: Number,
    totalCost_unit_lc: Number,

    // other service for hotel
    otherServices: [{
      IsItem: String,
      name: String,

      actualCost: Number,
      actualCost_unit: Number,
      unit: Number,
      totalCost_tws: Number,
      totalCost_unit_tws: Number,
    }],

    // for all
    totalCost: Number,
    totalCost_unit: Number,

    // origin price before supplier reply
    operationPrice: lsAssignedService_priceOrigin,

    //
    status: String, // 'New', 'Pending', 'Confirmed', 'Revised', 'Cancelled'
    notApproved: Boolean,
    approvedBy: String,

    assignedBy: String,
    VehicleType: String,
    replyNote: String,
    reference: String, // supplier reply ref
    DriverName: String,
    DriverPhone: String,

    requestNumber: Number,
    requirements: String,

    TotalDepositRequest: Number,
    receivedpayment: [receivedpayment],
    DepositRequest: [{
      Value: Number,
      Paid: Number,
      Currency: String,
      dueDate: Date,
      userCreate: String
    }],

    // action log
    hasEmailLog: Boolean,
    logs: [{
      date: Date,
      text: String,
      by: String
    }],

    // for cancelation
    isCancel: Boolean,
    cancel_isId: String,
    priceOrigin: lsAssignedService_priceOrigin,
  }
);

// copy from infohotel.model.js
const rooms = new mongoose.Schema(
  {
    _idRoom: String,
    name: String,
    options: [{
      occA: Number,
      occC: Number,
      childs: [{
        num: Number,
        from: Number,
        to: Number
      }],
      extraBed: Boolean,
      noExtraBed: Number
    }],
    images: [{
      filename: String,
      path: String,
      isDefault: Boolean
    }],
    roomOccupancyTemplates: {
      name: String
    }
  });

// copy from infohotel.model.js
const ChlidPolicy = new mongoose.Schema(
  {
    _isId: String,
    name: String,
    no: Number,
    age_from: Number,
    age_to: Number,
    _isType: String,
    _iswith: String,
    value: Number,
    ls_Room: [rooms]
  });

// copy from infohotel.model.js
const cancelation_policy = new mongoose.Schema(
  {
    _isId: String,
    name: String,
    num_Day: Number,
    nocharge: Boolean,
    value: Number,
    _type: String,
    options: String,
    nights: Number,
    periods_travel: [{
      beginDate: Date,
      endDate: Date,
    }],
    periods_booking: [{
      beginDate: Date,
      endDate: Date,
    }],

    // for general
    currency: String
  });

// copy from infohotel.model.js
const exbed = new mongoose.Schema({
  from: Number,
  to: Number,
  price: Number,
  price_usd: Number,
  hasBreakfast: Boolean
});

// copy from infohotel.model.js
const options = new mongoose.Schema(
  {
    _idRoom: String,
    name: String,
    _idOption: String,
    isActive: { type: Boolean, default: false },
    chargeType: String,
    mealPlan: String,

    mealPlanAdult: Number,
    fit: Number,
    fit_usd: Number,
    git: Number,
    git_usd: Number,
    exbedA: exbed,
    exbedC: exbed,
    MealPlanChild: exbed, // remove in future
    lsMealPlanChild: [exbed],
    // for Commission
    applyCommission: Boolean,
    CommissionValue: Number,
    CommissionBy: String,
    editCommission: Boolean,

    mealPlanAdultCommission: Number,
    fitCommission: Number,
    fit_usdCommission: Number,
    gitCommission: Number,
    git_usdCommission: Number,
    exbedACommission: exbed,
    exbedCCommission: exbed,
    MealPlanChildCommission: exbed, // remove in future
    lsMealPlanChildCommission: [exbed],
    // end Commission

    groupsize: Number,
    occ: Number,
    allweek: Boolean,
    mon: Boolean,
    tue: Boolean,
    wed: Boolean,
    thu: Boolean,
    fri: Boolean,
    sat: Boolean,
    sun: Boolean,
    hasBreakfastFit: Boolean,
    userCreate: String,
    userUpdate: String,
    DateCreate: Date,
    DateUpdate: Date
  });

const TourOperator = new mongoose.Schema(
  {
    ageny: String,
    voucherNumber: String,
    nameAgeny: String,
    BookedBy: String,
    SpeialRequirements: String,
    PickUpPoint: String,
    PassengerName: String,
    DropOffPlace: String,
    PickUpTime: Date,
    Buypirce: Number,
    Sellpirce: Number,
    TotalSellPrice: Number,
    TotalBuyPrice: Number,
    Quantity: Number,
    Adults: Number,
    Children: Number,
    Tourleader: Number,
    note: String,
    fixPrice: Boolean,
    userCreate: String,
    userUpdate: String,
    DateCreate: Date,
    DateUpdate: Date,
    lsPassenger: [lsPassenger]
  });

const BestRate = new mongoose.Schema({
  name: String,
  price: Number,
  IsItem: String, // === selectbestRate
  action: String,
  total: Number,
  note: String,
  Promotion_FixedRate: Boolean // ??
});

const Items_Calculator = new mongoose.Schema(
  {
    nation: String,
    itemForTLs: Boolean, // item just Tour leader.
    moduleServiceJustForTLs: Boolean, // service for tour leader
    QuotePriceIsItem: String, // for Quote IsItem
    isLink: Boolean,
    isOption: Boolean,
    deactive: Boolean, // true is deactive, false is active

    InputCurrency: String, // for input price

    DMK: Boolean,
    typeForValue: String, // 'Deduct', 'Supplement', 'Multiply'
    byForValue: String, // 'By %', 'By Amount', 'Unit'
    isValueChange: Number,
    typeBased: String, // 'group' (deault), 'pax'

    listOrtherData: [listOrtherData],
    listOrtherData_input: [listOrtherData],

    limitpax: Boolean,
    isLinkMoreHotelWhereId: Boolean,
    namePeriod: String,
    typeExcursions: String,

    //
    titleGroup: String,
    excursionContent: String,
    excursionContents: [{ // for Excursion Multi-Language
      languageId: String,
      titleGroup: String,
      excursionContent: String,
      shortContent: String,
    }],

    category: {
      type: String,
      default: ""
    },
    charge: String,
    note: String,
    serviceNoteDone: {
      type: Boolean,
      default: false // true mean open, false is closed
    },
    closeNoteBy: String,
    lsServiceNote: [{
      createdDate: Date,
      unread: Boolean,
      createdBy: String,
      content: String
    }],
    lsServiceCutoff: [{
      cutoffId: String,
      createdDate: Date,
      createdBy: String,
      numOfDay: Number,
      note: String,

      cutoffDate: Date,
      isDone: Boolean,
      checkDoneBy: String
    }],

    isEdit: Boolean,
    location: String,
    linkidHotel: String,
    linknameHotel: String,
    linkcruise: String,
    linkAirfare: String,
    IsItem: String, // tour id: excursion, cruise, airfare
    ItemId: String, // item in DMK: cruise, airfare

    markup: Number,
    mkChange: Boolean,
    selectPriceDMK: Boolean,
    applyPriceSell: Boolean,
    Code: String,

    // value for tourLeader
    tourLeader: Number,
    tourLeaderPaxRange: Number,
    markupTLs: Number, // MK Tour Leader
    mkChangeTLs: Boolean, // MK Tour Leader
    priceTLs: Number,
    priceMarkupTLs: Number,
    // -----------------------
    specificPax: Number,
    specificPaxChild: Number,

    ebA: {
      type: Number,
      default: 0
    },
    ebC: {
      type: Number,
      default: 0
    },
    mealPlan: Number,
    mealPlanInfo: String,
    checkEBA: Boolean,
    checkEBC: Boolean,
    checkMP: Boolean,

    _idRoom: String,
    _idContracts: String,
    _idOption: String,
    _idlineItem: String,
    idCountry: String,
    // net_pricelink: Number, // remove
    currency_contract_link: String,

    lsPrice: [BestRate],
    bestRate: BestRate,
    selectbestRate: String,
    rules: [rules],
    linkrules: [{
      name: String,
      _idGroup: String,
      rules: [ifo_rules]
    }],
    lsSelectrules: [{
      no: Number,
      minusOrAdd: String,
      name: String,
      value: Number,
      ebA: Boolean,
      ebC: Boolean,
      rules: String,
      note: String,
    }],

    inPeriod: Boolean,
    MultiplePeriod: Boolean,
    tariffPeriodName: String,
    tariffPeriodID: String,
    tariffPeriod: {
      nation: String,
      groupPeriod: String,
      tariffType: String,
      no: Number,
      lsPeriod: [isperiods]
    },
    tariffPeriodsCustom: [isperiods],

    FromDate: Date,
    Fromtime: Date,
    ToDate: Date,
    Totime: Date,

    // GUIDE - MEAL - RESTAURANT
    driverName: String,
    driverPhone: String,
    restaurantName: String,
    restaurantMenu: String, //  Buffet / Set Menu / A La Carte
    noteRequirements: String,

    // Tranfer
    TranferflightNo: String,
    TranferFrom: String,
    TranferFromArea: String,
    TranferFrom_note: String,

    TranferTo: String,
    TranferToArea: String,
    TranferTo_note: String,
    TranferNote: String,
    PickupPoint: String,
    DropOffPoint: String,

    // TranferDuration: Date,
    DurationHours: Number,
    DurationMinutes: Number,
    vehicleType: String,

    // Flight && Train
    Flight: String,
    _Titel: String,
    From: String,
    To: String,
    info_note: String,
    traintype: String,
    trainClass: String,
    coachnumber: String,
    seatNumber: String,

    classFlight: String,
    bookedBy: String,
    statusTypes: String,
    routeFlight: String,
    PickupTime_Date: Date,

    PickupTime: Date,
    setAllPassenger: Boolean,
    _PassengerName: Array,
    _TourleaderAss: Array,
    setAllTourleader: Boolean,

    childAgeFrom: Number, // Flight
    childAgeTo: Number,

    // Airlines
    Airlines: String,

    languageId: String, // for Surcharge

    // -------------------------------------------------------------
    Curency: String,
    _idService: String, // id link service for reviseByItem();
    _idPeriodsService: String, // id Periods
    linkBy: String,
    PriceType: String,

    numberday: String,
    Date: String,
    twinOrTripleShare: String,
    types: String,
    name: String,

    roomcategory: String,
    priceUnit: Number,
    priceQuality: Number,
    price: Number,
    priceChild: Number,
    priceMarkup: Number,
    priceMarkupChild: Number,

    begindate: Date,
    enddate: Date,
    chargepolicy: String,
    min: Number,
    max: Number,

    infoService: {
      id: String,
      name: String,
      SupId: String,
      CodeService: String,
      beginDate: Date,
      endDate: Date,
      supplier: String,
      supplierTourCode: String,
      serviceSupplierId: String,
      ServiceName: String,
      location: String,
      address: String,
      note: String,
      supplierID: String,
      serviceID: String,
      optionID: String,
    },
    hotelinfo: {
      _idPeriods: String,
      rooms: [rooms],
      childPolicy: [ChlidPolicy],
      cancelationPolicy: [cancelation_policy],
      price: options,
      note_chlidPolicy: String,
      note_cancelation_policy: String,
      reservation: {
        CheckinHours: Number,
        CheckinMinutes: Number,
        CheckoutHours: Number,
        CheckoutMinutes: Number,

        latecheckouts: [{
          id: String,

          LateCheckoutHours: Number,
          LateCheckoutMinutes: Number,

          latecheckout: Boolean,
          setAllRoom: Boolean,
          ls_Room: [rooms],
          typeCharge: String, // 'Supplement', 'Deduct', 'Fixed'
          typeBy: String, // 'By %', 'By Amount'
          value: Number,
        }]
      },
    },
    lsRoomAssigned: [{
      isTourleader: Boolean,
      roomNumber: Number,
      occ: Number,
      typeof: String, // "SGL", "TWS"
      name: String,

      Adults: String,
      TypeBed: String,
      TextRoomNumber: String,
      noteTxtRoom: String,
      Breakfast: String,
      Children: [lsPassenger],
      roomStatus: String,

      adultPrice_buy: Number,
      adultPrice: Number,

      bedPrice: Number,
      bedPrice_ischange: Boolean,
      breakfastPrice: Number,
      breakfastPrice_ischange: Boolean,

      latecheckout: Boolean,
      latecheckoutPrice_buy: Number,
      latecheckoutPrice: Number,
      latecheckoutPrice_ischange: Boolean,

      totalPrice_buy: Number,
      totalPrice: Number,
      totalPrice_ischange: Boolean,
    }],
    hasExtraBed: Boolean,
    numAssignRooms: Number,
    latecheckoutId: String,

    occupancy: Number,
    shareroom: Number,
    sglroom: Number,
    noofrooms: Number,
    noofnights: Number,

    shareroom_git: Number, // hotel git price
    sglroom_git: Number,
    groupsize: Number,

    SGLSuppl: Number,
    SGLSupplMk: Number,
    paxBreak: [paxBreak],

    //Landing vul
    ld_qty: Number,
    ld_unitPrice: Number,
    ld_totalPrice: Number,
    ld_unitPrice_buy: Number,
    ld_totalPrice_buy: Number,

    ld_unitPriceTLs: Number,
    ld_totalPriceTLs: Number,
    ld_unitPriceTLs_buy: Number,
    ld_totalPriceTLs_buy: Number,

    // landing child price
    ld_childPrices: [{
      agefrom: Number,
      ageto: Number,
      ld_qty: Number,
      ld_unitPrice: Number,
      ld_totalPrice: Number,
      ld_unitPrice_buy: Number,
      ld_totalPrice_buy: Number
    }],

    // Hotel Vl
    // TWS
    unit_buy: Number,
    unit: Number,
    unit_NoRoom: Number,
    unit_night: Number,
    unit_Total_buy: Number,
    unit_Total: Number,
    TWSExtraBedTotal: Number,
    TWSBreakfastTotal: Number,

    TWSLateCheckoutTotal_buy: Number,
    TWSLateCheckoutTotal: Number,

    // for tour leader
    unit_TotalTLs_buy: Number,
    unit_TotalTLs: Number,
    TWSExtraBedTotalTLs: Number,
    TWSBreakfastTotalTLs: Number,

    TWSLateCheckoutTotalTLs_buy: Number,
    TWSLateCheckoutTotalTLs: Number,

    // SGL
    sgl_buy: Number,
    sgl: Number,
    sgl_NoRoom: Number,
    sgl_night: Number,
    sgl_Total_buy: Number,
    sgl_Total: Number,
    SGLExtraBedTotal: Number,
    SGLBreakfastTotal: Number,

    SGLLateCheckoutTotal_buy: Number,
    SGLLateCheckoutTotal: Number,

    // for tour leader
    sgl_TotalTLs_buy: Number,
    sgl_TotalTLs: Number,
    SGLExtraBedTotalTLs: Number,
    SGLBreakfastTotalTLs: Number,

    SGLLateCheckoutTotalTLs_buy: Number,
    SGLLateCheckoutTotalTLs: Number,

    // late checkout
    lc_buy: Number,
    lc: Number,
    lc_NoRoom: Number,
    lc_Total_buy: Number,
    lc_Total: Number,

    lc_TotalTLs_buy: Number,
    lc_TotalTLs: Number,

    // other service
    OtherServiceTotal_buy: Number,
    OtherServiceTotal: Number,

    OtherServiceTotallTLs_buy: Number,
    OtherServiceTotallTLs: Number,

    // total
    acc_Total_buy: Number,
    acc_Total: Number,

    acc_TotalTLs_buy: Number,
    acc_TotalTLs: Number,

    per_persion: Number,
    single_suppl: Number,
    child_price: Number,

    // Assigned
    lsAssignedService: [lsAssignedService],
    totalAssigned: Number,

    color: String,
    doneAssigned: Boolean,
    assignedBy: String,
    status: String, // enum: New, Pending, Confirmed, Cancelled
    // statusOP: String, // status only

    om: String, // om check by
    omhadCheck: Boolean, // Approved history
    Approved: Boolean,

    isCancel: Boolean,
    cancel_isId: String,

    groupID: String,
    notRetrievedPrice: Boolean, // from tour generation: flag for service with not retrieved price

    NoteMP: Array, // Mealncluded
    NoteDT: Date, // DepartureTime
    NoteADU: String, // Approximate Duration
    NoteDAI: String, // Approximate Distances
    icons: Array, // Approximate Distances

    // user and date create item
    userCreate: String,
    userUpdate: String,
    DateCreate: Date,
    DateUpdate: Date,

    // surcharge: [Items_Calculator]
    ls_Surcharge: [{
      type: mongoose.Schema.Types.Mixed
    }],
    surchargeIsItem: String,
    selec_Serchage: Boolean,
    isSurSelected: Boolean,

    // excursion child policy
    Items_ChildPolicy: [Items_ChildPolicy],

    // cancelation for landing
    cancelation_policy: [cancelation_policy],

    // other servive: [Items_Calculator]
    otherServices: [{
      type: mongoose.Schema.Types.Mixed
    }],

    ItemBanner: String,
    viewTemplate: String,
    _idTemplate: String,
    templateService : String,

    // OptionPaxManifest
    optionPaxManifest: Boolean,
    sumOptionPaxManifest: Number,
    totalOptionPaxManifest: Number,
    listOptionPaxManifest : [
      {
        pax: Number,
        name: String,
        unit: Number,
        price: Number,
        total: Number,
        max: Number,
        unitPrice: Number,
      }
    ]
  }
);

const FullDataSchema = new mongoose.Schema({
  // value kiểm phân loại 1 Code Excursions link trong Booking Code.
  LinkExcursions: Boolean,
  _linkVersion: Number,
  Isid: String, // Id của item tương ướng vơi object link
  Code: String, // Code Booking ví dụ: HH00021
  _idCode: String, // id type objectId của Mongodb
  requestId: String, // proposal request id ref
  requestReview: Boolean,

  // exchange rate group id
  exchangeRateGroupId: String,

  //
  masterCode: String,
  limitpax: Boolean,
  language: String, // id for language
  languageForTemplate: String, // id for language, convert from language template
  languageTemplate: String, // id for language template

  // thông tin người create, update Code
  userCreate: String,
  userUpdate: String,

  assignUser: String, // replace by assignUsers, remove in future
  assignUsers: Array, // new, replace for assignUser

  DateCreate: Date,
  DateUpdate: Date,
  codeVersion: Number,

  // ------------------------------------------
  nation: String, // quốc gia: 'vn', 'tl', .....
  isActive: Boolean,
  begindate: Date,
  enddate: Date,
  nights: Number,

  // tỉnh, thành phố, khu vực
  province: String,
  location: String,
  idCountry: String,
  area: Array,

  // --------------------------------------------
  ValueEditModel: String,
  Curency: String,
  productCode: String,
  bookingName: String,
  generalBookingTitle: String,
  operationalCities: String,
  bookingCode: String,
  market: Array,
  ageny: Array,
  exceptMarket: Array,
  exceptAgeny: Array,
  category: Array,
  supplier: String,
  OperatedBySupplier: Array,
  duration: Array,
  tourStyle: Array,
  noteTiers: String,
  Noteforcode: String,
  noteRevisePrice: String,
  periods: [periods], // periods chia theo mùa của contract hoặc booking.

  // Code này đường áp dụng các ngày trong tuần.
  availab: {
    sun: Boolean,
    mon: Boolean,
    tue: Boolean,
    wed: Boolean,
    thu: Boolean,
    fri: Boolean,
    sat: Boolean
  },

  // PAX BREAK
  PaxMax: Number,
  tiers: [tiers],

  // Content, DESCRIPTION,short Content, Note.
  color_theme: String,
  color_title: String,
  color: String,
  note: String,

  content: String,
  TemplateItineraryOverView: String, // Template Itinerary OverView
  shortContent: String,
  multiDayContent: Boolean,
  contents: [ // for Excursion Multi-Language
    {
      languageId: String,
      content: String,
      shortContent: String,
      items: [{
        shortContent: String,
        numberday: Number,
        content: String,
      }]
    }
  ],

  // List object BuyPrice và SellPrice
  Items_Calculator: [Items_Calculator],

  // ghi chú cho nội dung change.
  stickyNotes: {
    dateview: Date,
    note: String
  },

  // Tông tin các code có Tranfer
  IshaveTransfer: Boolean,
  TranferNameFrom: String,
  TranferAreaFrom: Array,
  TranferTimeFrom: Date,
  TranferNameTo: String,
  TranferAreaTo: Array,
  TranferTimeTo: Date,
  PickupTime_Date: Date,
  PickupTime: Date,
  PickupPoint: String,
  DropOffPoint: String,
  DurationHours: Number,
  DurationMinutes: Number,

  // Direct MK
  Direct_Note: String,
  supplier_DirectMarkup: String,
  Items_DirectMarkup: [Items_DirectMarkup],
  lsExtra: [
    {
      extra: String,
      charge: String,
      price: Number,
      note: String
    }
  ],

  // child policy
  Items_ChildPolicy: [Items_ChildPolicy],
  Items_ChildPolicy_Merge: [Items_ChildPolicy],

  // cancelation for tour
  cancelation_policy: [cancelation_policy],

  // Timing
  lsTiming: [
    {
      IsItem: String,
      duration: Number,
      time: String,
      timeTo: String,
      dateTime: Date,
      lenghts: Number,
      description: String,
      hours: Number,
      minutes: Number,
    }
  ],
  departure: [
    {
      IsItem: String,
      timepicker: Date,
    }
  ],
  timeView: String,
  timepicker: Date,
  startTime: {
    hour: Number,
    minute: Number,
    second: Number
  },
  TotalDuration: Number,

  // Sales Representative
  isoReps: [{
    idReps: String,
    name: String,
    topupcommision: Number,
    topupcommision_land: Number,
  }],

  // value cho PACKAGE, PROPOSAL
  Proposalstatus: String,
  parentsCode: String,
  periodSEASONAL: Boolean,
  periodDAILY: Boolean,
  UngroupAcc: Boolean,
  splitByAcc: Boolean,
  CRM: Boolean,
  DMK: Boolean,
  MarkupAllLanding: Number,
  MarkupAllLanding_Change: Boolean,
  MarkupAllHotel: Number,
  MarkupAllHotel_Change: Boolean,
  priceDefaulFoAudit: Number,
  numberpax_child: Number,
  numberpax_adults: Number,
  numberpax_tourleaders: Number, // num tourleader Assigned
  lsPassenger: [lsPassenger],
  checkSelectPrice: {
    index: Number,
    pax: Number,
    seasonal: String,
  },

  // tour Leader
  tourLeader: tourLeader, // sẻ "Xoá" vì chuyển đổi cấu trúc
  grandTotal: Number,
  leaderTotal: Number,
  accTotal: Number,
  lsChildTotal: Array,

  //
  isGeneration: Boolean,
  maps: [maps],
  imageMaps: String,
  isTourOperator: Boolean,
  TourOperator: [TourOperator],
  paxBreakOperator: Number,
  Total_PaxOperator: Number,
  Total_BuyOperator: Number,

  // Operation
  SumpriceGroup: Number,
  SumtotalAssigned: Number,
  SumProfit: Number,
  SumbMargin: Number,

  Total_SellOperator: Number,
  SumProfitSellOperator: Number,
  SumbMarginSellOperator: Number,

  // AR && API
  AmountInvoice: Number,
  DepositRequest: [{
    Value: Number,
    Paid: Number,
    Currency: String,
    dueDate: Date,
  }],
  TotalDepositRequest: Number,
  SendOndate: Date,
  receivedpayment: [receivedpayment],
  InvoicedRef: String,
  agenyString: String,

  // image
  thumbnail: {
    path: String,
    cover: Boolean,
    filename: String
  },
  lsImage: [{
    path: String,
    filename: String,
    cover: Boolean,
  }],

  Direct: Boolean,


  // round option
  roundOption: {
    type: {
      type: String
    },
    digit: Number
  },
  tourLeaderPaxRange: Number,
  numbertourLeader: Number,
  urlExport: [{
    url: String,
    dateExport: Date,
    userExport: String
  }],
  QuotePrice: [{
    GroupName: String,
    QuotePriceIsItem: String,
    GroupNote: String,
    Adults: Number,
    Children: Number,
  }],
  priceSIC: Number,
  // ObjectDemandSellingPrice: {
  //   SGLSuppl: Number,
  //   paxBreak: [paxBreak]
  // },
  OtherExtraCost: [{
    PeriodId: String,
    OtherName: String,
    SGLSuppl: Number,
    SGLSupplMk: Number,
    actionType: String,
    By: String,
    value: Number,
    paxBreak: [paxBreak]
  }],
  GridFooterTotalTour: [{
    isID: String,
    forFullperiod: Boolean,
    periodName: String,
    PeriodId: String,
    nameObject: String,
    QuotePriceIsItem: String,

    begindate: Date,
    enddate: Date,

    tourLeader: {
      SGLSuppl: Number,
      SGLSupplMk: Number,
      paxBreak: [paxBreak]
    },
    landing: {
      SGLSuppl: Number,
      SGLSupplMk: Number,
      paxBreak: [paxBreak]
    },
    acc: {
      SGLSuppl: Number,
      SGLSupplMk: Number,
      paxBreak: [paxBreak]
    },
    sumLandAcc: {
      SGLSuppl: Number,
      SGLSupplMk: Number,
      paxBreak: [paxBreak]
    },
    all: {
      SGLSuppl: Number,
      SGLSupplMk: Number,
      paxBreak: [paxBreak]
    }
  }],
  place: place, // Address by mapsBox
  Including: String, 
  Excluding: String,
  publicB2C: Boolean
}, {
  versionKey: false
});

module.exports = {
  Tours: mongoose.model('FullData', FullDataSchema),
  FullDataSchema: FullDataSchema
}
