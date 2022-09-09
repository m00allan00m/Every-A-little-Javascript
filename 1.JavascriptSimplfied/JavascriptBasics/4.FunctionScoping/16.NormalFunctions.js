//Why am I learning this - too simple but finding if I have any gaps in my basics
let sayHello = "Hello"
let sayHi = "Hi"

function greeting(x) {
  return x
}

let greetHello = greeting(sayHello)
console.log(greetHello)

let greetHi = greeting(sayHi)
console.log(greetHi)

function printName() {
  console.log("Allan")
}

printName()

function sum(a, b) {
  console.log(a + b)
}

function anySum(...arg) {
  return arg.reduce((accumulator, currentVal) => (accumulator += currentVal))
}

console.log(anySum(1, 2, 3, 4, 5, 6, 7, 8))
