'use strict';
/*
  Write the function sortByName(users) that gets an array of objects with the age property and sorts them by age.

For instance:
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ john, pete, mary ];

sortByName(arr);

// now: [john, mary, pete]
alert(arr[0].name); // Mary
alert(arr[2].name); // Pete
*/


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 40 };

let arr = [ john, pete, mary ];

function sortByName(arr) {
  let arr2 = arr.sort(function(first, second){
    return (first.age > second.age) ? 1 : -1;
  });
  console.log(arr2);
}

sortByName(arr);
