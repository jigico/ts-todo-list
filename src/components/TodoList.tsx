import { getTodos } from "api/todos";
import React from "react";
import { useQuery } from "react-query";

type IsDone = {
  isDone: boolean;
};

type Todo = { id: string; title: string; content: string; isDone: boolean };

export const TodoList = ({ isDone }: IsDone) => {
  const { data, isLoading, isError } = useQuery("todos", getTodos);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <>
      <h2>{isDone ? "🎉완료한 일" : "🔥해야할 일"}</h2>
      <ul>
        {data
          .filter((todo: Todo) => todo.isDone === isDone)
          .map((todo: Todo) => {
            return (
              <li key={todo.id}>
                {todo.title}
                <p>{todo.content}</p>
                <div>
                  {todo.isDone ? <button>취소</button> : <button>완료</button>}
                  <button>삭제</button>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};
