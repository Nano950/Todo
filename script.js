const todoItems = document.querySelector("list-item-container");
const todoForm = document.getElementById("task-form");

todoForm.addEventListener("submit", addItem);
function addItem(todo) {
    const text = todoForm.value.trim();
    const node = document.createElement("li");
    const date = Date.now();

    node.innerHTML = `
    <input class = 
    `
}