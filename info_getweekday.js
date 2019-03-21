'use strict';

/*
Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

For instance:
let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // should output "TU"
*/


function getWeekDay(date) {
      let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
      return days[date.getDay()];
}
 

let date = new Date(1986, 11, 24);  // 24th dec 1986
console.log( getWeekDay(date) );        // should output "WE"