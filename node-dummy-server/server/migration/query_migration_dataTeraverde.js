// remove fromat number IsItem
db.getCollection('fulldatas').find({ nation: 'vn' }).forEach(x => {
    if (x.Items_ChildPolicy && x.Items_ChildPolicy.length) {
        x.Items_ChildPolicy.forEach(cl => {
            if (typeof cl.IsItem === 'number')
                print(x)
        })
    }
})

db.getCollection('fulldatas').find().forEach(x => {
    if (typeof x.Category === 'string')
        print(x)
})

db.getCollection('fulldatas').find({}).forEach(x => {
    if(x.category && x.category.length){

    } else {
        db.getCollection("procodes").update(
            { _id: x._id }, { $set: { category: [] } }, { upsert: false, multi: false }
        );
    }
})
// 

db.getCollection('fulldatas').find({}).forEach(x => {
    if (x.Items_DirectMarkup && x.Items_DirectMarkup.length) {
        let nopass = false
        x.Items_DirectMarkup.forEach(cl => {
            if ((typeof cl.IsItem) == 'number') {
                nopass = true
                cl.IsItem = 'uniqId' + cl.IsItem
            }
        })
        x.color_title = "#0000"
        if (nopass) {
            print(x)
            db.getCollection("fulldatas").update(
                { _id: x._id }, x, { upsert: false, multi: false }
            );
        }
    }
})

db.getCollection('procodes').find({ nation: 'la' }).forEach(x => {
    db.getCollection("procodes").update(
        { _id: x._id }, { $set: { active: false } }, { upsert: false, multi: false }
    );
})