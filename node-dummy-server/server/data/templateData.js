
// template syntax by Liquid with https://liquidjs.com/
const TemplateData = [
   {
      /*
      data = {
         _id: tour._id,
         productCode: tour.productCode,
         codeVersion: tour.codeVersion,
         bookingName: tour.bookingName,

         updatedBy: updatedBy,
         DateUpdate: tour.DateUpdate,

         oldBegindate: oldBegindate,
         oldEnddate: oldEnddate,
         begindate: tour.begindate,
         enddate: tour.enddate
      }
      */
      name: 'ProposalUpdate',
      value: `
      [Tour Changed] - "{{updatedBy}}" has just updated "{{productCode}} V{{codeVersion}} - {{bookingName}}"
      `
   },
   {
      /*
      data = {
         _id: tour._id,
         productCode: tour.productCode,
         codeVersion: tour.codeVersion,
         bookingName: tour.bookingName,

         updatedBy: updatedBy,
         DateUpdate: tour.DateUpdate,

         oldBegindate: oldBegindate,
         oldEnddate: oldEnddate,
         begindate: tour.begindate,
         enddate: tour.enddate
      }
      */
      name: 'ProposalConfirmed',
      value: `
      [Tour Confirmed] - "{{updatedBy}}" has just confirmed the booking "{{productCode}} V{{codeVersion}} - {{bookingName}}" 
      at "{{DateUpdate | date: "%Y-%m-%d %H:%M"}}"
      `
   }
];

module.exports = TemplateData;
