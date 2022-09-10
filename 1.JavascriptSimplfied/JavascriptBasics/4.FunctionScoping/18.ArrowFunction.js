// printName = (name) => console.log(name)
// printName("Hello")

// let printName2 = (name, age) => console.log(name)
// printName2("Allan", 6)

// let printHi = (name) => `Hi ${name}`

// console.log(printHi("Allan"))

// function func(x, cb) {
//   cb(x)
// }

// func(10, (variable) => console.log("Hello World"))

// All things javascript https://www.youtube.com/watch?v=dAAVtx-YW44
//Arrow functions and Lexical this binding
//arrow functions are good for callbacks and nested function
//because they carry on this from their closures.
//Not goof for constructor, methods(inheritance) , dynamic context

//BOOK: Javascript For Impatient Programmers
//Arrow function expressions are used especially as arguments of function callbacks
// and method calls:
// import * as assert from "assert/strict"

// const add2 = (a, b) => {
//   return a + b
// }
// assert.equal(add2(5, 2), 7)
// //here begins my rabbit hole what is assert? First encounter with this method/function

// console.log(add2(1, 2))
// const add3 = (a, b) => a + b

// var assert1 = require('assert');
// assert1(3 > 7);


