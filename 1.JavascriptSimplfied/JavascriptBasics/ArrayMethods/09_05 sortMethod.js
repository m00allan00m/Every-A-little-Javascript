// const names = ["mario", "shaun", "chun-li", "yoshi", "luigi"]

// const newNames = names.sort()
// console.log(newNames)

// const numbers = [2, 5, 7, 98, 9, 4, 76, 37]

// const sortedNumbers = numbers.sort()

// console.log(sortedNumbers)

const players = [
  {name: "shaun", score: 20}, //[0] (0 + 1) changes to [2]
  //20 > 30 👎 30 > 20 👍 +1 [0+1]
  {name: "yoshi", score: 30}, //[1] (0 - 1) changes to [0]
  //30 > 23 👍 -1 [1-1]
  //current= [30, 20]
  {name: "mario", score: 23}, //[2] (+1) changes to [1]
  //current = []
  //20 > 23 👎 23 > 20 👍 +1 [1+1] shaun [2] -1 mario [1]
  //23 > 40 👎 40 > 23 👍 +1 []

  {name: "chun-li", score: 40},
  [3],
  //40 > 20 👍 -1 [3-1] = [2]
  //40 > 23 👍 -1 [2-1] = [1]
  //40 > 30 👍 -1 [1-1] = [0]
]

// const testSort = players.sort((a, b) => b.score - a.score)
// console.log(testSort)

// const sortedScores = players.sort((a, b) => {
//   if (a.score > b.score) {
//     return -1
//   } else if (b.score > a.score) {
//     return +1
//   }
//   return 0
// })

// console.log(sortedScores)

