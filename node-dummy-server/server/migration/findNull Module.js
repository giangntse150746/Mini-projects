db.getCollection('fulldatas').find({
    LinkExcursions: { $ne: true },
    begindate: { $gte: ISODate("2022-01-01T07:00:00.000+0000") },
    ValueEditModel: { $in: ["PROPOSAL"] }
}, {
    _id: 1,
    codeVersion: 1,
    productCode: 1,
    nation: 1,
    Curency: 1,
    "Items_Calculator.name": 1,
    "Items_Calculator.Date": 1,
    "Items_Calculator.linkBy": 1,
    "Items_Calculator.IsItem": 1,
}).forEach(x => {
    let id = x._id.toString();
    if (x.Items_Calculator && x.Items_Calculator?.length) {
        x.Items_Calculator.forEach(item => {
            if (item.linkBy && item.linkBy === "Excursions") {
                let Exc = db.getCollection('fulldatas').findOne({
                    _idCode: id,
                    Isid: item.IsItem
                }, {
                    _id: 1,
                    nation: 1,
                })
                if (!Exc || !Exc._id) print(`Code: ${x.productCode} Ver: ${x.codeVersion} Date: ${item.Date}  Service: ${item.name}`)
            }
        })
    }
});


db.getCollection('fulldatas').find({
    LinkExcursions: { $ne: true },
    begindate: { $gte: ISODate("2023-01-01T07:00:00.000+0000") },
    ValueEditModel: { $in: ["PROPOSAL"] },
    MarkupAllLanding: { lgt: 1}
}, {
    _id: 1,
    codeVersion: 1,
    productCode: 1,
})