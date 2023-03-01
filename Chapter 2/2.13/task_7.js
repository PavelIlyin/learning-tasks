'use strict'

let num = 10;

primeNumber:
for (let i = 2; i < num; i++) {
  for (let k = 2; k < i; i++) {
    if (i % k === 0) {
      continue primeNumber;
    }
    console.log(i);
  }
}