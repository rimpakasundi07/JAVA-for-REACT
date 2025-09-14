// const person = {
//   name: "Rimpa",
//   age: 19,
//   friends: ["Raja", "Arghya", "Rudra"],
//   family: {
//     fathername: "Roky",
//     mothername: "Rupa",
//   },
// };

// const jsonData = JSON.stringify(person);
// ///// . console.log(jsonData);

// const planData = JSON.parse(jsonData);
// console.log(planData);
// ---------------------------------------------------->

// --      FETCH             **

// fetch("url")
//   .then(res > res.json())
//   .then((data) => console.log(""));

// ---------------------------------------------------->

// const person = {
//   name: "Rimpa",
//   age: 19,
//   friends: ["Raja", "Arghya", "Rudra"],
//   family: {
//     fathername: "Roky",
//     mothername: "Rupa",
//   },
// };

// const keys = Object.keys(person);

// const values = Object.values(person);
// console.log(values);

// ---------------------------------------------------->

const products = [
  { name: "redmi", brand: "xiaomi", price: 30000, color: "black" },
  { name: "sam", brand: "sasmsung", price: 50000, color: "white" },
  { name: "apple", brand: "apple", price: 45000, color: "titaniam white" },
  { name: "realme", brand: "realmi", price: 20000, color: "blue" },
  { name: "vivo", brand: "vivo", price: 15000, color: "pink" },
];

const newData = {
  name: "walton",
  brand: "walton",
  price: 30000,
  color: "Black",
};

const newArray = [...products, newData];
console.log(newArray);

const remainingProducts = products.filter((p) => p.brand !== "xiaomi");
console.log(remainingProducts);

const newArray2 = [...remainingProducts, newData];
console.log(newArray2);

// ---------------------------------------------------->
