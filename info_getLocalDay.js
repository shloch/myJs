'use strict';

/*
European countries have days of week starting with Monday 
(number 1), then Tuesday (number 2) and till Sunday (number 7).
 Write a function getLocalDay(date) that returns the
  “European” day of week for date.

  let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date) );       // tuesday, should show 2
*/

function getLocalDay(date) {
      //let _days = [, 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
      let days = [0,1,2,3,4,5,6,7];
      return days[date.getDay()];
}


//method2
function getLocalDay2(date) {
  let day = date.getDay();
  if (day == 0) { // 0 becomes 7
    day = 7;
  }
  return day;
}



let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date) );       // tuesday, should show 2

