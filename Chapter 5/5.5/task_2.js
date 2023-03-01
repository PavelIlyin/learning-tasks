
'use strict'

let arr = [5, 3, 8, 1];

let filterArr = filterRange(arr, 1, 4);

function filterRange(arr, a, b) {
    return arr.filter(item => a <= item && item <= b);
}

console.log(filterArr);
console.log(arr);
