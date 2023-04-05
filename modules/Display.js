import { removeBook } from './RemoveBook.js';
import { get } from './Storage.js';

export const display = () => {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';

  if (get) {
    get.forEach((book, index) => {
      const li = document.createElement('li');

      if (typeof book.displayInfo === 'function') {
        li.textContent = book;
      } else {
        li.innerHTML = `"<span>${book.title}</span>" by <span>${book.author}</span>`;
      }
      li.style.listStyle = 'none';
      li.style.backgroundColor = index % 2 === 0 ? '#f2f2f2' : '#fff';
      li.style.padding = '1%';
      li.style.margin = '17px 0';

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-btn';
      removeButton.addEventListener('click', (e) => {
        const book = e.target.parentElement;
        const title = book.children[0].innerHTML;
        const author = book.children[1].innerHTML;
        removeBook(title, author);
        display();
      });

      li.appendChild(removeButton);
      bookList.appendChild(li);
    });
  }
};