//Spread

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers); // [1,2,3,4]

const person = {
  name: "Name",
};

const newPerson = {
  ...person,
  age: "Age",
};
console.log(newPerson); // {name: "Name", age: "Age"}

const newPerson2 = {
  ...person,
  name: "Name2",
};
console.log(newPerson2); // {name: "Name2"}

//Rest

const someFunction = (...args) => args.filter((element) => element === 1);

someFunction(1, 2, 4); // [1]
someFunction(0, 4, 9, 14); // []
someFunction("string"); // []
