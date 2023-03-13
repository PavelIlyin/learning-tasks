'use strict'

{
  function printNumbers(from, to) {
    let start = from;

    let timerNum = setInterval(function () {
      console.log(start);
      if (start == to) {
        clearInterval(timerNum);
      } else {
        start++;
      }
    }, 1000);
  }

  printNumbers(5, 10);
}

{
  function printNumbers(from, to) {
    let start = from;

    setTimeout(function func() {
      console.log(start);
      if (start < to) {
        setTimeout(func, 1000);
      }
      start++;
    }, 1000);
  }

  printNumbers(5, 10);
}