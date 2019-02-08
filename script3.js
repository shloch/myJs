'use strict';
//import Math;

function greetings(name) {
  alert(`greet ${name}`);
}

let greetings2 = (name) => {
  alert(`greet ${name}`);
}




const allStates = ["Abia", "Adamawa", "Anambra", "Akwa Ibom", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Enugu", "Edo", "Ekiti", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"];

let statesN = [];


function sortByNameLength(allStates){
  
    for(let size=15; size >= 3; size--){
    let newArr = [];
        for (let state=0; state<allStates.length; state++){
            
            if (allStates[state].length == size)
              newArr.push(allStates[state]);
        }
        console.log('size = ' + size);
        statesN.push(newArr);
    }

    return statesN;
}


 function pow(x, n) {
      if (n < 0) return NaN;
      if (Math.round(n) != n) return NaN;

      let result = 1;

      for (let i = 0; i < n; i++) {
        result *= x;
      }

      return result;
}
//const sorted = sortByNameLength(allStates);
//console.log(sorted);

//console.log(sortByNameLength(allStates));

describe("pow", function() {

  //before(() => alert("Testing started – before all tests"));
  //after(() => alert("Testing finished – after all tests"));

  describe("raises x to power 3", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  // ... more tests to follow here, both describe and it can be added
  describe("raises x to power 4", function() {

    function makeTest(x) {
      let expected = x * x * x * x;
      it(`${x} in the power 4 is ${expected}`, function() {
        assert.equal(pow(x, 4), expected);
      });
    }

    for (let x = 1; x <= 3; x++) {
      makeTest(x);
    }

  });

  //---
  it("for negative n the result is NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("for non-integer n the result is NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });



});


