const scores = [10, 20, 30, 40, 50, 60, 70, 80, 55, 85, 96, 90];

//function is to find out how many numbers are greater than 40
//the difference is reduce function can a variable that can contain numbers or more aka accumulator

const resultReducted = scores.reduce((accumulator, score) => {
  if (score > 40) {
    accumulator++;
  }
  return accumulator;
}, 0);

console.log(resultReducted);

const nintendoScores = [
  { player: "Mario", score: 50 },
  { player: "yoshi", score: 60 },
  { player: "Mario", score: 25 },
  { player: "yoshi", score: 100 },
  { player: "babyBee", score: 60 },
  { player: "crystal", score: 55 },
  { player: "babyBee", score: 70 },
];

const yoshiScores = nintendoScores.reduce((accumulator, current) => {
  if (current.player == "yoshi") {
    accumulator += current.score;
  }
  return accumulator;
}, 0);

console.log(yoshiScores);

//more practise

const marioScores = nintendoScores.reduce((accumulator, current) => {
  if (current.player == "Mario") {
    accumulator += current.score;
  }
  return accumulator;
}, 0);

console.log(marioScores);

//Code with Mosh https://www.youtube.com/watch?v=g1C40tDP0Bk&t=5s
const number = [1, 4, 6, 8, 10];
let sum = 0;
for (let num of number) sum += num;
console.log(sum);
const reducer = number.reduce((accumulator, currentValue) => {
  accumulator += currentValue;
  return accumulator;
}, 0);
console.log(reducer);

//Fireship - Array Reduce in 100 seconds https://www.youtube.com/watch?v=tVCYa_bnITg
//A Loop with a memory

const orders = [
  { id: "🥇", price: 8.0 },
  { id: "🥛", price: 5.0 },
  { id: "🍨", price: 11.0 },
];

const totalAmount = orders.reduce((accumulator, currentValue) => {
  accumulator += currentValue.price;
  return accumulator;
}, 0);

console.log(totalAmount); //24

const totalAmount1 = orders.reduce((accumulator, currentValue) => {
  if (currentValue.price > 5) {
    accumulator += currentValue.price;
  }
  return accumulator;
}, 0);

console.log(totalAmount1);

//All Things Javascript -- The magic of reduce https://www.youtube.com/watch?v=kC3AasLEuBA

const totalPrice = orders.reduce(
  (accumulator, currentValue) => (accumulator += currentValue.price),
  0
);
console.log(totalPrice);

const minMax = scores.reduce(
  (accumulator, currentValue) => [
    Math.min(accumulator[0], currentValue), //Math.min() returns the lowest-valued number passed into it,
    Math.max(accumulator[1], currentValue), //Math.max()  returns the largest of the numbers given as input parameters,
  ],
  [100, 0] //intialised value
);

//for practice and understanding typing out : Complicated
const maxMin = scores.reduce(
  (accumulator, currentValue) => [
    Math.max(accumulator[0], currentValue),
    Math.min(accumulator[1], currentValue),
  ],
  [0, 100]
);
console.log(maxMin);
console.log(minMax);
// Leigh Halliday 29.3K subscribers Reduce: 10 Different Examples. JavaScript Fundamentals. https://www.youtube.com/watch?v=NiLUGy1Mh4U
