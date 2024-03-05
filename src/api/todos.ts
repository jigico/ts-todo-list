import axios from "axios";

export const addTodo = async (newTodo: { title: string; content: string; isDone: boolean }) => {
  return axios.post(`${process.env.REACT_APP_JSON_SERVER_URL}/todos`, newTodo);
};
