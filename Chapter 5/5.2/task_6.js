
'use strict'

function randomInteger(min, max) {
    let randomNum = min + Math.random() * (max + 1 - min);
    return Math.floor(randomNum);
}

console.log(randomInteger(1, 3));
console.log(randomInteger(1, 3));
console.log(randomInteger(1, 3));
