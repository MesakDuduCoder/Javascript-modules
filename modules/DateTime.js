import { DateTime } from './Luxon.js';

export const displayTime = () => {
  const now = DateTime.now();
  const date = document.querySelectorAll('.date');
  date.forEach((item) => {
    item.innerHTML = now.toLocaleString(DateTime.DATETIME_FULL);
  });
};
