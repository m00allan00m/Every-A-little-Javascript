//Asynchronous Code
//Some lines of code take time to\u{1F3BD}These task are run in the background
// while Javascript engine keeps executing other lines of code
//executing other lines of code
//when the result of asynchrouns task gets avialable is then used in the program

const functionOne = () => {
  console.log(`Function one`)

  functionTwo()
  console.log(`Function One, Part 2`)
}

const functionTwo = () => {
  setTimeout(() => {
    console.log(`Function Two`)
  }, 2000)
}

functionOne()

//Asynchronous iteration

const iterable = [1, 2, 3]

async function test() {
  for await (const value of iterable) {
    console.log(`${value}`)
  }
}
test()
