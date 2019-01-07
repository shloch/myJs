
'use strict';

let age = 4
let message = `micheal, age = ${age}`;

let num = prompt('enter number bro : ');
num = Number(num);
//alert (typeof num);

if ( !isNaN (num)) {
  let display = (num > 0 ) ? 1 : (num < 0 ) ? -1 : 0;
  alert (display);
} else{
  alert ('not a number');
}