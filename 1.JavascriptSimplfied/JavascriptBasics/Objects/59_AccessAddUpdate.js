const person = {}

person.firstname = "Allan"
person.lastname = "Moo"
person.run = function () {
  console.log("I can run")
}

console.log(person)
person.run()

person.car = {
  brand: "Toyota",
  wheel: "4WD",
  fuelType: "Petrol",
  year: "2022",
  property: "age",
  mymethod: (number) => number * 5.5,
  startEngine: () => "Vrroom",
  testThis: function () {
    return this.brand
  },
}

//SQUARE BRACKET NOTATION/
const {car} = person

console.log(car.brand)
console.log(car.wheel)
console.log(car.year)
const calculate = car.mymethod(5)
console.log(calculate)
console.log(car.startEngine())
console.log(car.testThis())
console.log(car.testArrow());
