"use strict";
function calculateTax(income, taxYear = 2022) {
    if ((taxYear || 2022) < 2022)
        return income * 1.2;
    return income * 1.3;
}
let result = 0;
result = calculateTax(30000);
console.log(result);
//# sourceMappingURL=index.js.map