document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const form = document.querySelector('#new-item-form');
form.addEventListener('submit', handleFormSubmit);


});

const handleFormSubmit = function (event) {
  event.preventDefault();
  const list = document.querySelector('#reading-list');

// create table and rows. Save to list.
  const newTableItem = document.createElement('table');
  const title = newTableItem.insertRow(-1);
  const author = newTableItem.insertRow(-1);
  const category = newTableItem.insertRow(-1);
  list.appendChild(newTableItem);
// set the content of each row
  title.textContent = `Title: ${event.target.title.value}`;
  author.textContent = `Author: ${event.target.author.value}`;
  category.textContent = `Category: ${event.target.category.value}`;
// reset form
  document.getElementById('new-item-form').reset();
  }
