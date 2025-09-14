// array destructuring

// const friends = ["hero", "heroine", "Juni"];

// const element1 = friends[0];

// const element2 = friends[1];

// const element3 = friends[2];

// console.log(element1, element2, element3);

// --------------------------------------------------->

// another example of array destructuring   ##

// const friends = ["hero", "heroine", "Juni"];

// const [element1, element2, element3] = friends;

// console.log(element1, element2, element3);

// --------------------------------------------------->

const person = {
  name: "Hero Alom",
  age: 24,
  friends: ["juniya", "siniya"],
  country: "India",
};

const { name, country, age } = person;
console.log(country);
