import { Map } from 'immutable';
//provides backed in data structures!!!!!
//this is all about immutable data

let book = Map({ title: 'Harry Potter' });

// Using JS will mutate data

// const publish = book => {
//   book.isPublished = true;
// };
// publish(book);

// Using the Map DS will create a whole new copy
const publishIm = book => {
  return book.set('isPublished', true);
};

book = publishIm(book);

//how do access data in immutable Map object
console.log(book.get('title'));

//how to access data as JS object
console.log(book.toJS());
