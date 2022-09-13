const person = (firstname, lastname) => ({firstname, lastname})

const Allan = person("Allan", "Moo")
console.log(Allan.firstname)
console.log(Allan.lastname)

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
  }
}
const Elisa = new Person("Elisa", "Moo")
console.log(Elisa);