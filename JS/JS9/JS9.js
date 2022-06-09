let output = "";
let isX = true
for (let index = 0; index < 20; index++) {
    if (index % 4 == 0) {
        console.log(output);
        output = ""
        if (isX == true) {
            isX = false
        } else {
            isX = true;
        }



    }
    if (isX == true) {
        output = output + "X";



    } else {
        output = output + "0";
    }
}

//Aufgabe 09
var sum = 0
for (let index = 0; index < 100; index++) {
    if (index % 2 == 0) {
        sum += index
    }
}
console.log(sum);