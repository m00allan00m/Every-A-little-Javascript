// const request = new XMLHttpRequest()

// request.addEventListener("readystatechange", () => {
//   if (request.readyState === 4) {
//     console.log(request.responseText)
//   }
// })

// request.open("GET", "https://jsonplaceholder.typicode.com/todos/1")
// request.send()

// const getTodos = () => {
//   const request = new XMLHttpRequest()
//   //This is a request object
//   request.open("GET", "https://jsonplaceholder.typicode.com/todos")
//   request.send()

//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//       console.log(request, request.responseText)
//     } else if (request.status === 404) {
//       console.log(`ALLAN Error 404`)
//     }
//   })
// }

const getTodos = (Callback) => {
  const request = new XMLHttpRequest()
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/1")
  request.send()

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(JSON.stringify(request.responseText))
      Callback(undefined, data)
      console.log(request, request.responseText)
    } else if (request.status === 404) {
      Callback("Could not fetch Data", undefined)
      console.log(request, request.responseText)
    }
  })
}

getTodos((err, data) => {
  if (err) {
    console.log(`Error 404 : Unable to retrieve data`)
  } else {
    console.log(data)
  }
})
