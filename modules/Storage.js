export const store = (books) => {
  localStorage.setItem('books', JSON.stringify(books));
};

const books = localStorage.getItem('books');
export const get = JSON.parse(books);
