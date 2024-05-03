function greet(name: string) {
    console.log(name.toUpperCase());
}

greet(null); // can be disabled via strictNullChecks on tsconfig; but don't