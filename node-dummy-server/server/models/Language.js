const { number } = require('joi');
const mongoose = require('mongoose');
const LanguageSchema = new mongoose.Schema({
    nation: String,
    idLanguage: String,
    thumbnail: String,
    Note: String,
    name: String,
    code: String,
    Day: String,
    //
    dateFormat: String,
    dateTimeFormat: String,
    // Table Transfre
    TitelTransfer: String,
    From: String,
    To: String,
    PickupTime: String,
    PickupPoint: String,
    DropOffPoint: String,
    Duration: String,
    VehicleType: String,
    PassengerName: String,
    Transfer: String,
    Meals: String,
    // Flight
    Flight: String, // new
    FlightInfo: String, // new
    flightnumber: String,
    TrainInfor: String, // new
    // INTERNATIONAL ROUTE
    flightSummary: String,
    Route: String,
    Date: String,
    Time: String,
    Departure: String,
    arrival: String,
    Class: String,
    BookedBy: String,
    Status: String,
    // Table Hotels
    tilteHotels: String,
    City: String,
    Hotel: String,
    RoomCategory: String,
    Address: String,
    Nights: String,
    DateArrDep: String,
    Accommodation: String,
    // DomesticRoute: String,
    // Client Table
    ClientInformation: String,
    FullName: String,
    DOB: String,
    PASSPORT: String,
    Requirement: String,
    TravelWith: String,
    NATIONALITY: String,
    // Table Price.
    Commissionable: String,
    perperson: String,
    LANDTOURCOST: String,
    TOTALLANDING: String,
    TOTALACCOMMODATION: String,
    TOTALGROUNDCHILD: String, // new
    SERVICENAME: String, // new
    ServiceType: String, // new

    GrandTotal: String,
    Pax: String,
    IsName: String,
    Termsconditions: String,
    SGLSuppl: String,
    Option: String,
    TourQuote: String,
    itineraryInDetails: String,

    yourQuotation: String,
    yourHotels: String,
    dailyTemplate: String,
    alignmentHSpace: String,
    alignmentVSpace: String,
    TableOfContents: String,
    
    numberOfSharingRoom: String,
    numberOfSingleRoom: String,
    managementFee : String,

    YourTravelRoutes: String,
    ProposalInformation: String,
    DestinationOverview: String,
    DailyTitle: String,
    wordTemplate: String,
    wordFooter: String,
    font: String,
    icons: [{
        thumbnail: String,
        CodeIcon: String,
        text: String,
        width: Number,
        height: Number,
    }],
    listValues: [{
        isActive: { type: Boolean, default: false },
        types: String,
        itemId: String,
        header: String,
        content: String
    }],
    vlMenu: [{
        text: String,
        key: String,
        value: String,
        show: Boolean,
        items: [{
            text: String,
            key: String,
            value: String,
            show: Boolean,
            footer: Boolean
        }]
    }]
}, {
    versionKey: false
});
module.exports = mongoose.model('languages', LanguageSchema);