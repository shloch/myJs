'use strict';

/**
An integer  is a divisor of an integer  if the remainder of .

Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.

Note: Each digit is considered to be unique, so each occurrence of the same digit should be counted (e.g. for ,  is a divisor of  each time it occurs so the answer is ).

Function Description

Complete the findDigits function in the editor below. It should return an integer representing the number of digits of  that are divisors of .

findDigits has the following parameter(s):

n: an integer to analyze
Input Format

The first line is an integer, , indicating the number of test cases. 
The  subsequent lines each contain an integer, .

Constraints

 

Output Format

For every test case, count the number of digits in  that are divisors of . Print each answer on a new line.

Sample Input

2
12
1012
Sample Output

2
3
Explanation

The number  is broken into two digits,  and . When  is divided by either of those two digits, the remainder is  so they are both divisors.

The number  is broken into four digits, , , , and .  is evenly divisible by its digits , , and , but it is not divisible by  as division by zero is undefined.
*/

function findDigits(n) {
    let digit_array = String(n).split(""); //converting number to array
    let divisors = digit_array.filter(digit_str => (n%Number(digit_str)) === 0);

    console.log( divisors.length);

}

function findDigits2(n) {
    let divisors_count = String(n).split("").filter(digit_str => (n%Number(digit_str)) === 0).length; //converting number to array
    

    console.log( divisors_count);

}

function libraryFine(d1, m1, y1, d2, m2, y2) {

    let result = 10000;

    if (y1 < y2 ) result = 0;

    if (y1 == y2 ) {
        if (m1 == m2) {
            (d1 <= d2) ? result = 0 : result = (d1-d2)*15;
        } else if (m1 < m2) {
            result = 0           
        } else {
            result = (m1 - m2) * 500;
        }
    }
    
    console.log(result);
    return result;

}



libraryFine(5, 7, 2015, 6, 6, 2015);

