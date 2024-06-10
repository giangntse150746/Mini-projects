const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const exbed = new mongoose.Schema({
    from: Number,
    to: Number,
    price: Number,
    price_usd: Number,
    hasBreakfast: Boolean
})
const options = new mongoose.Schema(
    {
        _idRoom: String,
        name: String,
        _idOption: String,
        isActive: { type: Boolean, default: false },
        textRoom: String,
        chargeType: String,
        mealPlan: String,

        mealPlanAdult: Number,
        fit: Number,
        fit_usd: Number,
        git: Number,
        git_usd: Number,
        additional: Number,
        additional_usd: Number,
        packageDay: Number,
        packageNight: Number,
        exbedA: exbed,
        exbedC: exbed,
        MealPlanChild: exbed, // remove in future
        lsMealPlanChild: [exbed],
        // for Commission
        applyCommission: Boolean,
        CommissionValue: Number,
        cutoffPaymentRequirement: Number,
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
        otherOption: [{
            name: String,
            by: String,
            value: Number,
            sourcePrice: String,
        }],
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
        quantity: Number,
        images: [{
            filename: String,
            path: String,
            isDefault: Boolean
        }],
        roomOccupancyTemplates: {
            name: String
        }
    });
const rules = new mongoose.Schema(
    {
        _isId: String,
        _rulesID: String,
        ruleName: String,
        type_Rule: Number,
        numberDay: Number,
        Date_before: Date,
        travelingdate: Boolean,
        bookingdate: Boolean,
        bookingBeginDate: Date,
        bookingEndDate: Date,
        note: String,
        accumulative: Boolean,
        Repeat: Number,
        fixed: Boolean,
        for_room: Number,

        normal: Boolean,
        promotion: Boolean,
        surcharge: Boolean,

        for_occ: Number,
        ls_Room: [rooms],
        setAllRoom: Boolean,
        ls_option_by_rooms: [
            {
                value: Number,
                occ: Number,
                _idRoom: String,
                name: String,
                exbedA: Boolean,
                exbedC: Boolean,
                mealPlan: Boolean,
                ls_child_policy: [
                    {
                        typeCharge: String,
                        value: Number,
                        ageFrom: Number,
                        ageTo: Number,
                        price: Number,
                        canEdit: Boolean
                    }
                ]
            }
        ],
        periods: [{
            perNights: Boolean,
            perStay: Boolean,
            withinperiod: Boolean,
            beginDate: Date,
            endDate: Date
        }],
        ls_child_policy: [
            {
                typeCharge: String,
                value: Number,
                ageFrom: Number,
                ageTo: Number,
                price: Number,
                canEdit: Boolean
            }
        ]
    });
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
const periods = new mongoose.Schema(
    {
        _idPeriods: String,
        _idContracts: String,
        isActive: { type: Boolean, default: false },
        name: String,
        beginDate: Date,

        endDate: Date,
        _type: String,
        _typenumber: Number,
        mandatory: Boolean,
        note: String,
        group: Number,
        description: String,
        options: [options],
        userCreate: String,
        userUpdate: String,
        DateCreate: Date,

        DateUpdate: Date,
    });
const cancelation_policy = new mongoose.Schema(
    {
        _isId: String,
        name: String,
        num_Day: Number,
        nocharge: Boolean,
        value: Number,
        group: Number,
        _type: String,
        options: String,
        nights: Number,
        numberOfRoomsFrom: Number,
        numberOfRoomsTo: Number,
        numberOfBookingNightsFrom: Number,
        numberOfBookingNightsTo: Number,
        washDown: Number,
        washDownBefore: Number,
        arrivalDate: Number,
        periods_travel: [{
            beginDate: Date,
            endDate: Date,
        }],

        periods_booking: [{
            beginDate: Date,
            endDate: Date,
        }],
        lsNights: [
            {
                from: Number,
                to: Number,
                value: Number,
            }
        ],
        // for general
        currency: String,
        note: String
    });

const InfohotelSchema = new mongoose.Schema({
    nation: String,
    httype: Array,
    name: String,
    brandName: String,
    rating: Number,

    location: String,
    province: String,
    idCountry: String,
    Category: String,
    address: String,
    tel: String,
    email: String,

    url: String,
    _idSupplier: String, // supplier _id
    supplierID: String, // supplier code
    _idService: String, // service _id
    serviceID: String, // service code
    ServiceName: String, // service code

    isActive: { type: Boolean, default: false },
    description: String,
    overView: String,
    rooms: [rooms],
    contracts: [{
        elseRules: Boolean,
        DMK: Boolean,
        valueDMK: Number,
        rangeMarkup: Boolean,
        idRangeMarkup: String,
        _idContracts: String,
        isActive: { type: Boolean, default: false },

        name: String,
        nameFull: String,
        beginDate: Date,
        endDate: Date,
        currency: String,

        document: String,

        applyCommission: Boolean,
        isPublishClient: Boolean,
        CommissionValue: Number,
        CommissionBy: String,
        rules: [rules],
        linkrules: [
            {
                name: String,
                _idGroup: String,
                rules: [rules]
            }
        ],

        Internaluseonly: Boolean,
        note_rules: String,
        market: Array,
        exceptMarket: Array,
        note: String,

        Promotion: String,
        Refurbishments: String,
        Description: String,
        multiDayContent: Boolean,
        contents: [
            {
                numberday: Number,
                content: String,
            }
        ],

        ChlidPolicy: [ChlidPolicy],
        note_chlidPolicy: String,
        note_cttrash: String,
        cancelation_policy: [cancelation_policy],
        showRulesCancal: Boolean,
        note_cancelation_policy: String,

        periods: [periods],
        userCreate: String,
        userUpdate: String,
        DateCreate: Date,
        DateUpdate: Date,

        groupsize: Number, // default for 'GIT size from' in contract
        lsMealPlanChild: [exbed], // default for 'lsMealPlanChild' in contract

        reservation: {
            CheckinHours: Number,
            CheckinMinutes: Number,
            CheckoutHours: Number,
            CheckoutMinutes: Number,
            note: String,
            latecheckouts: [{
                id: String,
                LateCheckoutHours: Number,
                LateCheckoutMinutes: Number,
                LateCheckoutHoursTo: Number,
                LateCheckoutMinutesTo: Number,
                latecheckout: Boolean,
                setAllRoom: Boolean,
                ls_Room: [rooms],
                typeCharge: String, // 'Supplement', 'Deduct', 'Fixed'
                typeBy: String, // 'By %', 'By Amount'
                value: Number,
            }],
            latecheckins: [{
                id: String,
                LateCheckoutHours: Number,
                LateCheckoutMinutes: Number,
                LateCheckoutHoursTo: Number,
                LateCheckoutMinutesTo: Number,
                latecheckout: Boolean,
                setAllRoom: Boolean,
                ls_Room: [rooms],
                typeCharge: String, // 'Supplement', 'Deduct', 'Fixed'
                typeBy: String, // 'By %', 'By Amount'
                value: Number,
            }]
        }
    }],
    userCreate: String,
    userUpdate: String,
    DateCreate: Date,
    DateUpdate: Date,
    locationIds: String,
    // City: {
    //     type: Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'City'
    // },
    Area: String,
    // propertyFacilities
    airportShuttle: Boolean,
    Buggy: Boolean,
    businessFacilities: Boolean,
    familyRooms: Boolean,
    fitinessCenter: Boolean,
    facilitiesDisabledGuests: Boolean,
    freeWifi: Boolean,
    nonSmokingRooms: Boolean,
    Parking: Boolean,
    petFriendly: Boolean,
    Restaurant: Boolean,
    roomServices: Boolean,
    spaSauna: Boolean,
    swimmingPool: Boolean,
    tennisCourse: Boolean,
    // Room Amenities
    airConditioning: Boolean,
    balconyTerrace: Boolean,
    Bathtub: Boolean,
    coffeeTeamaker: Boolean,
    Desk: Boolean,
    electricKettle: Boolean,
    flatScreen: Boolean,
    Heating: Boolean,
    ironingFacilities: Boolean,
    Kitchen: Boolean,
    privatePool: Boolean,
    Refrigerator: Boolean,
    Soundproof: Boolean,
    washingMachine: Boolean,
    // PROPERTY ACCESSIBILITY
    auditoryGuidance: Boolean,
    bathroomEmergency: Boolean,
    toiletWithRails: Boolean,
    wheelchairAccessible: Boolean,
    // ROOM ACCESSIBILITY
    locatedGroundFloor: Boolean,
    upperAccessableElevator: Boolean,
    wheelchairAccessibleProperty: Boolean,


}, {
    versionKey: false
});


// module.exports = mongoose.model('Infohotel', InfohotelSchema);
module.exports = {
    Infohotel: mongoose.model('Infohotel', InfohotelSchema),
    InfohotelSchema: InfohotelSchema
}