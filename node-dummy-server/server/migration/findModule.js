let number = 0;
let numBooking = 0
var re = new RegExp("Excursions", 'i');
db.getCollection("fulldatas").find({"Items_Calculator.linkBy": { $regex: re }, LinkExcursions: { $ne: true } }, {DateCreate : 1, "Items_Calculator.linkBy": 1, "Items_Calculator.IsItem": 1 }).sort({DateCreate : -1}).forEach(x => {
  if (x.Items_Calculator && x.Items_Calculator.length) {
    let ls = x.Items_Calculator.filter(x => x.linkBy === "Excursions")
    if (ls && ls.length) {
      numBooking ++;
      print(`======================================== ${numBooking} ========================================`)
      try {
        ls.forEach(item => {
          if (typeof item.IsItem === 'string') {
            let vl = db.getCollection("fulldatas").findOne({ Isid: item.IsItem })
            if (vl && vl._id) {
              number++;
              print(`${number}`)
              vl._id = ObjectId()
              vl.backup = true
              db.getCollection("fulldatas_backup").insertOne(vl);
            }
          }
        })
      } catch (e) {
        print(e);
      }
      print(`======================================== End ========================================`)
      print(`-------------------------------------------------------------------------------------`)
    }
  }
})
