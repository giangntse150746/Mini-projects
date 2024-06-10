// --------------------------------------------------------------------
// name: currency name
// symbol: option, using angular currency pipe, please
// priority: sort: asc
// flagFileName = code.toLowerCase() + ".svg"
// nameByNation: localization form 'name' field
// priorityByNation: priority for nation, ex: priorityByNation: { vn: 0, usa: 1 }

const CurrencyData = [
   {
      "nationAvailables": ["vn", "tl", "ca", "la"],
      "code": "USD",
      "name": "United States Dollar",
      "symbol": "$",
      "priority": 0,
      "flag": "usd.svg",
      "nameByNation": {
         "vn": "Đôla Mỹ"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": ["vn", "tl", "ca", "la"],
      "code": "EUR",
      "name": "Euro Member Countries",
      "symbol": "€",
      "priority": 10,
      "flag": "eur.svg",
      "nameByNation": {
         "vn": "Euro"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "VND",
      "name": "Viet Nam Dong",
      "symbol": "₫",
      "priority": 20,
      "flag": "vnd.svg",
      "nameByNation": {
         "vn": "Việt Nam Đồng"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "THB",
      "name": "Thailand Baht",
      "symbol": "฿",
      "priority": 30,
      "flag": "thb.svg",
      "nameByNation": {
         "vn": "Bạt Thái"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "KHR",
      "name": "Cambodia Riel",
      "symbol": "៛",
      "priority": 40,
      "flag": "khr.svg",
      "nameByNation": {
         "vn": "Riel Campuchia"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "LAK",
      "name": "Laos Kip",
      "symbol": "₭",
      "priority": 50,
      "flag": "lak.svg",
      "nameByNation": {
         "vn": "Kip Lào"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "GBP",
      "name": "United Kingdom Pound",
      "symbol": "£",
      "priority": 60,
      "flag": "gbp.svg",
      "nameByNation": {
         "vn": "Bảng Anh"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "JPY",
      "name": "Japan Yen",
      "symbol": "¥",
      "priority": 70,
      "flag": "jpy.svg",
      "nameByNation": {
         "vn": "Yên Nhật"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "CNY",
      "name": "China Yuan Renminbi",
      "symbol": "¥",
      "priority": 80,
      "flag": "cny.svg",
      "nameByNation": {
         "vn": "Nhân dân tệ"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "SGD",
      "name": "Singapore Dollar",
      "symbol": "$",
      "priority": 90,
      "flag": "sgd.svg",
      "nameByNation": {
         "vn": "Đôla Singapore"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "ALL",
      "name": "Albania Lek",
      "symbol": "Lek",
      "priority": 100,
      "flag": "all.svg",
      "nameByNation": {
         "vn": "Lek Albania"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "AFN",
      "name": "Afghanistan Afghani",
      "symbol": "؋",
      "priority": 110,
      "flag": "afn.svg",
      "nameByNation": {
         "vn": "Afghani Afghanistan"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "ARS",
      "name": "Argentina Peso",
      "symbol": "$",
      "priority": 120,
      "flag": "ars.svg",
      "nameByNation": {
         "vn": "Peso Argentina"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "AWG",
      "name": "Aruba Guilder",
      "symbol": "ƒ",
      "priority": 130,
      "flag": "awg.svg",
      "nameByNation": {
         "vn": "Florin Aruba"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "AUD",
      "name": "Australia Dollar",
      "symbol": "$",
      "priority": 140,
      "flag": "aud.svg",
      "nameByNation": {
         "vn": "Đôla Úc"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "AZN",
      "name": "Azerbaijan Manat",
      "symbol": "₼",
      "priority": 150,
      "flag": "azn.svg",
      "nameByNation": {
         "vn": "Manat Azerbaijan"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "BSD",
      "name": "Bahamas Dollar",
      "symbol": "$",
      "priority": 160,
      "flag": "bsd.svg",
      "nameByNation": {
         "vn": "Đôla Bahamas"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "BBD",
      "name": "Barbados Dollar",
      "symbol": "$",
      "priority": 170,
      "flag": "bbd.svg",
      "nameByNation": {
         "vn": "Đôla Barbadian"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "BYN",
      "name": "Belarus Ruble",
      "symbol": "Br",
      "priority": 180,
      "flag": "byn.svg",
      "nameByNation": {
         "vn": "Rupee Belarus"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "BZD",
      "name": "Belize Dollar",
      "symbol": "BZ$",
      "priority": 190,
      "flag": "bzd.svg",
      "nameByNation": {
         "vn": "Đôla Belize"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "BMD",
      "name": "Bermuda Dollar",
      "symbol": "$",
      "priority": 200,
      "flag": "bmd.svg",
      "nameByNation": {
         "vn": "Đôla Bermuda"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "BOB",
      "name": "Bolivia Bolíviano",
      "symbol": "$b",
      "priority": 210,
      "flag": "bob.svg",
      "nameByNation": {
         "vn": "Boliviano Bolivia"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "BAM",
      "name": "Bosnia and Herzegovina Convertible Mark",
      "symbol": "KM",
      "priority": 220,
      "flag": "bam.svg",
      "nameByNation": {
         "vn": "Convertible Mark Bosnia\nvà Herzegovina"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "BWP",
      "name": "Botswana Pula",
      "symbol": "P",
      "priority": 230,
      "flag": "bwp.svg",
      "nameByNation": {
         "vn": "Pula Botswana"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "BGN",
      "name": "Bulgaria Lev",
      "symbol": "лв",
      "priority": 240,
      "flag": "bgn.svg",
      "nameByNation": {
         "vn": "Lev Bulgaria"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "BRL",
      "name": "Brazil Real",
      "symbol": "R$",
      "priority": 250,
      "flag": "brl.svg",
      "nameByNation": {
         "vn": "Real Brazil"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "BND",
      "name": "Brunei Darussalam Dollar",
      "symbol": "$",
      "priority": 260,
      "flag": "bnd.svg",
      "nameByNation": {
         "vn": "Đôla Brunei"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "CAD",
      "name": "Canada Dollar",
      "symbol": "$",
      "priority": 270,
      "flag": "cad.svg",
      "nameByNation": {
         "vn": "Đôla Canada"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "KYD",
      "name": "Cayman Islands Dollar",
      "symbol": "$",
      "priority": 280,
      "flag": "kyd.svg",
      "nameByNation": {
         "vn": "Đôla QĐ Cayman"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "CLP",
      "name": "Chile Peso",
      "symbol": "$",
      "priority": 290,
      "flag": "clp.svg",
      "nameByNation": {
         "vn": "Peso Chilean"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "COP",
      "name": "Colombia Peso",
      "symbol": "$",
      "priority": 300,
      "flag": "cop.svg",
      "nameByNation": {
         "vn": "Peso Colombian"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "CRC",
      "name": "Costa Rica Colon",
      "symbol": "₡",
      "priority": 310,
      "flag": "crc.svg",
      "nameByNation": {
         "vn": "Colon Costa Rican"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "HRK",
      "name": "Croatia Kuna",
      "symbol": "kn",
      "priority": 320,
      "flag": "hrk.svg",
      "nameByNation": {
         "vn": "Kuna Croatian"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "CUP",
      "name": "Cuba Peso",
      "symbol": "₱",
      "priority": 330,
      "flag": "cup.svg",
      "nameByNation": {
         "vn": "Peso Cuban"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "CZK",
      "name": "Czech Republic Koruna",
      "symbol": "Kč",
      "priority": 340,
      "flag": "czk.svg",
      "nameByNation": {
         "vn": "Koruna Séc"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "DKK",
      "name": "Denmark Krone",
      "symbol": "kr",
      "priority": 350,
      "flag": "dkk.svg",
      "nameByNation": {
         "vn": "Krone Đan Mạch"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "DOP",
      "name": "Dominican Republic Peso",
      "symbol": "RD$",
      "priority": 360,
      "flag": "dop.svg",
      "nameByNation": {
         "vn": "Peso Dominica"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "XCD",
      "name": "East Caribbean Dollar",
      "symbol": "$",
      "priority": 370,
      "flag": "xcd.svg",
      "nameByNation": {
         "vn": "Đôla Đông Caribe"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "EGP",
      "name": "Egypt Pound",
      "symbol": "£",
      "priority": 380,
      "flag": "egp.svg",
      "nameByNation": {
         "vn": "Bảng Ai Cập"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "SVC",
      "name": "El Salvador Colon",
      "symbol": "$",
      "priority": 390,
      "flag": "svc.svg",
      "nameByNation": {},
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "FKP",
      "name": "Falkland Islands (Malvinas) Pound",
      "symbol": "£",
      "priority": 400,
      "flag": "fkp.svg",
      "nameByNation": {
         "vn": "Bảng Falkland"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "FJD",
      "name": "Fiji Dollar",
      "symbol": "$",
      "priority": 410,
      "flag": "fjd.svg",
      "nameByNation": {
         "vn": "Đôla Fiji"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "GHS",
      "name": "Ghana Cedi",
      "symbol": "¢",
      "priority": 420,
      "flag": "ghs.svg",
      "nameByNation": {
         "vn": "Cedi Ghana"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "GIP",
      "name": "Gibraltar Pound",
      "symbol": "£",
      "priority": 430,
      "flag": "gip.svg",
      "nameByNation": {
         "vn": "Bảng Gibraltar"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "GTQ",
      "name": "Guatemala Quetzal",
      "symbol": "Q",
      "priority": 440,
      "flag": "gtq.svg",
      "nameByNation": {
         "vn": "Quetzal Guatemala"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "GGP",
      "name": "Guernsey Pound",
      "symbol": "£",
      "priority": 450,
      "flag": "ggp.svg",
      "nameByNation": {
         "vn": "Bảng Guernsey"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "GYD",
      "name": "Guyana Dollar",
      "symbol": "$",
      "priority": 460,
      "flag": "gyd.svg",
      "nameByNation": {
         "vn": "Đôla Guyana"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "HNL",
      "name": "Honduras Lempira",
      "symbol": "L",
      "priority": 470,
      "flag": "hnl.svg",
      "nameByNation": {
         "vn": "Lempira Honduras"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "HKD",
      "name": "Hong Kong Dollar",
      "symbol": "$",
      "priority": 480,
      "flag": "hkd.svg",
      "nameByNation": {
         "vn": "Đôla Hồng Kông"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "HUF",
      "name": "Hungary Forint",
      "symbol": "Ft",
      "priority": 490,
      "flag": "huf.svg",
      "nameByNation": {
         "vn": "Forint Hungary"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "ISK",
      "name": "Iceland Krona",
      "symbol": "kr",
      "priority": 500,
      "flag": "isk.svg",
      "nameByNation": {
         "vn": "Krona Iceland"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "INR",
      "name": "India Rupee",
      "symbol": "",
      "priority": 510,
      "flag": "inr.svg",
      "nameByNation": {
         "vn": "Rupee Ấn Độ"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "IDR",
      "name": "Indonesia Rupiah",
      "symbol": "Rp",
      "priority": 520,
      "flag": "idr.svg",
      "nameByNation": {
         "vn": "Rupiah Indonesia"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "IRR",
      "name": "Iran Rial",
      "symbol": "﷼",
      "priority": 530,
      "flag": "irr.svg",
      "nameByNation": {
         "vn": "Rial Iran"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "IMP",
      "name": "Isle of Man Pound",
      "symbol": "£",
      "priority": 540,
      "flag": "imp.svg",
      "nameByNation": {
         "vn": "Bảng Manx"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "ILS",
      "name": "Israel Shekel",
      "symbol": "₪",
      "priority": 550,
      "flag": "ils.svg",
      "nameByNation": {
         "vn": "New Shekel Israel"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "JMD",
      "name": "Jamaica Dollar",
      "symbol": "J$",
      "priority": 560,
      "flag": "jmd.svg",
      "nameByNation": {
         "vn": "Đôla Jamaica"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "JEP",
      "name": "Jersey Pound",
      "symbol": "£",
      "priority": 570,
      "flag": "jep.svg",
      "nameByNation": {
         "vn": "Bảng Jersey"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "KZT",
      "name": "Kazakhstan Tenge",
      "symbol": "лв",
      "priority": 580,
      "flag": "kzt.svg",
      "nameByNation": {
         "vn": "Tenge Kazakhstan"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "KPW",
      "name": "Korea (North) Won",
      "symbol": "₩",
      "priority": 590,
      "flag": "kpw.svg",
      "nameByNation": {
         "vn": "Won Triều Tiên"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "MMK",
      "name": "Burmese Kyat",
      "symbol": "K",
      "priority": 591,
      "flag": "mmk.svg",
      "nameByNation": {},
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "KRW",
      "name": "Korea (South) Won",
      "symbol": "₩",
      "priority": 600,
      "flag": "krw.svg",
      "nameByNation": {
         "vn": "Won Hàn Quốc"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "KGS",
      "name": "Kyrgyzstan Som",
      "symbol": "лв",
      "priority": 610,
      "flag": "kgs.svg",
      "nameByNation": {
         "vn": "Som Kyrgyzstan"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "LBP",
      "name": "Lebanon Pound",
      "symbol": "£",
      "priority": 620,
      "flag": "lbp.svg",
      "nameByNation": {
         "vn": "Bảng Lebanon"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "LRD",
      "name": "Liberia Dollar",
      "symbol": "$",
      "priority": 630,
      "flag": "lrd.svg",
      "nameByNation": {
         "vn": "Đôla Liberia"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "MKD",
      "name": "Macedonia Denar",
      "symbol": "ден",
      "priority": 640,
      "flag": "mkd.svg",
      "nameByNation": {
         "vn": "Denar Macedonia"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "MYR",
      "name": "Malaysia Ringgit",
      "symbol": "RM",
      "priority": 650,
      "flag": "myr.svg",
      "nameByNation": {
         "vn": "Ringgit Malaysia"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "MUR",
      "name": "Mauritius Rupee",
      "symbol": "₨",
      "priority": 660,
      "flag": "mur.svg",
      "nameByNation": {
         "vn": "Rupee Mauritius"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "MXN",
      "name": "Mexico Peso",
      "symbol": "$",
      "priority": 670,
      "flag": "mxn.svg",
      "nameByNation": {
         "vn": "Peso Mexico"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "MNT",
      "name": "Mongolia Tughrik",
      "symbol": "₮",
      "priority": 680,
      "flag": "mnt.svg",
      "nameByNation": {
         "vn": "Tugrik Mông Cổ"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "MZN",
      "name": "Mozambique Metical",
      "symbol": "MT",
      "priority": 690,
      "flag": "mzn.svg",
      "nameByNation": {
         "vn": "Metical Mozambique"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "NAD",
      "name": "Namibia Dollar",
      "symbol": "$",
      "priority": 700,
      "flag": "nad.svg",
      "nameByNation": {
         "vn": "Đôla Namibia"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "NPR",
      "name": "Nepal Rupee",
      "symbol": "₨",
      "priority": 710,
      "flag": "npr.svg",
      "nameByNation": {
         "vn": "Rupee Nepal"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "ANG",
      "name": "Netherlands Antilles Guilder",
      "symbol": "ƒ",
      "priority": 720,
      "flag": "ang.svg",
      "nameByNation": {
         "vn": "Guilder Antilles Hà Lan"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "NZD",
      "name": "New Zealand Dollar",
      "symbol": "$",
      "priority": 730,
      "flag": "nzd.svg",
      "nameByNation": {
         "vn": "Đôla New Zealand"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "NIO",
      "name": "Nicaragua Cordoba",
      "symbol": "C$",
      "priority": 740,
      "flag": "nio.svg",
      "nameByNation": {
         "vn": "Cordoba Nicaragua"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "NGN",
      "name": "Nigeria Naira",
      "symbol": "₦",
      "priority": 750,
      "flag": "ngn.svg",
      "nameByNation": {
         "vn": "Naira Nigeria"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "NOK",
      "name": "Norway Krone",
      "symbol": "kr",
      "priority": 760,
      "flag": "nok.svg",
      "nameByNation": {
         "vn": "Krone Na Uy"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "OMR",
      "name": "Oman Rial",
      "symbol": "﷼",
      "priority": 770,
      "flag": "omr.svg",
      "nameByNation": {
         "vn": "Rial Oman"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "PKR",
      "name": "Pakistan Rupee",
      "symbol": "₨",
      "priority": 780,
      "flag": "pkr.svg",
      "nameByNation": {
         "vn": "Rupee Pakistani"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "PAB",
      "name": "Panama Balboa",
      "symbol": "B/.",
      "priority": 790,
      "flag": "pab.svg",
      "nameByNation": {},
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "PYG",
      "name": "Paraguay Guarani",
      "symbol": "Gs",
      "priority": 800,
      "flag": "pyg.svg",
      "nameByNation": {
         "vn": "Guarani Paraguay"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "PEN",
      "name": "Peru Sol",
      "symbol": "S/.",
      "priority": 810,
      "flag": "pen.svg",
      "nameByNation": {},
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "PHP",
      "name": "Philippines Peso",
      "symbol": "₱",
      "priority": 820,
      "flag": "php.svg",
      "nameByNation": {
         "vn": "Peso Philippine"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "PLN",
      "name": "Poland Zloty",
      "symbol": "zł",
      "priority": 830,
      "flag": "pln.svg",
      "nameByNation": {
         "vn": "Zloty Ba Lan"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "QAR",
      "name": "Qatar Riyal",
      "symbol": "﷼",
      "priority": 840,
      "flag": "qar.svg",
      "nameByNation": {
         "vn": "Riyal Qatar"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "RON",
      "name": "Romania Leu",
      "symbol": "lei",
      "priority": 850,
      "flag": "ron.svg",
      "nameByNation": {
         "vn": "Leu Romania"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "RUB",
      "name": "Russia Ruble",
      "symbol": "₽",
      "priority": 860,
      "flag": "rub.svg",
      "nameByNation": {
         "vn": "Ruble Nga"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "SHP",
      "name": "Saint Helena Pound",
      "symbol": "£",
      "priority": 870,
      "flag": "shp.svg",
      "nameByNation": {
         "vn": "Bảng Saint Helena"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "SAR",
      "name": "Saudi Arabia Riyal",
      "symbol": "﷼",
      "priority": 880,
      "flag": "sar.svg",
      "nameByNation": {
         "vn": "Riyal Ả Rập Saudi"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "RSD",
      "name": "Serbia Dinar",
      "symbol": "Дин.",
      "priority": 890,
      "flag": "rsd.svg",
      "nameByNation": {
         "vn": "Dinar Serbia"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "SCR",
      "name": "Seychelles Rupee",
      "symbol": "₨",
      "priority": 900,
      "flag": "scr.svg",
      "nameByNation": {
         "vn": "Rupee Seychelles"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "SBD",
      "name": "Solomon Islands Dollar",
      "symbol": "$",
      "priority": 910,
      "flag": "sbd.svg",
      "nameByNation": {
         "vn": "Đôla QĐ Solomon"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "SOS",
      "name": "Somalia Shilling",
      "symbol": "S",
      "priority": 920,
      "flag": "sos.svg",
      "nameByNation": {
         "vn": "Shilling Somali"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "ZAR",
      "name": "South Africa Rand",
      "symbol": "R",
      "priority": 930,
      "flag": "zar.svg",
      "nameByNation": {
         "vn": "Rand Nam Phi"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "LKR",
      "name": "Sri Lanka Rupee",
      "symbol": "₨",
      "priority": 940,
      "flag": "lkr.svg",
      "nameByNation": {
         "vn": "Rupee Sri Lankan"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "SEK",
      "name": "Sweden Krona",
      "symbol": "kr",
      "priority": 950,
      "flag": "sek.svg",
      "nameByNation": {
         "vn": "Krona Thụy Điển"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "CHF",
      "name": "Switzerland Franc",
      "symbol": "CHF",
      "priority": 960,
      "flag": "chf.svg",
      "nameByNation": {
         "vn": "Franc Thụy Sĩ"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "SRD",
      "name": "Suriname Dollar",
      "symbol": "$",
      "priority": 970,
      "flag": "srd.svg",
      "nameByNation": {
         "vn": "Đôla Suriname"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "SYP",
      "name": "Syria Pound",
      "symbol": "£",
      "priority": 980,
      "flag": "syp.svg",
      "nameByNation": {
         "vn": "Bảng Syria"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "TWD",
      "name": "Taiwan New Dollar",
      "symbol": "NT$",
      "priority": 990,
      "flag": "twd.svg",
      "nameByNation": {
         "vn": "Đôla Đài Loan mới"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "TTD",
      "name": "Trinidad and Tobago Dollar",
      "symbol": "TT$",
      "priority": 1000,
      "flag": "ttd.svg",
      "nameByNation": {
         "vn": "Đôla Trinidad và Tobago"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "TRY",
      "name": "Turkey Lira",
      "symbol": "",
      "priority": 1010,
      "flag": "try.svg",
      "nameByNation": {
         "vn": "Lira Thổ Nhĩ Kỳ"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "TVD",
      "name": "Tuvalu Dollar",
      "symbol": "$",
      "priority": 1020,
      "flag": "tvd.svg",
      "nameByNation": {},
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "UAH",
      "name": "Ukraine Hryvnia",
      "symbol": "₴",
      "priority": 1030,
      "flag": "uah.svg",
      "nameByNation": {
         "vn": "Grivna Ukraina"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "UYU",
      "name": "Uruguay Peso",
      "symbol": "$U",
      "priority": 1040,
      "flag": "uyu.svg",
      "nameByNation": {
         "vn": "Peso Uruguay"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "UZS",
      "name": "Uzbekistan Som",
      "symbol": "лв",
      "priority": 1050,
      "flag": "uzs.svg",
      "nameByNation": {
         "vn": "Som Uzbekistan"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "VEF",
      "name": "Venezuela Bolívar",
      "symbol": "Bs",
      "priority": 1060,
      "flag": "vef.svg",
      "nameByNation": {
         "vn": "Bolivar Venezuela"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "YER",
      "name": "Yemen Rial",
      "symbol": "﷼",
      "priority": 1070,
      "flag": "yer.svg",
      "nameByNation": {
         "vn": "Rial Yemen"
      },
      "priorityByNation": {}
   },
   {
      "nationAvailables": [],
      "code": "ZWD",
      "name": "Zimbabwe Dollar",
      "symbol": "Z$",
      "priority": 1080,
      "flag": "zwd.svg",
      "nameByNation": {},
      "priorityByNation": {}
   }
];

module.exports = CurrencyData;
