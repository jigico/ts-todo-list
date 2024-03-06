import axios from "axios";

//todo 추가
export const addTodo = async (newTodo: { title: string; content: string; isDone: boolean }) => {
  try {
    return await axios.post(`${process.env.REACT_APP_JSON_SERVER_URL}/todos`, newTodo);
  } catch (error) {
    alert("에러가 발생했습니다. 관리자에게 문의해주세요.");
    console.error(error);
  }
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
    alert("에러가 발생했습니다. 관리자에게 문의해주세요.");
    console.error(error);
  }
};

//todo 완료 여부 변경
export const toggleTodoDone = async ({ id, isDone }: { id: string; isDone: boolean }) => {
  try {
    return await axios.patch(`${process.env.REACT_APP_JSON_SERVER_URL}/todos/${id}`, { isDone });
  } catch (error) {
    alert("에러가 발생했습니다. 관리자에게 문의해주세요.");
    console.error(error);
  }
};

//todo 삭제
export const deleteTodo = async (id: string) => {
  try {
    return await axios.delete(`${process.env.REACT_APP_JSON_SERVER_URL}/todos/${id}`);
  } catch (error) {
    alert("에러가 발생했습니다. 관리자에게 문의해주세요.");
    console.error(error);
  }
};
