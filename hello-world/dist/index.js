"use strict";
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
// optional property access operator; '?' then '.' chaining operator
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday); // gets executed if customer is not null or not undefined
//# sourceMappingURL=index.js.map