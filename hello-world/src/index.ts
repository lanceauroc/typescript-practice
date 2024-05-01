function calculateTax(income: number, taxYear = 2022): number {
    if ((taxYear || 2022) < 2022)
        return income * 1.2;
    return income * 1.3;
}

let result = 0;
result = calculateTax(30_000);
console.log(result);