'use strict'

function sumSalaries(salaries) {
    let count = 0;
    for (let i of Object.values(salaries)) {
        count += i;
    }

    return count;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(sumSalaries(salaries)); // 650


