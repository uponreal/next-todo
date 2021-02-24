import fs from "fs";
import path from "path";

export default (req, res) => {
  if (req.method === "GET") {
    try {
      const file = fs.readFileSync(path.join("data", "todos.json"));
      let data = file.toString();
      if (data === "") {
        data = [];
      }
      return res.status(200).json(data);
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
