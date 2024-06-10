const express = require('express');
const passport = require('passport');
const userCtrl = require('../controllers/user.controller');
const Base64 = require('js-base64').Base64;
const router = express.Router();
module.exports = router;


// -------------------------------------------- Config
router.post('/getConfig', getConfig);
async function getConfig(req, res) {
  let data;
  data = await userCtrl.getConfig(req.body)
  res.json(data);
}

// -------------------------------------------- Country
router.post('/getCountries', getCountries);
async function getCountries(req, res) {
  let data;
  data = await userCtrl.getCountries(req.body)
  res.json(data);
}

router.post('/getChildPolicies', getChildPolicies);
async function getChildPolicies(req, res) {
  let data;
  data = await userCtrl.getChildPolicies(req.body)
  res.json(data);
}

router.post('/find_language', find_language);
async function find_language(req, res) {
  let data;
  data = await userCtrl.find_language(req.body)
  res.json(data);
}

//
router.post('/list_Supplier', list_Supplier);
async function list_Supplier(req, res) {
  let data;
  data = await userCtrl.list_Supplier(req.body)
  res.json(data);
}

router.post('/SearchForAirfare', SearchForAirfare);
async function SearchForAirfare(req, res) {
  let data;
  data = await userCtrl.SearchForAirfare(req.body)
  res.json(data);
}

router.post('/SearchForAirfare2', SearchForAirfare2);
async function SearchForAirfare2(req, res) {
  let data;
  data = await userCtrl.SearchForAirfare2(req.body)
  res.json(data);
}

router.post('/getOneAirfare', getOneAirfare);
async function getOneAirfare(req, res) {
  let data;
  data = await userCtrl.getOneAirfare(req.body);
  res.json(data);
}

router.post('/bookingListGet', bookingListGet);
async function bookingListGet(req, res) {
  let data;
  data = await userCtrl.bookingListGet(req.body)
  res.json(data);
}
router.post('/list_Airlines', list_Airlines);
async function list_Airlines(req, res) {
  let data;
  data = await userCtrl.list_Airlines(req.body)
  res.json(data);
}
router.post('/getOneRequest', getOneRequest);
async function getOneRequest(req, res) {
  let data;
  data = await userCtrl.getOneRequest(req.body)
  res.json(data);
}

router.post('/bookingonrequest', bookingonrequest);
async function bookingonrequest(req, res) {
  let data;
  data = await userCtrl.bookingonrequest(req.body)
  res.json(data);
}

router.post('/updateBookingOnRequest', updateBookingOnRequest);
async function updateBookingOnRequest(req, res) {
  let updateData = await userCtrl.updateBookingOnRequest(req.body);
  res.json(updateData);
}

router.post('/filter_Hotel', filter_Hotel);
async function filter_Hotel(req, res) {
  let data;
  data = await userCtrl.filter_Hotel(req.body)
  res.json(data);
}

router.post('/recent_update_hotel', recent_update_hotel);
async function recent_update_hotel(req, res) {
  let data;
  data = await userCtrl.recent_update_hotel(req.body)
  res.json(data);
}

router.post('/recent_promotions', recent_promotions);
async function recent_promotions(req, res) {
  let data;
  data = await userCtrl.recent_promotions(req.body)
  res.json(data);
}

router.post('/recent_refurbishments', recent_refurbishments);
async function recent_refurbishments(req, res) {
  let data;
  data = await userCtrl.recent_refurbishments(req.body)
  res.json(data);
}

router.post('/detailTour', detailTour);
async function detailTour(req, res) {
  let data;
  data = await userCtrl.detailTour(req.body)
  res.json(data);
}

router.post('/list_options', list_options);
async function list_options(req, res) {
  let data;
  data = await userCtrl.list_options(req.body)
  res.json(data);
}

//router.use(passport.authenticate('jwt', { session: false }))
router.post('/get_value_byCodeMd5', get_value_byCodeMd5);
async function get_value_byCodeMd5(req, res) {
  let data;
  data = await userCtrl.get_value_byCodeMd5(req.body)
  res.json(data);
}

router.post('/list_City', list_City);
async function list_City(req, res) {
  let data;
  data = await userCtrl.list_City(req.body)
  res.json(data);
}

router.post('/get_periodeClient', get_periodeClient);
async function get_periodeClient(req, res) {
  let data;
  data = await userCtrl.get_periodeClient(req.body)
  res.json(data);
}
router.post('/list_exchangeRate', list_exchangeRate);
async function list_exchangeRate(req, res) {
  let data;
  data = await userCtrl.list_exchangeRate(req.body)
  res.json(data);
}

router.post('/onehotel', onehotel);
async function onehotel(req, res) {
  let data;
  data = await userCtrl.getonehotel(req.body)
  res.json(data);
}
router.post('/Client_Get', Client_Get);
async function Client_Get(req, res) {
  let body = JSON.parse(Base64.decode(req.body.code))
  let data;
  data = await userCtrl.Client_Get(body)
  res.json(data);
}
router.post('/Client_Get_list', Client_Get_list);
async function Client_Get_list(req, res) {
  let body = JSON.parse(Base64.decode(req.body.code))
  let data;
  data = await userCtrl.Client_Get_list(body)
  res.json(data);
}

router.post('/list_market', list_market);
// CRM Market
// --------------------------------------------
async function list_market(req, res) {
  let data;
  data = await userCtrl.list_market(req.body)
  res.json(data);
}

// Login client buy Passcode
router.post('/logloginbackend', logloginbackend);
async function logloginbackend(req, res) {
  let data;
  data = await userCtrl.logloginbackend(req.body)
  res.json(data);
}
router.post('/loginbyPassCode', loginbyPassCode);
async function loginbyPassCode(req, res) {
  let data;
  data = await userCtrl.loginbyPassCode(req.body)
  res.json(data);
}
router.post('/_logAgentLogin', _logAgentLogin);
async function _logAgentLogin(req, res) {
  let data;
  data = await userCtrl._logAgentLogin(req.body)
  res.json(data);
}
// --------------------------------------------------

router.post('/updateAgencyContracts', updateAgencyContracts);
async function updateAgencyContracts(req, res) {
  let data = await userCtrl.updateAgencyContracts(req.body);
  res.json(data);
}

// --------------------------------------------------
router.post('/gentsByID', gentsByID);
async function gentsByID(req, res) {
  let data;
  data = await userCtrl.gentsByID(req.body)
  res.json(data);
}

router.post('/get_suplanguage', get_suplanguage);
async function get_suplanguage(req, res) {
  let data;
  data = await userCtrl.get_suplanguage(req.body)
  res.json(data);
}
router.post('/GuideScheduler', create_GuideSchedulers);
async function create_GuideSchedulers(req, res) {
  let data;
  data = await userCtrl.create_GuideSchedulers(req.body)
  res.json(data);
}
router.post('/update_GuideScheduler', update_GuideScheduler);
async function update_GuideScheduler(req, res) {
  let data;
  data = await userCtrl.update_GuideScheduler(req.body)
  res.json(data);
}
router.post('/del_GuideScheduler', destroy_GuideScheduler);
async function destroy_GuideScheduler(req, res) {
  let data;
  data = await userCtrl.destroy_GuideScheduler(req.body)
  res.json(data);
}
router.post('/get_GuideSchedulers', get_GuideSchedulers);
async function get_GuideSchedulers(req, res) {
  let data;
  data = await userCtrl.get_GuideSchedulers(req.body)
  res.json(data);
}

router.post('/get_OperationExport', get_OperationExport);
async function get_OperationExport(req, res) {
  let data;
  data = await userCtrl.get_OperationExport(req.body)
  res.json(data);
}

router.post('/create_logClient', create_logClient);
async function create_logClient(req, res) {
  let data;
  data = await userCtrl.create_logClient(req.body)
  res.json(data);
}
router.post('/get_logClient', get_logClient);
async function get_logClient(req, res) {
  let data;
  data = await userCtrl.get_logClient(req.body)
  res.json(data);
}
router.post('/mapsby', get_maps_by);
async function get_maps_by(req, res) {
  let data;
  data = await userCtrl.get_maps_by(req.body)
  res.json(data);
}

router.post('/serviceforedit', get_DataServiceForEdit);
async function get_DataServiceForEdit(req, res) {
  let data;
  data = await userCtrl.get_DataServiceForEdit(req.body)
  res.json(data);
}

router.post('/exportdate_excel_excursions', exportdate_excel_excursions);
async function exportdate_excel_excursions(req, res) {
  let data;
  data = await userCtrl.exportdate_excel_excursions(req.body)
  res.json(data);
}
