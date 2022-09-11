const scores = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const filteredScores = scores.filter((score) => score > 50);
//This takes a callback function
//This Array method does not change the scores array, it creates a new Array
//Array Name > dot notation > ((callback) => argument)
console.log(filteredScores);
// [60,70,80,90] //return all arguments that are truth
scores.filter((score) => score < 50);
console.log(scores);

const users = [
  { name: "shaun", premium: true },
  { name: "yoshi", premium: false },
  { name: "mario", premium: false },
  { name: "chun-li", premium: true },
];

const premiumUsers = users.filter((user) => user.premium);
console.log(premiumUsers);
const nonPremiumUsers = users.filter((user) => user.premium === false);
console.log(nonPremiumUsers);
