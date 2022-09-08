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

const tryFiltherMethod = products.filter((product) => {
  if (product.price > 20) {
    return { name: product.name, price: product.price / 2 }; //The divison operation is not working in case of filther
  }
});

const tryFiltherWith = products.filter((product) => {
  if (product.price > 20 ? product.price / 2 : "") {
    return { name: product.name, price: product.price }; //The divison operation is not working in case of filther
  }
});

console.log(tryFiltherMethod);
console.log(tryFiltherWith);
