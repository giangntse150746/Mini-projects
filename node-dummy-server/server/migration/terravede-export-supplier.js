db.getCollection("suppliers").find({}).forEach(d => {
    if(d.ListService && d.ListService.length){
        d.ListService.forEach(i => {
            let obj = {
               
                supplierID: d.supplierID,
                supplierName: d.name,
                address : d.address,
                email: d.email,
                phone: d.phone,
                ServiceName: i.supplierServiceName || '',
                ServiceType: i.types || '',
                serviceID: i.serviceID || '',
            }
            print(obj)
        })
    }
})
