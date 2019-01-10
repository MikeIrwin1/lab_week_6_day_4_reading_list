document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const form = document.querySelector('#new-item-form');
form.addEventListener('submit', handleFormSubmit);


});

  const handleFormSubmit = function (event) {
    event.preventDefault();
    console.log(event);

// create table and add table
  // const newTableItem = document.createElement('table');
  const list = document.querySelector('ul')

  const listItem = document.createElement('li')
  listItem.textContent = `${event.target.title.value}`;
  list.appendChild(listItem)

  const listItem2 = document.createElement('li')
  listItem2.textContent = `${event.target.author.value}`;
  list.appendChild(listItem2)

  const listItem3 = document.createElement('li')
  listItem3.textContent = `${event.target.category.value}`;
  list.appendChild(listItem3)
  document.getElementById('new-item-form').reset();





  // list.appendChild(newTableItem);
  //
  // // create and add row
  // const newRow = document.createElement('tr');
  // newTableItem.appendChild(newRow);
  //
  //
  // const newTitle = document.createElement('td');
  // newTitle.textContent = `${event.target.title.value}`;
  // newRow.appendChild(newTitle);
  // console.dir(table);
  //
  // const author = document.createElement('td');
  // author.textContent = `${event.target.author.value}`;
  // newRow.appendChild(author);



//  newTableItem.appendChild(newRow);
  //newTableItem.textContent = ``



  }
