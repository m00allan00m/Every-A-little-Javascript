const scores = [10, 20, 30, 40, 50, 60, 70, 80];

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

const number = [1, 4, 6, 8, 10];
let sum = 0;
for (let num of number) {
  sum += num;
  return sum;
}

console.log(sum);

const reducer = sum.reduce((accumulator, currentValue) => {
  accumulator += currentValue;
  return accumulator;
}, 0);

console.log(reducer);
//Code with Mosh https://www.youtube.com/watch?v=g1C40tDP0Bk&t=5s
