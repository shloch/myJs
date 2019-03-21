'use strict';

/*
Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise `false.

The function must be case-insensitive:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/

function checkSpam(str) {
  let answer = (str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx') ) ? true : false;
  console.log(answer);
}

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit") ;