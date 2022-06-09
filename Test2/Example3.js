var min = 5,
    max = 10;

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}