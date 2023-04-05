import { Book } from './modules/CreateBook.js';
import { get, store } from './modules/Storage.js';
import { display } from './modules/Display.js';
import {
  list, add, contact, showAddNewBook, showBooks, showContact,
} from './modules/Navigation.js';

import { displayTime } from './modules/DateTime.js';

let myBooks = [];

window.addEventListener('DOMContentLoaded', () => {
  if (get) {
    myBooks = get;
  }
  displayTime();
  display();
}, false);

const bookForm = document.querySelector('#book-form');

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const book = new Book(title.value, author.value);
  myBooks.push(book);
  store(myBooks);
  title.value = '';
  author.value = '';
  display();
});

add.addEventListener('click', showAddNewBook);
contact.addEventListener('click', showContact);
list.addEventListener('click', showBooks);