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

export default { getTodos };
