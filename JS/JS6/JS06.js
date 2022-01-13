let random = Math.random() * 1000
let randomAsInteger = Math.round(random);
console.log(randomAsInteger);

if (randomAsInteger > 800) {
    console.log("Bigger than 800");
} else if (randomAsInteger > 500 && randomAsInteger < 800) {
    console.log("between 500 and 800");
} else if (randomAsInteger > 200 && randomAsInteger < 500) {
    console.log("between 200 and 500");
} else if (randomAsInteger > 0 && randomAsInteger < 200) {
    console.log("between 0 and 200");
}