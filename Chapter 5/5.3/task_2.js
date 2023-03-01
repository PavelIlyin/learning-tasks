
'use strict'

function checkSpam(str) {
    let lowerLine = str.toLowerCase();

    return lowerLine.includes('viagra') || lowerLine.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));