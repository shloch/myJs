'use strict';

/**
Given the time in numerals we may convert it into words, as shown below:

At , use o' clock. For , use past, and for  use to. Note the space between the apostrophe and clock in o' clock. Write a program which prints the time in words for the input given in the format described.

Function Description

Complete the timeInWords function in the editor below. It should return a time string as described.

timeInWords has the following parameter(s):

h: an integer representing hour of the day
m: an integer representing minutes after the hour
Input Format

The first line contains , the hours portion The second line contains , the minutes portion

Constraints

Output Format

Print the time in words as described.

Sample Input 0

5
47
Sample Output 0

thirteen minutes to six
Sample Input 1

3
00
Sample Output 1

three o' clock
Sample Input 2

7
15
Sample Output 2

quarter past seven
*/




// Complete the timeInWords function below.
function timeInWords(h, m) {
    //console.log('time');
    //var expr = 'Papayas';
    let answer = '';
    let hours = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']; 
    let minutes = {
      13:'thirteen',
      14: 'fourteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      200: 'twenty '
      
    }

      if (m < 31) {
            console.log('block 1');
            switch (m) {
              case 15:
                answer = ( 'quarter past ' + hours[h] );
                break;

              case 30:
                answer = ( 'half past ' + hours[h] );
                break;

              case 1:
                answer = ( '' + m + ' minute past ' + hours[h]);
                break;

              case 0:
                answer = ( '' + hours[h] + ' o\' clock');
                break;

              
              default:
                if (m<13) {
                        answer = ('' + hours[m] + ' minutes past ' + hours[h]);
                } else if (m<21) {
                        answer = ('' + minutes[m] + ' minutes past ' + hours[h]);
                } else {
                        let digit_array = m.toString().split('');
                        //console.log(digit_array);
                        answer = ('' + minutes[200] + hours[Number(digit_array[1])] + ' minutes past ' + hours[h]);
                }
                
            }
      } else {
            //console.log('block 2');
            switch (m) {
              case 45:
                answer = ( 'quarter to ' + hours[h+1] );
                break;

              
              default:
                let toMinutes = (60-m);
                //console.log('to minutes ' + toMinutes);
                if (toMinutes == 1) {
                        answer = ('' + hours[toMinutes] + ' minute to ' + hours[h+1]);
                } else if (toMinutes<13) {
                        answer = ('' + hours[toMinutes] + ' minutes to ' + hours[h+1]);
                } else if (toMinutes<21) {
                        answer = ('' + minutes[toMinutes] + ' minutes to ' + hours[h+1]);
                } else {
                        let digit_array = toMinutes.toString().split('');
                        //console.log(digit_array);
                        
                        answer = ('' + minutes[200] + hours[Number(digit_array[1])] + ' minutes to ' + hours[h+1]);
                }
            }
      }

      console.log(answer);
      return answer;

}

timeInWords(5, 29);
timeInWords(5, 32);

timeInWords(5, 33);
timeInWords(5, 34);
timeInWords(5, 35);
timeInWords(5, 36);
timeInWords(5, 37);
timeInWords(5, 38);
timeInWords(5, 39);
timeInWords(5, 40);
timeInWords(5, 41);
timeInWords(5, 42);
timeInWords(5, 43);
timeInWords(5, 44);
timeInWords(5, 45);
timeInWords(5, 46);
timeInWords(5, 47);

timeInWords(5, 48);
timeInWords(5, 49);

timeInWords(5, 50);

timeInWords(5, 51);
timeInWords(5, 52);
timeInWords(5, 53);
timeInWords(5, 54);
timeInWords(5, 55);
timeInWords(5, 56);
timeInWords(5, 57);
timeInWords(5, 58);

timeInWords(5, 59);
