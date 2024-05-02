type Employee = { // Type alias was defined
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1, 
    name: 'Lance', 
    retire: (date: Date) => {
        console.log(date);
    } 
}
