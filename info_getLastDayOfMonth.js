'use strict';

/*
Write a function getLastDayOfMonth(year, month)
 that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.

Parameters:

year – four-digits year, for instance 2012.
month – month, from 0 to 11.
For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).
*/
//30 - sep, april, june, nov
//28/29 - feb
function getLastDayOfMonth(year, month) {
        let date = new Date(year, month + 1, 0);
      return date.getDate();
}

/*
Normally, dates start from 1, but technically w
e can pass any number, the date will autoadjust itself.
 So when we pass 0, then it means “one day before 1st
  day of the month”, in other words: “the last day of the previous month”.
*/

alert( getLastDayOfMonth(2012, 0) ); // 31
alert( getLastDayOfMonth(2012, 1) ); // 29
alert( getLastDayOfMonth(2013, 1) ); // 28