'use strict';

/*
Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:

function unique(arr) {
  /* your code 
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O
*/


/*
using ARRAYS to return unique array of values
*/
function unique(arr) {
  let arr2 = [];
   //let arr2 = arr.filter(e => e);
   //if (arr2.includes())

   for (let str of arr) {
      if (!arr2.includes(str)) {
        arr2.push(str);
      }
   }
   console.log(arr2);
 }

/*
using SETS to return unique set of values
*/
 function unique2(arr) {
      let s = new Set();
      //let arr2 = arr.filter(e => e);
      //if (arr2.includes())
      for (let str of arr) {
            s.add(str);
      }
      console.log(s);
      //s.forEach(function(value) {
      //      console.log(value);
      //})
 }

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];


unique2(strings); // Hare, Krishna, :-O


