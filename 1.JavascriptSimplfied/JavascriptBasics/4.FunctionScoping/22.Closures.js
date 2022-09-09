/* let a = 1

function print() {
  console.log(a)
  function print2() {
    console.log(a)
    console.log(b)
  }
  print2()
  print2()
}

a = 10
let b = "Happy" //prints the latest value assignment
print()


 */

function print(variable) {
  let c = 3
  return function print2(variable2) {
    let d = 4
    console.log(variable) //1
    console.log(variable2) //2
    console.log(c)
    console.log(d)
    // console.log(e) //Cannot access
  }
}
let a = print(1)

a(2)

// let e = 5
