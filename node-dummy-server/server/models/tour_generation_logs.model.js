'use strict';
const mongoose = require('mongoose');

const TourGenerationLogs = new mongoose.Schema({
    generatedBy: String, // username
    generatedDate: Date,
    fromTour: {
        id: String,
        begindate: Date,
        productCode: String,
        bookingName: String
    },
    tourIds: Array, // relation tour id with this generation
    tours: [{
        begindate: Date,
        nights: Number,
        enddate: Date,
        productCode: String,
        bookingName: String,
        services: [{
            linkBy: String, // linkBy: 'Service', 'Excursions', null (Hotel)
            name: String,
            Date: String,
            noofnights: Number,
            types: String,
            PriceType: String,

            excursion: { // copy tours without Excursion
                begindate: Date,
                productCode: String,
                bookingName: String,
                services: [{
                    linkBy: String, // linkBy: 'Service', 'Excursions', null (Hotel)
                    name: String,
                    Date: String,
                    noofnights: Number,
                    types: String,
                    PriceType: String,
                }]
            }
        }]
    }]
}, {
    versionKey: false
});
module.exports = mongoose.model('FullDataGenerationLogs', TourGenerationLogs);
