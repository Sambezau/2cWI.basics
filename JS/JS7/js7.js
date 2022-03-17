console.log("nix");

let random = Math.random() * 100
let randomAsInteger = Math.round(random);
console.log(randomAsInteger);

let a = Math.random() * 100
let aAsInteger = Math.round(a);
console.log(aAsInteger);


if (randomAsInteger < aAsInteger && randomAsInteger < 50) {
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
}

if (randomAsInteger < 30 || aAsInteger < 30) {
    console.log("Eine der beiden ist kleiner als 30");
}


if (randomAsInteger < 50 && aAsInteger != 50) {
    console.log("Erste Zahl klein, zweite kein 50iger");
}
