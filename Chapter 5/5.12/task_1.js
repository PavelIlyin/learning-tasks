'use strict'

let user = {
    name: "Василий Иванович",
    age: 35
};

let userJS = JSON.stringify(user)
let userJP = JSON.parse(userJS);

console.log(userJS);
console.log(userJP);

