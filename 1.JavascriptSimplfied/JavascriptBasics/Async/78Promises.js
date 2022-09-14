const fetchUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("[Now we have the user]")
    // resolve({ username = "Micheal" })
  }, 2000)
})

fetchUser
.then((user) => console.log(user.username))
.catch(error) => console.log(error);