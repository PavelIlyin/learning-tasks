'use strict'

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function getTotalSalaries(obj) {
    let total = 0;
    for (let k in obj) {
        total += obj[k];
    }
    return total;
}

console.log(getTotalSalaries(salaries))