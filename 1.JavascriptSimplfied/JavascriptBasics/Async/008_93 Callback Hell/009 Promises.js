// const getTodos = (resource, callback) => {
//   const request = new XMLHttpRequest()

//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status == 404) {
//       const data = JSON.parse(request.responseText)
//       callback(undefined, data)
//     } else if (request.readyState === 4) {
//       callback("Error 4", undefined)
//     }
//   })
//   request.open("GET", resource)
//   request.send()
// }

// getTodos("json/luigi.json", (err, data) => {
//   console.log(data)
//   getTodos("json/mario.json", (err, data) => {
//     console.log(data)
//     getTodos("json/shaun.json")
//     console.log(data)
//   })
// })

// promise example XXX Self Discovery
// Two outcome Resolve/Reject

// const getTodos = (resource, callback) => {
//   const request = new XMLHttpRequest()

//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//       const data = JSON.parse(request.responseText)
//       callback(undefined, data)
//     } else if (request.readyState === 4) {
//       callback("Error 404", undefined)
//     }
//   })
//   request.open("GET", resource)
//   request.send()
// }

// getTodos("json/luigi.json", (err, data) => {
//   console.log(data)
// })

// const getSomething = () => {
//   return new Promise(resolve, reject) => {
//     //fetch getSomething
//     resolve('some data')
//     //reject some data
//   }
// }

// const tryingPromise = (resource, callback) => {
//   return new Promise(resolve, reject) {

//     const request = new XMLHttpRequest();
//     request.open('GET', resource)
//     request.send()
//     request.addEventListener('readystatechange', () => {
//       if (request.readyState === 4 && request.status === 404) {
//         const data = JSON.parse(request.responseText)
//         resolve(undefined, data)
//       } else if (request.readyState === 4 ) {
//         reject('Error 404', undefined)
//       }
//     })

//   }
// }

// tryingPromise('json/mario.json' (err, data) => {
//   console.log(err, data);
// })

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     resolve("some data")
//     // reject('some error')
//   })
// }

// getSomething().then((data) => {
//   console.log(data)
// })

// const getTodos = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText)
//         resolve(data)
//       } else if (request.readyState === 4) {
//         reject("error getting resource")
//       }
//     })
//     request.open("GET", resource)
//     request.send()
//   })
// }

// getTodos("json/luigi.json")
//   .then((data) => {
//     console.log("promise resolved: ", data)
//   })
//   .catch((err) => {
//     console.log("promise rejected: ", err)
//   })

// getTodos("json/luigi.json"),
//   then((data) => {
//     console.log("promise resolve: ", data)
//   }).catch((err) => {
//     console.log("promise rejected: ", err)
//   })

// fetch('todos/luigi.json').then((response) => {
//   console.log('resolved', response);
//   return response.json();
// }).catch((err) => {
//   console.log('rejected', err);
// })

// fetch(resource).then((response) => {
//   console.log(`resolved : ${response}`)
//   return response.JSON();
// }).catch((err) => {
//   console.log(`rejected:  ${err}`);
// })

fetch(resources).then((response) => {
  return response.json()
}).catch((err) => {
  console.log(err);
})

fetch(resources).then((response) => {
  return response.json();
}).catch((err) => {
})