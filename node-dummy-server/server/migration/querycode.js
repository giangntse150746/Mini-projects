db.getCollection('fulldatas').find({ nation: 'vn', periods: { $size: 2 } }).forEach(x => {
    if (x.periods && x.periods.length > 0) {
        x.QuotePrice = []
        x.periods.forEach(p => {
            if(p._idperiod){
                x.QuotePrice.push({
                    _id: ObjectId(),
                    GroupName: p.namePeriod || '',
                    languageId: x.language,
                    QuotePriceIsItem: p._idperiod,
                    Periods: [{
                        _id: ObjectId(),
                        begindate: p.begindate,
                        enddate: p.enddate,
                    }]
                })
            }
        });
        if (x.Items_Calculator && x.Items_Calculator.length > 0) {
            x.Items_Calculator.forEach(i => {
                if (i.namePeriod) {
                    i.QuotePriceIsItem = i.namePeriod
                }
            });
        }
        db.getCollection("fulldatas").updateOne(
            { _id: x._id }, { $set: { QuotePrice: x.QuotePrice, Items_Calculator: x.Items_Calculator } }, { upsert: false, multi: true }
        );
    }
})