// const fetchUserNonAsync = (username) => {
//   return {user: username};
// }

/* const fetchUser = (username, callback) => {
  console.log(`Fetching ...`)
  setTimeout(() => {
    
    console.log(`Entering`)

    callback({username})
  }, 2000)
}

fetchUser("Micheal", (user) => {
  console.log(user.username)
}) */

const fetchUser = (username, callback) => {
  setTimeout(() => {
    callback({username})
  }, 2000)
}

const fetchUserPhotos = (username, callback) => {
  setTimeout(() => {
    console.log(`Importing Photos for ${username}`)
    callback([`Photo1`, `Photo2`])
  }, 2000)
}

const fetchPhotoDetails = (username, callback) => {
  setTimeout(() => {
    console.log(`Photo Details`)
    callback(`Detail: XXXXXXXXX`)
  }, 2000)
}

fetchUser("Micheal", (user) => {
  console.log(`${user.username}`)

  fetchUserPhotos(user.username, (userPhotos) => {
    console.log(`Your Photos are ${userPhotos}`)

    fetchPhotoDetails(user.username, (userDetails) => {
      console.log(`Your Photo Details are ${userDetails}`)
    })
  })
})

//http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/

// var friends = ["Mike", "Stacy", "Andy", "Rick"]

// friends.forEach(function (eachName, index){
// console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick
// });
/* 
friends.forEach(function (names, index) {
  console.log(`${names} ${index + 1}`)
})

async function test() {
  for await (const friend of friends) {
    console.log(`ASYNC ${friend}`)
  }
}

 */
