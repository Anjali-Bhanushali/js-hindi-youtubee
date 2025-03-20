"use strict"; //treat all js code as newer version

//alert(3+3)    //we are using node.js, not browser

let name = "Anjali"
let age = 20
let isLoggedIn = false

//number => 2 to the power 53
//bigint
//string => " "
//boolean => true or false
//null => null value or standalone value
//undefined => undefined variable
// symobol => unique


//object => {}
//array => []
//function => function(){}

/************************ typeof ************************/

console.log(typeof name);   //string
console.log(typeof null);   //object
/*
    typeof "John"                 // Returns "string"
    typeof 3.14                   // Returns "number"
    typeof NaN                    // Returns "number"
    typeof false                  // Returns "boolean"
    typeof [1,2,3,4]              // Returns "object"    //In JavaScript, arrays are technically objects, so typeof always returns "object" for arrays.
    typeof {name:'John', age:34}  // Returns "object"
    typeof new Date()             // Returns "object"
    typeof function () {}         // Returns "function"
    typeof myCar                  // Returns "undefined" *
    typeof null                   // Returns "object"
*/

/************************* TYPES OF DATATYPES ****************************/

// JavaScript is a dynamic language and not static, 
// which means that variables can hold values of 
// different types during runtime.
//  Unlike languages such as Typescript or Java,
//   you don't need to declare the data type of a
//    variable explicitly.

/*
    1. Primitive
        7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

    2. Reference (Non Primitive)
        Array, Objects, Functions
*/

const id = Symbol('123')
const anotherId = Symbol('123')
// In JavaScript, Symbol values are unique, even if they have the same description
console.log(id===anotherId);     //false

const bigNumber = 34567897815566558n    //bigInt datatype

/************************ Array, Objects, Functions **************************/

//datatype of array object  is object except function whose datatype is function


/* 
    Array:
    const cricketers = ["Virat", "Dhoni", "Rahul"];

    Object:
    let myObj = {
        name: "Sheel",
        age: 20,
    }

    Function:
    const myFunction = function(){
        console.log("Hello Anjali")
    }
*/