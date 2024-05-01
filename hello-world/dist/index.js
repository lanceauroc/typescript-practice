"use strict";
function calculateTax(income, taxYear) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(30000, 2017);
console.log(calculateTax);
//# sourceMappingURL=index.js.map