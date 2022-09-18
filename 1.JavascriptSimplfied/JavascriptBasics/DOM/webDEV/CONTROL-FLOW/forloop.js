const person = {
  name: 'Allan',
  friend: {
    name: 'Joe',
    friend: {
      name: 'Jake',
      friend: {
        name: 'Jenny',
        friend: {
          name: 'Peter',
        },
      },
    },
  },
}
console.log(person.name);
console.log(person.friend.name);

let currentPerson = person
while (currentPerson != null) {
  console.log(currentPerson.name);
  currentPerson = currentPerson.friend
}

// console.log(person.name)
// console.log(person.friend.name)

// let currentPerson = person
// let personFriend = person.friend
// while (currentPerson != null) {
//   console.log(currentPerson.name));
//                                     //1print > person.name friend is not included in first iteration
//                                   //L24 currentPerson is person.friend and new dot notation to access name is introduced
//   currentPerson = currentPerson.friend //person.friend joe  loops person.friend Jake loops person.friend
// }

// for (let i = 0; i < 5; i++) {
//   console.log(` H${i}`)
// }
// const arr = ['a', 'b', 'c']

// for(let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach(i => {
//   console.log(i);
// })

// for (var value in arr) {  ///for in loop > interested only in key
//   console.log(value);
//   console.log(arr[value]);
// }

//w3 school https://www.w3schools.com/js/tryit.asp?filename=tryjs_object_for_in
// const person = { fname: 'John', lname: 'Doe', age: 25 }
// let text = ''

// for (let i in person) {
//   console.log(i)
//   console.log(person[i])
//   text += ` ${person[i]}`
// }
// console.log(text)
// console.log(typeof text)

// const cars = ["BMW", "Volvo", "Mini"];

// for (let x of cars ) {  //logs the value let x is not a number
//   console.log(x);
// }

// let language = "JavaScript";
// let text = ''
// for (let x of language) {
//   text += ` ${x}`
// }
// console.log(text);
// let hungry = true

// while (hungry) {
//   console.log('I am hungry')
//   hungry = false
// }
// let text = 0
// let i = 0
// while (i < 10) {
//   text += i + i
//   console.log(text);
//   i++
// }
// console.log(text);

// const cars = ['BMW', 'Volvo', 'Saab', 'Ford']
// let i = 0
// let text = ''
// let textArray = ''
// while (i < cars.length) {
//   text += ` ${cars[i]}`
//   textArray += cars[i]
//   i++
// }
// let textArray1 = text.split(" ")
// console.log(textArray1);
// console.log(textArray1.shift());
// console.log(textArray1);
// console.log(text);
// console.log(textArray)
