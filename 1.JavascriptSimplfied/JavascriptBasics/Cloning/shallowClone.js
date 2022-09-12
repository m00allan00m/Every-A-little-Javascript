const number = [1, 6, 7, 9, 10, 20, 22, 35]
const words = ["Micheal Jordan", "Scottie Pippen", "Dennis Rodman"]

const copiedNum = [...number]
const newNumbers = number //Ref
const sliceClone = number.slice()
const stringifyClone = JSON.parse(JSON.stringify(words))
const objectAssignClone = Object.assign([], words)
//1. npm i lodash //no idea what is lodash-
//2. 01>const _=required('lodash);
//for deep clone  ---- let developer2 = _.cloneDeep(developer1);

console.log(objectAssignClone)
console.log(stringifyClone)
console.log(newNumbers)
console.log(copiedNum)
console.log(number)
console.log(sliceClone)

console.log(sliceClone === number)
console.log(newNumbers === copiedNum)
console.log(number === copiedNum)
console.log(words === stringifyClone)

console.log(words === objectAssignClone)
objectAssignClone.push("Derrick Rose")
console.log(number === newNumbers)
