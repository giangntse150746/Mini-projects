const mongoose = require('mongoose');

const OnrequestActivity = new mongoose.Schema({
    price: Number,
    // surcharge: Number, // ?? dupllicate
    promotion: Number,
    total: {
        type: Number,
        default: 0
    },
    surcharge: {
        type: Number,
        default: 0
    },
    locations: [{}],
    name: String,
    productType: {
        type: String,
        enum: ['hotel', 'excursion', 'package', 'cruise', 'transfer', 'air']
    },
    child: Number,
    adult: Number,
    rating: Number,
    email: String,
    tel: String,
    hotelCheckinDate: {
        type: Date,
        default: ''
    },
    hotelCheckoutDate: {
        type: Date,
        default: ''
    },
    category: [String],
    duration: [String],
    productCode: String,
    productRefId: String
});

module.exports = mongoose.model('OnrequestActivity', OnrequestActivity);
