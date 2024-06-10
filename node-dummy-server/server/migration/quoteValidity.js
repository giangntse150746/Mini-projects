// db.getCollection("Booking_opes").find({}).forEach(x=> {
//   let tour = db.getCollection("fulldatas").find({_id : x._id}, {quoteValidity : 1})
//   if(tour)
//       db.getCollection("Booking_opes").updateOne(
//           { _id: x._id }, { $set: { quoteValidity: tour.quoteValidity } }, { upsert: false, multi: false }
//       );
// })


db.getCollection("fulldatas").find({ValueEditModel : 'PROPOSAL', "quoteValidity":{$exists:true}, "quoteValidity":{$ne:null} }, {quoteValidity : 1}).forEach(x=> {
  let tour = db.getCollection("Booking_opes").find({_id : x._id}, {_id : 1})
  if(tour)
      db.getCollection("Booking_opes").updateOne(
          { _id: tour._id }, { $set: { quoteValidity: x.quoteValidity } }, { upsert: false, multi: false }
      );
})
