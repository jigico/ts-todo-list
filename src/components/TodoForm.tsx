import { addTodo } from "api/todos";
import React from "react";
import { useMutation } from "react-query";

export const TodoForm = () => {
  const mutation = useMutation(addTodo);

  //todo 추가
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: { value: string };
      content: { value: string };
    };

    if (!target.title.value.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }
    if (!target.content.value.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }

    const newTodo = {
      title: target.title.value,
      content: target.content.value,
      isDone: false
    };

    mutation.mutate(newTodo);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="title">제목</label>
      <input type="text" id="title" name="title" placeholder="제목을 입력해주세요." />
      <label htmlFor="content">내용</label>
      <input type="text" id="content" name="content" placeholder="내용을 입력해주세요." />
      <button>추가</button>
    </form>
  );
};
