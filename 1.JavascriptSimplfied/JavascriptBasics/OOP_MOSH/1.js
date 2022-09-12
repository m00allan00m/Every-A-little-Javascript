//Code With Mosh OOP
// console.log(`Creating Objects`)
// console.log(`This is an example of an Object Literal`)

// const circle = {
//   height: "100px",
//   width: "100px", //Properties
//   draw: function () {
//     console.log(`This is a method`)
//     return this.height * this.width
//   },
// }
// console.log(`Objects are essentially key/value pairs`)

// console.log(`Factories and Constructor`)
// console.log(`This is a Factory Function`)

// function FactoriesFunction() {
//   return {
//     radius: 1,
//     draw: function () {
//       return `draw`
//     },
//   }
// }

// const recieveFactoriesFunction = FactoriesFunction()
// console.log(recieveFactoriesFunction)
// const factorise = recieveFactoriesFunction.draw()
// console.log(recieveFactoriesFunction.radius)
// console.log(factorise)
// // console.log(`This is a constructor function`);

// function ConstructorFunction(radius) {
//   this.radius = 1
//   this.draw = function () {
//     return `draw`
//   }
// }
// const assignedConstructorFunction = new ConstructorFunction(99)
// const valueOfFunctionDraw = assignedConstructorFunction.draw()
// console.log(valueOfFunctionDraw)

// const constructFunctionCircle = Circle(1) with new keyword this is constructed in Windows Object

// const circleDrawn = circleDrawn.draw(1)
// console.log(circleDrawn)

// console.log(`Primitives and Reference Types`)
// console.log(`Working Properties`)
// console.log(`Private Properties`);
// console.log(`Getters/Setters`);

// let x = {}

function Constructed(radius) {
  this.radius = 1
  this.draw = function () {
    console.log(`draw`)
  }
}

let construct = new Constructed()

// console.log(`Example Javascript Object Constructor`)
// console.log(`Good practise to uppercase the name`)

// function personConstructor(firstname, lastname, age, phone, email) {
//   this.firstname = firstname
//   this.lastname = lastname
//   this.age = age
//   this.phone = phone
//   this.email = email
// }

// const Circle = new Function(
//   "radius",
//   `
//   this.radius = radius;
//   this.draw = function() {
//     console.log("draw");
//   }
// `
// )

// const newCircle = new Circle(1)

function Circle(radius) {
  this.radius = radius
  this.draw = function () {}
  console.log(`draw`)
}

const circle = new Circle(10)



circle.location = {x: 1}
circle["location"] = {x: 2}


const propertyName = "location" //this is a variable
circle[propertyName] = {x: 300} //this variable is being used

console.log(circle['location']);


