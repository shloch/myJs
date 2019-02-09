/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.

The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)
*/


function filterRange(arr, a, b) {
  let arr2 = arr.filter(function(element) {
    if (element >= a && element <= b) return element;
  });
  //console.log(arr2);
  //console.log(arr);

  return arr2;
}

let arr = [5, 3, 8, 1];
filterRange(arr, 1, 5);
