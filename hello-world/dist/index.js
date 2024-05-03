"use strict";
function kgToLbs(weight) {
    // Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
// union type is not part of js code
//# sourceMappingURL=index.js.map