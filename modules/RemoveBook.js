import { get, store } from './Storage.js';

export const removeBook = (title, author) => {
  if (get) {
    const myBooks = get;
    myBooks.forEach((item) => {
      if (item.title === title && item.author === author) {
        const index = myBooks.indexOf(item);

        if (index > -1) {
          myBooks.splice(index, 1);
          store(myBooks);
        }
      }
    });
  }
};