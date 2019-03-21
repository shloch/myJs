'use strict';

/**
You are given a square map as a matrix of integer strings. Each cell of the map has a value denoting its depth. We will call a cell of the map a cavity if and only if this cell is not on the border of the map and each cell adjacent to it has strictly smaller depth. Two cells are adjacent if they have a common side, or edge.

Find all the cavities on the map and replace their depths with the uppercase character X.

For example, given a matrix:

989
191
111
You should return:

989
1X1
111
The center cell was deeper than those on its edges: [8,1,1,1]. The deep cells in the top two corners don't share an edge with the center cell.

Function Description

Complete the cavityMap function in the editor below. It should return an array of strings, each representing a line of the completed map.

cavityMap has the following parameter(s):

grid: an array of strings, each representing a row of the grid
Input Format

The first line contains an integer , the number of rows and columns in the map.

Each of the following  lines (rows) contains  positive digits without spaces (columns) representing depth at .

Constraints


Output Format

Output  lines, denoting the resulting map. Each cavity should be replaced with the character X.

Sample Input

4
1112
1912
1892
1234
Sample Output

1112
1X12
18X2
1234
Explanation

The two cells with the depth of 9 are not on the border and are surrounded on all sides by shallower cells. Their values have been replaced by X.
*/




// Complete the cavityMap function below.
function cavityMap(grid) {
    //console.log(grid);
    let sq_length = (grid[0].length);
    let depth_2check = sq_length-2;

    console.log(depth_2check);

    let i = 1;

    while (i <= depth_2check) {
      //console.log(i);
            for (let inner=1; inner<=depth_2check; inner++) {
                  //console.log(grid[i+2][inner]);
                  if (   (grid[i][inner] > grid[i-1][inner]) &&
                        (grid[i][inner] > grid[i][inner-1]) &&
                        (grid[i][inner] > grid[i][inner+1]) &&
                        (grid[i][inner] > grid[i+1][inner]) ) {

                        //console.log(inner);

                        //console.log(grid[i][inner]);
                        let str_arr = grid[i].split('');
                        str_arr[inner] = 'X';
                        //console.log(str_arr.join(''));
                        grid[i] = str_arr.join('')
                        //console.log(str_arr[inner]);

                        //console.log(grid[i][inner] + " should be XXXX ");
                        console.log(grid);
                  }
            }
            i++;
    }
    return grid;

}



cavityMap([ '1112', '1912', '1892', '1234' ]);

//cavityMap([ '989', '191', '111' ]);



