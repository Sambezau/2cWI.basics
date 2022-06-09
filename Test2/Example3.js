let output = 0;

for (let count = 10; count > 0; count--) {

    let random = Math.random() * 100;
    let randomAsInteger = Math.round(random);
    console.log(randomAsInteger)
    output = output + randomAsInteger

}



console.log("Die Summe der 10 Zufallszahlen ist " + output);