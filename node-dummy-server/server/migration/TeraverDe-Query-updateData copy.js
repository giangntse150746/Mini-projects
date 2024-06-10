// update services Date
var data = db.getCollection('services').find({})
data.forEach((ser) => {
    if (ser.Period && ser.Period.length) {
        var temp = false
        ser.Period.forEach((per) =>{
            per.isActive = true
            if(per.endDate){
                var year = new Date(per.endDate).getFullYear();
                if (year === 2022) {
                    per.endDate =new Date(per.endDate.setFullYear(2023))
                    temp = true
                }
                if (year === 2021) {
                    per.endDate =new Date(per.endDate.setFullYear(2023))
                    temp = true                    
                }
                if (year === 2020) {
                    per.endDate =new Date(per.endDate.setFullYear(2023))
                    temp = true
                }
            }
        })
        if(temp) {
//          print(ser)
            db.getCollection("services").update(
                { _id: ser._id }, { $set: { Period: ser.Period } }, { upsert: false, multi: true }
            );
        }
    }
});

