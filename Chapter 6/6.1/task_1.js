'use strict'
    // 1. С использованием цикла.

    (function () {
        function sumTo(a) {
            let count = 0;
            for (let i = 0; i <= a; i++) {
                count += i;
            }
            return count;
        }

        console.log(sumTo(6));// 21
    })();

// 2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.

(function () {
    function sumTo(a) {
        if (a === 1) {
            return a;
        } else {
            return a + sumTo(a - 1);
        }
    }

    console.log(sumTo(100000));// Maximum call stack size exceeded
})();

// 3. С использованием формулы арифметической прогрессии.

(function () {
    function sumTo(a) {
        return (a * (a + 1) / 2);
    }

    console.log(sumTo(5));// 15
})();


/*
- Самый быстрый вариант с формулой, потом с циклом, потом с рекурсией.
- вызов sumTo(100000) выдал ошибку "Maximum call stack size exceeded".
*/