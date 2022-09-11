const number = [1, 6, 7, 9, 10, 20, 22, 35]

const copiedNum = [...number]
const newNumbers = number

console.log(newNumbers)
console.log(copiedNum)
console.log(number);

console.log(newNumbers === copiedNum);

console.log(number === copiedNum);

console.log(number === newNumbers);


