const array1 = [1, 2, 3, 4]

const testArray = array1.includes("2")
console.log(testArray)

const pets = ["cat", "dog", "pig", "fish"]

console.log(pets.includes("cat"))

const books = ["Moby Dick", "The Great Gatsby"]

if books.includes("Moby Dick") {
  console.log("Hello Moby Dick")
};

if books.includes("The Great Gatsby") {
  console.log("Hello Great Gatsby")
};

if books.includes ("Nothing there") {
  console.log(" Opps nothing there")
}

const includeLord = books.some((book) => book === "Moby Dick")
const includeGreatGatsby = books.some((book) => book === "The Great Gatsby")

const includeBook = books.includes("Moby Dick")
console.log(includeBook)
