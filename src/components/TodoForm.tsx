import { addTodo } from "api/todos";
import React, { useRef } from "react";
import { useMutation, useQueryClient } from "react-query";
import { FormContainer, InputStyle } from "./TodoFormStyle";
import { BtnBlackF } from "./TodoListStyle";

export const TodoForm = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    }
  });
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  //todo 추가
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const target = e.target as typeof e.target & { //'as' 타입 단언 - e.target의 타입이면서 title과 content 속성을 가진 타입임을 명시.
      title: { value: string };
      content: { value: string };
    };

    if (!target.title.value.trim()) {
      alert("제목을 입력해주세요.");
      titleRef.current?.focus(); //옵셔널 체이닝(?.) - titleRef는 처음에 null 이기 때문에 titleRef.current 값이 있으면 focus 실행.
      return;
    }
    if (!target.content.value.trim()) {
      alert("내용을 입력해주세요.");
      contentRef.current?.focus();
      return;
    }

    const newTodo = {
      title: target.title.value,
      content: target.content.value,
      isDone: false
    };

    mutation.mutate(newTodo);
    form.reset();
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <label htmlFor="title">제목</label>
      <InputStyle type="text" id="title" name="title" ref={titleRef} placeholder="제목을 입력해주세요." />
      <label htmlFor="content">내용</label>
      <InputStyle type="text" id="content" name="content" ref={contentRef} placeholder="내용을 입력해주세요." />
      <BtnBlackF>추가</BtnBlackF>
    </FormContainer>
  );
};
