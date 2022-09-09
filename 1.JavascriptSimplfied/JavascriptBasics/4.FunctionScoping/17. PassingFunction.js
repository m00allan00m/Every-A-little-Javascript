//This is an important lesson - first class function
//It is something I do not quite fully understand - This will be my attempt to relearn

// function sayHello(variable) {
//   console.log(variable)
// }
// recieves an input and outputs in console

// function passFunction(parameter) {
//   return parameter(`Hello World`)
// }

//recieves an input of a function name and output function name with ('Hello World')
//Dont see it as a function - look at it as a value or what it returns
// passFunction(sayHello)
// function callbackSum(a, b, callback) {
//   callback(a + b)
// }
// function handleSum(parameter) {
//   console.log(parameter)
// }
// callbackSum(2, 3, handleSum)

// //

// function helloName(firstname, lastname, callback) {
//   callback(`${firstname}, ${lastname}`)
// }
// function helloNameHandler(parameter) {
//   console.log(`Hello ${parameter}`)
// }
// helloName("Allan", "Moo", helloNameHandler)

// helloName
//https://www.youtube.com/watch?v=cNjIUSDnb9k by Code with Ania Kubow

// const button = document.querySelector("button")
//querySelector is a method of document object: querySelector is grabbing the value "button"

/* function toggle() {
   button.classList.toggle('altColor')
    method toggle is grabbing the .altColor value

  .altColor: {
    color: #333

    
    button.addEventListener('click', toggle) toggle without () is a function waiting to be called
                                  //toggle() is executed immediately and it is not a callback
  example of callback functions
  button.addEventListener('click', toggle) //This is a callback
  button.addEventListener('click' function( { //this is a callback
    button.classList.toggle('altColor)
  }))

  button.addEventListener('click, () => {  //This is a callback
    button.classlist.toggle('altColor')
  })
  
} */

// function first() {
//   console.log("Allan")
// }
// function second() {
//   console.log("Moo")
// }

// setTimeout(first, 5000) //callback function
// setTimeout(second, 10000)

// function firstAction() {
//   console.log("Hello")
//   setTimeout(secondAction, 2000)
// }
//
//still dont quite understand 😟
//JavaScript Callbacks Explained in 5 Minutes (Essential for asynchronous code!)
//James Quick  https://www.youtube.com/watch?v=kz_vwAF4NHI

// setTimeout(() => {
//   console.log("Hello")
// }, 5000)

// const logHello = function () {
//   console.log("Hello 2")
// }

// setTimeout(logHello, 5000)
/* 
const names = ["james", "jess", "lily", "sevy"]

names.forEach((name) => console.log(name))
//need to revisit
//Async functions
const loadPokemon = (id, cb) => {
  fetch("https://pokeapi.co/api/v2/pokemon/${id}")
    .then((res) => res.json())
    .then((data) => {
      cb(data)
    })
}

loadPokemon(56, (pokemon) => {
  console.log(pokemon)
})
 */

//https://www.youtube.com/watch?v=Nau-iEEgEoM
//All things JavaScript - Understanding JavaScript Callbacks

//How do first class functions relate to higher order function and why are both concepts necessary?
//Higer order functions are functions that operate on other function by\u{1F9BB}taking tnem as arguments
//or returning them. The fact that Javascript supports first-class function makes it possible
// to create higher order function

// let logCall = function () {
//   console.log("Outside function setTimeout")
// }

// setTimeout(logCall, 3000) //this is a higher order function //Also event?

// setTimeout(() => {
//   console.log(`Inside arrow function callback`)
// }, 3000)

// setTimeout(function () {
//   console.log(`Inside function`)
// }, 3000)

let btn = document.querySelector("#item")
btn.addEventListener("click", function (e) {
  console.log(`The button was clicked`)
})
