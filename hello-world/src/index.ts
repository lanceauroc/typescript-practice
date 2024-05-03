type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear()); // only gets executed if customer exists AND has a birthday

// optional element access operator ; used with arrays
// if (customer !== null && customers !== undefined)
//      customers.[0]


// customers?.[0]

// Optional call
//let log: any = (message: string) => console.log(message)
let log: any = null;
log?.('a'); // executes only if it references an actual function