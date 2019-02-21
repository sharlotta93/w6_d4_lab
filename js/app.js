document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;

    const newContainer = document.createElement('div');
    newContainer.classList.add('container');


    const newItem = document.createElement('p');
    newItem.textContent = title;
    newItem.classList.add('title');

    const newItem2 = document.createElement('p');
    newItem2.textContent = author;
    newItem2.classList.add('author');

    const newItem3 = document.createElement('p');
    newItem3.textContent = category;
    newItem3.classList.add('category');

    const newList = document.querySelector('#reading-list');
    newList.appendChild(newContainer);

    const newBook = document.querySelector('.container');
    newContainer.appendChild(newItem);
    newContainer.appendChild(newItem2);
    newContainer.appendChild(newItem3);
  });

})
