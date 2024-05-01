let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void // this is the method's signature (what it expects); return value : void for no return value
} = {  // this is the start of the return method
    id: 1, 
    name: 'Lance', 
    retire: (date: Date) => {
        console.log(date);
    } 
};

