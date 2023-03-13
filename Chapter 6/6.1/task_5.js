'use strict'

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

(function () {
    function printReverseList(list) {
        let arr = [];
        let cloneList = { ...list };
        while (cloneList) {
            arr.push(cloneList.value);
            cloneList = cloneList.next;
        }

        for (let i of arr.reverse()) {
            console.log(i);
        }
    }

    printReverseList(list); // 4,3,2,1

})();


(function () {
    function printReverseList(list) {

        if (list.next) {
            printReverseList(list.next);
        }

        console.log(list.value);
    }

    printReverseList(list); // 4,3,2,1

})();