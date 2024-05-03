type Customer = {
    birthday: Date
};

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// optional property access operator; '?' then '.' chaining operator
console.log(customer?.birthday); // gets executed if customer is not null or not undefined

