'use strict'

function multiplyNumeric(obj) {
    for (let k in obj) {
        if (typeof (obj[k]) === 'number') {
            obj[k] *= 2;
        }
    }
}
