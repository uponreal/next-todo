import fs from "fs";
import path from "path";

const getTodos = () => {
  const file = fs.readFileSync(path.join("data", "todos.json"));
  let data = file.toString();
  if (data === "") {
    data = [];
  } else {
    data = JSON.parse(data);
  }
  return data;
};

const checkExist = (id) => {
  const todos = getTodos();
  return todos.some((todo) => todo.id === id);
};

const saveTodos = (todos) => {
  fs.writeFileSync(path.join("data", "todos.json"), JSON.stringify(todos));
};

export default { getTodos, checkExist, saveTodos };
