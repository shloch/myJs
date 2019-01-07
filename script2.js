
'use strict';

let age = 4
let message = `micheal, age = ${age}`;

function showadmin(){
  let login = prompt('enter login : ');
  if (login == 'Admin'){
    let pass = prompt('enter password: ');
    if (pass == '' || pass == null) {
      alert('Cancelled');
    }else{
      if (pass == 'TheMaster') {
        alert('Welcome');
      }else {
        alert('wrong password');
      }
    }
  }else if (login == '' || login == null) {
    alert('Cancelled');

  }else{
    alert('i dont know u');
  }
}

showadmin();