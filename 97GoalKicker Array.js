//There is two types of Array?? What? Yes! Array from Array.prototype and Array-like-Objects from Object.prototype
//The difference is Array-like-Objects cannot access common Array methods forEacH(), push(), map(), and slice()

const arrayLike = {
  0: 0,
  1: 1,
  2: 3,
  length: 3,
};
console.log(arrayLike.length); //3
// arrayLike.forEach((value) => {
//   value;
// }); //ERRORS
const realArray = Array.from(arrayLike);
realArray.forEach((value) => value);

console.log(realArray);
