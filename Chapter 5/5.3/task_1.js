
'use strict'

function ucFirst(word) {
    let newWord = word[0].toUpperCase() + word.slice(1);
    return newWord
}

console.log(ucFirst("вася") == "Вася");