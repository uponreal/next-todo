import data from "../../../server-lib/data/index";

export default (req, res) => {
  if (req.method === "GET") {
    try {
      const todos = data.todo.getTodos();
      return res.status(200).send(todos);
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      return res.send(e);
    }
  } else if (req.method === "POST") {
    try {
      const { text, color } = req.body;
      const todos = data.todo.getTodos();
      const changedTodos = [
        { id: todos.length, text, color, checked: false },
        ...todos,
      ];
      data.todo.saveTodos(changedTodos);
      return res.status(200).send(changedTodos);
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      return res.send(e);
    }
  } else {
    res.statusCode = 405;
    return res.end();
  }
};
