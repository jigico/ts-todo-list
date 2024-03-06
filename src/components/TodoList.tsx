import { getTodos } from "api/todos";
import React from "react";
import { useQuery } from "react-query";

export const TodoList = () => {
  const { data, isLoading, isError } = useQuery("todos", getTodos);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <ul>
      {data.map((todo: { id: string; title: string; content: string; isDone: boolean }) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </ul>
  );
};
