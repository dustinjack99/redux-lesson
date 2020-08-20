//ROBJECT MUTABILITY / SHALLOW COPIES / DEEP COPIES
const person = { name: 'Dustin ' };

//do not do this
// person.title = ""

//Do This
// Use Object.assign(), which creates a copy,
// ALWAYS create copies instead of mutating
// const updated = Object.assign({}, person, { name: 'Tim', age: 30 });
//this is the sexy es6 spread operator version
// Both makes shallow copies
const updated = { ...person, name: 'Tim' };

console.log(person);
console.log(updated);

const dude = {
  name: 'John',
  address: {
    country: 'USA',
    city: 'San Fran',
  },
};

// let newDude = { ...dude, name: 'ardy' };

// ***SHALLOW COPIES MUTATE ORIGINAL COPIES***

// newDude.address.city = 'new york';
console.log(dude);

// to solve, you must deep copy nested information
let newDude = {
  ...dude,
  address: {
    ...dude.address,
    city: 'new york',
  },
};

console.log(newDude);
