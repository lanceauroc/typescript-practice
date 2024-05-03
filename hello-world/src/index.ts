function greet(name: string | null) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}

greet(null); /// null value can be passed, but not undefined