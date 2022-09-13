//Asynchronous Code

//setInterval

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
