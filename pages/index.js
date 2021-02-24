import TodoList from "../components/TodoList.js";
import { getTodos } from "../lib/api/todo";
import useSWR from "swr";

export async function getServerSideProps() {
  try {
    const result = await getTodos();
    return {
      props: {
        todos: result.data,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        todos: [],
      },
    };
  }
}

const App = ({ todos }) => {
  const { data, error } = useSWR("getTodos", async () => {
    const result = await getTodos();
    return result.data;
  });
  if (error) return <div>failed to load</div>;
  if (data !== undefined) {
    todos = data;
  }
  return <TodoList todos={todos} />;
};

export default App;
