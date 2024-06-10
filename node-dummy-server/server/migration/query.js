db.getCollection('fulldatas').find({ "Items_Calculator.serviceNoteDone": true }, { "Items_Calculator": 1 }).forEach(tour => {
    tour.Items_Calculator.forEach(item => {
        if (!item.lsServiceNote || !item.lsServiceNote.length)
            item.serviceNoteDone = false;
    });

    db.getCollection("fulldatas").update(
        { _id: tour._id }, { $set: { Items_Calculator: tour.Items_Calculator } }, { upsert: false, multi: false }
    );
});

// Deactivate the tours
db.getCollection('fulldatas').find({
    LinkExcursions: { $ne: true },
    ValueEditModel: { $in: ["EXCURSIONS", "PACKAGE"] },
    enddate: { $lt: ISODate("2023-01-01T07:00:00.000+0000") }
})
    .forEach(x => {
        db.getCollection("fulldatas").updateOne(
            { _id: x._id }, { $set: { isActive: false } }, { upsert: false, multi: false }
        );
    })

db.getCollection('fulldatas').find({ nation: 'vn' }).forEach(x => {
    if (x.Items_ChildPolicy && x.Items_ChildPolicy.length) {
        x.Items_ChildPolicy.forEach(cl => {
            if (typeof cl.IsItem === 'number')
                print(x._id)
        })
    }
})
db.getCollection("fulldatas").find({ nation : "jp" }, {note: 1, stickyNotes: 1}).forEach(x => {
    db.getCollection("fulldatas").updateOne(
        { _id: x._id }, { $set: { note: '', stickyNotes: {note: x.note} } }, { upsert: false, multi: false }
    );
})

db.getCollection("infohotels").updateMany(
    {
        "Category": "Cruise",
        "contracts.periods.options.durationType": { $in: [null, ""] }
    },
    {
        $set: { "contracts.$[].periods.$[].options.$[elem].durationType": "PerStay" }
    },
    {
        arrayFilters: [{ "elem.durationType": { $in: [null, ""] } }]
    }
)


db.getCollection("fulldatas").updateMany(
    { ValueEditModel: "PROPOSAL" }, { $set: { content: null, quotationSectionString: null } }
)

db.getCollection('fulldatas').find({ LinkExcursions: { $ne: true }, ValueEditModel: { $in: ["EXCURSIONS", "PACKAGE"] } }).forEach(x => {
    db.getCollection("fulldatas").update(
        { _id: x._id }, { $set: { CRM: true, DMK: false } }, { upsert: false, multi: false }
    );
})

db.getCollection('suppliers').find({ "servicetypes": { $in: ['Guide'] } }).forEach(suppliers => {
    if (suppliers.ListService && suppliers.ListService.length) {
        suppliers.ListService.forEach(ser => {
            ser.numbercutoffday = ser.numbercutoffday == '' ? null : ser.numbercutoffday
            ser.numberOfWorkingYear = ser.numberOfWorkingYear == '' ? null : ser.numberOfWorkingYear
            ser.ranking = ser.ranking == '' ? null : ser.ranking
        });
    }
    db.getCollection("suppliers").update(
        { _id: suppliers._id }, suppliers, { upsert: false, multi: false }
    );
});

db.getCollection('student_answer_surveys').find({ questionId: "6222a61dc05db0e2b9bc0604" }).forEach(rss => {
    rss.isDone = false;
    rss.isDraft = false;
    rss.finish = false;
    rss.endDate = rss.endDate = new Date(rss.endDate.setDate(13))
    print(rss.endDate)
    // db.getCollection("student_answer_surveys").update(
    //     { _id: rss._id }, rss, { upsert: false, multi: false }
    // );
});



db.getCollection('services').find({ supplierID: 'VN972', serviceID: 'VNS9722' }).forEach(suppliers => {
    if (suppliers.txtID) {
        suppliers.Idsupplier = '5fa4fd0ac7280353c33e6452'
        suppliers.supplierID = '5fa4fd0ac7280353c33e6452'
        suppliers.serviceID = '5fa4fd0ac7280353c33e6452'
        suppliers.serviceID = suppliers.txtID + suppliers.numberID;
        db.getCollection("suppliers").update(
            { _id: suppliers._id }, suppliers, { upsert: false, multi: false }
        );
    }
});



// count
var numberID = 0
db.getCollection('suppliers').find({ supplierID: null, nation: 'tl' }).forEach(suppliers => {
    numberID++
    suppliers.txtID = "TL"
    suppliers.numberID = numberID
    suppliers.serviceID = "TL" + numberID
    db.getCollection("suppliers").update(
        { _id: suppliers._id }, suppliers, { upsert: false, multi: false }
    );
});

// supplier list service ranking: String --> Number
db.getCollection('suppliers').find({}).forEach(supplier => {
    if (supplier.ListService && supplier.ListService.length) {
        supplier.ListService.forEach(s => {
            if (s.ranking)
                s.ranking = parseFloat(s.ranking + '');
        });

        db.getCollection("suppliers").update(
            { _id: supplier._id }, supplier, { upsert: false, multi: false }
        );
    }
});


db.getCollection('infohotels').find({ nation: "vn" }).forEach(hotel => {
    if (hotel.contracts && hotel.contracts.length) {
        hotel.contracts.forEach(contract => {
            if (contract.periods && contract.periods.length) {
                contract.periods.forEach(per => {
                    if (per.options && per.options.length) {
                        per.options.forEach(op => {
                            op.allweek = true;
                            op.mon = true;
                            op.tue = true;
                            op.wed = true;
                            op.thu = true;
                            op.fri = true;
                            op.sat = true;
                            op.sun = true;
                        })
                    }
                })
            }
        });
        db.getCollection("infohotels").update(
            { _id: hotel._id }, hotel, { upsert: false, multi: false }
        );
    }
});


// hotel contract reservation: reservation --> reservations
db.getCollection('infohotels').find({ "contracts.reservation": { "$exists": true } }).forEach(hotel => {
    hotel.contracts.forEach(contract => {
        if (contract.reservation) {
            contract.reservation.latecheckouts = [{
                id: "123456789",
                LateCheckoutHours: contract.reservation.LateCheckoutHours || null,
                LateCheckoutMinutes: contract.reservation.LateCheckoutMinutes || null,

                latecheckout: contract.reservation.latecheckout || null,
                setAllRoom: contract.reservation.setAllRoom || null,
                ls_Room: contract.reservation.ls_Room || null,

                typeCharge: contract.reservation.typeCharge || null,
                typeBy: contract.reservation.typeBy || null,
                value: contract.reservation.value || null,
            }];

            delete contract.reservation.LateCheckoutHours;
            delete contract.reservation.LateCheckoutMinutes;

            delete contract.reservation.latecheckout;
            delete contract.reservation.setAllRoom;
            delete contract.reservation.ls_Room;

            delete contract.reservation.typeCharge;
            delete contract.reservation.typeBy;
            delete contract.reservation.value;
        }
    });

    db.getCollection("infohotels").update(
        { _id: hotel._id }, hotel, { upsert: false, multi: false }
    );
});

db.getCollection('clientB2C_tours').find({}).forEach(rx => {
    if (rx.PriceDetails && rx.PriceDetails.length) {
        rx.PriceDetails.forEach(item => {
            item.Pax = parseInt(item.Pax)
            item.Price = parseInt(item.Price)
        })
    }

    if (rx.ChildPriceDetails && rx.ChildPriceDetails.length) {
        rx.PriceDetails.forEach(item => {
            item.AgeRange = parseInt(item.AgeRange)
            item.Price = parseInt(item.Price)
        })
    }
    db.getCollection("clientB2C_tours").update(
        { _id: rx._id }, rx, { upsert: false, multi: true }
    );
});


db.getCollection('infohotels').find({ nation: "vn", isActive: true }, { "contracts.periods.options.exbedA": true }).forEach(x => {
    if (x.contracts && x.contracts.length) {
        x.contracts.forEach(ct => {
            if (ct.periods && ct.periods.length) {
                ct.periods.forEach(per => {
                    if (per.options && per.options.length) {
                        per.options.forEach(op => {
                            print(op.exbedA)
                        })
                    }
                })
            }
        })
    }
})


db.getCollection('services').find({ nation: "vn" }).forEach(service => {
    if (service.Period && service.Period.length) {
        var is = false
        service.Period.forEach(per => {
            if (per.beginDate == undefined) {
                is = true
                per.beginDate = null
            }
        })
        if (is) {
            db.getCollection("services").update(
                { _id: service._id }, service, { upsert: false, multi: false }
            );
        }
    }
})

// ------------------------------------------------------------- email multi service
// 1
var requestNumber = new Date().setMilliseconds(0) / 1000;
db.getCollection('supplier_email').find({ $and: [{ tourId: null }, { tourId: { $exists: true } }] }).forEach(email => {
    delete email.tourId;
    delete email.serviceId;
    delete email.assignedServiceId;

    var data = JSON.parse(email.data);
    var newdata = {
        exchangeRate: data.exchangeRate,
        isEmailEdit: data.isEmailEdit,
        company: data.company,
        supplier: data.supplier,
        replyByTheDate: data.services[0].replyByTheDate,
        items: data.services.map(service => {
            requestNumber = requestNumber + 1;

            return {
                reference: data.company.reference,
                requestNumber: requestNumber,
                tour: data.tour,
                service: service,
                requirements: service.requirements,
                reply_action: service._reply === 'Confirmed' ? 'OK' : service._reply === 'Cancelled' ? 'Decline' : service._reply,
                reply_note: service._note
            };
        }),
        paymentMethod: data.services[0].paymentMethod,
        billingDetails: data.services[0].billingDetails,
        contentDetail: data.services[0].contentDetail,
        cancelationPolicy: data.services[0].cancelationPolicy,
    };

    email.data = JSON.stringify(newdata);

    db.getCollection("supplier_email").update(
        { _id: email._id }, email, { upsert: false, multi: false }
    );
})

// 2
var requestNumber = new Date().setMilliseconds(0) / 1000;
db.getCollection('supplier_email').find({ $and: [{ tourId: { $ne: null } }, { tourId: { $exists: true } }] }).forEach(email => {
    var data = JSON.parse(email.data);
    var log = {
        company: data.company,
        supplier: data.supplier,
        replyByTheDate: data.service.replyByTheDate,
        tour: data.tour,
        service: data.service,

        requestNumber: requestNumber,
        requirements: data.service.requirements,
        reply_action: data.service._reply === 'Confirmed' ? 'OK' : data.service._reply === 'Cancelled' ? 'Decline' : data.service._reply,
        reply_note: data.service._note,

        paymentMethod: data.service.paymentMethod,
        billingDetails: data.service.billingDetails,
        contentDetail: data.service.contentDetail,
        cancelationPolicy: data.service.cancelationPolicy,
    };

    db.getCollection("supplier_email_log").insert(log);
    db.getCollection("supplier_email").remove({ _id: email._id });
})

db.getCollection('specialoffers').find({ nation: "vn" }).forEach(vl => {
    delete _id
    vl.nation = 'ca'
    print(vl)
    db.getCollection("specialoffers").insert(vl);
})
// ------------------------------------------------------------- email multi service - end

// filter agent
var isAggregate = [
    { '$match': { nation: 'tl' } },
    {
        $lookup: {
            "from": "gents_onlines",
            "let": { "id": "$gents_onlines" },
            "pipeline": [
                { "$match": { $expr: { "$eq": ["$_id", "$$id"] } } }
            ],
            "as": "gents_onlines"
        }
    },
    { $unwind: '$gents_onlines' },
    {
        "$project": {
            '_id': '$gents_onlines._id',
            'contacts': '$gents_onlines.contacts',
            'ref': '$gents_onlines.ref',
            'name': '$gents_onlines.name',
            'code': '$gents_onlines.code',
            'cid': '$gents_onlines.cid',
            'agid': '$gents_onlines.agid',
            'country': '$gents_onlines.country',
            'address': '$gents_onlines.address',
            'adtel': '$gents_onlines.adtel',
            'booker_email': '$gents_onlines.booker_email',
            'isActive': '$gents_onlines.isActive',
            'agencygroup': '$gents_onlines.agencygroup',
            'aconsortia': '$gents_onlines.aconsortia',
            'ls_procodes': [{
                '_id': '$_id',
                'nation': '$nation',
                'period': '$period',
                'md5code': '$md5code',
                'cname': '$cname',
                'cemail': '$cemail',
                'cmarket': '$cmarket',
                'online': '$online',
                'active': '$active',
                'ccurrency': '$ccurrency',
                'agencyType': '$agencyType',
                'private_code': '$private_code',
                'isoReps': '$isoReps',
                'messenger': '$messenger',
                'bankname': '$bankname',
                'accountname': '$accountname',
                'accountnumber': '$accountnumber',
                'swift': '$swift',
                'taxoffice': '$taxoffice',
                'taxnumber': '$taxnumber',
                'banktel': '$banktel',
                'bankaddess': '$bankaddess',
                'creditlimit': '$creditlimit',
                'credittype': '$credittype',
            }]
        }
    },
    { '$match': { ls_procodes: { $exists: true, $not: { $size: 0 } } } },
    { $unwind: '$ls_procodes' },
    {
        "$project": {

            'name': '$name',
            'code': '$code',
            'cname': '$ls_procodes.cname',
            'nation': '$ls_procodes.nation',
            'active': '$ls_procodes.active',
            'cemail': '$ls_procodes.cemail',
            'cmarket': '$ls_procodes.cmarket',
            'online': '$ls_procodes.online'
        }
    }
];
db.getCollection('procodes').aggregate(isAggregate)


// Change location VN TL

//---------------------------------------------------------------------
// ThaiLand
var idContry = "5ebcf05804cb0c40d47681c5"
var objectCountry = {
    currency: '',
    countryId: null,
    fullParentId: null,
    symbol: '',
    nation: 'tl',
    fullName: "Thailand",
    shortName: 'tl',
    latitude: '',
    longitude: '',
    tags: null,
    isMaster: false,
    zoom: 0,
    content: '',
    isDeleted: false,
    items: [],
    formatTypeId: ObjectId("601e6afdfad6ff0882780133"),
    _id: ObjectId(idContry),
}
//---------------------------------------------------------------------
// Vietnam
var idContry = "5ebcf05804cb0c40d47681c4"
var objectCountry = {
    currency: '',
    countryId: null,
    fullParentId: null,
    symbol: '',
    nation: 'vn',
    fullName: "Vietnam",
    shortName: 'vn',
    latitude: '',
    longitude: '',
    tags: null,
    isMaster: false,
    zoom: 0,
    content: '',
    isDeleted: false,
    items: [],
    formatTypeId: ObjectId("601e6afdfad6ff0882780133"),
    _id: ObjectId(idContry)
}
//---------------------------------------------------------------------
var aggregate = [
    { $match: { nation: objectCountry.nation } },
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

db.getCollection('zones').aggregate(aggregate).forEach(zone => {
    if (zone.items && zone.items.length) {
        var idZone = zone._id;
        var vlzone = {
            _id: idZone,
            countryId: idContry,
            fullParentId: null,
            fullName: zone.name,
            nation: objectCountry.nation,
            shortName: '',
            latitude: '',
            longitude: '',
            tags: null,
            isMaster: false,
            zoom: 0,
            content: '',
            items: [],
            lv: 1
        }
        zone.items.forEach(provin => {
            // provin
            var idProvin = provin._id;
            let vlprovin = {
                _id: idProvin,
                countryId: idContry,
                nation: objectCountry.nation,
                fullParentId: idZone + "",
                fullName: provin.name,
                shortName: '',
                latitude: '',
                longitude: '',
                tags: null,
                isMaster: false,
                zoom: 0,
                content: '',
                items: [],
                lv: 2
            }
            if (provin.items && provin.items.length) {
                provin.items.forEach(city => {
                    // city
                    var idcity = city._id;
                    let vlpcity = {
                        _id: idcity,
                        countryId: idContry,
                        fullParentId: idZone + ":" + idProvin,
                        nation: objectCountry.nation,
                        fullName: city.name,
                        shortName: '',
                        latitude: '',
                        longitude: '',
                        tags: null,
                        isMaster: false,
                        zoom: 0,
                        content: '',
                        items: [],
                        lv: 3
                    }
                    if (city.items && city.items.length) {
                        city.items.forEach(area => {
                            // area
                            vlpcity.items.push({
                                _id: area._id,
                                countryId: idContry,
                                fullParentId: idZone + ":" + idProvin + ":" + idcity,
                                fullName: area.name,
                                nation: objectCountry.nation,
                                shortName: '',
                                latitude: '',
                                longitude: '',
                                tags: null,
                                isMaster: false,
                                zoom: 0,
                                content: '',
                                lv: 4
                            })
                        });
                    } vlprovin.items.push(vlpcity)
                });
            }
            vlzone.items.push(vlprovin)
        });
    }
    objectCountry.items.push(vlzone)
});
db.getCollection('geopaths').insert(objectCountry)



// -----------------------------------------------------------------------------

// Cambodia
var idContry = "5ebcf05804cb0c40d47681c6"
var objectCountry = {
    currency: '',
    symbol: '',
    countryId: null,
    fullParentId: null,
    nation: 'ca',
    fullName: "Cambodia",
    shortName: 'ca',
    latitude: '',
    longitude: '',
    tags: null,
    isMaster: false,
    zoom: 0,
    content: '',
    isDeleted: false,
    items: [],
    formatTypeId: ObjectId("5ff6cf4f123871c7ed4c1666"),
    _id: ObjectId(idContry)
}
//---------------------------------------------------------------------
// Laos
var idContry = "5ebcf05804cb0c40d47681c7"
var objectCountry = {
    currency: '',
    symbol: '',
    countryId: null,
    fullParentId: null,
    nation: 'la',
    fullName: "Laos",
    shortName: 'la',
    latitude: '',
    longitude: '',
    tags: null,
    isMaster: false,
    zoom: 0,
    content: '',
    isDeleted: false,
    items: [],
    formatTypeId: ObjectId("5ff6cf4f123871c7ed4c1666"),
    _id: ObjectId(idContry)
}
//---------------------------------------------------------------------
var aggregate = [
    { $match: { nation: objectCountry.nation } },
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
db.getCollection('provinces').aggregate(aggregate).forEach(provin => {
    if (provin.items && provin.items.length) {
        var idprovin = provin._id;
        var vlProvin = {
            _id: idprovin,
            countryId: idContry,
            nation: objectCountry.nation,
            fullParentId: null,
            fullName: provin.name,
            latitude: '',
            longitude: '',
            tags: null,
            isMaster: false,
            zoom: 0,
            content: '',
            items: [],
            lv: 1
        }
        provin.items.forEach(city => {
            // provin
            var idcity = city._id;
            var vlCity = {
                _id: idcity,
                countryId: idContry,
                fullParentId: idprovin + "",
                fullName: city.name,
                nation: objectCountry.nation,
                shortName: '',
                latitude: '',
                longitude: '',
                tags: null,
                isMaster: false,
                zoom: 0,
                content: '',
                items: [],
                lv: 2
            }
            if (city.items && city.items.length) {
                city.items.forEach(area => {
                    // area
                    vlCity.items.push({
                        _id: area._id,
                        countryId: idContry,
                        fullParentId: idprovin + ":" + idcity,
                        fullName: area.name,
                        nation: objectCountry.nation,
                        shortName: '',
                        latitude: '',
                        longitude: '',
                        tags: null,
                        isMaster: false,
                        zoom: 0,
                        content: '',
                        lv: 3
                    })
                });
            }
            vlProvin.items.push(vlCity)
        });
    }
    objectCountry.items.push(vlProvin)
});
db.getCollection('geopaths').insert(objectCountry)


// update geopath type and lv: _t, lv
db.getCollection('geopaths').find({}).forEach(geo => {
    geo.lv = null;
    geo._t = [
        "EntityBase`1",
        "LocationModel",
        "LocationModel`1",
        "Country"
    ];

    if (geo.items) {
        geo.items.forEach(g1 => {
            g1.lv = 1;
            g1._t = [
                "EntityBase`1",
                "LocationModel",
                "LocationModel`1",
                "LocationLevel1"
            ];

            if (g1.items) {
                g1.items.forEach(g2 => {
                    g2.lv = 2;
                    g2._t = [
                        "EntityBase`1",
                        "LocationModel",
                        "LocationModel`1",
                        "LocationLevel2"
                    ];

                    if (g2.items) {
                        g2.items.forEach(g3 => {
                            g3.lv = 3;
                            g3._t = [
                                "EntityBase`1",
                                "LocationModel",
                                "LocationModel`1",
                                "LocationLevel3"
                            ];

                            if (g3.items) {
                                g3.items.forEach(g4 => {
                                    g4.lv = 4;
                                    g4._t = [
                                        "EntityBase`1",
                                        "LocationModel",
                                        "LocationLevel4"
                                    ];
                                });
                            }
                        });
                    }
                });
            }
        });
    }
    db.getCollection("geopaths").updateOne(
        { _id: geo._id }, { $set: { items: geo.items } }, { upsert: false, multi: false }
    );
})
db.getCollection('asiaConcierge_activitys').find({ "nationId": "607675fb1b2607fc5f4365df" }).forEach(data => {
    data.tourchainId = null;
    data.asiaConciergePrice = null;
    data.productCode = null;
    data.bookingName = null;
    db.getCollection("asiaConcierge_activitys").update(
        { _id: data._id }, data, { upsert: false, multi: false }
    );
});

// id - Indonesia
// my - Myanmar
// zh - China

// done
db.getCollection('markets').find({ nation: 'vn' }).forEach(value => {
    delete value._id
    value.nation = 'id'
    db.getCollection("markets").insert(value);
});

// done
db.getCollection('servicetypes').find({ nation: 'vn' }).forEach(value => {
    delete value._id
    value.nation = 'id'
    db.getCollection("servicetypes").insert(value);
});
// done
db.getCollection('tourcategories').find({ nation: 'vn' }).forEach(value => {
    delete value._id
    value.nation = 'id'
    db.getCollection("tourcategories").insert(value);
});

db.getCollection('tourdurations').find({ nation: 'vn' }).forEach(value => {
    delete value._id
    value.nation = 'id'
    db.getCollection("tourdurations").insert(value);
});

//Update data users - deactive users course 44

db.getCollection('users').updateone(
    { course: "44" },
    {
        $set: {
            active: "false"
        }
    }
)

// fix duplicate ID services
db.getCollection('services').aggregate([
    {
        $group: {
            _id: { optionID: "$optionID" },
            uniqueIds: { $addToSet: "$_id" },
            count: { $sum: 1 }
        }
    },
    {
        $match: {
            count: { "$gt": 1 }
        }
    }
]).forEach(x => {
    var number = 0;
    if (x._id.optionID) {
        db.getCollection('services').find({ optionID: x._id.optionID }).forEach(servcie => {
            number++;
            servcie.optionID = servcie.optionID.slice(0, -1);
            servcie.optionID = servcie.optionID + '' + number;
            print(servcie.optionID)
            db.getCollection("services").update(
                { _id: servcie._id }, { $set: { optionID: servcie.optionID } }, { upsert: false, multi: false }
            );
        });
    }
})

db.getCollection('fulldatas').find({ TranferTimeTo: { $type: 9 } }).forEach(tour => {
    tour.TranferTimeTo = ""
    tour.TranferTimeFrom = ""
    db.getCollection("fulldatas").update(
        { _id: tour._id }, tour, { upsert: false, multi: false }
    );
});

db.getCollection('infohotels').find({}).forEach(hotel => {
    db.getCollection("infohotels").update(
        { _id: hotel._id }, { $set: { httype: [] } }, { upsert: false, multi: false }
    );
});
db.getCollection('clientB2C_tours').find({}).forEach(m => {
    if (m.PriceDetails && m.PriceDetails.length) {
        m.PriceDetails.forEach(x => {
            x.Pax = parseInt(x.Pax)
            x.Price = parseInt(x.Price)
        })
    }

    if (m.ChildPriceDetails && m.ChildPriceDetails.length) {
        m.ChildPriceDetails.forEach(x => {
            x.AgeRange = parseInt(x.AgeRange)
            x.Price = parseInt(x.Price)
        })
    }
    m.isPublic = true
    db.getCollection("clientB2C_tours").update(
        { _id: m._id }, m, { upsert: false, multi: false }
    );
});

db.getCollection('procodes').find({}).forEach(procodes => {
    db.getCollection("procodes").update(
        { _id: procodes._id }, { $set: { language: null } }, { upsert: false, multi: false }
    );
});

db.getCollection('suppliers').find({ idCountry: "5ebcf05804cb0c40d47681c7" }).forEach(supplier => {
    db.getCollection("suppliers").update(
        { _id: supplier._id }, { $set: { nation: 'la' } }, { upsert: false, multi: false }
    );
});

// Active all hotel
db.getCollection('infohotels').find({ isActive: true }).forEach(x => {
    if (x.contracts && x.contracts.length) {
        x.contracts.forEach(ct => {
            if (ct.isActive === true) {
                ct.isPublishClient = true;
                if (ct.periods && ct.periods.length) {
                    ct.periods.forEach(per => {
                        per.isActive = true
                        if (per.options && per.options.length) {
                            per.options.forEach(op => {
                                op.isActive = true
                            })
                        }
                    })
                }
            }
        })
        db.getCollection("infohotels").update(
            { _id: x._id }, x, { upsert: false, multi: false }
        );
    }
})

db.getCollection('infohotels').find({ isActive: true }).forEach(x => {
    if (x.contracts && x.contracts.length) {
        db.getCollection("infohotels").updateOne(
            { _id: x._id }, { $set: { contracts: [] } }, { upsert: false, multi: false }
        );
    }
})

db.getCollection("services").count({ "location": "Hue", locationIds: { $exists: false } }).forEach(x => {
    db.getCollection("services").update(
        { _id: x._id }, { $set: { locationIds: "5ebcf05804cb0c40d47681c4:60e99a32901903a12c9524fb:60e99a32901903a12c952504" } }, { upsert: false, multi: false }
    );
})



db.getCollection("fulldatas").find({}).forEach(x => {
    let isUpdate = false
    if (x.contents && x.contents.length) {
        x.contents.forEach(y => {
            if (y && y.languageId === '5eb4f2f5de582b7c707cf5b4') {
                y.languageId = '5eb4c31759281b9ace72f834'
                isUpdate = true
            }
        })
    }
    if (isUpdate)
        db.getCollection("fulldatas").update(
            { _id: x._id }, x, { upsert: false, multi: false }
        );
})

db.getCollection("fulldatas").find({}).forEach(x => {
    let isUpdate = false
    if (x && x.language === '5eb4f2f5de582b7c707cf5b4') {
        y.language = '5eb4c31759281b9ace72f834'
        isUpdate = true

    }
    if (isUpdate)
        db.getCollection("fulldatas").update(
            { _id: x._id }, x, { upsert: false, multi: false }
        );
})

db.getCollection("procodes").find({
    gents_onlines: {
        $ne: [
            ObjectId("62553c9f247118ac2e20e3eb"),
            ObjectId("5d26be6e284934089452e877"),
            ObjectId("5d26be70284934089452e97f"),
            ObjectId("5d26be70284934089452e987"),
            ObjectId("5d26be71284934089452e9de")
        ]
    }
}).forEach(x => {
    db.getCollection("procodes").update(
        { _id: x._id }, { $set: { cemail: "" } }, { upsert: false, multi: false }
    );
})


db.getCollection("services").find({ nation: "vn", supplier: "DESTINATION ASIA VIETNAM" }).forEach(x => {
    x.supplier = "ASIA CONCIERGE VIETNAM"
    x.ServiceName = "ASIA CONCIERGE VIETNAM"
    db.getCollection("services").update(
        { _id: x._id }, x, { upsert: false, multi: false }
    );
});


db.getCollection('fulldatas').find({ nation: 'vn', "Items_Calculator.listOrtherData.supplierName": "DESTINATION ASIA VIETNAM" }).forEach(x => {
    if (x.Items_Calculator && x.Items_Calculator.length) {
        x.Items_Calculator.forEach(item => {
            if (item.infoService) {
                // "name" : "DESTINATION ASIA VIETNAM",
                // "supplier" : "DESTINATION ASIA VIETNAM",
                // "supplierTourCode" : "VNMDA",
                // "ServiceName" : "Destination Asia Vietnam",
                if (item.infoService.name == "DESTINATION ASIA VIETNAM") {
                    item.infoService.name = "ASIA CONCIERGE VIETNAM"
                }
                if (item.infoService.supplier == "DESTINATION ASIA VIETNAM") {
                    item.infoService.supplier = "ASIA CONCIERGE VIETNAM"
                }
                if (item.infoService.ServiceName == "Destination Asia DAD") {
                    item.infoService.ServiceName = "Asia Concierge DAD"
                }
                if (item.infoService.ServiceName == "Destination Asia SGN") {
                    item.infoService.ServiceName = "Asia Concierge SGN"
                }
                if (item.infoService.ServiceName == "Destination Asia HAN") {
                    item.infoService.ServiceName = "Asia Concierge HAN"
                }
                if (item.infoService.ServiceName == "Destination Asia Vietnam") {
                    item.infoService.ServiceName = "Asia Concierge Vietnam"
                }
            }
            if (item.listOrtherData && item.listOrtherData.length) {
                item.listOrtherData.forEach(ort => {
                    if (ort.name === "DESTINATION ASIA VIETNAM") {
                        ort.name = "ASIA CONCIERGE VIETNAM"
                    }
                    if (ort.supplierName === "DESTINATION ASIA VIETNAM") {
                        ort.supplierName = "ASIA CONCIERGE VIETNAM"
                    }
                });
            }
            if (item.listOrtherData_input && item.listOrtherData_input.length) {
                item.listOrtherData_input.forEach(ort => {
                    if (ort.name === "DESTINATION ASIA VIETNAM") {
                        ort.name = "ASIA CONCIERGE VIETNAM"
                    }
                    if (ort.supplierName === "DESTINATION ASIA VIETNAM") {
                        ort.supplierName = "ASIA CONCIERGE VIETNAM"
                    }
                });
            }
        });
        db.getCollection("fulldatas").update(
            { _id: x._id }, { $set: { Items_Calculator: x.Items_Calculator } }, { upsert: false, multi: false }
        );
    }
})

db.getCollection('services').find({ nation: 'vn', "Period.inputlist.name": "DESTINATION ASIA VIETNAM" }).forEach(x => {
    if (x.Period && x.Period.length) {
        x.Period.forEach(item => {

            if (item.list && item.list.length) {
                item.list.forEach(ort => {
                    if (ort.name === "DESTINATION ASIA VIETNAM") {
                        ort.name = "ASIA CONCIERGE VIETNAM"
                    }
                });
            }
            if (item.inputlist && item.inputlist.length) {
                item.inputlist.forEach(ort => {
                    if (ort.name === "DESTINATION ASIA VIETNAM") {
                        ort.name = "ASIA CONCIERGE VIETNAM"
                    }
                });
            }
        });
        db.getCollection("services").update(
            { _id: x._id }, { $set: { Period: x.Period } }, { upsert: false, multi: false }
        );
    }
})
var ix = 37
db.getCollection("service_temp").find({}).forEach(x => {
    ix++;
    x.Idsupplier = "6299cb0ddd13a4f3cc18f083";
    x.supplierServiceID = "6299cbd1f4c14e0c5cc3421b";
    x.supplier = "VIETNAM FAR EAST 247";
    x.supplierID = "VN2";
    x.ServiceName = "ENTRANCE FEE";
    x.serviceID = "VNS23"
    x.optionNumber = ix;
    x.optionID = "VNSP23" + ix;
    x.userCreate = "cao.nguyen";
})


db.getCollection("infohotels").updateMany(
    {
        "Category": "Cruise",
        "contracts": { $exists: true, $ne: null },
        "contracts.periods": { $exists: true, $ne: null },
        "contracts.periods.options": { $exists: true, $ne: null },
        "contracts.periods.options.durationType": { $in: [null, ""] }
    },
    {
        $set: { "contracts.$[].periods.$[].options.$[elem].durationType": "PerStay" }
    },
    {
        arrayFilters: [{ "elem.durationType": { $in: [null, ""] } }]
    }
)