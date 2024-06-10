const mongoose = require('mongoose');
const { InfohotelSchema } = require('./infohotel.model');

const InfohotelLogSchema = new mongoose.Schema({
    hotel: InfohotelSchema
}, {
    versionKey: false
});
module.exports = mongoose.model('Infohotel_Log', InfohotelLogSchema);