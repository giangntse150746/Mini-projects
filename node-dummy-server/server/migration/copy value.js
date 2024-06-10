// COPY ALL Collection
var nationFind = 'vn'
var nationChange = 'sg'
// var lstCollection_copy = ['specialoffers','tourdurations','tourcategories','servicetypes','languages','exchangerates', 'markets'] 
var lstCollection_copy = ['email_dictionaries','email_template_supplier','key_word_mapping_datas'] 
lstCollection_copy.forEach(Collection => {
    db.getCollection(Collection).find({ nation: nationFind }).forEach(vl => {
        delete vl._id
        vl.nation = nationChange
        db.getCollection(Collection).insertOne(vl);
    })
})


var nationRemove = 'om'
var lstCollection_copy = ['specialoffers','tourdurations','tourcategories','servicetypes','languages','exchangerates', 'markets'] 
lstCollection_copy.forEach(Collection => {
    db.getCollection(Collection).remove({ nation: nationRemove })
})


//specialoffers
db.getCollection('specialoffers').remove({ nation: nationFind })
db.getCollection('specialoffers').find({ nation: id }).forEach(vl => {
    delete vl._id
    vl.nation = 'id'
    db.getCollection("specialoffers").insert(vl);
})

// tourdurations
db.getCollection('tourdurations').remove({ nation: nationFind })
db.getCollection('tourdurations').find({ nation: nationChange }).forEach(vl => {
    delete vl._id
    vl.nation = 'id'
    db.getCollection("tourdurations").insert(vl);
})

// tourcategories
db.getCollection('tourcategories').remove({ nation: nationFind })
db.getCollection('tourcategories').find({ nation: nationChange }).forEach(vl => {
    delete vl._id
    vl.nation = 'id'
    db.getCollection("tourcategories").insert(vl);
})

// servicetypes
db.getCollection('servicetypes').remove({ nation: nationFind })
db.getCollection('servicetypes').find({ nation: nationChange }).forEach(vl => {
    delete vl._id
    vl.nation = 'id'
    db.getCollection("servicetypes").insert(vl);
})

// languages
db.getCollection('languages').remove({ nation: nationFind })
db.getCollection('languages').find({ nation: nationChange }).forEach(vl => {
    delete vl._id
    vl.nation = 'id'
    db.getCollection("languages").insert(vl);
})

// exchangerates
db.getCollection('exchangerates').remove({ nation: nationFind })
db.getCollection('exchangerates').find({ nation: nationChange }).forEach(vl => {
    delete vl._id
    vl.nation = 'id'
    db.getCollection("exchangerates").insert(vl);
})





var data = [
    {
        "_id": ObjectId("615466754e677f21f3bfef7a"),
        "nation": "vn",
        "fullname": "Andrew Dao Anh Son",
        "firstName": null,
        "lastName": null,
        "email": "son@auroratravel.asia",
        "usercode": "001",
        "companyId": "615466a04e677f21f3bfef8a",
        "company": "Aurora Travel & DMC",
        "courseId": null,
        "course": "",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "son.dao",
        "address": null,
        "pass": "37ecc55346dd8fb01220fb103b51e0e5",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "multiNation": null,
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("615468d54e677f21f3bfeffb"),
        "nation": "vn",
        "fullname": "Tran Tien",
        "firstName": null,
        "lastName": null,
        "email": "tien@auroratravel.asia",
        "usercode": "002",
        "companyId": "615466a04e677f21f3bfef8a",
        "company": "Aurora Travel & DMC",
        "courseId": null,
        "course": "",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "tien.tran",
        "address": null,
        "pass": "b69b65d04cfd397ebd3b5acc3960a1b2",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("6167ac38013606396f85791f"),
        "nation": "vn",
        "fullname": "Le Thi Thanh Tu",
        "firstName": null,
        "lastName": null,
        "email": "thanhtu@auroratravel.asia",
        "usercode": "003",
        "companyId": "615466a04e677f21f3bfef8a",
        "company": "Aurora Travel & DMC",
        "courseId": null,
        "course": "",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "tu.le",
        "address": null,
        "pass": "f90a49a0fb81894e4e94521c9093f5bd",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("6167ac6b013606396f857931"),
        "nation": "vn",
        "fullname": "Ha Thi Thuy",
        "firstName": null,
        "lastName": null,
        "email": "hathuy@auroratravel.asia",
        "usercode": "004",
        "companyId": "615466a04e677f21f3bfef8a",
        "company": "Aurora Travel & DMC",
        "courseId": null,
        "course": "",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "thuy.ha",
        "address": null,
        "pass": "a1444e0286e544892dfabfa9851a6ac4",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("6167ad4a013606396f857945"),
        "nation": "vn",
        "fullname": "Dao Ngan Giang",
        "firstName": null,
        "lastName": null,
        "email": "giang@auroratravel.asia",
        "usercode": "005",
        "companyId": "615466a04e677f21f3bfef8a",
        "company": "Aurora Travel & DMC",
        "courseId": null,
        "course": "",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "giang.dao",
        "address": null,
        "pass": "e93c9a33395401545bf6b25b036d2186",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("6167ae1c013606396f85795b"),
        "nation": "vn",
        "fullname": "Nguyễn Thanh Hang",
        "firstName": null,
        "lastName": null,
        "email": "hang@auroratravel.asia",
        "usercode": "006",
        "companyId": "615466a04e677f21f3bfef8a",
        "company": "Aurora Travel & DMC",
        "courseId": null,
        "course": "",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "hang.nguyen",
        "address": null,
        "pass": "199688acb8f8f47e5d877340e501513f",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("6167ae6c013606396f857973"),
        "nation": "vn",
        "fullname": "Nguyen Thi Minh Thu",
        "firstName": null,
        "lastName": null,
        "email": "thu@auroratravel.asia",
        "usercode": "007",
        "companyId": "615466a04e677f21f3bfef8a",
        "company": "Aurora Travel & DMC",
        "courseId": null,
        "course": "",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "thu.nguyen",
        "address": null,
        "pass": "9d540974f7ee6de38c9f5dfae2bfb438",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("6167aef6013606396f85798d"),
        "nation": "vn",
        "fullname": "Nguyen Thi Hong Nhung",
        "firstName": null,
        "lastName": null,
        "email": "nhung@auroratravel.asia",
        "usercode": "008",
        "companyId": "615466a04e677f21f3bfef8a",
        "company": "Aurora Travel & DMC",
        "courseId": null,
        "course": "",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "nhung.nguyen",
        "address": null,
        "pass": "fdf4b580f873d384320cb7d85e03da7c",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("6167afa3013606396f8579a9"),
        "nation": "vn",
        "fullname": "Dao Thi Huong",
        "firstName": null,
        "lastName": null,
        "email": "anna@auroratravel.asia",
        "usercode": "009",
        "companyId": "615466a04e677f21f3bfef8a",
        "company": "Aurora Travel & DMC",
        "courseId": null,
        "course": "",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "huong.dao",
        "address": null,
        "pass": "3a9fef96f375b95b402ee74a9c1a4f8a",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("6167afd3013606396f8579c7"),
        "nation": "vn",
        "fullname": "Ton Nu Thanh Binh",
        "firstName": null,
        "lastName": null,
        "email": "tonbinh@auroratravel.asia",
        "usercode": "010",
        "companyId": "615466a04e677f21f3bfef8a",
        "company": "Aurora Travel & DMC",
        "courseId": null,
        "course": "",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "binh.ton",
        "address": null,
        "pass": "645d04fb727d396e39f30307ae6562a5",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("6167b061013606396f8579e7"),
        "nation": "vn",
        "fullname": "Le Thu Phuong",
        "firstName": null,
        "lastName": null,
        "email": "eugenia@auroratravel.asia",
        "usercode": "011",
        "companyId": "615466a04e677f21f3bfef8a",
        "company": "Aurora Travel & DMC",
        "courseId": null,
        "course": "",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "phuong.le",
        "address": null,
        "pass": "f1fecb46bc022ce72d59e160d4bd5b33",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("6167b0d8013606396f857a2b"),
        "nation": "vn",
        "fullname": "Bui Thuy Duong",
        "firstName": null,
        "lastName": null,
        "email": "riana@auroratravel.asia",
        "usercode": "012",
        "companyId": "615466a04e677f21f3bfef8a",
        "company": "Aurora Travel & DMC",
        "courseId": null,
        "course": "",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "duong.bui",
        "address": null,
        "pass": "d82851dbe4ad013d006daf00f6431e52",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("6167b141013606396f857a4f"),
        "nation": "vn",
        "fullname": "Pham Thi Nhung",
        "firstName": null,
        "lastName": null,
        "email": "sofia@auroratravel.asia",
        "usercode": "022",
        "companyId": "615466a04e677f21f3bfef8a",
        "company": "Aurora Travel & DMC",
        "courseId": null,
        "course": "",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "nhung.pham",
        "address": null,
        "pass": "43063a85846a6d18a756fd578b90ae57",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("6167b215013606396f857a75"),
        "nation": "vn",
        "fullname": "Phan Thi Thom",
        "firstName": null,
        "lastName": null,
        "email": "thom@auroratravel.asia",
        "usercode": "014",
        "companyId": "615466a04e677f21f3bfef8a",
        "company": "Aurora Travel & DMC",
        "courseId": null,
        "course": "",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "thom.phan",
        "address": null,
        "pass": "c9a6a0c4144d1b103e3996e5ea4c921a",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("6167b371013606396f857ac5"),
        "nation": "vn",
        "fullname": "Nguyen Hai Yen",
        "firstName": null,
        "lastName": null,
        "email": "yen@auroratravel.asia",
        "usercode": "015",
        "companyId": "615466a04e677f21f3bfef8a",
        "company": "Aurora Travel & DMC",
        "courseId": "60e859dd901903a12c714deb",
        "course": "GROUP 1",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "yen.nguyen",
        "address": null,
        "pass": "9cf23ef14b896059848156312c36301b",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("6167b574013606396f857aee"),
        "nation": "vn",
        "fullname": "Le Thanh Huyen",
        "firstName": null,
        "lastName": null,
        "email": "lisa@auroratravel.asia",
        "usercode": "016",
        "companyId": "615466a04e677f21f3bfef8a",
        "company": "Aurora Travel & DMC",
        "courseId": null,
        "course": "",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "huyen.le",
        "address": null,
        "pass": "f9230a46259fb82e6c7c9f1e4e68cdc4",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("6167b65f013606396f857b45"),
        "nation": "vn",
        "fullname": "Dang Thu Nguyen",
        "firstName": null,
        "lastName": null,
        "email": "nguyen@auroratravel.asia",
        "usercode": "017",
        "companyId": "615466a04e677f21f3bfef8a",
        "company": "Aurora Travel & DMC",
        "courseId": null,
        "course": "",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "nguyen.dang",
        "address": null,
        "pass": "97ebe572189ca612e5d34483ed265a62",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("6167b751013606396f857ba5"),
        "nation": "vn",
        "fullname": "Le Thi Cam Vi",
        "firstName": null,
        "lastName": null,
        "email": "camvi@auroratravel.asia",
        "usercode": "018",
        "companyId": "615466a04e677f21f3bfef8a",
        "company": "Aurora Travel & DMC",
        "courseId": null,
        "course": "",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "vi.le",
        "address": null,
        "pass": "e008f1dd8ab2921a382f4b1c0b0ea942",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("6167b7af013606396f857bd5"),
        "nation": "vn",
        "fullname": "Nguyen Thi Chanh",
        "firstName": null,
        "lastName": null,
        "email": "chanh@auroratravel.asia",
        "usercode": "019",
        "companyId": "615466a04e677f21f3bfef8a",
        "company": "Aurora Travel & DMC",
        "courseId": null,
        "course": "",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "chanh.nguyen",
        "address": null,
        "pass": "744b4b8bf12cf57282b79a8deb9b9b44",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("6167b7f4013606396f857c07"),
        "nation": "vn",
        "fullname": "Bach Thuy Ngoc Ha",
        "firstName": null,
        "lastName": null,
        "email": "ngocha@auroratravel.asia",
        "usercode": "020",
        "companyId": "615466a04e677f21f3bfef8a",
        "company": "Aurora Travel & DMC",
        "courseId": null,
        "course": "",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "ha.bach",
        "address": null,
        "pass": "6712e1c004905c92c4098a4f3ed12901",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("6167b832013606396f857c3b"),
        "nation": "vn",
        "fullname": "Tran Thuy Linh",
        "firstName": null,
        "lastName": null,
        "email": "alice@auroratravel.asia",
        "usercode": "021",
        "companyId": "615466a04e677f21f3bfef8a",
        "company": "Aurora Travel & DMC",
        "courseId": null,
        "course": "",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "linh.tran",
        "address": null,
        "pass": "e33bf63b44fc81522904c10fafff4d36",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("6167e2ed013606396f86fe8d"),
        "nation": "vn",
        "fullname": "Nguyen Do Mai Anh",
        "firstName": null,
        "lastName": null,
        "email": "maianh@auroratravel.asia",
        "usercode": "NA",
        "companyId": "615466a04e677f21f3bfef8a",
        "company": "Aurora Travel & DMC",
        "courseId": null,
        "course": "",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "anh.nguyen",
        "address": null,
        "pass": "55d3dfd1b3b624c084cbf66135228fd0",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "multiNation": null,
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("61921cd7f1028f10e166e0f4"),
        "nation": "ca",
        "fullname": "Andrew Dao Anh Son",
        "firstName": "Son",
        "lastName": "Dao",
        "email": "son@auroratravel.asia",
        "usercode": null,
        "companyId": "61921c38f1028f10e162649d",
        "company": null,
        "courseId": null,
        "course": null,
        "classId": null,
        "listClass": null,
        "class": null,
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": null,
        "username": "son.dao",
        "address": null,
        "pass": "37ecc55346dd8fb01220fb103b51e0e5",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("61921cd7f1028f10e166e0f5"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "multiNation": null,
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("61921de1f1028f10e166e188"),
        "nation": "ca",
        "fullname": "Dang Thu Nguyen",
        "firstName": "Dang",
        "lastName": "Nguyen ",
        "email": "nguyen@auroratravel.asia",
        "usercode": "017",
        "companyId": "61921c38f1028f10e162649d",
        "company": "Aurora Travel & DMC",
        "courseId": null,
        "course": "",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "nguyen.dang",
        "address": null,
        "pass": "8258e25c391b6524aad720b3a5502d24",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "multiNation": null,
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("61921e41f1028f10e1695915"),
        "nation": "ca",
        "fullname": "Nguyen Thi Chanh",
        "firstName": null,
        "lastName": null,
        "email": "chanh@auroratravel.asia",
        "usercode": "019",
        "companyId": "61921c38f1028f10e162649d",
        "company": null,
        "courseId": null,
        "course": null,
        "classId": null,
        "listClass": null,
        "class": null,
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": null,
        "username": "chanh.nguyen",
        "address": null,
        "pass": "6189a45ff6a6add347f4656fd12911f2",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "multiNation": null,
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("61921e9df1028f10e16bd05f"),
        "nation": "ca",
        "fullname": "Bach Thuy Ngoc Ha",
        "firstName": null,
        "lastName": null,
        "email": "gocha@auroratravel.asia",
        "usercode": "020",
        "companyId": "61921c38f1028f10e162649d",
        "company": "Aurora Travel & DMC",
        "courseId": null,
        "course": "",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "ha.bach",
        "address": null,
        "pass": "e27638f4e3560dc1030f57754a4b5719",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("61921f1df1028f10e16bd087"),
        "nation": "ca",
        "fullname": "Le Thi Cam Vi",
        "firstName": null,
        "lastName": null,
        "email": "camvi@auroratravel.asia",
        "usercode": "018",
        "companyId": "61921c38f1028f10e162649d",
        "company": null,
        "courseId": null,
        "course": null,
        "classId": null,
        "listClass": null,
        "class": null,
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": null,
        "username": "vi.le",
        "address": null,
        "pass": "6fccdf2e48ba77d26c399b7e31bf78bf",
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("619224a3f1028f10e19b1958"),
        "nation": "ca",
        "fullname": "Tran Thuy Linh",
        "firstName": null,
        "lastName": null,
        "email": "alice@auroratravel.asia",
        "usercode": "021",
        "companyId": "61921c38f1028f10e162649d",
        "company": null,
        "courseId": null,
        "course": null,
        "classId": null,
        "listClass": null,
        "class": null,
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": null,
        "username": "linh.tran",
        "address": null,
        "pass": null,
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("61922508f1028f10e19bba17"),
        "nation": "ca",
        "fullname": "Le Thanh Huyen",
        "firstName": null,
        "lastName": null,
        "email": "huyen@auroratravel.asia",
        "usercode": "016",
        "companyId": "61921c38f1028f10e162649d",
        "company": null,
        "courseId": null,
        "course": null,
        "classId": null,
        "listClass": null,
        "class": null,
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": null,
        "username": "huyen.le",
        "address": null,
        "pass": null,
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("61922564f1028f10e1a0b993"),
        "nation": "ca",
        "fullname": "Nguyen Hai Yen",
        "firstName": null,
        "lastName": null,
        "email": "yen@auroratravel.asia",
        "usercode": "015",
        "companyId": "61921c38f1028f10e162649d",
        "company": null,
        "courseId": null,
        "course": null,
        "classId": null,
        "listClass": null,
        "class": null,
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": null,
        "username": "yen.nguyen",
        "address": null,
        "pass": null,
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("619225b6f1028f10e1a20a3a"),
        "nation": "ca",
        "fullname": "Phan Thi Thom",
        "firstName": null,
        "lastName": null,
        "email": "thom@auroratravel.asia",
        "usercode": "014",
        "companyId": "61921c38f1028f10e162649d",
        "company": null,
        "courseId": null,
        "course": null,
        "classId": null,
        "listClass": null,
        "class": null,
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": null,
        "username": "thom.phan",
        "address": null,
        "pass": null,
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("619225ecf1028f10e1a3e4fb"),
        "nation": "ca",
        "fullname": "Pham Thi Nhung",
        "firstName": null,
        "lastName": null,
        "email": "sofia@auroratravel.asia",
        "usercode": "022",
        "companyId": "61921c38f1028f10e162649d",
        "company": null,
        "courseId": null,
        "course": null,
        "classId": null,
        "listClass": null,
        "class": null,
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": null,
        "username": "nhung.pham",
        "address": null,
        "pass": null,
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("6192261df1028f10e1a48227"),
        "nation": "ca",
        "fullname": "Bui Thuy Duong",
        "firstName": null,
        "lastName": null,
        "email": "riana@auroratravel.asia",
        "usercode": "012",
        "companyId": "61921c38f1028f10e162649d",
        "company": null,
        "courseId": null,
        "course": null,
        "classId": null,
        "listClass": null,
        "class": null,
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": null,
        "username": "duong.bui",
        "address": null,
        "pass": null,
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("6192264df1028f10e1a522fc"),
        "nation": "ca",
        "fullname": "Le Thu Phuong",
        "firstName": null,
        "lastName": null,
        "email": "eugenia@auroratravel.asia",
        "usercode": "011",
        "companyId": "61921c38f1028f10e162649d",
        "company": null,
        "courseId": null,
        "course": null,
        "classId": null,
        "listClass": null,
        "class": null,
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": null,
        "username": "phuong.le",
        "address": null,
        "pass": null,
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("61922693f1028f10e1a52336"),
        "nation": "ca",
        "fullname": "Ton Nu Thanh Binh",
        "firstName": null,
        "lastName": null,
        "email": "tonbinh@auroratravel.asia",
        "usercode": "010",
        "companyId": "61921c38f1028f10e162649d",
        "company": null,
        "courseId": null,
        "course": null,
        "classId": null,
        "listClass": null,
        "class": null,
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": null,
        "username": "binh.ton",
        "address": null,
        "pass": null,
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("619226c5f1028f10e1a52374"),
        "nation": "ca",
        "fullname": "Dao Thi Huong",
        "firstName": null,
        "lastName": null,
        "email": "anna@auroratravel.asia",
        "usercode": "009",
        "companyId": "61921c38f1028f10e162649d",
        "company": null,
        "courseId": null,
        "course": null,
        "classId": null,
        "listClass": null,
        "class": null,
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": null,
        "username": "huong.dao",
        "address": null,
        "pass": null,
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("61922705f1028f10e1a523b6"),
        "nation": "ca",
        "fullname": "Nguyen Thi Hong Nhung",
        "firstName": null,
        "lastName": null,
        "email": "nhung@auroratravel.asia",
        "usercode": "008",
        "companyId": "61921c38f1028f10e162649d",
        "company": null,
        "courseId": null,
        "course": null,
        "classId": null,
        "listClass": null,
        "class": null,
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": null,
        "username": "nhung.nguyen",
        "address": null,
        "pass": null,
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("6192273ef1028f10e1a523fc"),
        "nation": "ca",
        "fullname": "Nguyen Thi Minh Thu",
        "firstName": null,
        "lastName": null,
        "email": "thu@auroratravel.asia",
        "usercode": "007",
        "companyId": "61921c38f1028f10e162649d",
        "company": null,
        "courseId": null,
        "course": null,
        "classId": null,
        "listClass": null,
        "class": null,
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": null,
        "username": "thu.nguyen",
        "address": null,
        "pass": null,
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("6192276ff1028f10e1a52446"),
        "nation": "ca",
        "fullname": "Nguyen Thanh Hang",
        "firstName": null,
        "lastName": null,
        "email": "hang@auroratravel.asia",
        "usercode": "006",
        "companyId": "61921c38f1028f10e162649d",
        "company": "Aurora Travel & DMC",
        "courseId": null,
        "course": "",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "hang.nguyen",
        "address": null,
        "pass": null,
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("619227a9f1028f10e1a5249c"),
        "nation": "ca",
        "fullname": "Dao Ngan Giang",
        "firstName": null,
        "lastName": null,
        "email": "giang@auroratravel.asia",
        "usercode": "005",
        "companyId": "61921c38f1028f10e162649d",
        "company": null,
        "courseId": null,
        "course": null,
        "classId": null,
        "listClass": null,
        "class": null,
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": null,
        "username": "giang.dao",
        "address": null,
        "pass": null,
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("619227e0f1028f10e1a53c88"),
        "nation": "ca",
        "fullname": "Ha Thi Thuy",
        "firstName": null,
        "lastName": null,
        "email": "thuy@auroratravel.asia",
        "usercode": "004",
        "companyId": "61921c38f1028f10e162649d",
        "company": "",
        "courseId": null,
        "course": "",
        "classId": null,
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": "",
        "username": "thuy.ha",
        "address": null,
        "pass": null,
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("6192281cf1028f10e1a54ff5"),
        "nation": "ca",
        "fullname": "Le Thi Thanh Tu",
        "firstName": null,
        "lastName": null,
        "email": "thanhtu@auroratravel.asia",
        "usercode": "003",
        "companyId": "61921c38f1028f10e162649d",
        "company": null,
        "courseId": null,
        "course": null,
        "classId": null,
        "listClass": null,
        "class": null,
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": null,
        "username": "tu.le",
        "address": null,
        "pass": null,
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }

    ,
    {
        "_id": ObjectId("61b957d9223a78df08e745b8"),
        "nation": "vn",
        "fullname": "Phan Hoang Thanh Thuy",
        "firstName": "Thuy",
        "lastName": "Phan",
        "email": "thuy@auroratravel.asia",
        "usercode": "023",
        "companyId": "615466a04e677f21f3bfef8a",
        "company": null,
        "courseId": null,
        "course": null,
        "classId": null,
        "listClass": null,
        "class": null,
        "listCourse": null,
        "listDepartment": null,
        "departmentId": null,
        "department": null,
        "username": "thuy.Phan",
        "address": null,
        "pass": null,
        "phone": null,
        "title": null,
        "active": true,
        "nameImg": null,
        "time": null,
        "auto": null,
        "supperAdmin": null,
        "serviceType": null,
        "location": null,
        "exchangeRateGroupId": null,
        "role": [
            {
                "_id": ObjectId("615466754e677f21f3bfef7b"),
                "name": "Admin",
                "code": "Admin",
                "active": null
            }
        ],
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": false
    }]
data.forEach(vl => {
    vl.company ="Aurora Travel Vietnam"
    vl.companyId ="61c52e977e4dc7a3703f6779"
    db.getCollection("users").insert(vl);
})