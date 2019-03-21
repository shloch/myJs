'use strict';
/**
Given a sequence of integers , a triplet  is beautiful if:

Given an increasing sequenc of integers and the value of , count the number of beautiful triplets in the sequence.

For example, the sequence  and . There are three beautiful triplets, by index: . To test the first triplet,  and .

Function Description

Complete the beautifulTriplets function in the editor below. It must return an integer that represents the number of beautiful triplets in the sequence.

beautifulTriplets has the following parameters:

d: an integer
arr: an array of integers, sorted ascending
Input Format

The first line contains  space-separated integers  and , the length of the sequence and the beautiful difference. 
The second line contains  space-separated integers .

Constraints

Output Format

Print a single line denoting the number of beautiful triplets in the sequence.

Sample Input

7 3
1 2 4 5 7 8 10
Sample Output

3
Explanation

The input sequence is , and our beautiful difference . There are many possible triplets , but our only beautiful triplets are ,  and  by value not index. Please see the equations below:

 



Recall that a beautiful triplet satisfies the following equivalence relation:  where .


*/



// Complete the beautifulTriplets function below.
function beautifulTriplets(d, arr) {
      let temp_arr = [];
      let tripplet_count = 0;


      for (let index=0; index<arr.length-2; index++) {
            temp_arr.push(arr[index]);
            for(let x=index+1; x<arr.length; x++) {
                  if(arr[x] - temp_arr[temp_arr.length-1] == d) {
                        temp_arr.push(arr[x]);
                  }
                  
                  
                  if (temp_arr.length == 3) {
                      tripplet_count++;
                  }

            }
            //console.log(tripplet_count);
            temp_arr.length = 0;
            

      }

      console.log(tripplet_count);
      return tripplet_count;

}

function beautifulTriplets2(d, arr) {
     let temp_arr = [];
      let tripplet_count = 0;


      for (let index=0; index<arr.length-2; index++) {
            //console.log(arr[index]);
            temp_arr.push(arr[index]);
            for(let x=index+1; x<arr.length; x++) {
                  //console.log(arr[x]);
                  if(arr[x] - temp_arr[temp_arr.length-1] == d) {
                        //console.log(arr[x]);
                        temp_arr.push(arr[x]);
                  }
                  
                  
                  if (temp_arr.length == 3) {
                  console.log(temp_arr);
                      tripplet_count++;
                      temp_arr.length = 0;
                  }

            }
            //console.log(tripplet_count);
            temp_arr.length = 0;
            

      }

      console.log(tripplet_count);
      return tripplet_count;

}


beautifulTriplets2(3, [1,2,4,5,7,8,10]);




