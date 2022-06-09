let random = Math.random() * 100
let randomAsInteger = Math.round(random);
console.log(randomAsInteger);

for (let count = randomAsInteger; count >= 0; count--) {
    console.log(count)
}
for (let count = 1; count <= randomAsInteger; count++) {
    console.log(count)
}