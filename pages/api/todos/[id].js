import data from "../../../server-lib/data/index";

export default (req, res) => {
  if (req.method === "PUT") {
    try {
      const id = req.query.id;
      const isExist = data.todo.checkExist(id);
      if (!isExist) {
        return res
          .status(404)
          .send(`id ${id}에 해당하는 Todo는 존재하지 않습니다.`);
      } else {
        const todos = data.todo.getTodos();
        const changedTodos = todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, checked: !todo.checked };
          } else {
            return todo;
          }
        });
        data.todo.saveTodos(changedTodos);
        return res.status(200).send(changedTodos);
      }
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      return res.send(e);
    }
  } else if (req.method === "DELETE") {
    try {
      const id = req.query.id;
      const isExist = data.todo.checkExist(id);
      if (!isExist) {
        return res
          .status(404)
          .send(`id ${id}에 해당하는 Todo는 존재하지 않습니다.`);
      } else {
        const todos = data.todo.getTodos();
        const changedTodos = todos.filter((todo) => {
          if (todo.id === id) {
            return false;
          } else {
            return true;
          }
        });
        data.todo.saveTodos(changedTodos);
        return res.status(200).send(changedTodos);
      }
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
