
'use strict'

{
    function Obj(animals) {
        this.animals = animals;
    }

    let obj = new Obj('Rabbit');
    let obj2 = new obj.constructor('Leon');

    console.log(obj2.animals);
}

{
    function Obj(animals) {
        this.animals = animals;
    }

    Obj.prototype = {};

    let obj = new Obj('Rabbit');
    let obj2 = new obj.constructor('Leon');

    console.log(obj2.animals);
}