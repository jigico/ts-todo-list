import axios from "axios";

//todo 추가
export const addTodo = async (newTodo: { title: string; content: string; isDone: boolean }) => {
  return axios.post(`${process.env.REACT_APP_JSON_SERVER_URL}/todos`, newTodo);
};

//todo 조회
export const getTodos = async () => {
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
