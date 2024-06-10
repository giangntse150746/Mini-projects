const jwt = require('jsonwebtoken');
const config = require('../config/config');
const Joi = require('joi');
const Users = require('../models/user.model');
const Zone = require('../models/Zone.model');
const Province = require('../models/Province.model');
const City = require('../models/City.model');
const Area = require('../models/Area.model');
const { Infohotel } = require('../models/infohotel.model');
const InfohotelLog = require('../models/infohotel_log.model');
const Currency = require('../models/currency.model');
const CurrencySelected = require('../models/currencySelected.model');
const { ExchangeRate } = require('../models/exchangerate.model');
const ExchangeRateLog = require('../models/exchangerate_log.model');
const Rules_special_offers = require('../models/Rules_specialoffers');
const Gents_onlines = require('../models/agents_online.model');
const Procodes = require('../models/procodes.model');
const Market = require('../models/market.model');
const Allotments = require('../models/allotment.model');
const Language = require('../models/Language');
const Languagecode = require('../models/Languagecode');
const Tourduration = require('../models/Tourduration');
const TourCategory = require('../models/TourCategory');
const TariffPeriod = require('../models/TariffPeriod');
const { Tours } = require('../models/tours.model');
const TourLogs = require('../models/tourlogs.model');
const TourGenerationLogs = require('../models/tour_generation_logs.model');
const Airlines = require('../models/Airlines');

const Logclients = require('../models/Logclient');
const ServiceType = require('../models/ServiceType');
const Supplier = require('../models/Supplier');
const Suplanguage = require('../models/Suplanguage');
const Service = require('../models/Service.model');
const Maps = require('../models/Maps');
const Lsimage = require('../models/images');
const Folder = require('../models/folder');
const Topup = require('../models/Topup');

const Countries = require('../models/Country.model');
const Accommodation = require('../models/accommodationType.model');
const Airportcode = require('../models/Airportcode.model');
const helpes = require('./helper')
const md5 = require('md5');
const mongoose = require('mongoose');
var _ = require('lodash');

const ObjectId = mongoose.Types.ObjectId;
const convertObjectId = mongoose.Types.ObjectId;

const onehotelSchema = Joi.object({
    nation: Joi.string().required(),
    _id: Joi.string().required(),
})

const optionUpdate = { upsert: true, new: true, useFindAndModify: false };

migrateData();
async function migrateData() {
    // init data
    // await initCurrencyDatabaseIfNotExist();

    // migrate exchange rate
    // await migrateExchangeRate();

    // migrate data: Surchage->Surcharge
    // await migrateTourItemCategory_Surchage_to_Surcharge();

    // check excursion link missing in proposal
    // await checkExcursionMissing("from init", false);

    // replaceAllTour
    // await replaceAllTour();

    console.log("--- Done All ---");
}

module.exports = {

    //==========================================
    // Tours Tariff
    //
    // START
    //==========================================

    // notify and email template
    getTemplates,

    // ------------------------------------------------------------- Hotel Info
    getAgenctFinace,
    showInfoContentHotel,
    linkidHotelsContent,
    expiredDays,
    filter_Hotel,
    getCountByhotel,
    gethotel_info,
    gethotel_byid,
    getonehotel,
    get_Hotels_ByIds,
    posthotel,
    puthotel,
    UpdateContracyByID,
    deletehotel,
    // ------------------------------------------------------------- Hotel Info End

    // ------------------------------------------------------------- Hotel Info Log
    list_hotel_audit_logs,
    get_hotel_audit_log,
    // ------------------------------------------------------------- Hotel Info Log End

    reportAgent,
    list_market,
    add_market,
    update_market,
    delete_market,
    // Tourduration
    list_durations,
    add_durations,
    update_durations,
    delete_durations,
    expireddaysupdateone,
    // Tourcategorys
    list_categorys,
    add_categorys,
    update_categorys,
    delete_categorys,
    // Tourcategorys

    checkProductCodeExist,
    one_tours,
    tours_get_lastest_by_code,
    ass_tours,
    get_Tours_ByIds,
    get_Tours_ByIsIds,
    add_tours,
    update_tours,
    updatePriceOperation,
    add_tours_generation,
    delete_tours,

    list_tours_forfix,

    // audit log
    list_audit_logs,
    get_audit_log,

    add_tour_generation_log,
    list_tour_generation_logs,
    get_tour_generation_log,

    SearchDataByParams,
    SearchDataByParamsLink,

    list_ServiceType,
    add_ServiceType,
    update_ServiceType,
    delete_ServiceType,

    get_DataServiceForEdit,

    // ------------------------------------------------------------- TariffPeriod
    list_TariffPeriod,
    add_TariffPeriod,
    update_TariffPeriod,
    delete_TariffPeriod,
    GetperiodeClient,
    // ------------------------------------------------------------- TariffPeriod End

    find_one_link_excursions,
    findOneitemExcursions,

    //
    list_Airlines,
    add_Airlines,
    update_Airlines,
    delete_Airlines,


    add_Services,
    find_Services,
    findIDs_Services,
    update_Services,
    delete_Services,
    get_Services_ByIds,
    FixMaxServices,

    _Service_Get_DataByParams,
    _Service_Get_Export,
    _Supplier_get_for_Service,
    _SupplierfindOne,
    _countOptionService,
    _Supplier_get_for_operation,
    revisedata,

    // report Booking
    getCountByProposalstatus,
    getNumberCode,
    getDataByProposalstatus,
    // report Product Link
    get_reportLinkProduct,
    get_ListLinkByCode,
    get_operation,
    get_ListFullDataByLocation,
    get_dataProductstatistic,
    get_reportHotel_Statistic,
    SearchForAirfare,
    //==========================================
    // END
    //==========================================


    //==========================================
    // Hotels Tariff
    //
    // START
    //==========================================

    // allotments Hotels
    list_allotments,
    add_allotments,
    update_allotments,
    delete_allotments,

    GetLanguageCodes,
    find_language,
    add_Language,
    update_Language,
    delete_Language,

    // Rules
    // ---------------------------
    list_special_offers,
    list_special_offers_page,
    add_special_offers,
    update_special_offers,
    delete_special_offers,

    // END
    //==========================================


    //==========================================
    // ALL (Tour - Hotel) Tariff
    //
    // START
    //==========================================
    generateToken,
    getloginuser,

    // CRM
    // ---------------------------
    list_gents_Asss,

    random_code,
    random_codeAgents,
    random_code_Service,

    // ------------------------------------------------------------- Curency
    initCurrencyDatabaseIfNotExist,
    getCurrenciesAll,
    getCurrencySelectedByNation,
    updateCurrencySelectedByNation,
    getCurrencyLogByNation,
    // ------------------------------------------------------------- Curency End

    // ------------------------------------------------------------- Exchange Rate
    list_exchangeRate,
    add_exchangeRate,
    update_exchangeRate,
    delete_exchangeRate,
    getExchangeRateLogByNation,
    // ------------------------------------------------------------- Exchange Rate End

    // suplanguage
    list_suplanguage,
    add_suplanguage,
    update_suplanguage,
    delete_suplanguage,
    // Tourcategorys
    list_maps,
    add_maps,
    update_maps,
    delete_maps,

    list_users,
    findOne_users,
    add_users,
    update_users,
    delete_users,

    list_Supplier,
    getCountIdSupplier,
    find_Supplier,
    filterService,
    add_Supplier,
    update_Supplier,
    delete_Supplier,
    findOneSupplierlanguage,
    findOneSupplierProcess,

    list_Zone,
    add_Zone,
    update_Zone,
    delete_Zone,

    list_Province,
    add_Province,
    update_Province,
    delete_Province,

    list_City,
    add_City,
    update_City,
    delete_City,

    list_Airports,
    add_Airports,
    update_Airports,
    delete_Airports,

    list_Topup,
    add_Topup,
    update_Topup,
    delete_Topup,

    list_Area,
    add_Area,
    update_Area,
    delete_Area,
    get_treeGeopath,
    get_treeGeopath_tera,

    // log edit
    getAgenct,
    Getfolder,
    GetImagesBy,

    update_folder,
    add_folder,
    delete_folder,
    delete_image,
    add_image,
    findRoomHotel,
    updateContactService,
    AddContactService,

    getListAccommodation,
    saveAccommodation,
    deleteAccommodation,
    updateUrlExport
    //==========================================
    // END
    //==========================================
}
// update url Export
async function updateUrlExport(body) {
    return await Infohotel.updateOne({
        _id: ObjectId(body._id)
    }, { $set: { urlExport: body.urlExport } }, { upsert: false, multi: true })
}
// ------------------------------------------------------------------------------------- migrate data Degin
// -------------------------------------------------------------------------------------
async function migrateExchangeRate() {
    console.log("migrateExchangeRate ----------- begin");

    let exchangeRates = await ExchangeRate.find({});
    console.log("exchangeRates", exchangeRates.length);

    let countries = await Countries.find({});
    console.log("countries", countries.length);

    exchangeRates.forEach(e => {
        let country = countries.find(x => x.nation === e.nation);
        e.currency = country.currency;
    });

    let tasks = exchangeRates.map(e => ExchangeRate.updateOne(
        { _id: ObjectId(e._id) }, { currency: e.currency }, optionUpdate
    ));

    await Promise.all(tasks);
    console.log("migrateExchangeRate ----------- end");
}

// check excursion link missing in proposal
var isLogging = false;
var filelog;
async function checkExcursionMissing(msg, log = null) {
    log = log || config.FileLogEnable;

    if (!log)
        return;

    if (isLogging)
        return;

    isLogging = true;

    if (!filelog)
        filelog = require('simple-node-logger').createSimpleLogger('CheckExcursionMissing.log');

    let excursions = await Tours.find({
        nation: "vn",
        ValueEditModel: "EXCURSIONS",
        LinkExcursions: true,
    }, {
        _idCode: 1,
        Isid: 1,
        "Items_Calculator._id": 1,
    });
    clog("");
    clog("---------------------------------------------------------------:: Start: ", new Date());
    // clog("excursions len: ", excursions.length);

    // let excursionIds = excursions.map(x => x._id);
    // clog("excursion Ids len: ", excursionIds.length);

    // let excursionIdsUniq = [... new Set(excursionIds)];
    // clog("excursion Ids Uniq len: ", excursionIdsUniq.length,
    //     excursionIdsUniq.length !== excursionIds.length ? " ---------> Fail" : '');

    // clog("");
    let excursionIsid_s = excursions.map(x => x.Isid);
    clog("excursion Isid_s len: ", excursionIsid_s.length);

    let excursionIsid_sNull = excursionIsid_s.filter(x => !x);
    clog("excursion Isid_s Null len: ", excursionIsid_sNull.length);

    let excursionIsid_sValid = excursionIsid_s.filter(x => x);
    clog("excursion Isid_s Valid len: ", excursionIsid_sValid.length,
        excursionIsid_sValid.length !== excursionIsid_s.length ? " ---------> Fail" : '');

    let excursionIsid_sUniq = [... new Set(excursionIsid_sValid)];
    clog("excursion Isid_s Valid Uniq len: ", excursionIsid_sUniq.length,
        excursionIsid_sUniq.length !== excursionIsid_s.length ? " ---------> Fail" : '');

    let excursionIsid_sDuplicate = excursionIsid_sUniq.map(x => excursionIsid_sValid.filter(y => y === x));
    excursionIsid_sDuplicate.forEach(x => x.pop());
    excursionIsid_sDuplicate = excursionIsid_sDuplicate.flat();
    clog("excursion Isid_s Duplicate len: ", excursionIsid_sDuplicate.length, " - uniq: ", [... new Set(excursionIsid_sDuplicate)].length);

    clog("---------------------------------------------------------------::");
    let excursionIdCodes = excursions.map(x => x._idCode);
    clog("excursion IdCodes len: ", excursionIdCodes.length);

    let excursionIdCodes_Undef = excursionIdCodes.filter(x => !x);
    clog("excursion IdCodes Null len: ", excursionIdCodes_Undef.length);

    let excursionIdCodes_Valid = excursionIdCodes.filter(x => x);
    clog("excursion IdCodes Valid len: ", excursionIdCodes_Valid.length,
        excursionIdCodes_Valid.length !== excursionIdCodes.length ? " ---------> Fail" : '');

    excursionIdCodesUniq = [...new Set(excursionIdCodes_Valid)];
    clog("excursion IdCodes Valid Uniq len: ", excursionIdCodesUniq.length);



    let tours_by_excursionIdCodesUniq = await Tours.find({
        nation: "vn",
        // ValueEditModel: "PROPOSAL",
        _id: { $in: excursionIdCodesUniq.map(x => ObjectId(x)) }
    }, {
        ValueEditModel: 1,
        "Items_Calculator.IsItem": 1
    });
    clog("---------------------------------------------------------------::");
    clog("tours_by_excursionIdCodesUniq len: ", tours_by_excursionIdCodesUniq.length);

    let tourIds = tours_by_excursionIdCodesUniq.map(x => x._id.toString());
    let excursionsWithRef = excursionIdCodesUniq.filter(x => tourIds.includes(x));
    clog("excursions IdCodes Valid Uniq WithRef len: ", excursionsWithRef.length, "/", excursionIdCodesUniq.length,
        excursionsWithRef.length !== excursionIdCodesUniq.length ? " ---------> Fail" : '');

    let excursionsNoRef = excursionIdCodesUniq.filter(x => !tourIds.includes(x));
    clog("excursions IdCodes Valid Uniq NoRef len: ", excursionsNoRef.length, "/", excursionIdCodesUniq.length,
        excursionsNoRef.length ? "  " + excursionsNoRef[0] : "");

    let proposals_by_excursionIdCodesUniq = tours_by_excursionIdCodesUniq.filter(x => x.ValueEditModel === "PROPOSAL");
    let proposalIds = proposals_by_excursionIdCodesUniq.map(x => x._id.toString());
    clog("proposals_by_excursionIdCodesUniq len: ", proposals_by_excursionIdCodesUniq.length);

    let excursions_For_Proposal = excursions.filter(x => proposalIds.includes(x._idCode));
    let excursionIsid_s_For_Proposal = excursions_For_Proposal.map(x => x.Isid);
    clog("excursions_For_Proposal len: ", excursions_For_Proposal.length);




    let allProposals = await Tours.find({
        nation: "vn",
        ValueEditModel: "PROPOSAL",
    }, {
        "Items_Calculator._id": 1,
        "Items_Calculator.isLink": 1,
        "Items_Calculator.IsItem": 1
    });
    clog("---------------------------------------------------------------::");
    clog("allProposals len: ", allProposals.length);

    let IsItems = allProposals.map(x => x.Items_Calculator.filter(y => y.isLink).map(y => y.IsItem)).flat().filter(x => x);
    clog("IsItems len: ", IsItems.length,
        IsItems.length !== excursions_For_Proposal.length ? " ---------> Fail" : '');

    let IsItemsUniq = [... new Set(IsItems)];
    clog("IsItems Uniq len: ", IsItemsUniq.length,
        IsItemsUniq.length !== IsItems.length ? " ---------> Fail" : '');

    let IsItemsUniq_existRef = IsItemsUniq.filter(x => excursionIsid_s_For_Proposal.includes(x));
    clog("IsItems Uniq_existRef len: ", IsItemsUniq_existRef.length,
        IsItemsUniq_existRef.length !== IsItems.length ? " ---------> Fail" : '');

    let IsItemsUniq_existRef_NoDuplicate = IsItemsUniq_existRef.filter(x => IsItems.filter(y => y === x).length === 1);
    clog("IsItems Uniq_existRef No Duplicate len: ", IsItemsUniq_existRef_NoDuplicate.length,
        IsItemsUniq_existRef_NoDuplicate.length !== IsItemsUniq_existRef.length ? " ---------> Fail" : '');

    let excursion_Isid_NoRef = excursionIsid_s_For_Proposal.filter(x => !IsItemsUniq_existRef_NoDuplicate.includes(x));
    clog("excursion Isid NoRef len: ", excursion_Isid_NoRef.length);




    clog("---------------------------------------------------------------::");
    let serviceIds = allProposals.map(x => x.Items_Calculator.map(y => y._id)).flat();
    clog("service Ids len: ", serviceIds.length);

    let serviceIds_Uniq = [... new Set(serviceIds.filter(x => x))];
    clog("service Ids Uniq len: ", serviceIds_Uniq.length,
        serviceIds_Uniq.length !== serviceIds.length ? " ---------> Fail" : '');

    let serviceIds_Dup = [...serviceIds];
    serviceIds_Uniq.forEach(x => {
        let i = serviceIds_Dup.findIndex(y => y === x);
        if (i > -1)
            serviceIds_Dup.splice(i, 1);
    });
    if (serviceIds_Dup.length)
        console.log(serviceIds_Dup);

    let excursionServiceIds = excursions.map(x => x.Items_Calculator.map(y => y._id)).flat();
    clog("excursion Service Ids len: ", excursionServiceIds.length);

    let excursionServiceIds_Uniq = [... new Set(excursionServiceIds)];
    clog("excursion Service Ids Uniq len: ", excursionServiceIds_Uniq.length,
        excursionServiceIds_Uniq.length !== excursionServiceIds.length ? " ---------> Fail" : '');



    clog("---------------------------------------------------------------:: delete data ...");




    // delete excursionIsid_sNull
    0 && await delete_excursionIsid_sNull(excursionIsid_sNull)
        && clog("delete_excursionIsid_sNull");

    // delete excursionIdCodes_Undef
    0 && await delete_excursionIdCodes_Undef(excursionIdCodes_Undef)
        && clog("delete_excursionIdCodes_Undef");

    // delete excursionsNoRef
    0 && await delete_excursionsNoRef(excursionsNoRef)
        && clog("delete_excursionsNoRef");

    // delete excursionIsid_sDuplicate
    0 && await delete_excursionIsid_sDuplicate(excursionIsid_sDuplicate)
        && clog("delete_excursionIsid_sDuplicate");

    // delete IsItemsUniq_existRef
    0 && await delete_IsItemsUniq_existRef_Not(IsItemsUniq_existRef)
        && clog("delete_IsItemsUniq_existRef_Not");

    // delete IsItemsUniq_existRef_NoDuplicate
    0 && await delete_IsItemsUniq_existRef_Not(IsItemsUniq_existRef_NoDuplicate)
        && clog("delete_IsItemsUniq_existRef_NoDuplicate");

    // delete excursion_Isid_NoRef
    0 && await delete_excursion_Isid_NoRef(excursion_Isid_NoRef)
        && clog("delete_excursion_Isid_NoRef");

    // delete serviceIds_Dup
    0 && await delete_serviceIds_Dup(serviceIds_Dup)
        && clog("delete_serviceIds_Dup_Not");

    clog("Done: ", msg);

    isLogging = false;
}
function clog(...param) {
    //console.log(...param);
    filelog.info(...param);
}
async function delete_excursionIsid_sNull(excursionIsid_sNull) {
    return await Tours.deleteMany({
        nation: "vn",
        ValueEditModel: "EXCURSIONS",
        LinkExcursions: true,
        Isid: { $in: excursionIsid_sNull }
    });
}
async function delete_excursionIdCodes_Undef(excursionIdCodes_Undef) {
    return await Tours.deleteMany({
        nation: "vn",
        ValueEditModel: "EXCURSIONS",
        LinkExcursions: true,
        _idCode: { $in: excursionIdCodes_Undef }
    });
}
async function delete_excursionsNoRef(excursionsNoRef) {
    return await Tours.deleteMany({
        nation: "vn",
        ValueEditModel: "EXCURSIONS",
        LinkExcursions: true,
        _idCode: { $in: excursionsNoRef }
    });
}
async function delete_excursionIsid_sDuplicate(excursionIsid_sDuplicate) {
    let tasks = excursionIsid_sDuplicate.map(x =>
        Tours.deleteOne({
            nation: "vn",
            ValueEditModel: "EXCURSIONS",
            LinkExcursions: true,
            Isid: x
        })
    );

    return await Promise.all(tasks);
}
async function delete_IsItemsUniq_existRef_Not(IsItemsUniq_existRef) {
    let tours = await Tours.find({
        nation: "vn",
        ValueEditModel: "PROPOSAL",
    }, {
        Items_Calculator: 1
    });

    let tourRemoves = tours.filter(t =>
        t.Items_Calculator.some(x => x.isLink && !IsItemsUniq_existRef.includes(x.IsItem))
    );
    tourRemoves.forEach(t => {
        t.Items_Calculator = t.Items_Calculator.filter(item =>
            !item.isLink
            || IsItemsUniq_existRef.includes(item.IsItem)
        );
    });

    let tasks = tourRemoves.map(t => Tours.updateOne({ _id: t._id }, { Items_Calculator: t.Items_Calculator }));
    return await Promise.all(tasks);
}
async function delete_serviceIds_Dup(serviceIds_Dup) {
    let tours = await Tours.find({
        nation: "vn",
        ValueEditModel: "PROPOSAL",
    }, {
        Items_Calculator: 1
    });

    let tourRemoves = tours.filter(t =>
        t.Items_Calculator.some(x => serviceIds_Dup.includes(x._id))
    );
    console.log('------', tourRemoves.length);
    tourRemoves.forEach(t => {
        t.Items_Calculator = t.Items_Calculator.filter(x => !serviceIds_Dup.includes(x._id));
    });

    let tasks = tourRemoves.map(t => Tours.updateOne({ _id: t._id }, { Items_Calculator: t.Items_Calculator }));
    return await Promise.all(tasks);
}
async function delete_excursion_Isid_NoRef(excursion_Isid_NoRef) {
    return await Tours.deleteMany({
        nation: "vn",
        ValueEditModel: "EXCURSIONS",
        LinkExcursions: true,
        Isid: { $in: excursion_Isid_NoRef }
    });
}

async function migrateTourItemCategory_Surchage_to_Surcharge() {
    console.log('migrateTourItemCategory_Surchage_to_Surcharge() ----------- begin');

    let tours = await Tours.find({ "Items_Calculator.category": "Surchage" }, { "Items_Calculator": 1 });
    // console.log("tours len:", tours.length);

    // tours = tours.filter(tour => tour.Items_Calculator && tour.Items_Calculator.some(item => item.category === 'Surchage'));
    console.log("tours has Item Surchage, len:", tours.length);

    tours.forEach(tour => {
        tour.Items_Calculator.forEach(item => {
            if (item.category === 'Surchage')
                item.category = 'Surcharge';
        });
    });

    while (tours.length) {
        let updateTours = tours.splice(0, 50);
        let tasks = updateTours.map(t => Tours.updateOne({ _id: t._id }, { Items_Calculator: t.Items_Calculator }));
        await Promise.all(tasks);
    }

    console.log('migrateTourItemCategory_Surchage_to_Surcharge() ----------- end');
}

async function replaceAllTour() {
    console.log('replaceAllTour() ----------- begin');

    let tours = await Tours.find({});
    console.log('replaceAllTour() ----------- ...', tours.length);

    while (tours.length) {
        console.log('replaceAllTour() ----------- ...', tours.length);

        let updateTours = tours.splice(0, 50);
        let tasks = updateTours.map(t => Tours.replaceOne({ _id: t._id }, t));
        await Promise.all(tasks);

    }

    console.log('replaceAllTour() ----------- end');
}
// -------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------- migrate data End

// -------------------------------------------------------------------------------------
//Accommodation controller
async function getListAccommodation(body) {
    return await Accommodation.find({ nation: body.nation }).sort({ name: 1 });
}
async function deleteAccommodation(param) {
    return await Accommodation.deleteOne({ _id: param._id });
}
async function saveAccommodation(param) {
    param._id = param._id || new ObjectId();
    let options = { upsert: true, new: true, setDefaultsOnInsert: true }; // add or update
    return await Accommodation.findOneAndUpdate({ _id: param._id }, param, options);
};

// -------------------------------------------------------------------------------------
// notify and email template
async function getTemplates(body) {
    let templateData = require('../data/templateData');
    return templateData;
}

async function findRoomHotel(body) {
    let hotelID = body.hotelID,
        contractsID = body.contractsID;
    // beginDate = new Date(body.begindate),
    // endDate = new Date(body.enddate);

    const isAggregate = [
        { '$match': { _id: ObjectId(hotelID) } },
        { "$unwind": "$contracts" },
        { '$match': { "contracts._idContracts": contractsID } },
        {
            $project: {
                rooms: "$rooms",
                currency: '$contracts.currency',
                rules: '$contracts.rules',
                linkrules: '$contracts.linkrules',
                periods: '$contracts.periods',
                childPolicy: '$contracts.ChlidPolicy',
                cancelationpolicy: '$contracts.cancelation_policy',
                note_cancelation_policy: '$contracts.note_cancelation_policy',
                reservation: '$contracts.reservation',
            }
        },
        { "$unwind": "$periods" },
        {
            '$match': {
                'periods._type': "Normal",
                // $or: [{
                //     $and: [
                //         { 'periods.beginDate': { $lte: beginDate } },
                //         { 'periods.endDate': { $gte: beginDate } }
                //     ]
                // }, {
                //     $and: [
                //         { 'periods.beginDate': { $gte: endDate } },
                //         { 'periods.endDate': { $lte: endDate } },
                //     ]
                // }]
            }
        }
    ];
    return await Infohotel.aggregate(isAggregate).allowDiskUse(true);
}

//
async function getAgenctFinace(body) {
    let params = {};
    params.nation = body.nation
    params.LinkExcursions = { $ne: true };
    params.receivedpayment = { $exists: true, $not: { $size: 0 } };
    params.Proposalstatus = 'CONFIRMED';
    if (body.begindate && body.enddate) {
        let begindate = new Date(_filter.begindate);
        let endDate = new Date(_filter.enddate);
        params['$and'] = [{ "begindate": { $lte: begindate } },
        { "begindate": { $gte: endDate } }
        ];
    }
    if (body.ageny) {
        params.ageny = { $in: [body.ageny] }
    }
    const isAggregate = [
        { $match: params },
        {
            $project: {
                _id: '$_id',
                AmountInvoice: '$AmountInvoice',
                InvoicedRef: '$InvoicedRef',
                productCode: '$productCode',
                bookingName: '$bookingName',
                Curency: '$Curency',
                userCreate: '$userCreate',
                begindate: '$begindate',
                enddate: '$enddate',
                ageny: '$ageny',
                receivedpayment: '$receivedpayment'
            }
        }
    ];
    return await Tours.aggregate(isAggregate).allowDiskUse(true);
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
        filterBy['$and'] = [{ "Items_DirectMarkup.begindate": { $lte: _isDate } }, { "Items_DirectMarkup.enddate": { $gte: _isDate } }];
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
    if (_filter && _filter.Airlines) filterBy['Airlines'] = _filter.Airlines;
    if (_filter && _filter.class) filterBy['class'] = _filter.class;
    const isAggregate = [
        { $match: params },
        { $unwind: "$Items_DirectMarkup" },
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

// ------------------------------------------------------------- Hotel Info
async function showInfoContentHotel(params) {
    const isAggregate = [
        { $match: { _id: ObjectId(params.linkidHotel) } },
        { $unwind: "$contracts" },
        { $match: { 'contracts._idContracts': params._idContracts } },
        {
            $project: {
                note_chlidPolicy: '$contracts.note_chlidPolicy',
                Refurbishments: '$contracts.Refurbishments',
                note_rules: '$contracts.note_rules',
                note: '$contracts.note',
                Promotion: '$contracts.Promotion',
                note_cancelation_policy: '$contracts.note_cancelation_policy',
            }
        }
    ];
    return await Infohotel.aggregate(isAggregate).allowDiskUse(true).then(rs => {
        if (rs && rs.length > 0) return rs[0];
        else return false;
    });
}
async function linkidHotelsContent(params) {
    let lsId = []
    if (params.linkidHotels && params.linkidHotels.length) {
        params.linkidHotels.forEach(vl => {
            lsId.push(ObjectId(vl))
        });
    }
    const isAggregate = [
        {
            $match: { _id: { $in: lsId } }
        },
        {
            $project: {
                _id: '$_id',
                overView: '$overView',
                address: '$address',
                rating: '$rating',
                email: '$email',
                tel: '$tel',
                url: '$url',
                isActive: '$isActive'
            }
        }
    ];
    return await Infohotel.aggregate(isAggregate).allowDiskUse(true)
}
async function expireddaysupdateone(body) {
    return await Infohotel.updateOne({
        _id: ObjectId(body._id),
        'contracts._idContracts': body._idContracts
    }, { $set: helpes.setPrefix('contracts.$.', { isActive: body._isActive }) }, { upsert: false, multi: true })
}
async function expiredDays(body) {
    let endDate = body.date ? new Date(body.date) : new Date();
    endDate.setDate(endDate.getDate() - body.days);
    let params = {};
    params.nation = body.nation;
    params.isActive = true;
    return await Infohotel.aggregate([
        { $match: params },
        { $unwind: "$contracts" },
        {
            $match: {
                'contracts.isActive': true
            }
        },
        {
            $project: {
                _id: '$_id',
                name: '$name',
                location: '$City',
                _name: '$contracts.name',
                _beginDate: '$contracts.beginDate',
                _endDate: '$contracts.endDate',
                _currency: '$contracts.currency',
                _market: '$contracts.market',
                _isActive: '$contracts.isActive',
                _idContracts: '$contracts._idContracts',
                daysPassed: {
                    $divide: [{ $subtract: [endDate, '$contracts.endDate'] }, 1000 * 60 * 60 * 24]
                }
            }
        },
        {
            $match: {
                daysPassed: { $gte: 0 }
            }
        },
        {
            $sort: { daysPassed: -1 }
        }
    ]);
}

async function filter_Hotel(body) {
    let params = {};
    var re = new RegExp(body.search.toLowerCase(), 'i');
    params['$or'] = [
        { 'name': { $regex: re } }
    ];
    params.nation = body.nation;
    if (body.active != null)
        params.isActive = body.active;
    if (body.rating)
        params.rating = body.rating;
    if (body.City)
        params.City = convertObjectId(body.City);
    if (body.httype && body.httype.length)
        params.httype = { $in: body.httype };
    if (body.Category) {
        if (body.Category == 'Hotel') {
            params.Category = { $in: ['Hotel', undefined, null, ''] }
        } else params.Category = body.Category
    }
    let sort = {
        rating: -1, name: 1
    };
    sort[body.sort.field] = body.sort.dir === 'desc' ? -1 : 1;
    let sortgroup = {
        "_id.rating": -1, "_id.name": 1
    };
    sortgroup["_id." + body.sort.field] = body.sort.dir === 'desc' ? -1 : 1;
    const isAggregate = [
        { '$match': params },
        {
            $sort: sort
        },
        {
            "$project": {
                '_id': '$_id',
                'name': '$name',
                'brandName': '$brandName',
                'isActive': '$isActive',
                'location': '$location',
                'City': '$City',
                'address': '$address',
                'tel': '$tel',
                'email': '$email',
                'rating': '$rating',
                'DateCreate': '$DateCreate',
                'userCreate': '$userCreate',
                'DateUpdate': '$DateUpdate',
                'userUpdate': '$userUpdate',
                'contracts': '$contracts'
            }
        },
        {
            '$facet': {
                Metas: [{ $count: "total" }, { $addFields: { page: body._pageNumber } }],
                lsItems: [
                    {
                        $unwind: {
                            "path": "$contracts",
                            "preserveNullAndEmptyArrays": true
                        }
                    },
                    {
                        $project: {
                            '_id': '$_id',
                            'name': '$name',
                            'brandName': '$brandName',
                            'isActive': '$isActive',
                            'location': '$location',
                            'City': '$City',
                            'address': '$address',
                            'tel': '$tel',
                            'email': '$email',
                            'rating': '$rating',
                            'DateCreate': '$DateCreate',
                            'userCreate': '$userCreate',
                            'DateUpdate': '$DateUpdate',
                            'userUpdate': '$userUpdate',
                            _name: '$contracts.name',
                            _beginDate: '$contracts.beginDate',
                            _endDate: '$contracts.endDate',
                            _currency: '$contracts.currency',
                            _market: '$contracts.market',
                            _isActive: '$contracts.isActive',
                            _idContracts: '$contracts._idContracts',
                        }
                    },
                    {
                        $group: {
                            '_id': {
                                '_id': '$_id',
                                'name': '$name',
                                'brandName': '$brandName',
                                'isActive': '$isActive',
                                'location': '$location',
                                'City': '$City',
                                'address': '$address',
                                'tel': '$tel',
                                'email': '$email',
                                'rating': '$rating',
                                'rating': '$rating',
                                'DateCreate': '$DateCreate',
                                'userCreate': '$userCreate',
                                'DateUpdate': '$DateUpdate',
                                'userUpdate': '$userUpdate'
                            },
                            items: {
                                $push: {
                                    _name: '$_name',
                                    _beginDate: '$_beginDate',
                                    _endDate: '$_endDate',
                                    _currency: '$_currency',
                                    _market: '$_market',
                                    _isActive: '$_isActive',
                                    _idContracts: '$_idContracts',
                                }
                            }
                        }
                    },
                    {
                        $sort: sortgroup
                    },
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

async function getCountByhotel(params) {
    return await Infohotel.aggregate([
        { $match: params },
        {
            "$facet": {
                "Total_active": [
                    { "$match": { "isActive": true } },
                    { "$count": "isActive" },
                ],
                "Total_hotel": [
                    { "$count": "isActive" }
                ],
                "Total_contract_active": [
                    { "$match": { "isActive": true } },
                    { "$unwind": "$contracts" },
                    { "$match": { "contracts.isActive": true } },
                    { "$count": "contracts" }
                ],
                "Total_contract": [
                    { "$match": { "isActive": true } },
                    { "$unwind": "$contracts" },
                    { "$count": "contracts" }
                ]
            }
        },
        {
            "$project": {
                "Total_active": { "$arrayElemAt": ["$Total_active.isActive", 0] },
                "Total_hotel": { "$arrayElemAt": ["$Total_hotel.isActive", 0] },
                "Total_contract_active": { "$arrayElemAt": ["$Total_contract_active.contracts", 0] },
                "Total_contract": { "$arrayElemAt": ["$Total_contract.contracts", 0] },
            }
        }
    ]).allowDiskUse(true);
}

async function gethotel_info(body) {
    let params = {};
    var re = new RegExp(body.search.toLowerCase(), 'is');
    params['$or'] = [
        { 'name': { $regex: re } }
    ];
    if (body.rating)
        params.rating = body.rating;
    if (body.City)
        params.City = convertObjectId(body.City);

    if (body.Category) {
        if (body.Category == 'Hotel') {
            params.Category = { $in: ['Hotel', undefined, null, ''] }
        } else params.Category = body.Category
    }
    params.nation = body.nation;
    params.isActive = true;
    const isAggregate = [{
        $sort: { rating: -1, name: 1 }
    },
    { '$match': params },
    {
        "$project": {
            _id: '$_id',
            name: '$name',
            rating: '$rating',
            address: '$address',
            tel: '$tel',
            email: '$email',
            idCountry: '$idCountry',
            City: '$City',
            Area: '$Area'
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
    return await Infohotel.aggregate(isAggregate).allowDiskUse(true).then(rs => {
        return {
            total: rs[0].Metas && rs[0].Metas.length > 0 ? rs[0].Metas[0].total : 0,
            items: rs[0].lsItems
        }
    });
}

async function gethotel_byid(params) {
    return await Infohotel.findOne(params);
}

async function getonehotel(param) {
    param = await Joi.validate(param, onehotelSchema, { abortEarly: false });
    const rs = await Infohotel.findOne(param);
    return rs;
}

async function get_Hotels_ByIds(ids) {
    return await Infohotel.find().where('_id').in(ids).exec();
}

async function posthotel(param) {
    if (param.supplier) {
        let objectService = {
            _id: new ObjectId(),
            code: '',
            name: param.name,
            serviceType: 'Hotel'
        }
        var item = await Supplier.findOne({ _id: param.supplier });
        if (!item.ListService) item.ListService = [];
        item.ListService.push(objectService)
        var rep = await Supplier.findOneAndUpdate({ _id: item._id }, item, optionUpdate)
        if (rep) param._idService = objectService._id;
    }
    return await new Infohotel(param).save();
}

const optionUpdate_Hotel = { upsert: true, new: true, useFindAndModify: false, sort: { _id: -1 } };

async function puthotel(param) {
    // log
    let prehotel = await Infohotel.findOne({ _id: ObjectId(param._id) });
    let existCount = await InfohotelLog.countDocuments({ "hotel._id": ObjectId(param._id) });
    if (existCount === 0) {
        await new InfohotelLog({ hotel: prehotel }).save();
    }
    let hotel = await Infohotel.findOneAndUpdate({ _id: param._id }, param, optionUpdate);

    // log
    let hasChanged = hotelChangedCompare(hotel, prehotel);
    if (hasChanged) {
        let dateCompare = new Date(hotel.DateUpdate).setHours(0, 0, 0, 0) !== new Date(prehotel.DateUpdate).setHours(0, 0, 0, 0);
        let userCompare = hotel.userUpdate !== prehotel.userUpdate;

        if (existCount < 2 || dateCompare || userCompare) { // create  new log
            await new InfohotelLog({ hotel: hotel }).save();
        } else { // update last log by {user, today}
            let existLog = await InfohotelLog.findOneAndUpdate({ "hotel._id": ObjectId(hotel._id), "hotel.userUpdate": hotel.userUpdate }, { hotel: hotel },
                optionUpdate_Hotel);

        }
    }
    return hotel;
}


async function updateContactService(body) {
    let object = body.object;
    return await Supplier.update(
        { _id: body._id, "Contact._id": object._id },
        {
            $set: {
                "Contact.$.person": object.person,
                "Contact.$.title": object.title,
                "Contact.$.email": object.email,
                "Contact.$.tel": object.tel,
                "Contact.$.office": object.office,
            }
        }
    );
}
async function AddContactService(body) {
    let object = body.object;
    object._id = new ObjectId();
    await Supplier.update(
        { _id: body._id },
        { $push: { "Contact": object } }
    );
    return object;
}

async function UpdateContracyByID(body) {
    // log
    let prehotel = await Infohotel.findOne({ _id: ObjectId(body._id) });
    let existCount = await InfohotelLog.countDocuments({ "hotel._id": ObjectId(body._id) });
    if (existCount === 0) {
        await new InfohotelLog({ hotel: prehotel }).save();
    }

    // update
    let updateData = helpes.setPrefix('contracts.$.', body.params);
    updateData.DateUpdate = body.DateUpdate;
    updateData.userUpdate = body.userUpdate;

    const temp = await Infohotel.updateOne({
        _id: ObjectId(body._id),
        'contracts._idContracts': body._idContracts
    },
        // { $set: helpes.setPrefix('contracts.$.', body.params) },
        { $set: updateData }, { upsert: false, multi: true }
    );

    if (temp.ok == 1) {
        let hotel = await Infohotel.findOne({ _id: ObjectId(body._id) });

        // log
        let hasChanged = hotelChangedCompare(hotel, prehotel);
        if (hasChanged) {
            let dateCompare = new Date(hotel.DateUpdate).setHours(0, 0, 0, 0) !== new Date(prehotel.DateUpdate).setHours(0, 0, 0, 0);
            let userCompare = hotel.userUpdate !== prehotel.userUpdate;

            if (existCount < 2 || dateCompare || userCompare) { // create  new log
                await new InfohotelLog({ hotel: hotel }).save();
            } else { // update last log by {user, today}
                let existLog = await InfohotelLog.findOneAndUpdate({ "hotel._id": ObjectId(hotel._id), "hotel.userUpdate": hotel.userUpdate }, { hotel: hotel },
                    optionUpdate_Hotel);

            }
        }

        return {
            ok: 1,
            item: hotel
        }
    } else return {
        ok: 0,
        item: null
    }
}

async function deletehotel(param) {
    return await Infohotel.deleteOne({ _id: param._id });
}

function hotelChangedCompare(_hotel, _prehotel) {
    let hotel = JSON.parse(JSON.stringify(_hotel));
    let prehotel = JSON.parse(JSON.stringify(_prehotel));

    // hack
    hotel.DateUpdate = null;
    prehotel.DateUpdate = null;
    hotel.userUpdate = null;
    prehotel.userUpdate = null;

    // compare for diff
    if (objectDiffSameType(hotel, prehotel)) {
        return true;
    }

    if (objectDiffSameType(prehotel, hotel)) {
        return true;
    }

    return false;
}
// ------------------------------------------------------------- Hotel Info End

// ------------------------------------------------------------- Hotel Info Log
async function list_hotel_audit_logs(param) {
    // let abc = 0;
    let tours = await InfohotelLog
        .find({ "hotel._id": param.id })
        .sort('-_id')
        .select('hotel._id hotel.userUpdate hotel.DateUpdate')
        .exec();

    return tours;
}
async function get_hotel_audit_log(param) {
    let hotel = await InfohotelLog.findOne({ _id: param.id });
    let prehotel = await InfohotelLog
        .findOne({ $and: [{ "hotel._id": hotel.hotel._id }, { _id: { $lt: param.id } }] })
        .sort({ _id: -1 });

    return [hotel, prehotel];
}
// ------------------------------------------------------------- Hotel Info Log End

//
async function reportAgent(body) {
    let params = {},
        _filter = body._filter;
    if (_filter && _filter.enddate && _filter.begindate && _filter.enddate !== '' && _filter.begindate !== '') {
        params['$and'] = [{ "TimeDate": { $gte: new Date(_filter.begindate) } }, { "TimeDate": { $lte: new Date(_filter.enddate) } }];
    }
    const isAggregate = [
        { $match: { nation: body.nation } },
        {
            $sort: { TimeDate: -1 }
        },
        { $match: params },
        {
            $group: {
                "_id": {
                    Agent: '$Agent',
                    ip: '$ip',
                    country: '$country',
                    region: '$region'
                },
                count: { $sum: 1 }
            }
        }, {
            $project: {
                _id: '$_id.Agent',
                ip: '$_id.ip',
                country: '$_id.country',
                region: '$_id.region',
                count: '$count'
            }
        }
    ];
    return await Logclients.aggregate(isAggregate).allowDiskUse(true);
}

async function get_reportHotel_Statistic(body) {
    var _filter = body._filter,
        params = {};
    params.nation = body.nation;
    params.LinkExcursions = { $ne: true };
    params.Proposalstatus = 'CONFIRMED';
    if (_filter && _filter.enddate && _filter.begindate && _filter.enddate !== '' && _filter.begindate !== '') {
        params['$and'] = [{ "begindate": { $gte: new Date(_filter.begindate) } }, { "begindate": { $lte: new Date(_filter.enddate) } }];
    }
    const exchangeRate = await ExchangeRate.find({ nation: body.nation });
    return await Tours.aggregate([
        { $match: params },
        {
            $project: {
                month: { $month: "$begindate" },
                year: { $year: "$begindate" },
                Items_Calculator: '$Items_Calculator',
                productCode: "$productCode",
                bookingName: "$bookingName",
                begindate: "$begindate",
                enddate: "$enddate",
                Curency: "$Curency",
            }
        },
        { $unwind: "$Items_Calculator" },
        {
            $group: {
                "_id": "$Items_Calculator.linknameHotel",
                totalnoofnights: { $sum: { $multiply: ["$Items_Calculator.noofnights"] } },
                TotalPrice: { $sum: { $multiply: ["$Items_Calculator.shareroom", "$Items_Calculator.noofnights"] } },
                items: {
                    $push: {
                        productCode: "$productCode",
                        _id: "$_id",
                        bookingName: "$bookingName",
                        begindate: "$begindate",
                        enddate: "$enddate",
                        month: "$month",
                        year: "$year",
                        roomcategory: "$Items_Calculator.roomcategory",
                        shareroom: "$Items_Calculator.shareroom",
                        noofnights: "$Items_Calculator.noofnights",
                        unit_night: "$Items_Calculator.unit_night",
                        unit_NoRoom: "$Items_Calculator.unit_NoRoom",
                        sgl_night: "$Items_Calculator.sgl_night",
                        sgl_NoRoom: "$Items_Calculator.sgl_NoRoom",
                        Curency: "$Curency"
                    }
                },
                "TotalLink": { $sum: 1 }
            }
        },
        {
            $sort: { totalnoofnights: -1 }
        },
        { $match: { '_id': { '$ne': null } } }
    ]).allowDiskUse(true)
        .then(rs => {
            return {
                data: rs,
                exchangeRate: exchangeRate
            }
        });
}
async function get_dataProductstatistic(body) {
    var _filter = body._filter;
    var params = {};
    var _pageNumber = body._pageNumber,
        _pageSize = body._pageSize;

    params.isActive = true;
    params.nation = body.nation;
    params.LinkExcursions = { $ne: true };
    let $tilte = '';
    if (_filter && _filter.category) {
        $tilte = 'category';
        params.category = { $in: _filter.category }
    }
    if (_filter && _filter.duration) {
        $tilte = 'duration';
        params.duration = { $in: _filter.duration }
    }
    if (_filter && _filter.location && _filter.location.length > 0) {
        var ischeck = false;
        for (var i = _filter.location.length - 1; i >= 0; i--) {

            if (_filter.location[i] === '--') {
                ischeck = true;
                break;
            }
        }
        if (!ischeck)
            params.location = { $in: [_filter.location] }
    }
    if (_filter && _filter.begindate && _filter.enddate) {
        params['$and'] = [{ "begindate": { $gte: new Date(_filter.begindate) } }, { "begindate": { $lte: new Date(_filter.enddate) } }];
    }
    params.ValueEditModel = { $in: ['EXCURSIONS', 'PACKAGE'] };
    const isAggregate = [
        { '$match': params },
        {
            "$project": {
                '_id': '$_id',
                'productCode': '$productCode',
                'category': '$category',
                'duration': '$duration',
                'enddate': '$enddate',
                'begindate': '$begindate',
                'market': '$market',
                'province': '$province',
                'area': '$area',
                'location': '$location',
                'bookingName': '$bookingName',
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
    ];
    const rsData = await Tours.aggregate(isAggregate).allowDiskUse(true)
    var json = {
        count: rsData && rsData[0].Metas && rsData[0].Metas[0] && rsData[0].Metas[0].total ? rsData[0].Metas[0].total : 0,
        data: rsData && rsData[0] && rsData[0].lsItems ? rsData[0].lsItems : []
    }
    return json;
}
async function get_ListFullDataByLocation(body) {
    var _filter = body._filter;
    var params = {};
    params.isActive = true;
    params.nation = body.nation;
    params.LinkExcursions = { $ne: true };
    if (_filter && _filter.location && _filter.location.length > 0) {
        var ischeck = false;
        for (var i = _filter.location.length - 1; i >= 0; i--) {

            if (_filter.location[i] === '--') {
                ischeck = true;
                break;
            }
        }
        if (!ischeck)
            params.location = { $in: [_filter.location] }
    }
    if (_filter && _filter.begindate && _filter.enddate) {
        params['$and'] = [{ "begindate": { $gte: new Date(_filter.begindate) } }, { "begindate": { $lte: new Date(_filter.enddate) } }];
    }
    params.ValueEditModel = { $in: ['EXCURSIONS', 'PACKAGE'] };
    const lscategory = await Tours.aggregate(
        [
            { $match: params },
            {
                "$project": {
                    '_id': '$_id',
                    'category': '$category'
                }
            },
            { $unwind: "$category" },
            { "$group": { _id: "$category", count: { $sum: 1 } } }
        ]
    ).allowDiskUse(true);
    const lsduration = await Tours.aggregate(
        [
            { $match: params },
            {
                "$project": {
                    '_id': '$_id',
                    'duration': '$duration',
                }
            },
            { "$group": { _id: "$duration", count: { $sum: 1 } } }
        ]
    ).allowDiskUse(true);
    var json = {
        lsDuration: lsduration,
        lsCategory: lscategory
    }
    return json;
}
async function add_image(param) {
    return await new Lsimage(param).save();
}
async function delete_image(param) {
    return await Lsimage.deleteOne({ _id: param._id });
}
async function add_folder(param) {
    return await new Folder(param).save();
}
async function update_folder(param) {
    return await Folder.findOneAndUpdate({ _id: param._id }, param, optionUpdate);
}
async function delete_folder(param) {
    return await Folder.deleteOne({ _id: param._id });
}

async function GetImagesBy(params) {
    return await Lsimage.find(params);
}
async function Getfolder(params) {
    return await Folder.find(params);
}
async function get_operation(body) {
    const Excr = await ExchangeRate.find({ nation: body.nation });
    return await Tours.aggregate([
        { $match: { $or: [{ _id: convertObjectId(body._id) }, { _idCode: body._id }] } }
    ]).allowDiskUse(true).then(rs => {
        return {
            items: rs,
            ExchangeRate: Excr
        }
    });
}

async function getAgenct(filter) {
    let params = {};
    params.nation = filter.nation
    return await Procodes.aggregate([
        { $match: params },
        {
            "$lookup": {
                "from": "gents_onlines",
                'localField': 'gents_onlines',
                'foreignField': '_id',
                "as": "items"
            }
        },
        { $unwind: '$items' },
        {
            "$project": {
                '_id': '$_id',
                'md5code': '$md5code',
                'cmarket': '$cmarket',
                'period': '$period',
                'name': '$items.name',
                'ref': '$items.ref',
                'isoReps': '$isoReps',
            }
        }
    ]).allowDiskUse(true);
}
async function get_ListLinkByCode(params) {
    let isAggregate = [
        { '$match': params },
        {
            "$project": {
                'productCode': '$productCode',
                'Code': '$Code',
            }
        },
        {
            "$group": {
                '_id': '$productCode',
                details: {
                    $push: "$Code"
                }
            }
        },
    ];
    const ls = await Tours.aggregate(isAggregate).allowDiskUse(true);
    if (ls) {
        return await Tours.aggregate([{
            '$match': {
                LinkExcursions: { $ne: true },
                productCode: { $in: ls[0].details }
            }
        },
        {
            "$project": {
                '_id': '$_id',
                'productCode': '$productCode',
                'bookingName': '$bookingName',
                'userCreate': '$userCreate',
                'location': '$location',
                'market': '$market',
                'Code': '$Code',
                'begindate': '$begindate',
                'DateCreate': '$DateCreate',
                'enddate': '$enddate',
                'Isid': '$Isid',
                'Proposalstatus': '$Proposalstatus',
            }
        }
        ]).allowDiskUse(true);
    } else return [];
}
async function get_reportLinkProduct(filter) {
    let params = {};
    params['$and'] = [{ "begindate": { $gte: new Date(filter.begindate) } }, { "begindate": { $lte: new Date(filter.enddate) } }];
    params.LinkExcursions = true;
    params.nation = filter.nation;
    return await Tours.aggregate([
        { $match: params },
        {
            $group: {
                "_id": '$productCode',
                count: { $sum: 1 }
            }
        }
    ]).allowDiskUse(true);
}
async function getDataByProposalstatus(filter) {
    let params = {};
    params.ValueEditModel = 'PROPOSAL';
    params.nation = filter.nation;
    if (filter && filter.userCreate && filter.userCreate !== '') {
        params.userCreate = filter.userCreate;
    }
    if (filter.Proposalstatus)
        params.Proposalstatus = filter.Proposalstatus;
    if (filter.begindate && filter.enddate)
        params['$and'] = [{ "begindate": { $gte: new Date(filter.begindate) } }, { "begindate": { $lte: new Date(filter.enddate) } }];
    const exchangeRate = await ExchangeRate.find({ nation: filter.nation });
    const lsData = await Tours.aggregate([
        { $match: params },
        {
            $project: {
                _id: '$_id',
                productCode: '$productCode',
                bookingName: '$bookingName',
                market: '$market',
                ageny: '$ageny',
                location: '$location',
                userCreate: '$userCreate',
                begindate: '$begindate',
                enddate: '$enddate',
                Curency: '$Curency',
                numberpax_adults: '$numberpax_adults',
                numberpax_child: '$numberpax_child',
                grandTotal: '$grandTotal',
                Proposalstatus: '$Proposalstatus',

                SumpriceGroup: '$SumpriceGroup',
                SumtotalAssigned: '$SumtotalAssigned',
                SumProfit: '$SumProfit',
                SumbMargin: '$SumbMargin',
                Total_SellOperator: '$Total_SellOperator',
                SumProfitSellOperator: '$SumProfitSellOperator',
                SumbMarginSellOperator: '$SumbMarginSellOperator',
            }
        }
    ]).allowDiskUse(true);

    return {
        ExchangeRate: exchangeRate,
        items: lsData
    }
}
async function getCountByProposalstatus(body) {
    let params = {};
    if (body.begindate && body.enddate)
        params['$and'] = [{ "begindate": { $gte: new Date(body.begindate) } }, { "begindate": { $lte: new Date(body.enddate) } }];
    if (body.userCreate)
        params.userCreate = body.userCreate;
    params.ValueEditModel = 'PROPOSAL';
    params.nation = body.nation;
    return await Tours.aggregate([
        { $match: params },
        {
            "$facet": {
                "Total_New": [
                    { "$match": { "Proposalstatus": 'NEW' } },
                    { "$count": "Proposalstatus" },
                ],
                "Total_Cancel": [
                    { "$match": { "Proposalstatus": { '$in': ['CANCELLED with Charge', 'CANCELLED without Charge'] } } },
                    { "$count": "Proposalstatus" }
                ],
                "Total_Confirmed": [
                    { "$match": { "Proposalstatus": 'CONFIRMED' } },
                    { "$count": "Proposalstatus" }
                ]
            }
        },
        {
            "$project": {
                "Total_New": { "$arrayElemAt": ["$Total_New.Proposalstatus", 0] },
                "Total_Cancel": { "$arrayElemAt": ["$Total_Cancel.Proposalstatus", 0] },
                "Total_Confirmed": { "$arrayElemAt": ["$Total_Confirmed.Proposalstatus", 0] }
            }
        }
    ]).allowDiskUse(true);
}
async function getNumberCode(body) {
    let params = {};
    params.ValueEditModel = 'PROPOSAL';
    params.nation = body.nation;
    params.userCreate = body.userCreate;
    return await Tours.aggregate([
        { $match: params },
        { $group: { _id: "$productCode", count: { $sum: 1 } } },
        {
            $count: "number"
        }
    ]).allowDiskUse(true);
}

async function revisedata(body) {
    if (body.changeMax) {
        var list = await Tours.aggregate([{
            '$match': {
                nation: 'vn',
                isActive: true,
                LinkExcursions: { $ne: true },
                begindate: { $gt: new Date("2020/10/31") },
                ValueEditModel: { $in: ["EXCURSIONS", "PACKAGE"] },
            }
        },
        { $unwind: "$Items_Calculator" },
        {
            '$match': {
                "Items_Calculator.types": "Vehicle",
                "Items_Calculator.linkBy": "Service",
                "Items_Calculator.listOrtherData": { $elemMatch: { "max": 25 } }
            }
        },
        {
            $group: {
                _id: "$_id"
            }
        }
        ]).allowDiskUse(true);
        let tempID = [];
        for (const imte of list) {
            tempID.push(imte._id)
        }
        return await Tours.find({ _id: { $in: tempID } });
    } else {
        var _idPeriodsService = body._idPeriodsService;
        if (_idPeriodsService) {
            var params = {
                "ValueEditModel": { $in: ['EXCURSIONS', 'PACKAGE'] },
                "Items_Calculator": { $elemMatch: { "_idPeriodsService": _idPeriodsService } }
            }
            params.LinkExcursions = { $ne: true };
            return await Tours.find(params);
        } else return [];
    }

}
async function _countOptionService(params) {
    var object = await Service.findOne(params).sort({ optionNumber: -1 }).limit(1)
    if (object && object.optionNumber) return object.optionNumber || 0;
    else await Service.count(params)
}
async function _SupplierfindOne(params) {
    return await Supplier.findOne(params)
}

async function _Supplier_get_for_Service(params) {
    return await Supplier.aggregate([
        { $match: params },
        {
            $project: {
                _id: '$_id',
                Isid: '$Isid',
                name: '$name',
                ServiceName: '$ServiceName',
                shortname: '$shortname',
                servicetypes: '$servicetypes',
                phone: '$phone',
                email: '$email',
                txtID: '$txtID',
                numberID: '$numberID',
                supplierID: '$supplierID',
                ListService: '$ListService'
            }
        }
    ]).allowDiskUse(true);
}

async function _Supplier_get_for_operation(params) {
    return await Supplier.aggregate([
        { $match: params },
        {
            $project: {
                _id: '$_id',
                Isid: '$Isid',
                name: '$name',
                ServiceName: '$ServiceName',
                shortname: '$shortname',
                servicetypes: '$servicetypes',
                language: '$language',
                location: '$location',
                phone: '$phone',
                email: '$email'
            }
        }
    ]).allowDiskUse(true);
}

// Function for Services
async function random_code_Service(params) {
    return await Service.findOne(params).then(rs => {
        if (rs && rs.CodeService) return true;
        else return false
    });
}
async function _Service_Get_DataByParams(body) {
    const page = body.page;
    let params = {},
        _filter = body._filter;
    params.nation = _filter.nation;
    if (_filter && _filter.location && _filter.location !== "" && _filter.location !== "--")
        params.location = { $in: [_filter.location] };
    if (_filter && _filter.language && _filter.language !== "" && _filter.language !== "--")
        params.language = { $in: [_filter.language] };
    if (_filter && _filter.supplierServiceID && _filter.supplierServiceID !== "" && _filter.supplierServiceID !== "--")
        params.supplierServiceID = { $in: [_filter.supplierServiceID] };
    if (_filter && _filter.serviceType && _filter.serviceType !== "" && _filter.serviceType !== "--")
        params.types = { $in: [_filter.serviceType] };
    params['Period.isActive'] = _filter.isActive || false;
    if (_filter.name) {
        var re = new RegExp(_filter.name, 'i');
        params['$or'] = [
            { 'name': { $regex: re } },
            { 'supplierID': { $regex: re } },
            { 'serviceID': { $regex: re } },
            { 'optionID': { $regex: re } }
        ]
    }
    if (_filter && _filter.day) {
        let _isDate = new Date(_filter.day);
        _isDate.setDate(_isDate.getDate() + 1);
        params['$and'] = [{ "Period.beginDate": { $lte: _isDate } }, { "Period.endDate": { $gte: _isDate } }];
    }
    const isAggregate = [
        { $sort: { DateUpdate: -1 } },
        { "$unwind": "$Period" },
        { '$match': params },
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
    var data = await Service.aggregate(isAggregate).allowDiskUse(true);
    if (data && data[0] && data[0].lsItems) {
        const _id = data[0].lsItems.map(({ supplierServiceID }) => supplierServiceID);
        var Sups = await Supplier.find({ 'ListService._id': { $in: _id } });
        data[0].lsItems.forEach(d => {
            let supplier = Sups.find(x => x.supplierID === d.supplierID)
            if (supplier && supplier.ListService) {
                d.supplier = supplier.name;
                supplier.ListService.forEach(x => {
                    if (x._id === d.supplierServiceID) {
                        d.supplierID = ser.serviceID
                        d.ServiceName = ser.supplierServiceName
                    }
                })
            }
        })
    }
    return data
}
async function _Service_Get_Export(body) {
    let params = {},
        _filter = body._filter;
    params.nation = _filter.nation;
    if (_filter && _filter.location && _filter.location !== "" && _filter.location !== "--")
        params.location = { $in: [_filter.location] };
    if (_filter && _filter.supplier && _filter.supplier !== "" && _filter.supplier !== "--")
        params.supplier = { $in: [_filter.supplier] };
    if (_filter && _filter.serviceType && _filter.serviceType !== "" && _filter.serviceType !== "--")
        params.types = { $in: [_filter.serviceType] };
    params['Period.isActive'] = _filter.isActive || false;
    if (_filter.name) {
        var re = new RegExp(_filter.name, 'i');
        params['$or'] = [
            { 'name': { $regex: re } },
            { 'supplierID': { $regex: re } },
            { 'serviceID': { $regex: re } },
            { 'optionID': { $regex: re } }
        ]
    }
    if (_filter && _filter.day) {
        let _isDate = new Date(_filter.day);
        _isDate.setDate(_isDate.getDate() + 1);
        params['$and'] = [{ "Period.beginDate": { $lte: _isDate } }, { "Period.endDate": { $gte: _isDate } }];
    }
    const isAggregate = [
        { $sort: { DateUpdate: -1 } },
        { "$unwind": "$Period" },
        { '$match': params },
        {
            $project: {
                _id: '$_id',
                supplierID: '$supplierID',
                PriceType: '$PriceType',
                supplier: '$supplier',
                serviceID: '$serviceID',
                ServiceName: '$ServiceName',
                optionID: '$optionID',
                name: '$name',
                types: '$types',
                location: '$location',
                from: '$Period.beginDate',
                to: '$Period.endDate',
                currency: '$Period.currency',
                price: '$Period.price',
                min: '$Period.min',
                max: '$Period.max',
                inputlist: '$Period.inputlist',
                list: '$Period.list',
                isActive: '$Period.isActive',
            }
        }
    ];
    return await Service.aggregate(isAggregate).allowDiskUse(true);
}
async function add_Services(param) {
    return await new Service(param).save();
}
async function find_Services(param) {
    return await Service.findOne(param);
}
async function findIDs_Services(param) {
    return await Service.find(param);
}

async function update_Services(param) {
    return await Service.findOneAndUpdate({ _id: param._id }, param, optionUpdate);
}
async function FixMaxServices() {
    var list = await Service.aggregate([{
        '$match': {
            nation: 'vn',
            types: 'Vehicle',
            PriceType: "PRICE-BAND",
        }
    }, { $unwind: "$Period" },
    {
        '$match': {
            "Period.list": { $elemMatch: { "max": 25 } }
        }
    },
    {
        $group: {
            _id: "$_id"
        }
    }
    ]);
    let tempID = [];
    for (const imte of list) {
        tempID.push(imte._id)
    }
    console.log(tempID);
    return await Service.find({ _id: { $in: tempID } });
}

async function delete_Services(param) {
    return await Service.deleteOne({ _id: param._id });
}
//
async function get_Services_ByIds(ids) {
    return await Service.find().where('_id').in(ids).exec();
}
// Function for Import Data

// End Function for Import Data.
async function get_treeGeopath_tera(param) {
    let temp = {
        nation: param.nation
    }
    let aggregate = [
        { $match: temp },
        { $sort: { name: 1 } },
        {
            "$lookup": {
                "from": "cities",
                "let": { "citiesID": "$_id" },
                "pipeline": [
                    { "$match": { "$expr": { "$eq": ["$Province", "$$citiesID"] } } },
                    {
                        "$lookup": {
                            "from": "areas",
                            "let": { "areasId": "$_id" },
                            "pipeline": [
                                { "$match": { "$expr": { "$eq": ["$City", "$$areasId"] } } }
                            ],
                            "as": "items"
                        }
                    }
                ],
                "as": "items"
            }
        }
    ];
    return await Province.aggregate(aggregate).allowDiskUse(true);
}
async function get_treeGeopath(param) {
    param.name = { $ne: undefined }
    if (param.nation !== 'ca' && param.nation !== 'la') {
        let aggregate = [
            { $match: { nation: param.nation } },
            {
                "$lookup": {
                    "from": "provinces",
                    "let": { "provinID": "$_id" },
                    "pipeline": [
                        { "$match": { "$expr": { "$eq": ["$Zone", "$$provinID"] } } },
                        {
                            "$lookup": {
                                "from": "cities",
                                "let": { "citiesID": "$_id" },
                                "pipeline": [
                                    { "$match": { "$expr": { "$eq": ["$Province", "$$citiesID"] } } },
                                    {
                                        "$lookup": {
                                            "from": "areas",
                                            "let": { "areasId": "$_id" },
                                            "pipeline": [
                                                { "$match": { "$expr": { "$eq": ["$City", "$$areasId"] } } }
                                            ],
                                            "as": "items"
                                        }
                                    }
                                ],
                                "as": "items"
                            }
                        }
                    ],
                    "as": "items"
                }
            }
        ];
        return await Zone.aggregate(aggregate).allowDiskUse(true);
    } else {
        let aggregate = [
            { $match: { nation: param.nation } },
            {
                "$lookup": {
                    "from": "cities",
                    "let": { "citiesID": "$_id" },
                    "pipeline": [
                        { "$match": { "$expr": { "$eq": ["$Province", "$$citiesID"] } } },
                        {
                            "$lookup": {
                                "from": "areas",
                                "let": { "areasId": "$_id" },
                                "pipeline": [
                                    { "$match": { "$expr": { "$eq": ["$City", "$$areasId"] } } }
                                ],
                                "as": "items"
                            }
                        }
                    ],
                    "as": "items"
                }
            }
        ];
        return await Province.aggregate(aggregate).allowDiskUse(true);
    }
}

function uniqId() {
    return md5(Math.round(new Date().getTime() + (Math.random() * 100000)).toString());
}

function checktype(action) {
    let txt = '';
    switch (action) {
        case '0':
            txt = 'Normal';
            break;
        case '1':
            txt = 'Promotion';
            break;
        case '2':
            txt = 'Refurbish';
            break;
        case '9':
            txt = 'ExtraSurcharge';
            break;
        case '4':
            txt = 'Rule';
            break;
    }
    return txt;
}

async function list_Area(param) {
    if (param.City && param.City !== 'ca')
        param.City = convertObjectId(param.City)
    return await Area.find(param);
}
async function add_Area(param) {
    return await new Area(param).save();
}
async function update_Area(param) {
    return await Area.findOneAndUpdate({ _id: param._id }, param, optionUpdate);
}
async function delete_Area(param) {
    return await Area.deleteOne({ _id: param._id });
}

async function list_City(params) {
    return await City.find(params);
}
async function add_City(param) {
    return await new City(param).save();
}
async function update_City(param) {
    return await City.findOneAndUpdate({ _id: param._id }, param, optionUpdate);
}
async function delete_City(param) {
    return await City.deleteOne({ _id: param._id });
}



async function list_Airports(params) {
    return await Airportcode.find(params);
}
async function add_Airports(param) {
    return await new Airportcode(param).save();
}
async function update_Airports(param) {
    return await Airportcode.findOneAndUpdate({ _id: param._id }, param, optionUpdate);
}
async function delete_Airports(param) {
    return await Airportcode.deleteOne({ _id: param._id });
}

async function list_Topup(params) {
    return await Topup.find(params);
}
async function add_Topup(param) {
    return await new Topup(param).save();
}
async function update_Topup(param) {
    return await Topup.findOneAndUpdate({ _id: param._id }, param, optionUpdate);
}
async function delete_Topup(param) {
    return await Topup.deleteOne({ _id: param._id });
}

async function list_Zone(params) {
    return await Zone.find(params);
}
async function add_Zone(param) {
    return await new Zone(param).save();
}
async function update_Zone(param) {
    return await Zone.findOneAndUpdate({ _id: param._id }, param, optionUpdate);
}
async function delete_Zone(param) {
    return await Zone.deleteOne({ _id: param._id });
}


async function list_Province(params) {
    return await Province.find(params);
}
async function add_Province(param) {
    return await new Province(param).save();
}
async function update_Province(param) {
    return await Province.findOneAndUpdate({ _id: param._id }, param, optionUpdate);
}
async function delete_Province(param) {
    return await Province.deleteOne({ _id: param._id });
}

//
async function find_one_link_excursions(body) {
    let params = {};
    params.LinkExcursions = true;
    params.Isid = body.Isid;
    params._idCode = body._idCode;
    return await Tours.findOne(params);
}
async function findOneitemExcursions(body) {
    let params = {};
    params.LinkExcursions = true;
    params.Isid = body.Isid;
    params._linkVersion = body._linkVersion;
    return await Tours.findOne(params);
}

async function list_Airlines(body) {
    let params = {};
    params.nation = body.nation;
    return await Airlines.aggregate([
        // { '$match': params },
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
async function add_Airlines(param) {
    return await new Airlines(param).save();
}
async function update_Airlines(param) {
    return await Airlines.findOneAndUpdate({ _id: param._id }, param, optionUpdate);
}
async function delete_Airlines(param) {
    return await Airlines.deleteOne({ _id: param._id });
}

// ------------------------------------------------------------- TariffPeriod
async function list_TariffPeriod(params) {
    return await TariffPeriod.find(params);
}
async function add_TariffPeriod(param) {
    return await new TariffPeriod(param).save();
}
async function update_TariffPeriod(param) {
    return await TariffPeriod.findOneAndUpdate({ _id: param._id }, param, optionUpdate);
}
async function delete_TariffPeriod(param) {
    return await TariffPeriod.deleteOne({ _id: param._id });
}
async function GetperiodeClient(params) {
    params.tariffType = "client";
    const temp = await TariffPeriod.findOne(params);
    if (temp)
        return temp.lsPeriod
    else return null;
}
// ------------------------------------------------------------- TariffPeriod End

async function get_DataServiceForEdit(body) {
    var _pageNumber = body._pageNumber,
        _pageSize = body._pageSize,
        _filter = body._filter;
    var params = {};
    params.nation = { $in: [_filter.nation] };
    params.isActive = true;
    if (_filter && _filter.Geotree && _filter.Geotree !== "")
        params.location = { $in: [_filter.Geotree] };
    if (_filter && _filter.supplierServiceID && _filter.supplierServiceID !== "")
        params.supplierServiceID = { $in: [_filter.supplierServiceID] };
    if (_filter && _filter.ServiceType && _filter.ServiceType !== "")
        params.types = { $in: [_filter.ServiceType] };
    if (_filter && _filter.name && _filter.name !== "") {
        var re = new RegExp(_filter.name.toLowerCase(), 'i');
        params['$or'] = [
            { 'name': { $regex: re } },
            { 'ServiceName': { $regex: re } },
            { 'supplier': { $regex: re } },
            { 'supplierID': { $regex: re } },
            { 'serviceID': { $regex: re } },
            { 'optionID': { $regex: re } }
        ]
    }
    if (_filter && _filter.Date) {
        let _isDate = new Date(_filter.Date);
        _isDate.setDate(_isDate.getDate() + 1);
        params['$and'] = [{ "beginDate": { $lte: _isDate } }, { "endDate": { $gte: _isDate } }];
    }
    // Diều kiện Lọc data.
    if (body.name === 'Group / Person') {
        params.PriceType = 'GROUP-PERSON'
    } else if (body.name === 'Accumulated') {
        params.PriceType = 'ACCUMULATED'
    } else if (body.name === 'Price Band') {
        params.PriceType = 'PRICE-BAND'
    }
    // if(_filter.isEducation){
    //     params.companyId = _filter.companyId;
    //     params.courseId = _filter.courseId;
    //     params.classId = _filter.classId;
    //     // params.departmentId = _filter.departmentId;
    // }
    let page = {
        $facet: {
            lsItems: [
                { $skip: _pageSize * (_pageNumber - 1) },
                { $limit: _pageSize },
            ],
            Metas: [{ $count: "total" }, { $addFields: { page: _pageNumber } }],
        }
    };
    return await Service.aggregate([
        { "$unwind": "$Period" },
        {
            $project: {
                _id: '$_id',
                nation: '$nation',
                types: '$types',
                IsItem: '$IsItem',
                CodeService: '$CodeService',
                category: '$category',
                name: '$name',
                location: '$location',
                ServiceName: '$ServiceName',
                supplier: '$supplier',
                flightFromCity: '$flightFromCity',
                flightToCity: '$flightToCity',
                Airlines: '$Airlines',
                class: '$class',
                address: '$address',
                supplierTourCode: '$supplierTourCode',
                PriceType: '$PriceType',
                _idPeriodsService: '$Period._id',
                beginDate: '$Period.beginDate',
                endDate: '$Period.endDate',
                _name: '$Period.name',
                min: '$Period.min',
                max: '$Period.max',
                price: '$Period.price',
                currency: '$Period.currency',
                list: '$Period.list',
                isActive: '$Period.isActive',
                typeForValue: '$Period.typeForValue',
                byForValue: '$Period.byForValue',
                isValueChange: '$Period.isValueChange',
                typeBased: '$Period.typeBased',
                inputlist: '$Period.inputlist',
                supplierID: '$supplierID',
                serviceID: '$serviceID',
                supplierServiceID: '$supplierServiceID',
                optionID: '$optionID',
                contents: '$Period.contents',
                Surcharges: '$Surcharges',
            }
        },
        { $match: params },
        page
    ]).allowDiskUse(true).then(rs => {
        return {
            total: rs[0].Metas && rs[0].Metas.length > 0 ? rs[0].Metas[0].total : 0,
            items: rs[0].lsItems
        }
    });
}

// Tours
// -----------------------------------------------------------------------

async function list_ServiceType(params) {
    return await ServiceType.find(params);
}
async function add_ServiceType(param) {
    return await new ServiceType(param).save();
}
async function update_ServiceType(param) {
    return await ServiceType.findOneAndUpdate({ _id: param._id }, param, optionUpdate);
}
async function delete_ServiceType(param) {
    return await ServiceType.deleteOne({ _id: param._id });
}

// Tours
// -----------------------------------------------------------------------
async function find_Supplier(body) {
    return await Supplier.aggregate([
        { '$match': { nation: body.nation } },
        {
            $project: {
                _id: '$_id',
                Isid: '$Isid',
                name: '$name',
                shortname: '$shortname',
                ListService: '$ListService',
                validbegin: '$validbegin',
                validend: '$validend',
                code: '$code'
            }
        }
    ]);
}
async function filterService(body) {
    let params = {},
        _pageSize = body._pageSize,
        _pageNumber = body._pageNumber,
        _filter = body._filter;
    if (_filter && _filter.city) {
        params.city = _filter.city
    }
    if (_filter && _filter.servicetypes && _filter.servicetypes.length > 0) {
        params.servicetypes = { $in: _filter.servicetypes }
    }
    _filter.search = _filter.search ? _filter.search : '';
    var re = new RegExp(_filter.search.trim().toLowerCase(), 'i');
    params['$or'] = [
        { 'name': { $regex: re } },
        { 'ServiceName': { $regex: re } },
        { 'servicetypes': { $regex: re } },
        { 'status': { $regex: re } },
        { 'Note': { $regex: re } },
        { 'contractAgreement': { $regex: re } }
    ];
    const isAggregate = [
        { '$match': { nation: body.nation, Service: { $exists: true, $not: { $size: 0 } } } },
        { $sort: { name: 1 } },
        { "$unwind": "$Service" },
        {
            $project: {
                _id: '$_id',
                Isid: '$Isid',
                name: '$name',
                city: '$location',
                ServiceName: '$Service.ServiceName',
                servicetypes: '$Service.servicetypes',
                contractAgreement: '$Service.contractAgreement',
                validFrom: '$Service.validFrom',
                validTo: '$Service.validTo',
                status: '$Service.status',
                sentReceivedDate: '$Service.sentReceivedDate',
                Note: '$Service.Note',
            }
        },
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
async function getCountIdSupplier(body) {
    let params = { nation: body.nation }
    const tempObject = await Supplier.findOne(params).sort({ numberID: -1 }).limit(1)
    let numberID = 0
    if (tempObject) numberID = tempObject.numberID
    let value = {}
    value.txtID = body.nation.toUpperCase()
    value.numberID = numberID + 1
    value.supplierID = value.txtID + value.numberID
    value.nation = body.nation
    return await new Supplier(value).save();
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
    if (_filter && _filter.language) {
        params.language = { $in: [_filter.language] }
    }
    _filter.search = _filter && _filter.search ? _filter.search : '';
    var re = new RegExp(_filter.search.trim().toLowerCase(), 'i');
    var re = new RegExp(_filter.search.trim().toLowerCase(), 'i');
    params['$or'] = [
        { 'name': { $regex: re } },
        { 'supplierID': { $regex: re } },
        { 'ListService': { $elemMatch: { 'supplierServiceName': { $regex: re } } } },
        { 'ListService': { $elemMatch: { 'supplierServiceCode': { $regex: re } } } },
        { 'ListService': { $elemMatch: { 'serviceID': { $regex: re } } } },
        { 'shortname': { $regex: re } }
    ];
    if (_filter && _filter.servicetypes && _filter.servicetypes.length > 0) {
        params.ListService = { $elemMatch: { 'types': { $in: _filter.servicetypes } } }
    }
    const isAggregate = [
        { $sort: { name: 1 } },
        { '$match': params },
        {
            '$facet': {
                Metas: [{ $count: "total" }, { $addFields: { page: _pageNumber } }],
                lsItems: [
                    { $sort: { numberID: -1 } },
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

async function findOneSupplierlanguage(body) {
    return await Suplanguage.findOne({ _id: ObjectId(body._id) });
}
async function findOneSupplierProcess(body) {
    return await Supplier.findOne({ _id: ObjectId(body._id) });
}

async function add_Supplier(param) {
    const checkData = await Suplanguage.findOne({ shortname: param.shortname, supplierID: param.supplierID });
    if (checkData) {
        return 'had';
    } else return await new Supplier(param).save();
}
async function update_Supplier(param) {
    // const checkData = await Suplanguage.findOne({ shortname: param.shortname });
    // if (checkData) {
    //     return 'had';
    // } else 
    return await Supplier.findOneAndUpdate({ _id: param._id }, param, optionUpdate);
}
async function delete_Supplier(param) {
    return await Supplier.deleteOne({ _id: param._id });
}

// Tours
// -----------------------------------------------------------------------

async function list_users(body) {
    let params = {};
    params['$or'] = [];
    params['$or'].push({ 'multiNation': { $in: [body.nation] } });
    params['$or'].push({ 'nation': body.nation });
    return await Users.find(params);
}
async function findOne_users(params) {
    return await Users.findOne(params);
}
async function add_users(param) {
    return await new Users(param).save();
}
async function update_users(param) {
    return await Users.findOneAndUpdate({ _id: param._id }, param, optionUpdate);
}
async function delete_users(param) {
    return await Users.deleteOne({ _id: param._id });
}

async function SearchDataByParams(body) {
    let params = {},
        _pageSize = body._pageSize,
        _filter = body._filter,
        _pageNumber = body._pageNumber,
        _linkService = body._linkService;

    if (body.nation !== _filter.country && _linkService) {
        params.nation = { $in: [_filter.country] };
    } else params.nation = body.nation;

    params.requestReview = { $ne: true }; // filter out temp proposal on request
    params.LinkExcursions = { $ne: true };
    if (!_filter.LastMonth) _filter.LastMonth = 12;
    let year = new Date();
    year = year.setMonth(year.getMonth() - _filter.LastMonth, year.getDate())
    year = new Date(year);
    params.begindate = { $gte: year };

    if (_filter && _filter.Proposalstatus && _filter.Proposalstatus !== "" && _filter.Proposalstatus !== "--")
        params.Proposalstatus = { $in: [_filter.Proposalstatus] };

    if (_filter && _filter.location && _filter.location !== "" && _filter.location !== "--")
        params.location = { $in: [_filter.location] };
    if (_filter && _filter.market)
        params.market = { $in: _filter.market };
    if (_filter && _filter.area && _filter.area !== "" && _filter.area !== "--")
        params.area = { $in: [_filter.area] };
    if (_filter && _filter.category && _filter.category !== "--")
        params.category = { $in: [_filter.category] };
    if (_filter && _filter.duration && _filter.duration !== "" && _filter.duration !== "--")
        params.duration = { $in: [_filter.duration] };

    // for search EXCURSIONS Link
    if (_filter.excursions && _filter.excursions == "EXCURSIONS") {
        if (_filter && _filter.ValueEditModel && _filter.ValueEditModel !== "")
            params.ValueEditModel = { $in: [_filter.ValueEditModel] };
        else params.ValueEditModel = { $in: ['EXCURSIONS', 'PACKAGE'] };
    }
    // for search full
    else {
        if (_filter && _filter.ValueEditModel && _filter.ValueEditModel !== "")
            params.ValueEditModel = { $in: [_filter.ValueEditModel] };
    }

    if (_filter && _filter.userCreate && _filter.userCreate !== "") {
        if (_filter.Others) {
            // params.assignUser = { $in: [_filter.assignUser] };
        } else if (!_filter.excursion) {
            // params.userCreate = { $in: [_filter.userCreate] };
        }
    } else {
        if (_filter.userCreates && _filter.userCreates.length > 0 && !_filter.excursion)
            params.userCreate = { $in: [_filter.userCreates] };
    }

    if (_filter && _filter.searchExcursions && _filter.ageny !== "--") {
        if (_filter && _filter.ageny && _filter.ageny !== "" && _filter.ageny !== "--") {
            if (_filter.userCreate && _filter.userCreate !== '') {
                if (!_filter.allAgency)
                    params.ageny = { $in: [_filter.ageny] };
            } else {
                if (!_filter.allAgency)
                    params.ageny = { $in: [_filter.ageny] };
            }
        } else {
            if (_filter.userCreate && _filter.userCreate !== '') {
                if (_filter && _filter.ageny)
                    params.ageny = { $in: [_filter.ageny] };
            } else {
                if (!_filter.allAgency) {
                    params.ageny = { $in: ['', undefined, '--'] };
                }
            }
        }
    }

    if (_filter && !_filter.searchExcursions) {
        if (_filter && _filter.ageny && _filter.ageny !== "" && _filter.ageny !== "--") {
            if (_filter.userCreate && _filter.userCreate !== '') {
                if (!_filter.allAgency)
                    params.ageny = { $in: [_filter.ageny] };
            } else {
                if (!_filter.allAgency)
                    params.ageny = { $in: [_filter.ageny] };
            }
        } else {
            if (_filter.userCreate && _filter.userCreate !== '') {
                if (_filter && _filter.ageny)
                    params.ageny = { $in: [_filter.ageny] };
            } else {
                if (!_filter.allAgency) {
                    params.ageny = { $in: ['', undefined, '--'] };
                }
            }
        }
    }

    if (_linkService) {
        params.isActive = true;
    } else {
        if (body._active !== undefined && body._active !== null) {
            params.isActive = body._active;
        }
    }
    if (_filter && _filter.Date) {
        let _isDate = new Date(_filter.Date);
        _isDate.setDate(_isDate.getDate() + 1);
        params['$and'] = [{ "begindate": { $lte: _isDate } }, { "enddate": { $gte: _isDate } }];
    }
    if (_filter.byMonthAndYear) {
        let _isstartDate = new Date(_filter.startDate);
        _isstartDate.setDate(_isstartDate.getDate() + 1);
        let _isendDate = new Date(_filter.endDate);
        _isendDate.setDate(_isendDate.getDate() + 1);
        params['$and'] = [{ "begindate": { $gte: _isstartDate } }, { "begindate": { $lte: _isendDate } }];
    }
    if (_filter && _filter.excursion) {
        params.isActive = true;
        params.ValueEditModel = { $in: ['EXCURSIONS', 'PACKAGE'] };
    }
    if (_filter && _filter.IsProduct) {
        params.ValueEditModel = { $in: ['EXCURSIONS', 'PACKAGE'] };
    }

    params['$or'] = [];

    if (_filter.search) {
        var re = new RegExp(_filter.search.trim().toLowerCase(), 'i');

        params['$or'].push({ 'productCode': { $regex: re } });
        params['$or'].push({ 'bookingName': { $regex: re } });
        params['$or'].push({ 'masterCode': { $regex: re } });
        params['$or'].push({ 'location': { $regex: re } });
        params['$or'].push({ 'category': { $regex: re } });
        params['$or'].push({ 'duration': { $regex: re } });
        // params['$or'].push({ 'content': { $regex: re } });
    }

    if (_filter.assignUser) {
        params['$or'].push({ 'assignUser': _filter.assignUser });
        params['$or'].push({ 'assignUsers': _filter.assignUser });
    }
    if (_filter.userCreate) {
        params['$or'].push({ 'userCreate': _filter.userCreate });
        params['$or'].push({ 'assignUser': _filter.userCreate });
        params['$or'].push({ 'assignUsers': _filter.userCreate });
    }

    if (params['$or'].length === 0)
        params['$or'].push({});

    let $project = {};

    if (_filter.searchBy_Airfare_Cruise) {
        $project = {
            '_id': '$_id',
            'productCode': '$productCode',
            'userCreate': '$userCreate',
            'bookingName': '$bookingName',
            'assignUser': '$assignUser',
            'assignUsers': '$assignUsers',
            'codeVersion': '$codeVersion',
            'isActive': '$isActive',
            'begindate': '$begindate',
            'enddate': '$enddate',
            'market': '$market',
            'ageny': '$ageny',
            'location': '$location',
            'duration': '$duration',
            'Proposalstatus': '$Proposalstatus',
            'category': '$category',
            'Curency': '$Curency',
            'Items_DirectMarkup': '$Items_DirectMarkup',
            'content': '$content',
            'contents': '$contents'
        }
    } else if (body.action == 'export') {
        $project = {
            '_id': '$_id',
            'productCode': '$productCode',
            'userCreate': '$userCreate',
            'DateUpdate': '$DateUpdate',
            'DateCreate': '$DateCreate',
            'bookingName': '$bookingName',
            'assignUser': '$assignUser',
            'assignUsers': '$assignUsers',
            'codeVersion': '$codeVersion',
            'isActive': '$isActive',
            'begindate': '$begindate',
            'enddate': '$enddate',
            'market': '$market',
            'ageny': '$ageny',
            'ValueEditModel': '$ValueEditModel',
            'location': '$location',
            'duration': '$duration',
            'Proposalstatus': '$Proposalstatus',
            'category': '$category',
        }
    } else {
        $project = {
            '_id': '$_id',
            'productCode': '$productCode',
            'userCreate': '$userCreate',
            'DateUpdate': '$DateUpdate',
            'DateCreate': '$DateCreate',
            'bookingName': '$bookingName',
            'assignUser': '$assignUser',
            'assignUsers': '$assignUsers',
            'codeVersion': '$codeVersion',
            'isActive': '$isActive',
            'begindate': '$begindate',
            'enddate': '$enddate',
            'market': '$market',
            'ageny': '$ageny',
            'ValueEditModel': '$ValueEditModel',
            'location': '$location',
            'duration': '$duration',
            'Proposalstatus': '$Proposalstatus',
            'category': '$category',
            'Items_Calculator': '$Items_Calculator',
            'shortContent': '$shortContent',
            'content': '$content',
            'contents': '$contents'
        }
    }

    const isAggregate = [
        { $sort: { DateCreate: _filter.asc ? 1 : -1, productCode: 1, codeVersion: -1 } },
        { '$match': params },
        { "$project": $project },
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


    return await Tours.aggregate(isAggregate).allowDiskUse(true);
}

async function SearchDataByParamsLink(body) {
    var params = {},
        _pageSize = body._pageSize,
        _filter = body._filter,
        _pageNumber = body._pageNumber;
    params.nation = _filter.country;
    params['$and'] = [{ category: { $ne: "Airfare" } }]
    params.begindate = { $gt: new Date("2018/10/31") };
    params.LinkExcursions = { $ne: true };
    if (_filter && _filter.location && _filter.location !== "" && _filter.location !== "--")
        params.location = { $in: [_filter.location] };
    if (_filter && !_filter.allAgency && _filter.market) {
        _filter.market.push('WW')
        params.market = { $in: _filter.market };
    }
    if (_filter && _filter.area && _filter.area !== "" && _filter.area !== "--")
        params.area = { $in: [_filter.area] };
    if (_filter && _filter.category && _filter.category !== "--")
        params['$and'].push({ category: { $in: [_filter.category] } });
    if (_filter && _filter.duration && _filter.duration !== "" && _filter.duration !== "--")
        params.duration = { $in: [_filter.duration] };
    // for search EXCURSIONS Link
    if (_filter.excursions && _filter.excursions == "EXCURSIONS") {
        if (_filter && _filter.ValueEditModel && _filter.ValueEditModel !== "")
            params.ValueEditModel = { $in: [_filter.ValueEditModel] };
        else params.ValueEditModel = { $in: ['EXCURSIONS', 'PACKAGE', 'PROPOSAL'] };
    }
    if (_filter && _filter.userCreate && _filter.userCreate !== "") {
        params.userCreate = _filter.userCreate;
    }
    if (_filter && _filter.searchExcursions && _filter.ageny !== "--") {
        if (_filter && _filter.ageny && _filter.ageny !== "" && _filter.ageny !== "--") {
            if (_filter.userCreate && _filter.userCreate !== '') {
                if (!_filter.allAgency)
                    params.ageny = { $in: [_filter.ageny] };
            } else {
                if (!_filter.allAgency)
                    params.ageny = { $in: [_filter.ageny] };
            }
        } else {
            if (_filter.userCreate && _filter.userCreate !== '') {
                if (_filter && _filter.ageny)
                    params.ageny = { $in: [_filter.ageny] };
            } else {
                if (!_filter.allAgency) {
                    params.ageny = { $in: ['', undefined, '--'] };
                }
            }
        }
    }
    if (_filter && _filter.Date) {
        delete params.begindate;
        let _isDate = new Date(_filter.Date);
        _isDate.setDate(_isDate.getDate() + 1);
        params['$and'].push({ "begindate": { $lte: _isDate } })
        params['$and'].push({ "enddate": { $gte: _isDate } });
    }
    params.isActive = true;
    var re = new RegExp(_filter.search.trim().toLowerCase(), 'i');
    params['$or'] = [
        { 'productCode': { $regex: re } },
        { 'bookingName': { $regex: re } },
        { 'masterCode': { $regex: re } },
        { 'location': { $regex: re } },
        { 'category': { $regex: re } },
        { 'duration': { $regex: re } },
        { 'content': { $regex: re } }
    ];
    const isAggregate = [
        { $sort: { productCode: 1, codeVersion: 1 } },
        { '$match': params },
        {
            "$project": {
                '_id': '$_id',
                'productCode': '$productCode',
                'userCreate': '$userCreate',
                'DateUpdate': '$DateUpdate',
                'DateCreate': '$DateCreate',
                'bookingName': '$bookingName',
                'assignUser': '$assignUser',
                'assignUsers': '$assignUsers',
                'codeVersion': '$codeVersion',
                'isActive': '$isActive',
                'begindate': '$begindate',
                'enddate': '$enddate',
                'market': '$market',
                'ageny': '$ageny',
                'ValueEditModel': '$ValueEditModel',
                'location': '$location',
                'duration': '$duration',
                'Proposalstatus': '$Proposalstatus',
                'category': '$category',
                'content': '$content',
                'contents': '$contents'
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
    ];
    return await Tours.aggregate(isAggregate).allowDiskUse(true);
}

// Tours
// -----------------------------------------------------------------------
async function ass_tours(body) {
    let lisId = body.lisId;
    let assignUser = body.assignUser;
    if (lisId && lisId.length > 0) {
        for (const x of lisId) {
            await Tours.update({ _id: x }, {
                $set: {
                    assignUser: '',
                    assignUsers: assignUser
                }
            }, { upsert: false, multi: true });

            checkExcursionMissing("from ass_tours()");
        }
        return true;
    }
    return false;
}

async function checkProductCodeExist(productCodes) {
    return await Tours.find().where('productCode').in(productCodes).select("productCode").exec();
}
async function one_tours(body) {
    let params = {};
    params._id = body._id;
    return await Tours.findOne(params);
}

async function tours_get_lastest_by_code(body) {
    let params = {};
    params.productCode = body.productCode;
    params.ageny = body.ageny;
    params.market = body.market;
    return await Tours.findOne(params).sort({ codeVersion: -1, DateCreate: -1 }).limit(1).exec();
}

async function get_Tours_ByIds(ids) {
    return await Tours.find().where('_id').in(ids).exec();
}
async function get_Tours_ByIsIds(ids) {
    return await Tours.find().where('Isid').in(ids).exec();
}
async function add_tours(param) {
    let check = {};
    check.productCode = param.productCode;
    check.codeVersion = param.codeVersion;
    check.ageny = { $in: param.ageny };
    const checkData = await Tours.findOne(check);

    if (checkData) {
        return 'had';
    } else {
        let tasks = [];

        param._id = new ObjectId();
        tasks.push(new Tours(param).save());

        if (param.Items_Calculator && param.Items_Calculator.length > 0) {
            for (const item of param.Items_Calculator) {
                if (item.linkBy == "Excursions" && item.item) {
                    item.item._linkVersion = param.codeVersion;
                    item.item.LinkExcursions = true;
                    item.item._idCode = param._id.toString();
                    item.item.Isid = item.IsItem;

                    tasks.push(new Tours(item.item).save());
                }
                else if (param._copynew && item.linkBy == "Excursions" && !item.item) {
                    let onedata = await Tours.findOne({
                        Isid: item.IsItem,
                        LinkExcursions: true
                    });
                    if (onedata) {
                        delete onedata._id;
                        onedata.Isid = item.IsItem;
                        onedata._idCode = param._id.toString();
                        onedata._linkVersion = param._linkVersion;
                        onedata.LinkExcursions = true;

                        tasks.push(new Tours(onedata).save());
                    }
                }
            }
        }

        let rs = await Promise.all(tasks);

        checkExcursionMissing("from add_tours()");

        return rs[0];
    }
}

async function update_tours(param) {
    let pretour = await Tours.findOne({ _id: ObjectId(param._id) });
    let existCount = await TourLogs.countDocuments({ "tour._id": ObjectId(param._id) });
    if (existCount === 0) {
        await new TourLogs({ tour: pretour }).save();
    }

    // update
    let tasks = [];
    if (param.Items_Calculator && param.Items_Calculator.length > 0) {
        for (const item of param.Items_Calculator) {
            if (item && item.item != undefined) {

                item.item._linkVersion = param.codeVersion || 0;
                item.item.LinkExcursions = true;
                item.item._idCode = param._id;
                item.item.Isid = item.IsItem;

                if (item.item._id) {
                    tasks.push(Tours.findOneAndUpdate({ _id: ObjectId(item.item._id) }, item.item, optionUpdate));
                    console.log("update_tours(): Update excursion:", item.item._id, ", for excursion service:", item.name);
                } else {
                    item.item._id = new ObjectId();
                    tasks.push(new Tours(item.item).save());
                    console.log("update_tours(): Insert excursion:", item.item._id, ", for excursion service:", item.name);
                }
            }
        }
    }

    await Promise.all(tasks);

    let tour = await Tours.findOneAndUpdate({ _id: ObjectId(param._id) }, param, optionUpdate);

    // log change
    let isChange = false;
    let auditCode = ObjectId();

    if (tourChangedCompare(tour, pretour)) {
        await new TourLogs({ _id: auditCode, tour: tour }).save();
        isChange = true;
    }

    tour = JSON.parse(JSON.stringify(tour)); // hack
    tour.isChange = isChange;
    tour.auditCode = auditCode;

    checkExcursionMissing("from update_tours()");

    return tour;
}
async function updatePriceOperation(param) {
    const object = param.objectTotal;
    let rs = await Tours.updateOne({
        _id: ObjectId(param._id)
    }, {
        $set: {
            SumpriceGroup: object.SumpriceGroup || 0,
            SumtotalAssigned: object.SumtotalAssigned || 0,
            SumProfit: object.SumProfit || 0,
            SumbMargin: object.SumbMargin || 0,

            Total_SellOperator: object.Total_SellOperator || 0,
            SumProfitSellOperator: object.SumProfitSellOperator || 0,
            SumbMarginSellOperator: object.SumbMarginSellOperator || 0,

        }
    }, { upsert: false, multi: true });

    checkExcursionMissing("from updatePriceOperation()");

    return rs;
}
async function add_tours_generation(tours) {
    let saveTours = [];
    for (let tour of tours) {
        tour._id = new ObjectId();
        tour.isGeneration = true;

        if (tour.Items_Calculator && tour.Items_Calculator.length > 0) {
            for (const item of tour.Items_Calculator) {
                if (item && item.linkBy == "Excursions" && item.item) {
                    item.item._linkVersion = tour.codeVersion || 0;
                    item.item.LinkExcursions = true;
                    item.item._idCode = tour._id;
                    item.item._id = new ObjectId();
                    item.item.isGeneration = true;

                    saveTours.push(item.item)
                }
            }
        }

        saveTours.push(tour);
    }

    await Tours.insertMany(saveTours);

    checkExcursionMissing("from add_tours_generation()");

    return tours;
}

async function delete_tours(param) {
    let rs;
    if (param.Isid && param._idCode) {
        rs = await Tours.deleteOne({ Isid: param.Isid, _idCode: param._idCode });
    } else {
        rs = await Promise.all([
            Tours.deleteMany({
                ValueEditModel: "EXCURSIONS",
                LinkExcursions: true,
                _idCode: param._id
            }),
            Tours.deleteOne({ _id: param._id })
        ]);
    }

    checkExcursionMissing("from delete_tours()");

    return rs;
}

async function list_tours_forfix(body) {
    let tours = await Tours
        .find({
            "nation": body.nation,
            "ValueEditModel": "PROPOSAL",
            "Proposalstatus": "CONFIRMED",
            "DateUpdate": { $gte: body.from },
            "DateUpdate": { $lte: body.to },
            // "Items_Calculator.PriceType": "ACCOMMODATIONFEE", 
            // "Items_Calculator.unit_buy": { $exists: false } 
        })
        .select('productCode codeVersion bookingName ValueEditModel begindate enddate DateUpdate userUpdate')
        .sort({ productCode: 1 })
        .exec();

    console.log("tours: ", tours.length, tours[0]);

    let tourIds = tours.map(x => x._id);
    let excursions = await Tours
        .find({
            "nation": body.nation,
            _idCode: { $in: tourIds }
        })
        .select('productCode codeVersion bookingName ValueEditModel begindate enddate DateUpdate userUpdate _idCode')
        .sort({ productCode: 1 })
        .exec();

    console.log("excursions: ", excursions.length, excursions[0]);

    let rs = tours.map(tour => {
        let exs = excursions.filter(ex => ex._idCode === tour._id.toString());
        console.log("exs: ", exs.length);
        return [tour, ...exs];
    }).flat();

    console.log("rs: ", rs.length);

    return rs;
}

// Tour Changed Compare
// -----------------------------------------------------------------------
function tourChangedCompare(_tour, _pretour) { // true is diff
    let tour = JSON.parse(JSON.stringify(_tour));
    let pretour = JSON.parse(JSON.stringify(_pretour));

    // hack code: room assignment, before first
    tour.Items_Calculator.forEach(s => {
        let numOfSingle = ((s.lsRoomAssigned || []).filter(room => room.typeof === 'SGL') || []).length;
        (s.lsRoomAssigned || []).forEach((room, index) => {
            room._id = "id" + (room.typeof === 'SGL' ? index : index + 1000 - numOfSingle);
        });

        (s.paxBreak || []).forEach(x => {
            x._id = x.number + '';
        });
    });
    pretour.Items_Calculator.forEach(s => {
        let numOfSingle = ((s.lsRoomAssigned || []).filter(room => room.typeof === 'SGL') || []).length;
        (s.lsRoomAssigned || []).forEach((room, index) => {
            room._id = "id" + (room.typeof === 'SGL' ? index : index + 1000 - numOfSingle);
        });

        (s.paxBreak || []).forEach(x => {
            x._id = x.number + '';
        });
    });
    // hack code: tourLeader, before first
    if (tour.tourLeader) {
        tour.tourLeader._id = "id";

        (tour.tourLeader.paxBreak || []).forEach(x => {
            x._id = x.number + '';
        });
    }

    if (pretour.tourLeader) {
        pretour.tourLeader._id = "id";

        (pretour.tourLeader.paxBreak || []).forEach(x => {
            x._id = x.number + '';
        });
    }


    // hack code: content, before first
    tour.content = null;
    pretour.content = null;
    // hack code: DateUpdate, before first
    tour.DateUpdate = null;
    pretour.DateUpdate = null;
    // hack code: lsTransfer, before first
    tour.lsTransfer = null;
    pretour.lsTransfer = null;
    // hack code: lsHotelChildPrice, before first
    tour.lsHotelChildPrice = null;
    pretour.lsHotelChildPrice = null;

    // hack code: periods
    (tour.periods || []).forEach(p => {
        (p.paxBreak || []).forEach(x => {
            x._id = x.number + '';
        });
    });
    (pretour.periods || []).forEach(p => {
        (p.paxBreak || []).forEach(x => {
            x._id = x.number + '';
        });
    });
    // hack code: Items_ChildPolicy
    (tour.Items_ChildPolicy || []).forEach(p => {
        (p.paxBreak || []).forEach(x => {
            x._id = x.number + '';
        });
    });
    (pretour.Items_ChildPolicy || []).forEach(p => {
        (p.paxBreak || []).forEach(x => {
            x._id = x.number + '';
        });
    });
    // hack code: contents
    (tour.contents || []).forEach(c => {
        c._id = c.languageId;
    });
    (pretour.contents || []).forEach(c => {
        c._id = c.languageId;
    });



    // - array merge, first
    //tour = unionObject(tour, pretour, "delete");
    //pretour = unionObject(pretour, tour, "insert");

    // - compare for diff, next
    if (objectDiffSameType(tour, pretour, ["lsChildTotal"])) {
        return true;
    }

    if (objectDiffSameType(pretour, tour, ["lsChildTotal"])) {
        return true;
    }

    return false;
}
//
var primitive = ["boolean", "number", "bigint", "string"];

function objectDiffSameType(obj1, obj2, isArrayKey = []) { // true is diff
    for (var key in obj1) {
        if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) { // array
            if (obj1[key] && obj1[key].length > 0) {
                if (primitive.includes(typeof (obj1[key][0])) || primitive.includes(typeof (obj2[key][0]))) { // primitive
                    if (!isArrayKey.includes(key)) // unorder
                        if (isArrayUnOrderDiff(obj1[key], obj2[key])) {
                            return true;
                        } else { // order array
                            if (obj1[key].some((item, index) => obj1[key][index] !== obj2[key][index])) {
                                return true;
                            }
                        }
                } else { // object
                    if (obj1[key].some((item, index) => objectDiffSameType(obj1[key][index] || {}, obj2[key][index] || {}, isArrayKey))) {
                        return true;
                    }
                }
            }
            // else {
            //   out[key] = out[key] || false; // array length 0
            // }
        } else if (obj1[key] !== null && typeof (obj1[key]) === 'object' && Object.keys(obj1[key]).length > 0 &&
            obj2[key] !== null && typeof (obj2[key]) === 'object' && Object.keys(obj2[key]).length > 0) {
            if (objectDiffSameType(obj1[key], obj2[key], isArrayKey)) {
                return true;
            }
        } else {
            if (typeof (obj1[key]) === 'number') { // number round
                if ((obj1[key] - obj2[key]) >= 0.0001) {
                    return true;
                }
            } else {
                if (obj1[key] !== obj2[key]) {
                    return true;
                }
            }
        }
    }

    return false;
}

function isArrayUnOrderDiff(arr1, arr2) { // true is diff
    if (arr1.length !== arr2.length)
        return true;

    let intersection = arr1.filter(x => arr2.includes(x));
    return !(intersection.length === arr1.length);
}
// roundNum = 0, 1, 2, ..., -1, -2, ...
// round(2.93612, 2) = 2.94
function round(num, roundNum = 0) {
    let pow10 = Math.pow(10, roundNum);
    return Math.round((+num + Number.EPSILON) * pow10) / pow10;
}

// End: Tour Changed Compare

// Audit Log
// -----------------------------------------------------------------------
async function list_audit_logs(param) {
    if (!param.id)
        return []

    let tours = await TourLogs
        .find({ "tour._id": param.id })
        .sort('-_id')
        .select('tour._id tour.userUpdate tour.DateUpdate')
        .exec();

    return tours;
}
async function get_audit_log(param) {
    let tour = await TourLogs.findOne({ _id: param.id });
    let pretour = await TourLogs
        .findOne({ $and: [{ "tour._id": tour.tour._id }, { _id: { $lt: param.id } }] })
        .sort({ _id: -1 });

    return [tour, pretour];
}
// End: Audit Log

// Tour Generation Log
// -----------------------------------------------------------------------
async function add_tour_generation_log(tourGenLogs) {
    tourGenLogs._id = new ObjectId();

    await new TourGenerationLogs(tourGenLogs).save();

    return await TourGenerationLogs.findOne({ _id: tourGenLogs._id });
}
async function list_tour_generation_logs(paramId) {
    let tourLogs = await TourGenerationLogs
        .find({ "tourIds": paramId.id })
        .sort('-generatedDate')
        .select('generatedDate generatedBy fromTour.productCode fromTour.bookingName')
        .exec();

    return tourLogs;
}
async function get_tour_generation_log(paramId) {
    return await TourGenerationLogs.findOne({ _id: paramId.id });
}
// End: Tour Generation Log

// Tourcategorys
// -----------------------------------------------------------------------
async function list_maps(params) {
    return await Maps.find(params);
}
async function add_maps(param) {
    return await new Maps(param).save();
}
async function update_maps(param) {
    return await Maps.findOneAndUpdate({ _id: param._id }, param, optionUpdate);
}
async function delete_maps(param) {
    return await Maps.deleteOne({ _id: param._id });
}

// Tourcategorys
// -----------------------------------------------------------------------
async function list_categorys(params) {
    return await TourCategory.find(params);
}
async function add_categorys(param) {
    return await new TourCategory(param).save();
}
async function update_categorys(param) {
    return await TourCategory.findOneAndUpdate({ _id: param._id }, param, optionUpdate);
}
async function delete_categorys(param) {
    return await TourCategory.deleteOne({ _id: param._id });
}

// Tourduration
// -----------------------------------------------------------------------
async function list_durations(params) {
    return await Tourduration.find(params);
}
async function add_durations(param) {
    return await new Tourduration(param).save();
}
async function update_durations(param) {
    return await Tourduration.findOneAndUpdate({ _id: param._id }, param, optionUpdate);
}
async function delete_durations(param) {
    return await Tourduration.deleteOne({ _id: param._id });
}

// suplanguage
// -----------------------------------------------------------------------
async function list_suplanguage(params) {
    return await Suplanguage.find(params);
}
async function add_suplanguage(param) {
    return await new Suplanguage(param).save();
}
async function update_suplanguage(param) {
    const checkData = await Suplanguage.findOne({ shortname: param.shortname })
    if (checkData) {
        return 'had';
    } else return await Suplanguage.findOneAndUpdate({ _id: param._id }, param, optionUpdate);
}
async function delete_suplanguage(param) {
    return await Suplanguage.deleteOne({ _id: param._id });
}

// ------------------------------------------------------------- Curency
async function initCurrencyDatabaseIfNotExist() {
    let currencyData;

    let existCurrencies = await Currency.countDocuments({});
    if (!existCurrencies) {
        currencyData = require('../data/currencyData');

        var currencies = currencyData.map(x => {
            return {
                nationAvailables: x.nationAvailables || [], // remove in future

                code: x.code,
                name: x.name,
                symbol: x.symbol,
                priority: x.priority,
                flag: x.flag,
                nameByNations: Object.keys(x.nameByNation || {}).map(y => {
                    return {
                        nation: y,
                        name: x.nameByNation[y]
                    };
                }),
                priorityByNations: Object.keys(x.priorityByNation || {}).map(y => {
                    return {
                        nation: y,
                        priority: x.priorityByNation[y]
                    };
                })
            };
        });

        await Currency.insertMany(currencies);
        console.log("-------------------------: initCurrencyDatabaseIfNotExist(): Curency - in auth.controller successfully.");
    }

    let existSelected = await CurrencySelected.countDocuments({});
    if (!existSelected) {
        let currencySelected = {
            securityStamp: new Date().getTime() + '',
            selecteds: [],
            logs: []
        };

        if (!currencyData) {
            currencyData = await Currency.find({});
            currencyData.forEach(x => {
                x.nationAvailables = x.nationAvailables.flat(20); // fix old error
            });
        }

        let nations = currencyData.filter(x => x.nationAvailables && x.nationAvailables.length > 0).map(x => x.nationAvailables);
        nations = [...new Set(nations.flat())];

        nations.forEach(x => {
            currencySelected.selecteds.push({
                nation: x,
                currencies: currencyData.filter(y => y.nationAvailables && y.nationAvailables.includes(x)).map(y => y.code)
            });
        });

        // log
        currencySelected.selecteds.forEach(x => {
            currencySelected.logs.push({
                updatedDate: new Date(),
                updatedBy: "Init System",
                nation: x.nation,
                currencies: x.currencies
            });
        });

        await new CurrencySelected(currencySelected).save();

        console.log("-------------------------: initCurrencyDatabaseIfNotExist(): CurrencySelected in auth.controller successfully.");
    }

    return true;
}

// param = { nation: 'vn' } // nation for currency name localization
async function getCurrenciesAll(param) {
    let currencies = await Currency.find({});

    let rs = currencies.map(x => {
        return {
            code: x.code,
            name: param.nation ? (x.nameByNations.find(y => y.nation === param.nation) || {}).name || x.name : x.name,
            symbol: x.symbol,
            priority: param.nation ? (x.priorityByNations.find(y => y.nation === param.nation) || {}).priority || x.priority : x.priority,
            flag: x.flag
        };
    });

    return rs;
}

// param = { nation: 'vn' }
async function getCurrencySelectedByNation(param) {
    let curencySelected = await CurrencySelected.findOne({});
    let selected = curencySelected.selecteds.find(x => x.nation === param.nation) || {};

    return {
        securityStamp: curencySelected.securityStamp,
        currencies: selected.currencies || []
    };
}

// param: { securityStamp: "75937458", nation: "vn", currencies: ["USD", "EUR"], updateBy: 'userName' }
async function updateCurrencySelectedByNation(param) {
    let curencySelected = await CurrencySelected.findOne({ securityStamp: param.securityStamp });
    if (!curencySelected)
        return null;

    let selected = curencySelected.selecteds.find(x => x.nation === param.nation);

    let existLog = curencySelected.logs.find(x => x.nation === param.nation);
    if (!existLog) {
        curencySelected.logs.push({
            updatedDate: new Date(),
            updatedBy: param.updateBy,
            nation: selected ? selected.nation : param.nation,
            currencies: selected ? selected.currencies : []
        });
    }

    let oldCurrencies = [];
    if (selected) {
        oldCurrencies = JSON.parse(JSON.stringify(selected.currencies));
        selected.currencies = param.currencies || [];
    } else {
        selected = {
            nation: param.nation,
            currencies: param.currencies
        };

        curencySelected.selecteds.push(selected);
    }

    let diff = isArrayUnOrderDiff(selected.currencies, oldCurrencies);
    if (diff) {
        curencySelected.logs.push({
            updatedDate: new Date(),
            updatedBy: param.updateBy,
            nation: selected.nation,
            currencies: selected.currencies
        });
    }

    let securityStamp = new Date().getTime() + '';
    curencySelected.securityStamp = securityStamp;

    await curencySelected.save();

    return securityStamp;
}

// param = { nation: 'vn', numOfItem: 10 }
async function getCurrencyLogByNation(param) {
    let curencySelected = await CurrencySelected.findOne({});
    if (!curencySelected)
        return [];

    let logs = curencySelected.logs.filter(x => x.nation === param.nation) || [];

    // sort desc by updatedDate
    logs.sort((a, b) => {
        if (a.updatedDate < b.updatedDate)
            return 1;
        if (a.updatedDate > b.updatedDate)
            return -1;
        return 0
    });

    return logs.filter((item, index) => index < param.numOfItem) || [];
}
// ------------------------------------------------------------- Curency End

// ------------------------------------------------------------- Exchange Rate
async function list_exchangeRate(params) {
    return await ExchangeRate.find(params);
}

async function add_exchangeRate(param) {
    let rs = await new ExchangeRate(param).save();

    let log = {
        updatedDate: new Date(),
        updatedBy: param.updatedBy,
        action: "insert",
        to: rs
    };
    await new ExchangeRateLog(log).save();

    return rs;
}

async function update_exchangeRate(param) {
    let old = await ExchangeRate.findOne({ _id: param._id });

    let rs = await ExchangeRate.findOneAndUpdate({ _id: param._id }, param, optionUpdate);

    if (exchangeRate_diff(rs, old)) {
        let log = {
            updatedDate: new Date(),
            updatedBy: param.updatedBy,
            action: "change",
            from: old,
            to: rs
        };
        await new ExchangeRateLog(log).save();
    }

    return rs;
}
function exchangeRate_diff(exA, exB) {
    if (exA.nation !== exB.nation ||
        exA.unit !== exB.unit ||
        exA.beginDate.getTime() !== exB.beginDate.getTime() ||
        exA.endDate.getTime() !== exB.endDate.getTime())
        return true;

    if (exA.rates.length !== exB.rates.length)
        return true;

    let diff = exA.rates.some(a => {
        let b = exB.rates.find(x => x.name === a.name);
        if (!b || b.value !== a.value)
            return true;
        else
            return false;
    });
    if (diff)
        return true;

    return false;
}

// param = { _id, updatedBy }
async function delete_exchangeRate(param) {
    let old = await ExchangeRate.findOne({ _id: param._id });

    let rs = await ExchangeRate.deleteOne({ _id: param._id });

    let log = {
        updatedDate: new Date(),
        updatedBy: param.updatedBy,
        action: "delete",
        from: old
    };
    await new ExchangeRateLog(log).save();

    return rs.ok === 1;
}

// param = { nation: 'vn', numOfItem: 10 }
async function getExchangeRateLogByNation(param) {
    return await ExchangeRateLog
        .find({
            $and: [
                { $or: [{ "from.nation": param.nation }, { "to.nation": param.nation }] },
                { $or: [{ "from.groupId": param.groupId }, { "to.groupId": param.groupId }] }
            ]
        })
        .sort({ _id: -1 })
        .limit(param.numOfItem)
        .exec();
}
// ------------------------------------------------------------- Exchange Rate End

// alloment
// -----------------------------------------------------------------------
async function list_allotments(body) {
    let params = {};
    params.id_hotel = body.id_hotel;
    params._idContracts = body._idContracts;
    return await Allotments.findOne(params);
}
async function add_allotments(param) {
    return await new Allotments(param).save();
}
async function update_allotments(param) {
    return await Allotments.findOneAndUpdate({ _id: param._id }, param, optionUpdate);
}
async function delete_allotments(param) {
    return await Allotments.deleteOne({ _id: param._id });
}


async function GetLanguageCodes() {
    return await Languagecode.find();
}
async function find_language(param) {
    return await Language.find(param);
}
async function add_Language(param) {
    return await new Language(param).save();
}
async function update_Language(param) {
    return await Language.findOneAndUpdate({ _id: param._id }, param, optionUpdate);
}
async function delete_Language(param) {
    return await Language.deleteOne({ _id: param._id });
}

// Market
// -----------------------------------------------------------------------
async function list_market(params) {
    return await Market.find(params);
}
async function add_market(param) {
    return await new Market(param).save();
}
async function update_market(param) {
    return await Market.findOneAndUpdate({ _id: param._id }, param, optionUpdate);
}
async function delete_market(param) {
    return await Market.deleteOne({ _id: param._id });
}

// CRM
//----------------------------------------------------------------------
async function random_code(body) {
    let params = {};
    params.code = body.code;
    return await Gents_onlines.findOne(params).then(rs => {
        if (rs && rs.code) return true;
        else return false;
    })
}
async function random_codeAgents(body) {
    let params = {};
    params.code = body.code;
    let Aggregate = [
        {
            $unwind: {
                "path": "$contacts",
                "preserveNullAndEmptyArrays": true
            }
        },
        { '$match': { "contacts.code": params.code } }
    ]
    return await Gents_onlines.aggregate(Aggregate).allowDiskUse(true).then(rs => {
        if (rs && rs.code) return true;
        else return false;
    });
}

//----------------------------------------------------------------------
async function list_gents_Asss(body) {
    const isAggregate = [{
        $sort: { name: 1 }
    },
    {
        "$project": {
            '_id': '$_id',
            'name': '$name',
            'code': '$code',
        }
    }
    ];
    return await Gents_onlines.aggregate(isAggregate).allowDiskUse(true);
}

// Rules
//----------------------------------------------------------------------
async function list_special_offers_page(body) {
    let params = {};
    if (body.search && body.search !== "") {
        var re = new RegExp(body.search.toLowerCase(), 'i');
        params['name'] = { $regex: re };
    }
    params.nation = body.nation;
    params.type_Rule = body.type_Rule;
    const isAggregate = [{
        $sort: { name: 1 }
    },
    { '$match': params },
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
    return await Rules_special_offers.aggregate(isAggregate).allowDiskUse(true).then(rs => {
        return {
            total: rs[0].Metas && rs[0].Metas.length > 0 ? rs[0].Metas[0].total : 0,
            items: rs[0].lsItems
        }
    });
}
async function list_special_offers(params) {
    return await Rules_special_offers.find(params);
}
async function add_special_offers(param) {
    return await new Rules_special_offers(param).save();
}
async function update_special_offers(param) {
    return await Rules_special_offers.findOneAndUpdate({ _id: param._id }, param, optionUpdate);
}
async function delete_special_offers(param) {
    return await Rules_special_offers.deleteOne({ _id: param._id });
}

//----------------------------------------------------------------------
function generateToken(user) {
    const payload = JSON.stringify(user);
    return jwt.sign(payload, config.jwtSecret);
}
async function getloginuser(user) {
    user.pass = md5(user.pass);

    //user = await Joi.validate(user, userSchema, { abortEarly: false });
    user.active = true;
    let rs = await Users.findOne(user);
    if (rs && rs.InCharge)
        delete rs.InCharge;
    // roles for dotnet
    if (rs) {
        rs.roles = (rs.role || []).map(r => r.code);
    }
    return rs;
}