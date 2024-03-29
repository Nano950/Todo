let todoItems = [];

function renderTodo(todo) {
  localStorage.setItem('todoItemsRef', JSON.stringify(todoItems));

  const list = document.getElementById('list-item-container');
  const item = document.querySelector(`[data-key='${todo.id}']`);

  const isChecked = todo.checked ? 'done': '';
  const node = document.createElement("li");

  if (todo.deleted) {
    item.remove();
    return
    }

  node.setAttribute('class', `list-item ${isChecked}`);
  node.setAttribute('data-key', todo.id);
  node.innerHTML = `
  <input id="${todo.id}" type="checkbox" class="check"/>
  <label for="${todo.id}" class="tick js-tick">
  <span>${todo.text}</span>
  </label>
  <span class="close"><img class="js-delete-todo" src = "./images/icon-cross.svg"></span>
  `;

  if (item) {
    list.replaceChild(node, item);
  } else {
    list.append(node);
  }
}

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };
  
    todoItems.push(todo);
    renderTodo(todo);
}

function toggleDone(key) { //should NOT cross out text in todo item (it doesnt) ;-;
  const index = todoItems.findIndex(item => item.id === Number(key));
  todoItems[index].checked = !todoItems[index].checked;
  renderTodo(todoItems[index]);
}

function deleteTodo(key) {
  const index = todoItems.findIndex(item => item.id === Number(key));
  const todo = {
    deleted: true,
    ...todoItems[index]
  };
  todoItems = todoItems.filter(item => item.id !== Number(key));
  renderTodo(todo);
}

const form = document.getElementById("task-form"); //might cause an error
form.addEventListener('submit', event => {
  event.preventDefault(event);
  const input = document.getElementById('todo-input');
  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});

const list = document.getElementById('list-item-container');
list.addEventListener('click', event => {
  if (event.target.classList.contains('js-tick')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }

  if (event.target.classList.contains('js-delete-todo')) {
    const itemKey = event.target.parentElement.parentElement.dataset.key;
    deleteTodo(itemKey);
  }

});

document.addEventListener('DOMContentLoaded', () => {
  const ref = localStorage.getItem('todoItemsRef');
  if (ref) {
    todoItems = JSON.parse(ref);
    todoItems.forEach(t => {
      renderTodo(t);
    });
  }
});