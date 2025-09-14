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

const person = {
  name: "Rimpa",
  age: 19,
  friends: ["Raja", "Arghya", "Rudra"],
  family: {
    fathername: "Roky",
    mothername: "Rupa",
  },
};

const keys = Object.keys(person);

const values = Object.values(person);
console.log(values);
