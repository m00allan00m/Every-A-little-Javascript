printName = (name) => console.log(name)
printName("Hello")

let printName2 = (name, age) => console.log(name)
printName2("Allan", 6)

let printHi = (name) => `Hi ${name}`

console.log(printHi("Allan"))

function func(x, cb) {
  cb(x)
}

func(10, (variable) => console.log("Hello World"))
 