
var data = [
    { firstName: "Phạm Thị Phương", name: "Mai", code: "31191026807", phone: "034 2631775", email: "maipham.31191026807@st.ueh.edu.vn" },
    { firstName: "Nguyễn Thị Minh", name: "Khoa", code: "31191026142", phone: "037 7037725", email: "khoanguyen.31191026142@st.ueh.edu.vn" },
    { firstName: "Trần Thị Quỳnh", name: "Như", code: "31191023753", phone: "0777130301", email: "nhutran.31191023753@st.ueh.edu.vn" },
    { firstName: "Võ Thị Mai", name: "Linh", code: "31191026148", phone: "0354 033 634", email: "linhvo.31191026148@st.ueh.edu.vn" },
    { firstName: "Nguyễn Thị Kim", name: "Ngân", code: "31191026973", phone: "0374354963", email: "ngannguyen.31191026973@st.ueh.edu.vn" },
    { firstName: "Trần Ngọc Thảo", name: "Nguyên", code: "31191023670", phone: "0778745221", email: "nguyentran.31191023670@st.ueh.edu.vn" },
    { firstName: "Nguyễn Thanh", name: "Minh", code: "31191023554", phone: "0828742143", email: "minhnguyen.31191023554@st.ueh.edu.vn" },
    { firstName: "Nguyễn Gia Bảo", name: "Nhi", code: "31191026398", phone: "0965193359", email: "nhinguyen.31191026398@st.ueh.edu.vn" },
    { firstName: "Nguyễn Hà", name: "Uyên", code: "31191026198", phone: "0343697609", email: "uyennguyen.31191026198@st.ueh.edu.vn" },
    { firstName: "Huỳnh Triệu Tường", name: "Vi", code: "31191026556", phone: "0787519742", email: "vihuynh.19102001@gmail.com" },
    { firstName: "Trần Thi Nhã ", name: "Thúy", code: "31191026107", phone: "0799328529", email: "thuytran.31191026107@st.ueh.edu.vn" },
    { firstName: "Nguyễn Thị Ngọc", name: "Quí", code: "31191025296", phone: "0817059544", email: "quinguyen.31191025296@st.ueh.edu.vn" },
    { firstName: "Nguyễn Thị Hà", name: "Phương", code: "31191027086", phone: "0389590545", email: "nguyenthihaphuong9atltc@gmail.com" },
    { firstName: "Nguyễn Như Hoài ", name: "Thương", code: "31191026189", phone: "0768446979", email: "thuongnguyen.31191026189@st.ueh.edu.vn" },
    { firstName: "Nguyễn Thị Thùy ", name: "Dương", code: "31191022334", phone: "0776255690", email: "duongnguyen.31191022334@st.ueh.edu.vn" },
    { firstName: "Nguyễn Thị ", name: "Duyên", code: "31191026262", phone: "0387754112", email: "duyennguyen.31191026262@st.ueh.edu.vn" },
    { firstName: "Trương Hoàng", name: "Anh", code: "31191026726", phone: "0945845928", email: "anhtruong.31191026726@st.ueh.edu.vn" },
    { firstName: "Ka Thuỵ ", name: "Duyên", code: "31191022510", phone: "0365577605", email: "duyenka.31191022510@st.ueh.edu.vn" },
    { firstName: "Trần Song Trí ", name: "Dũng", code: "31191023170", phone: "", email: "dungtran.31191023170@st.ueh.edu.vn" },
    { firstName: "Nguyễn Nhật ", name: "Duyên", code: "31191026430", phone: "0979870669", email: "duyennguyen.31191026430@st.ueh.edu.vn" },
    { firstName: "Bùi Thị Ngọc ", name: "Anh", code: "31191027260", phone: "", email: "anhbui.31191027260@st.ueh.edu.vn" },
    { firstName: "Nguyễn Quốc", name: "Dũng", code: "31191025673", phone: "", email: "dungnguyen.31191025673@st.ueh.edu.vn" },
    { firstName: "Đoàn Thị Minh ", name: "Châu", code: "31191025521", phone: "0334927640", email: "chaudoan.31191025521@st.ueh.edu.vn" },
    { firstName: "Cao Thị Thanh ", name: "Hảo", code: "31191026057", phone: "0967018785", email: "haocao.31191026057@st.ueh.edu.vn" },
    { firstName: "Lê Thị Hồng ", name: "Hương", code: "31191021351", phone: "0933728031", email: "huongle.31191021351@st.ueh.edu.vn" },
    { firstName: "Lê Văn", name: "Dự", code: "31191025938", phone: "968554663", email: "dule.31191025938@st.ueh.edu.vn" },
    { firstName: "Đặng Hoàng Gia", name: "Bảo", code: "31191023094", phone: "0918656371", email: "baodang.31191023094@st.ueh.edu.vn" },
    { firstName: "Trần Yến", name: "Phương", code: "31191025822", phone: "", email: "phuongtran.31191025822@st.ueh.edu.vn" }
];
data.forEach(vl => {

    var temp = {
        "nation": "vn",
        "fullname": vl.firstName + ' ' + vl.name,
        "firstName": vl.name,
        "lastName": vl.firstName,
        "email": vl.email,
        "usercode": vl.code,
        "companyId": "60f218863a433f0e0472c55b",
        "company": "UEH (The  University of Economic HCMC)",
        "courseId": "60f7b28e04dbf6223cd232df",
        "course": "45",
        "classId": "60fbb1689d7efab310acd69d",
        "listClass": null,
        "class": "",
        "listCourse": null,
        "listDepartment": null,
        "departmentId": "",
        "department": "",
        "username": vl.code,
        "address": null,
        "pass": "672ca5afce91f909f8ae92ff320575bc",
        "phone": vl.phone,
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
                "_id": ObjectId("60fc02376a6489432e70b193"),
                "name": "Product",
                "code": "Product",
                "active": true
            },
            {
                "_id": ObjectId("60fc02376a6489432e70b194"),
                "name": "Reservation",
                "code": "Reservation",
                "active": null
            },
            {
                "_id": ObjectId("60fc02376a6489432e70b195"),
                "name": "Operation",
                "code": "Operation",
                "active": null
            }
        ],
        "multiNation": null,
        "InCharge": null,
        "codeHP": null,
        "codeLHP": null,
        "isDelete": null
    }
    db.getCollection("users").insert(temp);
});