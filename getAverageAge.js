'use strict';

/*
Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.

The formula for the average is (age1 + age2 + ... + ageN) / N.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
*/
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };

    let users = [ john, pete, mary ];

function getAverageAge(users) {
   let sum = 0;
   for (let u of users) {
     sum += u.age;
   }
   console.log(sum/users.length);
    
}
getAverageAge(users);