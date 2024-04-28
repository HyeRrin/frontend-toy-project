const form = document.getElementById("form");
const input = document.querySelector("#form input");
const todoList = document.querySelector(".todo-list");

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(savedTodos));
};

const deleteTodo = (event) => {
  const todoItem = event.target.closest("li");
  todoItem.remove();
  savedTodos.splice(
    savedTodos.findIndex((todo) => todo.id === parseInt(todoItem.id)),
    1
  );
  saveTodos();
};

const addTodoToList = (todo) => {
  const list = document.createElement("li");
  list.id = todo.id;
  list.className = "list";

  const text = document.createElement("p");
  text.textContent = todo.todo;
  text.classList = "list-detail";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "삭제";
  deleteButton.className = "delete-button";
  deleteButton.addEventListener("click", deleteTodo);

  list.append(text, deleteButton);
  todoList.appendChild(list);
};

const handleTodoSubmit = (event) => {
  event.preventDefault();

  const newTodo = {
    todo: input.value,
    id: Date.now(),
  };
  savedTodos.push(newTodo);
  addTodoToList(newTodo);
  saveTodos();
  input.value = "";
};

form.addEventListener("submit", handleTodoSubmit);

savedTodos.forEach(addTodoToList);
