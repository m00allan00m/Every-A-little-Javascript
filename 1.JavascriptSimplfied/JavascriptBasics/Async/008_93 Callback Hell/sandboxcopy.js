const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status == 404) {
      const data = JSON.parse(request.responseText)
      callback(undefined, data)
    } else if (request.readyState === 4) {
      callback("Error 4", undefined)
    }
  })
  request.open("GET", resource)
  request.send()
}

getTodos("json/luigi.json", (err, data) => {
  console.log(data)
  getTodos("json/mario.json", (err, data) => {
    console.log(data)
    getTodos("json/shaun.json")
    console.log(data)
  })
})
