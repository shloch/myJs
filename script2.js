
'use strict';

let age = 4
let message = `micheal, age = ${age}`;

function showadmin(){
  let login = prompt('enter login : ');
  if (login == 'Admin'){
        let pass = prompt('enter password: ');
    if (pass == '' || pass == null) {
        alert('Cancelled');
    }else{
        if (pass == 'TheMaster') {
            alert('Welcome');
        }else {
            alert('wrong password');
        }
    }
    }else if (login == '' || login == null) {
        alert('Cancelled');

    }else{
        alert('i dont know u');
  }
}


function checkAge () {
//Write an “if” condition to check that age is between 14 and 90 inclusively.
//“Inclusively” means that age can reach the edges 14 or 90.
 
    if (age >= 14 && age <= 90) {
        console.log ('age between 14 and 90');
    }
}



function rangeOutside () {
    //Write an if condition to check that age is NOT between 14 and 90 inclusively.

    if (!(age >= 14 && age <= 90)) {
        console.log(`age: ${age} is outside of range 14-90`);
    }
}

function oddNum2_10 () {
    //Use the for loop to output even numbers from 2 to 10.
    for (let x=0; x <= 10; x++) {
        if ( x % 2 == 1 ) continue;
        console.log (x);
    }

}

function whileL () {
    let i = 0;
    while (i < 3) {
        console.log(`number ${i}`);
        i++;
    }
}


function repeat_till_input () {
    /*
    Write a loop which prompts for a number greater 
    than 100. If the visitor enters another number – ask them 
    to input again.

    The loop must ask for a number until either the visitor enters a
    number greater than 100 or cancels the input/enters an empty line.

    Here we can assume that the visitor only inputs numbers. 
    There’s no need to implement a special handling for a non-numeric 
    input in this task.
    */
    let isHundred = true;
    while (isHundred) {
        let collect = prompt('enter number range');
        if ( (! collect) || (collect > 100) ) {
            isHundred = false;
            console.log('pressed CANCEL/ entered NOTHING / number > 100');
        }
    }
}

function prime_numbers (limit) {
    /*
    An integer number greater than 1 is called a prime if it cannot
    be divided without a remainder by anything except 1 and itself.
    In other words, n > 1 is a prime if it can’t be evenly divided 
    by anything except 1 and n.
    For example, 5 is a prime, because it cannot be divided without 
    a remainder by 2, 3 and 4.
    Write the code which outputs prime numbers in the interval from 
    2 to n.
    For n = 10 the result will be 2,3,5,7.
    P.S. The code should work for any n, not be hard-tuned for any
     fixed value.
    */
    let n = limit;

    nextPrime:
    for (let i = 2; i <= n; i++) { // for each i...

      for (let j = 2; j < i; j++) { // look for a divisor..
        if (i % j == 0) continue nextPrime; // not a prime, go next i
      }

      alert( i ); // a prime
    }


}

let user = {
    name : "shloch",
    age : 25,
    isAdmin : true,
    "like birds" : 'i do',
};

function makeUser(nom, age) {
    let user2 = {
        nom,
        age : 25,
    }
    return user2;
}


for (let key in user) {
    alert("key = "+ key);
}

//alert(user['name']);

//alert(user['like birds']);










