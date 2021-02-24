import TodoList from "../components/TodoList.js";
import axios from "axios";

export async function getServerSideProps(context) {
  const result = await axios.get("http://localhost:3000/api/todos");
  console.log(result.data);
  return {
    props: {
      todos: result.data,
    },
  };
}

const App = ({ todos }) => {
  return <TodoList todos={todos} />;
};

export default App;
