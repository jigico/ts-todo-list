import { deleteTodo, getTodos } from "api/todos";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

type IsDone = {
  isDone: boolean;
};

type Todo = { id: string; title: string; content: string; isDone: boolean };

export const TodoList = ({ isDone }: IsDone) => {
  const { data, isLoading, isError } = useQuery("todos", getTodos);
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    }
  });

  //todo 삭제
  const deleteTodoHandler = (id: string) => {
    deleteMutation.mutate(id);
  };

  //todo 완료 여부 변경
  const toggleDone = (id: string, isDone: boolean): void => {
    // patchMutation.mutate(id, isDone);
  };

  if (isError) {
    return <div>에러가 발생했습니다. 관리자에게 문의해주세요.</div>;
  }

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <>
      <h2>{isDone ? "🎉완료한 일" : "🔥해야할 일"}</h2>
      <ul>
        {data
          ?.filter((todo: Todo) => todo.isDone === isDone)
          .map((todo: Todo) => {
            return (
              <li key={todo.id}>
                {todo.title}
                <p>{todo.content}</p>
                <div>
                  {todo.isDone ? <button onClick={() => toggleDone(todo.id, todo.isDone)}>취소</button> : <button>완료</button>}
                  <button onClick={() => deleteTodoHandler(todo.id)}>삭제</button>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};
