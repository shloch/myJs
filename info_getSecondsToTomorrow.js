'use strict';

/*
Create a function getSecondsToTomorrow() that returns the number
 of seconds till tomorrow.

For instance, if now is 23:00, then:

getSecondsToTomorrow() == 3600
P.S. The function should work at any day, the “today” is not hardcoded.


*/

function getSecondsToTomorrow() {
      let now = new Date();
      let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
      let differenceSeconds = Math.round((tomorrow - now)/1000);
      console.log(differenceSeconds); //return
}

//method2
function getSecondsToTomorrow2() {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
  let totalSecondsInADay = 86400;

  return totalSecondsInADay - totalSecondsToday;
}

getSecondsToTomorrow();