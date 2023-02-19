// Get the input and button elements from the DOM
const input = document.getElementById('input-todo');
const addBtn = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

// Add event listener to the button
addBtn.addEventListener('click', () => {
  // Get the value of the input field
  const inputValue = input.value.trim();

  // If the input field is not empty, create a new list item
  if (inputValue !== '') {
    const listItem = document.createElement('li');
    const deleteBtn = document.createElement('button');
    listItem.innerText = inputValue;
    deleteBtn.innerText = 'Delete';
    todoList.appendChild(listItem);
    listItem.appendChild(deleteBtn);

    // Add event listener to the delete button
    deleteBtn.addEventListener('click', () => {
      todoList.removeChild(listItem);
    });

    // Clear the input field
    input.value = '';
  }
});
