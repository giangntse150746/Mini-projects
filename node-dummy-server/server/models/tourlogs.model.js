'use strict';
const mongoose = require('mongoose');
const { _, FullDataSchema } = require('./tours.model');

const TourLogs = new mongoose.Schema({
    tour: FullDataSchema
}, {
    versionKey: false
});
module.exports = mongoose.model('FullDataLogs', TourLogs);
