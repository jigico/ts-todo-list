import axios, { AxiosResponse } from "axios";

//todo 추가
export const addTodo = async (newTodo: { title: string; content: string; isDone: boolean }) => {
  return axios.post(`${process.env.REACT_APP_JSON_SERVER_URL}/todos`, newTodo);
};

type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

//todo 조회
export const getTodos = async (): Promise<Todo[] | undefined> => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_JSON_SERVER_URL}/todos`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

//todo 완료 여부 변경
export const toggleTodoDone = async (id: string, isDone: boolean) => {
  return axios.patch(`${process.env.REACT_APP_JSON_SERVER_URL}/todos/${id}`, { isDone });
};

//todo 삭제
export const deleteTodo = async (id: string) => {
  return axios.delete(`${process.env.REACT_APP_JSON_SERVER_URL}/todos/${id}`);
};
