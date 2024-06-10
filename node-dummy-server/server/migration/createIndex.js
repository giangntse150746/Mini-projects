db.getCollection('fulldatas').createIndex({
    masterCode: "text",
    productCode: "text",
    bookingName: "text"
}, { default_language: "none", language_override: "none" })