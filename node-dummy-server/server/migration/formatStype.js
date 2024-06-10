// duration
db.getCollection('fulldatas').find({ nation: "vn" }).forEach(tour => {
    if (tour) {
        var is = false
        if(typeof tour.duration === 'string'){
            tour.duration = [tour.duration];
            is = true
        }
        if (is) {
            db.getCollection("fulldatas").update(
                { _id: tour._id }, tour, { upsert: false, multi: false }
            );
        }
    }
})
// ageny
db.getCollection('fulldatas').find({ nation: "vn" }).forEach(tour => {
    if (tour) {
        var is = false
        if(typeof tour.ageny === 'string'){
            tour.ageny = [tour.ageny];
            is = true
        }
        if (is) {
            db.getCollection("fulldatas").update(
                { _id: tour._id }, tour, { upsert: false, multi: false }
            );
        }
    }
})
// category
db.getCollection('fulldatas').find({ nation: "vn" }).forEach(tour => {
    if (tour) {
        var is = false
        if(typeof tour.category === 'string'){
            tour.category = [tour.category];
            is = true
        }
        if (is) {
            db.getCollection("fulldatas").update(
                { _id: tour._id }, tour, { upsert: false, multi: false }
            );
        }
    }
})