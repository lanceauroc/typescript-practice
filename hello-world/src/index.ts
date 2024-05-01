let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void // this is the object's signature (what it expects)
} = { 
    id: 1, 
    name: 'Lance', 
    retire: (date: Date) => {
        console.log(date);
    } 
};

