'use strict';

/*
Anagrams are words that have the same number of same letters, but in different order.

For instance:

nap - pan
ear - are - era
cheaters - hectares - teachers

Write a function aclean(arr) that returns an array cleaned from anagrams.

For instance:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

From every anagram group should remain only one word, no matter which one.
*/

function aclean(arr) {
      let s = new Map();
      let arr_result = [];
      for (let word of arr) {
            let sorted = word.toLowerCase().split('').sort().join('');
            s.set(sorted, word);
      }
      console.log(s);
      s.forEach(function(value) {
            arr_result.push(value)
      });

      /* also iterates like loop above */
      //for (let loop of s.entries()) {
      //       arr_result.push(loop[1])
      //}
      console.log(arr_result);

}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"