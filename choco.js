'use strict';


// Complete the chocolateFeast function below.
function chocolateFeast(n, c, m) {
   let choco_bars = 0;
   let wraps_left = 0;
   let money = n;
   let cost = c;

   choco_bars = money/cost;
   wraps_left = money/cost;
   while (wraps_left > m) {
      choco_bars += Math.floor(wraps_left/m);
      wraps_left += (wraps_left%m);


   }

   console.log(choco_bars);

}
console.log('test');

chocolateFeast(6, 2, 2);