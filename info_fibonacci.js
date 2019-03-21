'use strict';
/* 
In mathematics, the Fibonacci numbers, commonly denoted Fn form a 
sequence, called the Fibonacci sequence, such that each number is the sum of 
 two preceding ones, starting from 0 and 1. That is,[1]

(0,)\;1,\;1,\;2,\;3,\;5,\;8,\;13,\;21,\;34,\;55,\;89,\;144,\;


 https://en.wikipedia.org/wiki/Fibonacci_number
 */

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

alert( fib(3) ); // 2
alert( fib(7) ); // 13