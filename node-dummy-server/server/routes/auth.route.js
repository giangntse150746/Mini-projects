const express = require('express');
const asyncHandler = require('express-async-handler')
const passport = require('passport');
const userCtrl = require('../controllers/user.controller');
const authCtrl = require('../controllers/auth.controller');
const path = require('path');
const helpes = require('../controllers/helper')
const multipart = require('connect-multiparty');
const fs = require('fs');
// const sharp = require('sharp');

mkDirIfNotExist('./dist');
mkDirIfNotExist('./dist/images');
const multipartMiddleware = multipart({
  uploadDir: './dist/images',
  maxFilesSize: 10 * 1024 * 1024
});

const router = express.Router();
module.exports = router;

router.post('/register', asyncHandler(register), register);
async function register(req, res, next) {
  let user = await userCtrl.insert(req.body);
  user = user.toObject();
  delete user.hashedPassword;
  req.user = user;
  next()
}

router.post('/login', login);
async function login(req, res) {
  let token, user;
  console.log('---------------LOGIN-----------------------')
  console.log('User: ', req.body.username)
  console.log('nation: ', req.body.nation)
  console.log('Time Server: ', helpes.GetDateTime())
  console.log('-------------------------------------------')
  if (req.body.username && req.body.pass) {
    user = await authCtrl.getloginuser(req.body)
  } else user = null
  token = authCtrl.generateToken(user);
  res.json({ user, token });
}

router.get('/me', passport.authenticate('jwt', { session: false }), logindone);
function logindone(req, res) {
  let user = req.user;
  if(user.InCharge)
    delete user.InCharge;
  let token = authCtrl.generateToken(user);
  res.json({ user, token });
}

//==================================================================================================================================
// Tours Tariff
//
// START
//==================================================================================================================================
// CRM managerment
// notify and email template
router.post('/template', getTemplates);
async function getTemplates(req, res) {
  let data;
  data = await authCtrl.getTemplates(req.body)
  res.json(data);
}

// notify and email template
router.post('/updateContactService', updateContactService);
async function updateContactService(req, res) {
  let data;
  data = await authCtrl.updateContactService(req.body)
  res.json(data);
}

router.post('/AddContactService', AddContactService);
async function AddContactService(req, res) {
  let data;
  data = await authCtrl.AddContactService(req.body)
  res.json(data);
}



// notify and email template
router.post('/findRoomHotel', findRoomHotel);
async function findRoomHotel(req, res) {
  let data;
  data = await authCtrl.findRoomHotel(req.body)
  res.json(data);
}

//
router.post('/getAgenctFinace', getAgenctFinace);
async function getAgenctFinace(req, res) {
  let data;
  data = await authCtrl.getAgenctFinace(req.body)
  res.json(data);
}

router.post('/SearchForAirfare', SearchForAirfare);
async function SearchForAirfare(req, res) {
  let data;
  data = await authCtrl.SearchForAirfare(req.body)
  res.json(data);
}

// ------------------------------------------------------------- Hotel Info
router.post('/showInfoContentHotel', showInfoContentHotel);
async function showInfoContentHotel(req, res) {
  let data;
  data = await authCtrl.showInfoContentHotel(req.body)
  res.json(data);
}
router.post('/linkidHotelsContent', linkidHotelsContent);
async function linkidHotelsContent(req, res) {
  let data;
  data = await authCtrl.linkidHotelsContent(req.body)
  res.json(data);
}

router.post('/expired-days_updateone', expireddaysupdateone);
async function expireddaysupdateone(req, res) {
  let data;
  data = await authCtrl.expireddaysupdateone(req.body)
  res.json(data);
}

router.post('/expired-days', expiredDays);
async function expiredDays(req, res) {
  let data;
  data = await authCtrl.expiredDays(req.body)
  res.json(data);
}

router.post('/filter_Hotel', filter_Hotel);
async function filter_Hotel(req, res) {
  let data;
  data = await authCtrl.filter_Hotel(req.body)
  res.json(data);
}

router.post('/getCountByhotel', getCountByhotel);
async function getCountByhotel(req, res) {
  let data;
  data = await authCtrl.getCountByhotel(req.body)
  res.json(data);
}

router.post('/gethotel_info', gethotel_info);
async function gethotel_info(req, res) {
  let data;
  data = await authCtrl.gethotel_info(req.body)
  res.json(data);
}

router.post('/gethotel_byid', gethotel_byid);
async function gethotel_byid(req, res) {
  let data;
  data = await authCtrl.gethotel_byid(req.body)
  res.json(data);
}

router.post('/onehotel', onehotel);
async function onehotel(req, res) {
  let data;
  data = await authCtrl.getonehotel(req.body);
  res.json(data);
}

router.post('/get_Hotels_ByIds', get_Hotels_ByIds);
async function get_Hotels_ByIds(req, res) {
  let data;
  data = await authCtrl.get_Hotels_ByIds(req.body);
  res.json(data);
}

router.post('/hotel', addhotel);
async function addhotel(req, res) {
  let data;
  data = await authCtrl.posthotel(req.body);
  res.json(data);
}

router.post('/puthotel', updatehotel);
async function updatehotel(req, res) {
  let data;
  data = await authCtrl.puthotel(req.body);
  res.json(data);
}

router.post('/UpdateContracyByID', UpdateContracyByID);
async function UpdateContracyByID(req, res) {
  let data;
  data = await authCtrl.UpdateContracyByID(req.body)
  res.json(data);
}

router.post('/deletehotel', deletehotel);
async function deletehotel(req, res) {
  let data;
  data = await authCtrl.deletehotel(req.body);
  res.json(data);
}
// ------------------------------------------------------------- Hotel Info End

// ------------------------------------------------------------- Hotel Info Log
router.post('/list_hotel_audit_logs', list_hotel_audit_logs);
async function list_hotel_audit_logs(req, res) {
  let data;
  data = await authCtrl.list_hotel_audit_logs(req.body)
  res.json(data);
}

router.post('/get_hotel_audit_log', get_hotel_audit_log);
async function get_hotel_audit_log(req, res) {
  let data;
  data = await authCtrl.get_hotel_audit_log(req.body)
  res.json(data);
}
// ------------------------------------------------------------- Hotel Info Log End

//
router.post('/reportAgent', reportAgent);
async function reportAgent(req, res) {
  let data;
  data = await authCtrl.reportAgent(req.body)
  res.json(data);
}

router.post('/get_operation', get_operation);
async function get_operation(req, res) {
  let data;
  data = await authCtrl.get_operation(req.body)
  res.json(data);
}

// tour link hotel apis,
router.post('/get_ListLinkByCode', get_ListLinkByCode);
async function get_ListLinkByCode(req, res) {
  let data;
  data = await authCtrl.get_ListLinkByCode(req.body)
  res.json(data);
}
// Report Booking
// --------------------------------------------
router.post('/getCountByProposalstatus', getCountByProposalstatus);
async function getCountByProposalstatus(req, res) {
  let data;
  data = await authCtrl.getCountByProposalstatus(req.body)
  res.json(data);
}
router.post('/getNumberCode', getNumberCode);
async function getNumberCode(req, res) {
  let data;
  data = await authCtrl.getNumberCode(req.body)
  res.json(data);
}
router.post('/getDataByProposalstatus', getDataByProposalstatus);
async function getDataByProposalstatus(req, res) {
  let data;
  data = await authCtrl.getDataByProposalstatus(req.body)
  res.json(data);
}
router.post('/get_dataProductstatistic', get_dataProductstatistic);
async function get_dataProductstatistic(req, res) {
  let data;
  data = await authCtrl.get_dataProductstatistic(req.body)
  res.json(data);
}
router.post('/get_ListFullDataByLocation', get_ListFullDataByLocation);
async function get_ListFullDataByLocation(req, res) {
  let data;
  data = await authCtrl.get_ListFullDataByLocation(req.body)
  res.json(data);
}
// Report Product Link
router.post('/get_reportLinkProduct', get_reportLinkProduct);
async function get_reportLinkProduct(req, res) {
  let data;
  data = await authCtrl.get_reportLinkProduct(req.body)
  res.json(data);
}

// Service tours
// --------------------------------------------
router.post('/_SupplierfindOne', _SupplierfindOne);
async function _SupplierfindOne(req, res) {
  let data;
  data = await authCtrl._SupplierfindOne(req.body)
  res.json(data);
}

router.post('/_countOptionService', _countOptionService);
async function _countOptionService(req, res) {
  let data;
  data = await authCtrl._countOptionService(req.body)
  res.json(data);
}

router.post('/_Supplier_get_for_Service', _Supplier_get_for_Service);
async function _Supplier_get_for_Service(req, res) {
  let data;
  data = await authCtrl._Supplier_get_for_Service(req.body)
  res.json(data);
}

router.post('/_Supplier_get_for_operation', _Supplier_get_for_operation);
async function _Supplier_get_for_operation(req, res) {
  let data;
  data = await authCtrl._Supplier_get_for_operation(req.body)
  res.json(data);
}

router.post('/_Service_Get_DataByParams', _Service_Get_DataByParams);
async function _Service_Get_DataByParams(req, res) {
  let data;
  data = await authCtrl._Service_Get_DataByParams(req.body)
  res.json(data);
}
router.post('/_Service_Get_Export', _Service_Get_Export);
async function _Service_Get_Export(req, res) {
  let data;
  data = await authCtrl._Service_Get_Export(req.body)
  res.json(data);
}
router.post('/delete_Services', delete_Services);
router.post('/add_Services', add_Services);
router.post('/find_Services', find_Services);
router.post('/findIDs_Services', findIDs_Services);
router.post('/update_Services', update_Services);
router.post('/get_Services_ByIds', get_Services_ByIds);

async function add_Services(req, res) {
  let data;
  data = await authCtrl.add_Services(req.body);
  res.json(data);
}
async function findIDs_Services(req, res) {
  let data;
  data = await authCtrl.findIDs_Services(req.body);
  res.json(data);
}
async function find_Services(req, res) {
  let data;
  data = await authCtrl.find_Services(req.body);
  res.json(data);
}

async function update_Services(req, res) {
  let data;
  data = await authCtrl.update_Services(req.body);
  res.json(data);
}
async function delete_Services(req, res) {
  let data;
  data = await authCtrl.delete_Services(req.body);
  res.json(data);
}
async function get_Services_ByIds(req, res) {
  let data;
  data = await authCtrl.get_Services_ByIds(req.body);
  res.json(data);
}
router.get('/fixmaxServices', FixMaxServices);
async function FixMaxServices(req, res) {
  let data;
  data = await authCtrl.FixMaxServices();
  res.json(data);
}
//
router.post('/getAgenct', getAgenct);
async function getAgenct(req, res) {
  let data;
  data = await authCtrl.getAgenct(req.body)
  res.json(data);
}
// For Import Data
router.post('/get_treeGeopath', get_treeGeopath);
async function get_treeGeopath(req, res) {
  if (req.body.source === 'da') {
    res.json(await authCtrl.get_treeGeopath(req.body))
  }
  else {
    res.json(await authCtrl.get_treeGeopath_tera(req.body))
  }
}

router.post('/revisedata', revisedata);
async function revisedata(req, res) {
  let data;
  data = await authCtrl.revisedata(req.body)
  res.json(data);
}
router.post('/delete_Topup', delete_Topup);
router.post('/add_Topup', add_Topup);
router.post('/update_Topup', update_Topup);
router.post('/list_Topup', list_Topup);
// --------------------------------------------
async function list_Topup(req, res) {
  let data;
  data = await authCtrl.list_Topup(req.body)
  res.json(data);
}
async function add_Topup(req, res) {
  let data;
  data = await authCtrl.add_Topup(req.body)
  res.json(data);
}
async function update_Topup(req, res) {
  let data;
  data = await authCtrl.update_Topup(req.body)
  res.json(data);
}
async function delete_Topup(req, res) {
  let data;
  data = await authCtrl.delete_Topup(req.body)
  res.json(data);
}


router.post('/delete_City', delete_City);
router.post('/add_City', add_City);
router.post('/update_City', update_City);
router.post('/list_City', list_City);
// City
// --------------------------------------------
async function list_City(req, res) {
  let data;
  data = await authCtrl.list_City(req.body)
  res.json(data);
}
async function add_City(req, res) {
  let data;
  data = await authCtrl.add_City(req.body)
  res.json(data);
}
async function update_City(req, res) {
  let data;
  data = await authCtrl.update_City(req.body)
  res.json(data);
}
async function delete_City(req, res) {
  let data;
  data = await authCtrl.delete_City(req.body)
  res.json(data);
}

router.post('/delete_Airports', delete_Airports);
router.post('/add_Airports', add_Airports);
router.post('/update_Airports', update_Airports);
router.get('/list_Airports', list_Airports);

// Airports
// --------------------------------------------
async function list_Airports(req, res) {
  let data;
  data = await authCtrl.list_Airports(req.body)
  res.json(data);
}
async function add_Airports(req, res) {
  let data;
  data = await authCtrl.add_Airports(req.body)
  res.json(data);
}
async function update_Airports(req, res) {
  let data;
  data = await authCtrl.update_Airports(req.body)
  res.json(data);
}
async function delete_Airports(req, res) {
  let data;
  data = await authCtrl.delete_Airports(req.body)
  res.json(data);
}


router.post('/delete_Zone', delete_Zone);
router.post('/add_Zone', add_Zone);
router.post('/update_Zone', update_Zone);
router.post('/list_Zone', list_Zone);
async function list_Zone(req, res) {
  let data;
  data = await authCtrl.list_Zone(req.body)
  res.json(data);
}
async function add_Zone(req, res) {
  let data;
  data = await authCtrl.add_Zone(req.body)
  res.json(data);
}
async function update_Zone(req, res) {
  let data;
  data = await authCtrl.update_Zone(req.body)
  res.json(data);
}
async function delete_Zone(req, res) {
  let data;
  data = await authCtrl.delete_Zone(req.body)
  res.json(data);
}

router.post('/delete_Province', delete_Province);
router.post('/add_Province', add_Province);
router.post('/update_Province', update_Province);
router.post('/list_Province', list_Province);

// Province
// --------------------------------------------
async function list_Province(req, res) {
  let data;
  data = await authCtrl.list_Province(req.body)
  res.json(data);
}
async function add_Province(req, res) {
  let data;
  data = await authCtrl.add_Province(req.body)
  res.json(data);
}
async function update_Province(req, res) {
  let data;
  data = await authCtrl.update_Province(req.body)
  res.json(data);
}
async function delete_Province(req, res) {
  let data;
  data = await authCtrl.delete_Province(req.body)
  res.json(data);
}
router.post('/delete_Area', delete_Area);
router.post('/add_Area', add_Area);
router.post('/update_Area', update_Area);
router.post('/list_Area', list_Area);

// Area
// --------------------------------------------
async function list_Area(req, res) {
  let data;
  data = await authCtrl.list_Area(req.body)
  res.json(data);
}
async function add_Area(req, res) {
  let data;
  data = await authCtrl.add_Area(req.body)
  res.json(data);
}
async function update_Area(req, res) {
  let data;
  data = await authCtrl.update_Area(req.body)
  res.json(data);
}
async function delete_Area(req, res) {
  let data;
  data = await authCtrl.delete_Area(req.body)
  res.json(data);
}

// --------------------------------------------
router.post('/find_one_link_excursions', find_one_link_excursions);
async function find_one_link_excursions(req, res) {
  let data;
  data = await authCtrl.find_one_link_excursions(req.body)
  res.json(data);
}

router.post('/findOneitemExcursions', findOneitemExcursions);
async function findOneitemExcursions(req, res) {
  let data;
  data = await authCtrl.findOneitemExcursions(req.body)
  res.json(data);
}

//
router.post('/get_DataServiceForEdit', get_DataServiceForEdit);
async function get_DataServiceForEdit(req, res) {
  let data;
  data = await authCtrl.get_DataServiceForEdit(req.body)
  res.json(data);
}

router.post('/SearchDataByParams', SearchDataByParams);
async function SearchDataByParams(req, res) {
  let data;
  data = await authCtrl.SearchDataByParams(req.body)
  res.json(data);
}
router.post('/SearchDataByParamsLink', SearchDataByParamsLink);
async function SearchDataByParamsLink(req, res) {
  let data;
  data = await authCtrl.SearchDataByParamsLink(req.body)
  res.json(data);
}

// Airlines
// --------------------------------------------
router.post('/delete_Airlines', delete_Airlines);
router.post('/add_Airlines', add_Airlines);
router.post('/update_Airlines', update_Airlines);
router.post('/list_Airlines', list_Airlines);
// Airlines
// --------------------------------------------
async function list_Airlines(req, res) {
  let data;
  data = await authCtrl.list_Airlines(req.body)
  res.json(data);
}
async function add_Airlines(req, res) {
  let data;
  data = await authCtrl.add_Airlines(req.body)
  res.json(data);
}
async function update_Airlines(req, res) {
  let data;
  data = await authCtrl.update_Airlines(req.body)
  res.json(data);
}
async function delete_Airlines(req, res) {
  let data;
  data = await authCtrl.delete_Airlines(req.body)
  res.json(data);
}

// ------------------------------------------------------------- TariffPeriod
router.post('/list_TariffPeriod', list_TariffPeriod);
async function list_TariffPeriod(req, res) {
  let data;
  data = await authCtrl.list_TariffPeriod(req.body)
  res.json(data);
}

router.post('/add_TariffPeriod', add_TariffPeriod);
async function add_TariffPeriod(req, res) {
  let data;
  data = await authCtrl.add_TariffPeriod(req.body)
  res.json(data);
}

router.post('/update_TariffPeriod', update_TariffPeriod);
async function update_TariffPeriod(req, res) {
  let data;
  data = await authCtrl.update_TariffPeriod(req.body)
  res.json(data);
}

router.post('/delete_TariffPeriod', delete_TariffPeriod);
async function delete_TariffPeriod(req, res) {
  let data;
  data = await authCtrl.delete_TariffPeriod(req.body)
  res.json(data);
}

router.post('/GetperiodeClient', GetperiodeClient);
async function GetperiodeClient(req, res) {
  let data;
  data = await authCtrl.GetperiodeClient(req.body)
  res.json(data);
}
// ------------------------------------------------------------- TariffPeriod End


router.post('/delete_ServiceType', delete_ServiceType);
router.post('/add_ServiceType', add_ServiceType);
router.post('/update_ServiceType', update_ServiceType);
router.post('/list_ServiceType', list_ServiceType);
// ServiceType
// --------------------------------------------
async function list_ServiceType(req, res) {
  let data;
  data = await authCtrl.list_ServiceType(req.body)
  res.json(data);
}
async function add_ServiceType(req, res) {
  let data;
  data = await authCtrl.add_ServiceType(req.body)
  res.json(data);
}
async function update_ServiceType(req, res) {
  let data;
  data = await authCtrl.update_ServiceType(req.body)
  res.json(data);
}
async function delete_ServiceType(req, res) {
  let data;
  data = await authCtrl.delete_ServiceType(req.body)
  res.json(data);
}


router.post('/delete_supplier', delete_Supplier);
router.post('/add_supplier', add_Supplier);
router.post('/update_Supplier', update_Supplier);
router.post('/list_supplier', list_Supplier);
router.post('/getCountIdSupplier', getCountIdSupplier);
router.post('/find_Supplier', find_Supplier);
router.post('/filterService', filterService);
router.post('/findOneSupplierlanguage', findOneSupplierlanguage);
router.post('/findOneSupplierProcess', findOneSupplierProcess);
// CRM Supplier
// --------------------------------------------
async function findOneSupplierlanguage(req, res) {
  let data;
  data = await authCtrl.findOneSupplierlanguage(req.body)
  res.json(data);
}
async function findOneSupplierProcess(req, res) {
  let data;
  data = await authCtrl.findOneSupplierProcess(req.body)
  res.json(data);
}

async function filterService(req, res) {
  let data;
  data = await authCtrl.filterService(req.body)
  res.json(data);
}

async function find_Supplier(req, res) {
  let data;
  data = await authCtrl.find_Supplier(req.body)
  res.json(data);
}

async function list_Supplier(req, res) {
  let data;
  data = await authCtrl.list_Supplier(req.body)
  res.json(data);
}
async function getCountIdSupplier(req, res) {
  let data;
  data = await authCtrl.getCountIdSupplier(req.body)
  res.json(data);
}

async function add_Supplier(req, res) {
  let data;
  data = await authCtrl.add_Supplier(req.body)
  res.json(data);
}
async function update_Supplier(req, res) {
  let data;
  data = await authCtrl.update_Supplier(req.body)
  res.json(data);
}
async function delete_Supplier(req, res) {
  let data;
  data = await authCtrl.delete_Supplier(req.body)
  res.json(data);
}

router.post('/checkProductCodeExist', checkProductCodeExist);
router.post('/delete_tours', delete_tours);
router.post('/add_tours', add_tours);
router.post('/update_tours', update_tours);
router.post('/add_tours_generation', add_tours_generation);
router.post('/updatePriceOperation', updatePriceOperation);

router.post('/get_Tours_ByIds', get_Tours_ByIds);
router.post('/get_Tours_ByIsIds', get_Tours_ByIsIds);
router.post('/one_tours', one_tours);
router.post('/tours_get_lastest_by_code', tours_get_lastest_by_code);
router.post('/ass_tours', ass_tours);

// CRM Duration
// --------------------------------------------
async function checkProductCodeExist(req, res) {
  let data;
  data = await authCtrl.checkProductCodeExist(req.body)
  res.json(data);
}
async function ass_tours(req, res) {
  let data;
  data = await authCtrl.ass_tours(req.body)
  res.json(data);
}
async function one_tours(req, res) {
  let data;
  data = await authCtrl.one_tours(req.body)
  res.json(data);
}
async function tours_get_lastest_by_code(req, res) {
  let data;
  data = await authCtrl.tours_get_lastest_by_code(req.body)
  res.json(data);
}

async function get_Tours_ByIds(req, res) {
  let data;
  data = await authCtrl.get_Tours_ByIds(req.body)
  res.json(data);
}
async function get_Tours_ByIsIds(req, res) {
  let data;
  data = await authCtrl.get_Tours_ByIsIds(req.body)
  res.json(data);
}
async function add_tours(req, res) {
  let data;
  data = await authCtrl.add_tours(req.body)
  res.json(data);
}
async function update_tours(req, res) {
  let data;
  data = await authCtrl.update_tours(req.body)
  res.json(data);
}
async function updatePriceOperation(req, res) {
  let data;
  data = await authCtrl.updatePriceOperation(req.body)
  res.json(data);
}
async function add_tours_generation(req, res) {
  try {
    let data;
    data = await authCtrl.add_tours_generation(req.body)
    res.json(data);
  }
  catch (err) {
    console.log("akjhfksj", err);
  }
}
async function delete_tours(req, res) {
  let data;
  data = await authCtrl.delete_tours(req.body)
  res.json(data);
}

router.post('/list_tours_forfix', list_tours_forfix);
async function list_tours_forfix(req, res) {
  let data;
  data = await authCtrl.list_tours_forfix(req.body)
  res.json(data);
}

// Audit Log
router.post('/list_audit_logs', list_audit_logs);
router.post('/get_audit_log', get_audit_log);
async function list_audit_logs(req, res) {
  let data;
  data = await authCtrl.list_audit_logs(req.body)
  res.json(data);
}
async function get_audit_log(req, res) {
  let data;
  data = await authCtrl.get_audit_log(req.body)
  res.json(data);
}

// Tour Generation Log
router.post('/add_tour_generation_log', add_tour_generation_log);
router.post('/list_tour_generation_logs', list_tour_generation_logs);
router.post('/get_tour_generation_log', get_tour_generation_log);
async function add_tour_generation_log(req, res) {
  let data;
  data = await authCtrl.add_tour_generation_log(req.body)
  res.json(data);
}
async function list_tour_generation_logs(req, res) {
  let data;
  data = await authCtrl.list_tour_generation_logs(req.body)
  res.json(data);
}
async function get_tour_generation_log(req, res) {
  let data;
  data = await authCtrl.get_tour_generation_log(req.body)
  res.json(data);
}

//
router.post('/delete_categorys', delete_categorys);
router.post('/add_categorys', add_categorys);
router.post('/update_categorys', update_categorys);
router.post('/list_categorys', list_categorys);

// CRM Duration
// --------------------------------------------
async function list_categorys(req, res) {
  let data;
  data = await authCtrl.list_categorys(req.body)
  res.json(data);
}
async function add_categorys(req, res) {
  let data;
  data = await authCtrl.add_categorys(req.body)
  res.json(data);
}
async function update_categorys(req, res) {
  let data;
  data = await authCtrl.update_categorys(req.body)
  res.json(data);
}
async function delete_categorys(req, res) {
  let data;
  data = await authCtrl.delete_categorys(req.body)
  res.json(data);
}

router.post('/delete_suplanguage', delete_suplanguage);
router.post('/add_suplanguage', add_suplanguage);
router.post('/update_suplanguage', update_suplanguage);
router.post('/list_suplanguage', list_suplanguage);
// CRM Duration
// --------------------------------------------
async function list_suplanguage(req, res) {
  let data;
  data = await authCtrl.list_suplanguage(req.body)
  res.json(data);
}
async function add_suplanguage(req, res) {
  let data;
  data = await authCtrl.add_suplanguage(req.body)
  res.json(data);
}
async function update_suplanguage(req, res) {
  let data;
  data = await authCtrl.update_suplanguage(req.body)
  res.json(data);
}
async function delete_suplanguage(req, res) {
  let data;
  data = await authCtrl.delete_suplanguage(req.body)
  res.json(data);
}

router.post('/delete_maps', delete_maps);
router.post('/add_maps', add_maps);
router.post('/update_maps', update_maps);
router.post('/list_maps', list_maps);
// CRM Duration
// --------------------------------------------
async function list_maps(req, res) {
  let data;
  data = await authCtrl.list_maps(req.body)
  res.json(data);
}
async function add_maps(req, res) {
  let data;
  data = await authCtrl.add_maps(req.body)
  res.json(data);
}
async function update_maps(req, res) {
  let data;
  data = await authCtrl.update_maps(req.body)
  res.json(data);
}
async function delete_maps(req, res) {
  let data;
  data = await authCtrl.delete_maps(req.body)
  res.json(data);
}

router.post('/delete_durations', delete_durations);
router.post('/add_durations', add_durations);
router.post('/update_durations', update_durations);
router.post('/list_durations', list_durations);
// CRM Duration
// --------------------------------------------
async function list_durations(req, res) {
  let data;
  data = await authCtrl.list_durations(req.body)
  res.json(data);
}
async function add_durations(req, res) {
  let data;
  data = await authCtrl.add_durations(req.body)
  res.json(data);
}
async function update_durations(req, res) {
  let data;
  data = await authCtrl.update_durations(req.body)
  res.json(data);
}
async function delete_durations(req, res) {
  let data;
  data = await authCtrl.delete_durations(req.body)
  res.json(data);
}


router.post('/list_gents_Asss', list_gents_Asss);
router.post('/random_code', random_code);
router.post('/random_codeAgents', random_codeAgents);
router.post('/random_code_Service', random_code_Service);
router.post('/delete_market', delete_market);
router.post('/add_market', add_market);
router.post('/update_market', update_market);
router.post('/list_market', list_market);

// CRM Market
// --------------------------------------------
async function list_market(req, res) {
  let data;
  data = await authCtrl.list_market(req.body)
  res.json(data);
}

async function add_market(req, res) {
  let data;
  data = await authCtrl.add_market(req.body)
  res.json(data);
}
async function update_market(req, res) {
  let data;
  data = await authCtrl.update_market(req.body)
  res.json(data);
}
async function delete_market(req, res) {
  let data;
  data = await authCtrl.delete_market(req.body)
  res.json(data);
}

// CRM Function
// --------------------------------------------
async function random_code(req, res) {
  let data;
  data = await authCtrl.random_code(req.body)
  res.json(data);
}
async function random_codeAgents(req, res) {
  let data;
  data = await authCtrl.random_codeAgents(req.body)
  res.json(data);
}
async function random_code(req, res) {
  let data;
  data = await authCtrl.random_code(req.body)
  res.json(data);
}

async function random_code_Service(req, res) {
  let data;
  data = await authCtrl.random_code_Service(req.body)
  res.json(data);
}

// --------------------------------------------
async function list_gents_Asss(req, res) {
  let data;
  data = await authCtrl.list_gents_Asss(req.body)
  res.json(data);
}

router.post('/updateUrlExport', updateUrlExport);
async function updateUrlExport(req, res) {
  let data;
  data = await authCtrl.updateUrlExport(req.body)
  res.json(data);
}
//==================================================================================================================================
// END
//==================================================================================================================================


//==================================================================================================================================
// Hotels Tariff
//
// START
//==================================================================================================================================
// Rules api
// --------------------------------------------
router.post('/delete_special_offers', delete_special_offers);
router.post('/add_special_offers', add_special_offers);
router.post('/update_special_offers', update_special_offers);
router.post('/list_special_offers', list_special_offers);
router.post('/list_special_offers_page', list_special_offers_page);
// --------------------------------------------

// Rules Function
// --------------------------------------------
async function list_special_offers_page(req, res) {
  let data;
  data = await authCtrl.list_special_offers_page(req.body)
  res.json(data);
}
async function list_special_offers(req, res) {
  let data;
  data = await authCtrl.list_special_offers(req.body)
  res.json(data);
}
async function add_special_offers(req, res) {
  let data;
  data = await authCtrl.add_special_offers(req.body)
  res.json(data);
}
async function update_special_offers(req, res) {
  let data;
  data = await authCtrl.update_special_offers(req.body)
  res.json(data);
}
async function delete_special_offers(req, res) {
  let data;
  data = await authCtrl.delete_special_offers(req.body)
  res.json(data);
}

//
router.post('/delete_allotments', delete_allotments);
router.post('/add_allotments', add_allotments);
router.post('/update_allotments', update_allotments);
router.post('/list_allotments', list_allotments);
// Allotments Hotel
// --------------------------------------------
async function list_allotments(req, res) {
  let data;
  data = await authCtrl.list_allotments(req.body)
  res.json(data);
}
async function add_allotments(req, res) {
  let data;
  data = await authCtrl.add_allotments(req.body)
  res.json(data);
}
async function update_allotments(req, res) {
  let data;
  data = await authCtrl.update_allotments(req.body)
  res.json(data);
}
async function delete_allotments(req, res) {
  let data;
  data = await authCtrl.delete_allotments(req.body)
  res.json(data);
}
router.get('/GetLanguageCodes', GetLanguageCodes);
router.post('/delete_Language', delete_Language);
router.post('/add_Language', add_Language);
router.post('/update_Language', update_Language);
router.post('/find_language', find_language);
async function find_language(req, res) {
  let data;
  data = await authCtrl.find_language(req.body)
  res.json(data);
}
// Allotments Hotel
// --------------------------------------------
async function GetLanguageCodes(req, res) {
  let data;
  data = await authCtrl.GetLanguageCodes()
  res.json(data);
}

async function add_Language(req, res) {
  let data;
  data = await authCtrl.add_Language(req.body)
  res.json(data);
}
async function update_Language(req, res) {
  let data;
  data = await authCtrl.update_Language(req.body)
  res.json(data);
}
async function delete_Language(req, res) {
  let data;
  data = await authCtrl.delete_Language(req.body)
  res.json(data);
}

// Report Hotel
router.post('/get_reportHotel_Statistic', get_reportHotel_Statistic);
async function get_reportHotel_Statistic(req, res) {
  let data;
  data = await authCtrl.get_reportHotel_Statistic(req.body)
  res.json(data);
}
//==================================================================================================================================
// END
//==================================================================================================================================


//==================================================================================================================================
// ALL (Hotel-Tours) Tariff
//
// START
//==================================================================================================================================
// -----------------------------------------------------
// router.post('/upload', multipartMiddleware, (req, res) => {
//   console.log("upload", req);

//   if (req.files.file) {
//     let fpath = req.files.file.path;

//     if (req.body.dir) {
//       let dir = req.body.dir;
//       if (dir.includes('..') || dir.startsWith('.'))
//         dir = '_temp_images';

//       let toDir = './dist/' + dir;
//       mkDirIfNotExist(toDir);

//       let f = path.basename(fpath);
//       let dest = toDir + '/' + f;

//       sharp(req.files.file.path, {
//         density: 96
//       })
//         .resize(500)
//         .toFile(dest, function (err) {
//           if (err) {
//             console.error('sharp>>>', err)
//           }

//           fs.unlinkSync(req.files.file.path);
//         });

//       fpath = dest;
//     }

//     res.json({
//       path: fpath.replace("./dist/", "/"),
//       filename: req.files.file.name
//     });
//   }
//   else {
//     res.json(false);
//   }
// });
function mkDirIfNotExist(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}
function moveFileToDir(file, dir) {
  let f = path.basename(file);
  let dest = dir + '/' + f;
  fs.renameSync(file, dest);
  return dest;
};

router.post('/add_image', add_image);
async function add_image(req, res) {
  let data;
  data = await authCtrl.add_image(req.body)
  res.json(data);
}
router.post('/delete_image', delete_image);
async function delete_image(req, res) {
  // delete image file
  if (req.body.path) {
    let file = './dist/' + req.body.path;
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
    }
  }

  let data = await authCtrl.delete_image(req.body);
  res.json(data);
}

router.post('/Getfolder', Getfolder);
async function Getfolder(req, res) {
  let data;
  data = await authCtrl.Getfolder(req.body)
  res.json(data);
}
router.post('/delete_folder', delete_folder);
router.post('/add_folder', add_folder);
router.post('/update_folder', update_folder);

async function add_folder(req, res) {
  let data;
  data = await authCtrl.add_folder(req.body)
  res.json(data);
}
async function update_folder(req, res) {
  let data;
  data = await authCtrl.update_folder(req.body)
  res.json(data);
}
async function delete_folder(req, res) {
  let data;
  data = await authCtrl.delete_folder(req.body)
  res.json(data);
}

// -----------------------------------------------------
router.post('/GetImagesBy', GetImagesBy);
async function GetImagesBy(req, res) {
  let data;
  data = await authCtrl.GetImagesBy(req.body)
  res.json(data);
}

router.post('/delete_users', delete_users);
router.post('/add_users', add_users);
router.post('/update_users', update_users);
router.post('/list_users', list_users);
router.post('/findOne_users', findOne_users);
// CRM Duration
// --------------------------------------------
async function findOne_users(req, res) {
  let data;
  data = await authCtrl.findOne_users(req.body)
  res.json(data);
}
async function list_users(req, res) {
  let data;
  data = await authCtrl.list_users(req.body)
  res.json(data);
}
async function add_users(req, res) {
  let data;
  data = await authCtrl.add_users(req.body)
  res.json(data);
}
async function update_users(req, res) {
  let data;
  data = await authCtrl.update_users(req.body)
  res.json(data);
}
async function delete_users(req, res) {
  let data;
  data = await authCtrl.delete_users(req.body)
  res.json(data);
}

// ------------------------------------------------------------- Curency
router.post('/initCurrencyDatabaseIfNotExist', initCurrencyDatabaseIfNotExist);
async function initCurrencyDatabaseIfNotExist(req, res) {
  let data;
  data = await authCtrl.initCurrencyDatabaseIfNotExist(req.body)
  res.json(data);
}

router.post('/getCurrenciesAll', getCurrenciesAll);
async function getCurrenciesAll(req, res) {
  let data;
  data = await authCtrl.getCurrenciesAll(req.body)
  res.json(data);
}

router.post('/getCurrencySelectedByNation', getCurrencySelectedByNation);
async function getCurrencySelectedByNation(req, res) {
  let data;
  data = await authCtrl.getCurrencySelectedByNation(req.body)
  res.json(data);
}

router.post('/updateCurrencySelectedByNation', updateCurrencySelectedByNation);
async function updateCurrencySelectedByNation(req, res) {
  let data;
  data = await authCtrl.updateCurrencySelectedByNation(req.body)
  res.json(data);
}

router.post('/getCurrencyLogByNation', getCurrencyLogByNation);
async function getCurrencyLogByNation(req, res) {
  let data;
  data = await authCtrl.getCurrencyLogByNation(req.body)
  res.json(data);
}

// ------------------------------------------------------------- Curency End

// ------------------------------------------------------------- Exchange Rate
router.post('/list_exchangeRate', list_exchangeRate);
async function list_exchangeRate(req, res) {
  let data;
  data = await authCtrl.list_exchangeRate(req.body)
  res.json(data);
}

router.post('/add_exchangeRate', add_exchangeRate);
async function add_exchangeRate(req, res) {
  let data;
  data = await authCtrl.add_exchangeRate(req.body)
  res.json(data);
}

router.post('/update_exchangeRate', update_exchangeRate);
async function update_exchangeRate(req, res) {
  let data;
  data = await authCtrl.update_exchangeRate(req.body)
  res.json(data);
}

router.post('/delete_exchangeRate', delete_exchangeRate);
async function delete_exchangeRate(req, res) {
  let data;
  data = await authCtrl.delete_exchangeRate(req.body)
  res.json(data);
}

router.post('/getExchangeRateLogByNation', getExchangeRateLogByNation);
async function getExchangeRateLogByNation(req, res) {
  let data;
  data = await authCtrl.getExchangeRateLogByNation(req.body)
  res.json(data);
}
// ------------------------------------------------------------- Exchange Rate End

// ------------------------------------------------------------- Accommodation 
router.post('/getListAccommodation', getListAccommodation);
async function getListAccommodation(req, res){
  let data;
  data = await authCtrl.getListAccommodation(req.body)
  res.json(data);
}
router.post('/saveAccommodation', saveAccommodation);
async function saveAccommodation(req, res){
  let data;
  data = await authCtrl.saveAccommodation(req.body)
  res.json(data);
}
router.post('/deleteAccommodation', deleteAccommodation);
async function deleteAccommodation(req, res){
  let data;
  data = await authCtrl.deleteAccommodation(req.body)
  res.json(data);
}
// END
//==================================================================================================================================
