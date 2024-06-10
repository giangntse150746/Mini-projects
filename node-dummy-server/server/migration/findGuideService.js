let USDValue = 89.6860987;
let VNDValue = 2000000;

db.getCollection('fulldatas').find({
    LinkExcursions: { $ne: true },
    ValueEditModel: { $in: ["PROPOSAL"] }
}, {
    _id: 1,
    productCode: 1,
    codeVersion: 1,
    productCode: 1,
    nation: 1,
    Curency: 1,
    "Items_Calculator.name": 1,
    "Items_Calculator.Date": 1,
    "Items_Calculator.PriceType": 1,
    "Items_Calculator.types": 1,
    "Items_Calculator.linkBy": 1,
    "Items_Calculator.price": 1,
    "Items_Calculator.IsItem": 1,
    "Items_Calculator.listOrtherData": 1,
}).forEach(x => {
    if (x.Items_Calculator && x.Items_Calculator?.length) {
        x.Items_Calculator.forEach(item => {
            if (item.linkBy && item.linkBy === "Excursions") {
                var Exc = db.getCollection('fulldatas').findOne({
                    _idCode: x._id.toString(),
                    Isid: item.IsItem
                }, {
                    "Items_Calculator.name": 1,
                    "Items_Calculator.Date": 1,
                    "Items_Calculator.PriceType": 1,
                    "Items_Calculator.types": 1,
                    "Items_Calculator.linkBy": 1,
                    "Items_Calculator.price": 1,
                    "Items_Calculator.IsItem": 1,
                    "Items_Calculator.listOrtherData": 1,
                })
                if (Exc !== null) {
                    if (Exc.Items_Calculator && Exc.Items_Calculator.length > 0) {
                        Exc.Items_Calculator.forEach(itemExc => {
                            if (itemExc.types === "Guide") {
                                if (itemExc.PriceType === "PRICEBAND") {
                                    if (itemExc.listOrtherData && itemExc.listOrtherData?.length > 0) {
                                        var price = itemExc.listOrtherData[itemExc.listOrtherData?.length - 1].price
                                        if (price) {
                                            let check = false
                                            if (x.Curency === "USD") {
                                                if (price < USDValue)
                                                    check = false
                                                else check = true
                                            } else {
                                                if (price < VNDValue)
                                                    check = false
                                                else check = true
                                            }
                                            if (check) print(`Code: ${x.productCode} Ver: ${x.codeVersion} Date: ${item.Date}  Service: ${item.name}, Module: true | Service Module:  ${itemExc.name} `)
                                        }
                                    }
                                } else {
                                    let check = false
                                    if (x.Curency === "USD") {
                                        if (itemExc.price < USDValue)
                                            check = false
                                        else check = true
                                    } else {
                                        if (itemExc.price < VNDValue)
                                            check = false
                                        else check = true
                                    }
                                    if (check) print(`Code: ${x.productCode} Ver: ${x.codeVersion} Date: ${item.Date}  Service: ${item.name},  Module: true | Service Module:  ${itemExc.name} `)
                                }

                            }
                        })
                    }
                }
            } else {
                if (item.types === "Guide") {
                    if (item.PriceType === "PRICEBAND") {
                        if (item.listOrtherData && item.listOrtherData?.length) {
                            var price = item.listOrtherData[item.listOrtherData?.length - 1].price
                            if (price) {
                                let check = false
                                if (x.Curency === "USD") {
                                    if (price < USDValue)
                                        check = false
                                    else check = true
                                } else {
                                    if (price < VNDValue)
                                        check = false
                                    else check = true
                                }
                                if (check) print(`Code: ${x.productCode} Ver: ${x.codeVersion} Date: ${item.Date} Service: ${item.name}`)
                            }
                        }
                    } else {
                        let check = false
                        if (x.Curency === "USD") {
                            if (item.price < USDValue)
                                check = false
                            else check = true
                        } else {
                            if (item.price < VNDValue)
                                check = false
                            else check = true
                        }
                        if (check) print(`Code: ${x.productCode} Ver: ${x.codeVersion} Date: ${item.Date}  Service: ${item.name}`)
                    }
                }
            }
        });
    }
})
