import AddTodo from "../../components/AddTodo";
import useSWR from "swr";

const Add = () => {
  const { mutate } = useSWR("getTodos", null, {
    isPaused: () => true,
  });
  return <AddTodo todoMutate={mutate} />;
};

export default Add;
