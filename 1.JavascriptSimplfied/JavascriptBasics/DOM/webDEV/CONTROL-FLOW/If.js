let user = true

const userlogged = user
  ? console.log(`user is logged in`)
  : console.log(`user is not logged in`)

if (user) console.log(`user is logged in `)
if (!user) console.log(`Please login`)

let welcome = ''
const welcomeUsingTernary = user ? 'Welcome 👍' : 'Please login 👎'
console.log(welcomeUsingTernary)

user
  ? (welcome = 'Welcome to moomooland')
  : (welcome = 'Please login to moomooland')
console.log(welcome)

if (user) {
  welcome = 'Welcome to moomooland'
} else {
  welcome = 'Please login to moomooland'
}
console.log(welcome)

// let userLogin = true

// function userLogged(status) {
//   if (status === true) {
//     userLogin = true
//   } else {
//     userLogin = false
//   }
// }

// userLogged(false)
// console.log(userLogin)

//Create a variable that contains an array

// const a = []

// if (a.length === 0) {
//   console.log(`empty`)
// } else if (a.lenght < 5) {
//   console.log(`small`)
// } else if (a.length < 10) {
//   console.log(`medium`)
// } else {
//   console.log(`large`)
// }
