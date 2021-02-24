import axios from "axios";

const next_api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });
const getTodos = () => next_api.get("todos");
const addTodo = (text, color) => next_api.post(`todos`, { text, color });
const toogleCheckTodo = (id) => next_api.put(`todos/${id}`);
const deleteTodo = (id) => next_api.delete(`todos/${id}`);

export { getTodos, addTodo, toogleCheckTodo, deleteTodo };
