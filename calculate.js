/*
First, implement the method calculate(str) that 
takes a string like "1 + 2" in the format “NUMBER operator NUMBER”
 (space-delimited) and returns the result. Should understand plus + and minus -.
*/

function calculate(str) {
  let arr=str.split(' ');
  let ans = 0;
  if (arr[1] == '+') {
    ans = +arr[0] + +arr[2];
  } else if (arr[1] == '-') {
    ans = +arr[0] - +arr[2];
  }
  console.log(ans);
  return ans;
}

calculate("1 - 2");

