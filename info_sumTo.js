'use strict';

/*
Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

For instance:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Make 3 solution variants:

Using a for loop.
Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
Using the arithmetic progression formula.
An example of the result:

function sumTo(n) { /*... your code ...  }

alert( sumTo(100) ); // 5050
P.S. Which solution variant is the fastest? The slowest? Why?

P.P.S. Can we use recursion to count sumTo(100000)?
*/

function sumTo(num) {
      //let result = 0;
      let result = (num == 1) ? 1 : num+sumTo(num-1);

      console.log(result);
      return result;
}


function sumTo2 (num) {
      let sum = 0;
      for (let x=num; x>0; x--) {
            sum += x;
      }
      console.log(sum);
}

/**
In mathematics, an arithmetic progression (AP) or arithmetic sequence is a 
sequence of numbers such that the difference between the consecutive terms 
is constant. Difference here means the second minus the first. For instance,
 the sequence 5, 7, 9, 11, 13, 15, . . . is an arithmetic progression with 
 common difference of 2.



https://en.wikipedia.org/wiki/Arithmetic_progression
*/

function sumTo3(n) {
      let result = n * (n + 1) / 2;
      console.log (result); 

}
sumTo3(10000);