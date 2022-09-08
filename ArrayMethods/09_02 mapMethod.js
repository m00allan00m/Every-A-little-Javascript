const prices = [20, 10, 30, 25, 40, 80, 5, 15];

const salePrices = prices.map((price) => {
  return price * 2;
});
//Maps out indivdually all the items and performs the given operation.

console.log(salePrices); //[40,20,60,50,80,160,10,30]

const products = [
  { name: "gold star", price: 20 },
  { name: "mushroom", price: 40 },
  { name: "green shells", price: 30 },
  { name: "banana skin", price: 30 },
  { name: "red shell", price: 10 },
];

const productDiscount = products.map((product) => {
  if (product.price > 20) {
    //forgot to include .price after product : wasted 3mins to solve this error
    return { name: product.name, price: product.price / 2 }; //tried to figure out on my own : wasted 8mins | this is pattern I need to remember
  }
});

console.log(productDiscount);
//after printing to console log I notice that the array productDiscount contain undefined : does this mean that is a non-destructive array method.

const tryFilterMethod = products.filter((product) => {
  if (product.price > 20) {
    return { name: product.name, price: product.price / 2 }; //The divison operation is not working in case of filther
  } //just returns filtered
});

const tryFilterWith = products.filter((product) => {
  if (product.price > 20 ? product.price / 2 : 0) {
    //ternary operation - not working
    return { name: product.name, price: product.price }; //The divison operation is not working in case of filther
  }
});

console.log(tryFilterMethod);
console.log(tryFilterWith);

//map first then filter
const maybeCombine2Methods1 = products
  .map((product) => {
    if (product.price > 20) {
      return { name: product.name, price: product.price / 2 };
    }
  })
  .filter((product) => product !== undefined);

//note to self need more understand on usage !equal to derive a solution:

console.log(maybeCombine2Methods1);

//filter first then map : I like this method seems cleaner -> maybe because not 100% certain with filtering undefine

const maybeCombine2Methods2 = products
  .filter((product) => {
    return product.price > 20;
  })
  .map((product) => {
    return { name: product.name, price: product.price / 2 };
  });

console.log(maybeCombine2Methods2);

const maybeCombine2Methods3 = products
  .map((product) => {
    if (product.price > 20) {
      return { name: product.name, price: product.price / 2 };
    }
  })
  .filter(Boolean);

//this makes it easy!
console.log(maybeCombine2Methods3);
