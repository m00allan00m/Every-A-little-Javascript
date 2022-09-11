const array = [10, 2, 3, 4, 5, 6, 7, 8, 9]

//Array some
const lessThan5 = array.some((number) => number > 8)

console.log(lessThan5)


//Array every
const everyNumberLess5 = array.every((number) => number < 20)
console.log(everyNumberLess5)

const everyNumberMore1 = array.every((number) => number < 1)
console.log(everyNumberMore1);
