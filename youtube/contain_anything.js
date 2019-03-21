'use strict';

/* arrays can contain anything */

let arr = ['striing', 2, NaN, {name: 'john'}, function(){alert('hello')}, true];

alert(arr[3].name);

arr[4]();