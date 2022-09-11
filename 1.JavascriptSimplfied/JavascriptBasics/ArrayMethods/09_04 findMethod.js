const scores = [30, 5, 0, 40, 60, 10, 20, 70]

const findScore = scores.find((score) => {
  return score > 20
})
console.log(findScore)
