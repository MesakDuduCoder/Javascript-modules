export const allBooks = document.querySelector('#books');
export const addBook = document.querySelector('#add-book');
export const getContact = document.querySelector('#contact');

export const list = document.querySelector('.list');
export const add = document.querySelector('.add');
export const contact = document.querySelector('.contact');

export const showAddNewBook = () => {
  addBook.style.display = 'flex';
  allBooks.style.display = 'none';
  getContact.style.display = 'none';
};

export const showContact = () => {
  getContact.style.display = 'flex';
  addBook.style.display = 'none';
  allBooks.style.display = 'none';
};

export const showBooks = () => {
  allBooks.style.display = 'flex';
  addBook.style.display = 'none';
  getContact.style.display = 'none';
};