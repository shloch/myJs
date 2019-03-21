'use strict';

/**
Lilah has a string, , of lowercase English letters that she repeated infinitely many times.

Given an integer, , find and print the number of letter a's in the first  letters of Lilah's infinite string.

For example, if the string  and , the substring we consider is , the first  characters of her infinite string. There are  occurrences of a in the substring.

Function Description

Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider
Input Format

The first line contains a single string, . 
The second line contains an integer, .

Constraints

For  of the test cases, .
Output Format

Print a single integer denoting the number of letter a's in the first  letters of the infinite string created by repeating  infinitely many times.

Sample Input 0

aba
10
Sample Output 0

7
Explanation 0 
The first  letters of the infinite string are abaabaabaa. Because there are  a's, we print  on a new line.

Sample Input 1

a
1000000000000
Sample Output 1

1000000000000
Explanation 1 
Because all of the first  letters of the infinite string are a, we print  on a new line.
*/


// Complete the repeatedString function below.
function repeatedString(s, n) {
      let my_array = s;

      if (my_string.length == 1) return n



      if (my_string.length > 1000000) return my_string.split("").filter(letter => letter == 'a').length;

      while (my_string.length <= n) {
            my_string += my_string;
      } 

      

      my_string = my_string.substring(0,n); //
      console.log(my_string);

      let answer = my_string.split("").filter(letter => letter == 'a').length;
      console.log(answer);
      return answer;
      

}

function repeatedString2(s, n) {

      if (s.length == 1) return n;

      let my_array = [];

      let num_repetitions_needed = Math.floor(n/s.length);
      let trailer_repetition = n - (num_repetitions_needed * s.length);
      //console.log(trailer_repetition);
      let number_A = s.split("").filter(letter => letter == 'a').length;

      for (let x=0; x<num_repetitions_needed*number_A; x++) my_array.push('a');

      if (trailer_repetition > 0) {
            for (let x=0; x<trailer_repetition; x++) {
                  my_array.push('a');
            }
      }


      console.log(my_array);
      return my_array.length;

}

function mode(array)
{
    
    var modeMap = {};
    var maxEl = array[0];
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
        }
    }

    return maxEl;
}

let r = mode([3,3,2,1,3, 'a', 'a']);




