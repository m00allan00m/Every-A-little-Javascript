//what is recursion

// function printNumber(number) {
//   if (number > 10) return
//   console.log(number)
//   printNumber(number + 1)
// }

// printNumber(1)

//function expression can include name which is useful for recursion

// const f = function fact(x) {
//   if (x <= 1) return 1  //return is a termination condition
//   else return x * fact(x - 1) //5 * (5-1 = 4) 5 //recursion function call itself
// }

// console.log(f(1));
//Decomposing Recursion
//a recursion function calls itself
//a recusive function has 2 parts - a termination condition (base case) and Recursive case

// factorial 5 is 5x5 5x4 5x3 5x2 5x1
// function fact(num) {
//   if (num <= 1) return 1
//   else return num * fact(num - 1)
// }
// console.log(fact(5));

// function printNumber(number) {
//   if (number > 10) return `over 10` //a recusive function has 2 parts - a termination condition
//   console.log(number)
//   printNumber(number + 1) //a recursion function calls itself
// }
// console.log(printNumber(12))

// function printNumber(num) {
//   if (num > 10) return `num is larger than 10 : unable to compute`
//   console.log(num);
//   printNumber(num + 1)
// }
// console.log(printNumber(1));
//https://www.youtube.com/watch?v=py7ZWFjrwEs Understanding Recursion: A JavaScript Example

// const factorial = function fact(num) {
//   if (num === 1) return 1
//   return num * fact(num - 1)
// }

// let factorial5 = factorial(5)
// console.log(factorial5);

//illustrating recursion
/* 5*factorial(4)
5*factorial(3)
5*factorial(2)
5*factorial(1)
//reverse execution
5*4*3*2*1 1
5*4*3*2   1*  2 2
5*4*3     2*  3 6
5*4       6*  4 24
5         25* 5 120
 */

function countdown(n) {
  for (let i = n; i < 0; i++) {
    console.log(i)
  }
  console.log(`hooray`)
}

countdown(10)
