let todoItems = [];

function addTodo(text) {
    const todo = {
      text,
      checked: false,
      id: Date.now(),
    };
  
    todoItems.push(todo);
    renderTodo(todo);
}


const form = document.forms[0]; //might cause an error
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

function renderTodo(todo) {
    const list = document.getElementById('list-item-container');
    const isChecked = todo.checked ? 'done': '';
    const node = document.createElement("li");

    console.log(list);
    console.log(node);

    node.setAttribute('class', `list-item ${isChecked}`);
    node.setAttribute('data-key', todo.id);
    node.innerHTML = `
    <input id="${todo.id}" type="checkbox" class="check"/>
    <label for="${todo.id}" class="tick js-tick">
    <span>${todo.text}</span>
    </label>
    <span class="close"><img src = "./images/icon-cross.svg"></span>

  `;

  list.append(node);
}