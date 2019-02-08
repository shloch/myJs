'use strict';

/**
Object Oriented Tests
For this challenge, you are going to build a mock comments section.

Design
We're going to focus on two aspects:

Users
Users come in 3 flavors, normal users, moderators, and admins. Normal users can only create new comments, and edit the their own comments. Moderators have the added ability to delete comments (to remove trolls), while admins have the ability to edit or delete any comment.
Users can log in and out, and we track when they last logged in
Comments
Comments are simply a message, a timestamp, and the author.
Comments can also be a reply, so we'll store what the parent comment was.
Your Challenge
This is challenge is not about building a fully functional API, but more about focusing on the design from an object-oriented point-of-view.

We've provided the basic API (which is incomplete), which we would like you to complete being aware of the following Object-Oriented Programming concepts:

Encapsulation of Properties
All classes should have no publicly accessible fields
You should make sure you at least "hide" the required fields, for example, using _name instead of _name. Alternatively, feel free to use a better solution as extra credit.
The method-based API is provided. These must be completed as-is.
Additional methods are allowed, though remember to keep read-only properties read-only.
Instantiation
Classes should be instantiated with properties (as provided), to create instances with values already assigned.
User/Moderator/Admin defaults:
Should be marked as not logged in
Should return null for the last logged in at property
Comment defaults:
Should set the current timestamp for the created at property upon instantiation
Replied To is optional, and should be null if not provided.
Inheritance & Access Control
Note: for the sake of simplicity, you can simply treat object equality as "equal", though more complete solutions will also pass.

User
Users can be logged in and out.
When logging in, set the lastLoggedInAt timestamp. Do not modify this timestamp when logging out
Users can only edit their own comments
Users cannot delete any comments
Moderator is a User
Moderators can only edit their own comments
Moderators can delete any comments
Admin is both a User and a Moderator
Admins can edit any comments
Admins can delete any comments
Composition
Comments contain a reference to the User who created it (author)
Comments optionally contain a reference to another comment (repliedTo)
When converting to a string (toString), the following format is used:
No replied to:
message + " by " + author.name
With replied to:
message + " by " + author.name + " (replied to " + repliedTo.author.name + ")"
Beyond these basics, you are free to add to the API, but only these concepts will be scored automatically.


 */

class User {
  constructor(name, lastLoggedInAt=null) {
    this._name = name;
    this.logged = false;
    this.lastLoggedInAt = lastLoggedInAt;
  }

  isLoggedIn() {
    if (this.logged ) {
      return true;
    } else {
      return false;
    }
  };

  getLastLoggedInAt() {
    return this.lastLoggedInAt;
  };

  logIn() {
    this.logged = true;
    this.lastLoggedInAt = new Date();
  };

  logOut() {
    this.logged = false;
    //this.lastLoggedInAt = this.getLastLoggedInAt();
  };

  getName() {
    return this._name;
  };

  setName(name) {
    this._name = name;
  };

  canEdit(comment) {
    if (comment.author.getName() == this._name) {
      return true;
    } else {
      return false;
    }
  };


  canDelete(comment) {
    return false;
  }

}

class Moderator extends User {
  constructor(name){
    super(name);
  }
  
  canDelete(comment) {
    return true;
  };
}

class Admin extends Moderator {
  constructor(name){
    super(name);
  }
  
  canEdit(comment) { 
      return true;  
  }
}

class Comment {
  constructor(author, message, repliedTo=null) {
    this.author = author;
    this._message = message;
    this.repliedTo = repliedTo;
    this.createdAt = new Date();
  }

  getMessage() {
    return this._message;
  };


  setMessage(message) {
    this._message = message;
  };


  getCreatedAt() {
    
    return this.createdAt;
  };

  getAuthor() {
    return this.author;
  };


  getRepliedTo() {
    //return this.
    return this.repliedTo;
  };


  toString() {
    let msg = '';
    if (this.repliedTo != null) {
      msg = this._message + " by " +  this.author.getName() + " (replied to " + this.getRepliedTo().getAuthor().getName() + ")";
      //console.log(msg);
    } else {
      msg = this._message + " by " + this.author.getName();
      //console.log(msg);
    }
    
    return msg;
  };
}



//////////=================

function mySort(nums) {
  //console.log(nums);
  //console.log('--------');
  let xx = {
    odd : [],
    even : [],
    sort : function(a) {  //bubble sort below
      var swapp;
      var n = a.length-1;
      var x=a;
      do {
          swapp = false;
          for (var i=0; i < n; i++)
          {
              if (x[i] > x[i+1])
              {
                 var temp = x[i];
                 x[i] = x[i+1];
                 x[i+1] = temp;
                 swapp = true;
              }
          }
          n--;
      } while (swapp);
     return x; 
    }
  }
  let odd = [];
  let even = []
  for (x=0; x<nums.length; x++) {
    if (typeof nums[x] == 'number') {
      number = Math.floor(nums[x]);
      (number % 2 == 0) ? xx['even'].push(number) : xx['odd'].push(number);
    }
    
  }

  //return xx.sort(xx['odd']).concat(xx.sort(xx['even']));
  
}

//======================
