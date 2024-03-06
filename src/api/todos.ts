import axios from "axios";

export const addTodo = async (newTodo: { title: string; content: string; isDone: boolean }) => {
  return axios.post(`${process.env.REACT_APP_JSON_SERVER_URL}/todos`, newTodo);
};

export const getTodos = async () => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_JSON_SERVER_URL}/todos`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
