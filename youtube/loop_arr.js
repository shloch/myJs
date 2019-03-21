'use strict';

/* 4 ways to loop arrays */

let animals = ['cat', 'tiger', 'lion', 'rat', 'panther'];

// loop1 
for (let i=0; i<animals.length; i++) {
      //console.log(animals[i]);
}


//loop2
for (let single of animals) {
      //console.log(single);
}

//loop 3

for (let single of Object.values(animals)) {
     // console.log(single);
}

//loop4
for (let index in animals) {
      console.log(animals[index]);
}