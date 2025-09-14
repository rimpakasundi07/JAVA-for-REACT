const person = {
  name: "Rimpa",
  age: 19,
  friends: ["Raja", "Arghya", "Rudra"],
  family: {
    fathername: "Roky",
    mothername: "Rupa",
  },
};

const jsonData = JSON.stringify(person);
// . console.log(jsonData);

const planData = JSON.parse(jsonData);
console.log(planData);
