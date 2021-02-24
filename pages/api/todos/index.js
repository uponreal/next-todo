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
  } else {
    res.statusCode = 405;
    return res.end();
  }
};
