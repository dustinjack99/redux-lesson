const numbers = [1, 2, 3];

//Adding
const index = numbers.indexOf(2);
const added = [
  // copies all numbers before index of 2
  ...numbers.slice(0, index),
  // adds 4 to array
  4,
  // copies all numbers index 2 and after
  ...numbers.slice(index),
];

console.log(added);

//Removing
const removed = numbers.filter(n => n !== 2);
console.log(removed);

//Updating
const updated = numbers.map(n => (n === 2 ? 20 : n));
console.log(updated);
