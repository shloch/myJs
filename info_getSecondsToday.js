'use strict';

/*
Write a function getSecondsToday() that returns the number 
of seconds from the beginning of today.

For instance, if now 10:00 am, and there was no 
daylight savings shift, then:

getSecondsToday() == 36000 // (3600 * 10)

The function should work in any day. That is, it should not 
have a hard-coded value of “today”.


*/



function getSecondsToday2() {
  let now = new Date();

  // create an object using the current day/month/year
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; // ms difference
  return Math.round(diff / 1000); // make seconds
}

console.log( getSecondsToday2() );

