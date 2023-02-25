console.log("ashish");

 /*
 
 var let and const
 1) var can be updated and redeclared let can only be updated but not redeclared and const none of the two.
 var is globally scoped while let and const are block scoped.

*/

/*
Primitive data types and objects
There are 7 primitive data types in javascript
Null,number,string,symbol,undefined,boolean,bigint

*/

// Objects are inthe form of key value pair seperated by comma.
const Book = {
    name: "Subtle art of not giving fukk",
    price:"200"
}
console.log(Book);

var a = "Ashish";
var b=3;
console.log(a+b);
console.log(typeof(a)); 

 var name = "ashish";
 name="as";
 console.log(name);

//  Javascript ternary operator
// condition ? exp1 : exp2

let age =19;
console.log( (age>18)? "YES ELIGIBLE": "NOT");
// console.log(age);
let number=4;
console.log((number%2==0||number%3==0)? "divisible":"Not");
