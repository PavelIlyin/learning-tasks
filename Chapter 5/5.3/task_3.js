
'use strict'

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        let lowerLine = str.slice(0, maxlength - 1) + '...';
        return lowerLine;
    } else {
        return str;
    }
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));  // = "Вот, что мне хотело…"
console.log(truncate("Всем привет!", 20));                                   // = "Всем привет!"