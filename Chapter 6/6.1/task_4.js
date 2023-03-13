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
    function printList(list) {
        let cloneList = { ...list };
        while (cloneList) {
            console.log(cloneList.value);
            cloneList = cloneList.next;
        }
    }

    printList(list);

})();


(function () {
    function printList(list) {

        console.log(list.value);
        if (list.next) {
            printList(list.next);
        }
    }

    printList(list);

})();