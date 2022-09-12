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

function FactoriesFunction() {
  return {
    radius: 1,
    draw: function () {
      return `draw`
    },
  }
}

const recieveFactoriesFunction = new FactoriesFunction()
console.log(recieveFactoriesFunction)
const factorise = recieveFactoriesFunction.draw()
console.log(recieveFactoriesFunction.radius)
console.log(factorise)
// console.log(`This is a constructor function`);

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
