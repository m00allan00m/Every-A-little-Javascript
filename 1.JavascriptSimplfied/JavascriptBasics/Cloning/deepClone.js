const person = {
  firstname: "Allan",
  lastname: "Moo",
  car: {
    brand: 'BMW',
    color: 'Blue',
    wheels: 4
  }
}

const newPerson = {...person}, {person...car}
console.log(newPerson);
