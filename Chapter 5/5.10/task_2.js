'use strict'

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {

    let maxSum = 0;
    let maxName = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (maxSum < salary) {
            maxSum = salary;
            maxName = name;
        }
    }

    return maxName;
}

console.log(topSalary(salaries)); 
