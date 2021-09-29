//it goest through all the elements inside an array, and do something with them

const numbers = [1, 2, 3];

const doubleNumbers = numbers.map((num) => {
  return num * 2;
});

console.log(numbers); // [1,2,3]
console.log(doubleNumbers); // [2,4,6]
