/* let a = 1

function print() {
  console.log(a)
  function print2() {
    console.log(a)
    console.log(b)
  }
  print2()
  print2()
}

a = 10
let b = "Happy" //prints the latest value assignment
print()


//  */

// function print(variable) {
//   let c = 3
//   return function print2(variable2) {
//     let d = 4
//     console.log(variable) //1
//     console.log(variable2) //2
//     console.log(c)
//     console.log(d)
//     // console.log(e) //Cannot access
//   }
// }
// let a = print(1)

// a(2)

// // let e = 5

// const outer = () => {
//   const outerVar = "Hello"
//   const inner = () => {
//     const innerVar = "Hi"
//     console.log(outerVar, innerVar)
//   }
//   inner()
//   return inner()
// }

// const innerFn = outer()
// innerFn()

// // // inner() undefined! inner() is not in the global context
// //inner() is in the scope of outer function

// function init() {
//   const hobby = "Learning Javascript" //in outer block    scope : this is available
//   const displayHobby = () => {
//     //inner function
//     console.log(hobby) //
//   }
//   displayHobby() //calling inner function from the outer function
// }

// init()

//https://www.youtube.com/watch?v=vKJpN5FAeF4
// Closures Explained in 100 Seconds // Tricky JavaScript Interview Prep

// function outer() {
//   let state = "🐇"
//   function inner() {
//     return `Hello ${state}`
//   }
//   return inner
// }

const months = ["Jan", "Feb", "March", "April", "June", "July"]
months.push("August")

for (let i = 0; i < months.length; i++) {
  console.log(months[i])
}
