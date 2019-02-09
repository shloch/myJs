/*
Write the function camelize(str) that changes dash-separated 
words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

ex
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Hint: use split to split the string into an array, 
*/

function camelize(str) {
  let arr = str.split('-');

  if (arr[0].length == 0 ) arr.shift(); //if first element is empty arr, remove

  let arr2 = arr
             .filter(function(word, index){
                if (index > 0) return word;
             })
             .map(word => word[0] = word[0].toUpperCase()+word.slice(1,word.length));

  console.log(arr[0]+arr2.join(''));
  return arr[0]+arr2.join('');
  
}


camelize("background-color")
camelize("list-style-image") 
camelize("-webkit-transition")