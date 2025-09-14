const products = [
  { name: "redmi", brand: "xiaomi", price: 30000, color: "black" },
  { name: "sam", brand: "sasmsung", price: 50000, color: "white" },
  { name: "apple", brand: "apple", price: 45000, color: "titaniam white" },
  { name: "realme", brand: "realmi", price: 20000, color: "blue" },
  { name: "vivo", brand: "vivo", price: 15000, color: "pink" },
];

// const result = products.map(product => product.price);
// console.log(result);

// . loop

// products.forEach(product = console.log(product));

// const result = products.filter(product => product.brand === "apple");
// console.log(result);

// const result = products.filter(product => product.price => 5000)
// console.log(result);

const result = products.find((product) => product.name === "apple");
console.log(result);
