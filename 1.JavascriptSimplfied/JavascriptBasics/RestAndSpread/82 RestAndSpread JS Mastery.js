// const add = (a, b) => {
//   return a + b;
// };
// --Rest--
// const addUsing = (...args) => {
//   return args.reduce(
//     (accumulator, currentValue) => (accumulator += currentValue)
//   );
// };

// console.log(addUsing(5, 6, 8, 7, 9, 7, 8, 10, 11, 33));
// console.log(add(1, 1, 1, 1, 1)); //not working

//--Spread Operator
// const number = [1, 2, 3, 4, 5, 6, 7];
// const numberCopyArray = [...number];
// console.log(...number);

//In the topic of spread operator - I discovered (deep and shallow copy)
//https://www.youtube.com/watch?v=EeZBKv34mm4  by  Beau teaches JavaScript
//Let try to learn Things
// const original = [true, true, undefined, false, null];
//using Slice method
// const copySlice = original.slice(0);
// console.log(copySlice);
// console.log(typeof copySlice);

// const copySpread = [...original];
// console.log(copySpread);

//Whenever you have objects or arrays in your array - You need to do deep copying
//Arrays or objects in a Array are usually pointers
// const deepArray = [["freeCodeCamp"]];
// var shallowCopy = deepArray.slice(0);

// shallowCopy[0].push("is great");
// console.log(deepArray[0], shallowCopy[0]);
// console.log(deepArray, typeof deepArray);
// console.log(shallowCopy, typeof shallowCopy);

// console.log(deepArray === shallowCopy);

// var deepCopy = JSON.parse(JSON.stringify(deepArray));
// console.log(deepCopy);

// deepCopy[0].push("is great");
// console.log(deepCopy);

// var deepCopyTest = deepCopy;
// console.log(deepCopy);
// deepCopyTest[0].push("Hello");
// console.log(deepCopyTest);
// console.log(deepCopy);
//https://www.youtube.com/watch?v=E3dboLSBeJc by Strong Coffee Code

// let developer1 = { name: "00MAllanM00" };
// let developer2 = developer1; //this copy is a reference to a memory address = shallow copying
// developer2.name = "Allan M00"; //referencing developer1 memory address
// developer2 = { name: "Allan M00" }; //direct assignment - pushing slicing makes a shallow copy

// let developer2 = Object.assign({}, developer1);
// let developer3 = Object.assign([], developer1);
// let developer4 = JSON.parse(JSON.stringify(developer1)); //works well until you have a nested function in Object
//This works - wow!
// doesnt seem to behave  the same way as the video. Has Javascript implemented new changes with regards of copying??
//developer2 = { name: "Allan M00" }; reacts diffferently from pushing and slicing - this is a reassignment of values

// console.log(developer1);
// console.log(developer2);
// console.log(developer3);
// console.log(developer4);

// console.log(developer1 === developer2);
// console.log(developer2 === developer3);
// console.log(developer3 === developer4);

//best final solution for deepcopying by Strong Coffee Code
//if your copy has nested function/methods example: Date() JSON.parse(JSON.stringify(parameters))
//will covert code to strings and remove the working function or Date Objects.

//1. npm i lodash //no idea what is lodash-
//2. 01>const _=required('lodash);
// let developer2 = JSON.parse(JSON.stringify(developer1));
// let developer2 = _.cloneDeep(developer1);

/* 
What is the most efficient way to deep clone an object in JavaScript?
According to the benchmark test, the fastest way to deep clone an object in javascript is to use lodash deep clone function since Object. assign supports only shallow copy. */

//Side Notes:
/* What is shallow copy and deep copy in angular?
shallow copying. */

/* A deep copy means that all of the values of the new variable are copied and disconnected from the original variable. A shallow copy means that certain (sub-)values are still connected to the original variable. */

