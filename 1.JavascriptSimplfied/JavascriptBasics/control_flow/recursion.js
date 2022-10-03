function recursivePrint(number) {
  if (number < 0) return
  console.log('Lesser than 0', number)
  recursivePrint(number - 1)
}

recursivePrint(10)

function reversedPrint(number) {
  if (number > 10) return
  console.log('Greater than 10', number)
  reversedPrint(number + 1)
}

reversedPrint(0)

function printName(name) {
  name = name || 'default'
  console.log(name)
}
printName()

cat = {
  name: 'kitty',
  favoriteFood: 'salmon'
}

console.log(cat && cat.name && cat.favoriteFood);

