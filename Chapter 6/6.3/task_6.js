'use strict'

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field) {
  return function (a, b) {
    if (a[field] > b[field]) {
      return 1;
    } else {
      return -1;
    }
  }
}

users.sort(byField('name')).forEach(user => console.log(user.name)); // Ann, John, Pete
users.sort(byField('age')).forEach(user => console.log(user.name)); // Pete, Ann, John