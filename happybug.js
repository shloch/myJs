'use strict';


/**

https://www.hackerrank.com/contests/microverse-coding-challenges/challenges/happy-ladybugs


Happy Ladybugs is a board game having the following properties:

The board is represented by a string, , of length . The  character of the string, , denotes the  cell of the board.
If  is an underscore (i.e., _), it means the  cell of the board is empty.
If  is an uppercase English alphabetic letter (ascii[A-Z]), it means the  cell contains a ladybug of color .
String  will not contain any other characters.
A ladybug is happy only when its left or right adjacent cell (i.e., ) is occupied by another ladybug having the same color.
In a single move, you can move a ladybug from its current position to any empty cell. 
Given the values of  and  for  games of Happy Ladybugs, determine if it's possible to make all the ladybugs happy. For each game, print YES on a new line if all the ladybugs can be made happy through some number of moves. Otherwise, print NO. 


As an example, . You can move the rightmost  and  to make  and all the ladybugs are happy.

Function Description

Complete the happyLadybugs function in the editor below. It should return an array of strings, either 'YES' or 'NO', one for each test string.

happyLadybugs has the following parameters:

b: an array of strings that represents the initial positions and colors of the ladybugs
Input Format

The first line contains an integer , the number of games.

The next  pairs of lines are in the following format:

The first line contains an integer , the number of cells on the board.
The second line contains a string  describing the  cells of the board.
Constraints

Output Format

For each game, print YES on a new line if it is possible to make all the ladybugs happy. Otherwise, print NO.

Sample Input 0

4
7
RBY_YBR
6
X_Y__X
2
__
6
B_RRBR
Sample Output 0

YES
NO
YES
YES
*/


function happyLadybugs(b) {

      console.log(b);

      const dash = b.filter(i => i == '_');
      console.log(dash);
      if (dash.length == b.length) {console.log('YES'); return 0;}

      if (dash.length == 0) {console.log('NO'); return 0;}


      let bb = b;
      let tmp= [];
      //if (dash.length) {

      //}

      for (let i=0; i<bb.length; i++) {
            if (bb[i] == '_') tmp.push(bb.pop());
            const count_char = bb.filter(x => x == tmp[(tmp.length)-1]);
            console.log(count_char);
            if (count_char.length >= 1) {
                  for (let y=0; y<bb.length; y++) {
                        if (bb[y] == tmp[tmp.length-1]) {
                              bb[y] = 'XXX';
                        }
                  }
            }

      }
      console.log(tmp);

}

happyLadybugs(['R','B','Y','_','Y','B','R']);





