import axios from "axios";

const next_api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });
const getTodos = () => next_api.get("todos");
const putTodos = (id) => next_api.put(`todos/${id}`);
const deleteTodos = (id) => next_api.delete(`todos/${id}`);

export { getTodos, putTodos, deleteTodos };
