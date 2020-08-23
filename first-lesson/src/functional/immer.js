//Looks a LOT cleaner than Immutable.js

import { produce } from 'immer';

let book = { title: 'Harry Potter' };

console.log(book);

const publish = book => {
  return produce(book, draftBook => {
    draftBook.isPublished = true;
  });
};

let updated = publish(book);

console.log(updated);
