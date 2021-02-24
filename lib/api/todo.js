import axios from "axios";

const next_api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });
const getTodos = () => next_api.get("todos");

export { getTodos };
