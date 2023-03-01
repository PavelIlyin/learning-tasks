
'use strict'

function unique(arr) {
  let resultArr = [];

  for (let word of arr) {
    if (resultArr.includes(word) === false) {
      resultArr.push(word);
    }
  }

  return resultArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings)); // кришна, харе, :-O
