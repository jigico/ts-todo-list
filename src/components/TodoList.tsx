import { getTodos } from "api/todos";
import React from "react";
// import { useQuery } from "react-query";
import { BtnBlackF, BtnBlackS, ButtonArea, ContentStyle, TodoItem, TodoListContainer, TodoListWrap, TodoTitle, TotoListTitle } from "./TodoListStyle";
import { QUERY_KEY_TODO, useTodoQuery } from "hooks/useCustomHook";
import { useQuery } from "@tanstack/react-query";

type IsDone = {
  isDone: boolean;
};

type Todo = { id: string; title: string; content: string; isDone: boolean };

export const TodoList = ({ isDone }: IsDone) => {
  const { data, isLoading, isError } = useQuery({ queryKey: [QUERY_KEY_TODO], queryFn: getTodos });
  const { deleteMutation, patchMutation } = useTodoQuery();

  //todo 삭제
  const deleteTodoHandler = (id: string) => {
    if (window.confirm("삭제할까요?")) {
      deleteMutation.mutate(id);
      alert("삭제를 완료했습니다.");
    } else {
      alert("삭제를 취소했습니다.");
    }
  };

  //todo 완료 여부 변경
  const toggleDone = (id: string, isDone: boolean): void => {
    patchMutation.mutate({ id, isDone });
  };

  if (isError) {
    return <div>에러가 발생했습니다. 관리자에게 문의해주세요.</div>;
  }

  if (isLoading) {
    return <TodoListContainer>로딩중</TodoListContainer>;
  }

  return (
    <TodoListContainer>
      <TotoListTitle>{isDone ? "🎉완료한 일" : "🔥해야할 일"}</TotoListTitle>
      <TodoListWrap>
        {data
          ?.filter((todo: Todo) => todo.isDone === isDone)
          .map((todo: Todo) => {
            return (
              <TodoItem key={todo.id}>
                <TodoTitle>{todo.title}</TodoTitle>
                <ContentStyle>{todo.content}</ContentStyle>
                <ButtonArea>
                  <BtnBlackF onClick={() => toggleDone(todo.id, !todo.isDone)}>{todo.isDone ? "취소" : "완료"}</BtnBlackF>
                  <BtnBlackS onClick={() => deleteTodoHandler(todo.id)}>삭제</BtnBlackS>
                </ButtonArea>
              </TodoItem>
            );
          })}
      </TodoListWrap>
    </TodoListContainer>
  );
};
