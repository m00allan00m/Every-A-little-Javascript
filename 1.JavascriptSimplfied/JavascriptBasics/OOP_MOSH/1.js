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
  this.draw = () => {
    return "Jello"
  }
}

const circle = new Circle(10)
console.log(`Enumerating Properties`)

for (let keys in circle) {
  if (typeof circle[keys] != "function") {
    console.log(keys, circle[keys])
  }
}

if ("draw" in circle) {
  console.log(` draw circle`)
}

const circleKeys = Object.keys(circle)
console.log(circleKeys)
console.log(`How to add and delete properties in the object`)
circle.locationX = {x: 1}
circle[`locationY`] = {y: 1}

delete circle.locationY
delete circle[`locationX`]

console.log(circle)

const circler = circle.draw()
console.log(typeof circle.draw)
console.log(circler)

const dog = {
  bark: "woof",
  favoriteFood: "Purina Dog Food",
  run: function () {
    return "🌈"
  },
  reactionToFood: function () {
    return `🐶 ${this.bark} ${this.bark}, wags his tail endlessly at ${this.favoriteFood}`
  },
}

const seeDogRunning = dog.run()
const foodReact = dog.reactionToFood()
console.log(seeDogRunning)
console.log(foodReact)

const letThisBeObjectify = new Object()
console.log(typeof letThisBeObjectify)
const letThisAlsoBeObject = {}
console.log(typeof letThisAlsoBeObject)

const employees = {
  boss: "micheal",
  accountant: "tim",
  driver: "jim",
}

const retrieveKeysfrom = Object.keys(employees)
console.log(retrieveKeysfrom)
const retrieveValuefrom = Object.values(employees)
console.log(retrieveValuefrom)
const retrieveEnteries = Object.entries(employees)
console.log(retrieveEnteries)

const enteriesArray = []

retrieveEnteries.forEach((entry) => {
  let keys = entry[1]
  let values = entry[0]
})

console.log(enteriesArray)
