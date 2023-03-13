'use strict'

function factorial(a) {
    if (a === 1) {
        return a;
    } else {
        return a * factorial(a - 1)
    }
}

console.log(factorial(6)); // 720
