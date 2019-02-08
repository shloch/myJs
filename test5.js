'use strict';

let id = Symbol(1);


// both alerts access the same property (the number 0 is converted to string "0")
//alert( obj["0"] ); // test
//alert( obj[0] ); // test (same property)

let id1 = Symbol.for('id');
let id2 = Symbol.for('id');


let user2 = {
    name : 'shloch',
    age : 20,
    [id] : 123,
    [id2] : Symbol.for('id'),
    sayHi : function() {
      console.log('hello ' + this.name);
    },
};



let calculator = {
    
    read : function() {
        this.number1 = prompt('enter firts numbre :', 0);
        this.number2 = prompt('enter second number :', 0);
    },

    sum : function() {
        return Number(this.number1) + Number(this.number2);
    },
    mul : function() {
        return this.number1 * this.number2;
    },
};


let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};

function Gamer(){
  this.role = 'fighter name';
  this.guns = 'gun name';
}

function Calculatorx() {

    this.read = function() {
        this.number1 = prompt('enter firts numbre :', 0);
        this.number2 = prompt('enter second number :', 0);
    };

    this.sum = function() {
        return Number(this.number1) + Number(this.number2);
    };
    this.mul = function() {
        return this.number1 * this.number2;
    };
};


function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
      let readValue = +prompt('enter new value : ', 0);
      this.value += readValue;
    };
};


function readNumber() {
  let reading = 0;
  while(typeof(+reading) != Number) {
    if (reading != null ) {
      reading = prompt('enter a number ', null);
      
    } else {
      return null;
    }
  }
  console.log(reading);
}

readNumber();
alert(+null);


/* ======= */

//2 Object keys can only be 'strings or symbols'

let user = {
  name : 'shloch',
  7 : 'test'
}
alert (user['7']);

//3 ways of declaring object methods

let user = {
  name : 'john',
  sayHi : function() {
    alert('hi');
  }
}

let user2 = {
  name : 'john',
  sayHi() {
    alert('hi');
  }
}

//4 "this" is not bound

let user = {name : 'john'}
let admin = {name : 'superJohn'}

function sayHi() {
  alert(this.name);
}

user.sayHi - sayHi;
admin.sayHi = sayHi;

user.sayHi();
admin.sayHi();

//5  optional parenthesis in constructor functions when they have no arguments

function Gamer() {
  this.role : "fighter name",
  this.gun : 'weapon name'
} 

let ken = new Gamer;
alert(ken.role);





