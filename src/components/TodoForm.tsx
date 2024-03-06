import { addTodo } from "api/todos";
import React, { useRef } from "react";
import { useMutation } from "react-query";
import { Layout } from "./Layout";

export const TodoForm = () => {
  const mutation = useMutation(addTodo);
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  //todo 추가
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: { value: string };
      content: { value: string };
    };

    if (!target.title.value.trim()) {
      alert("제목을 입력해주세요.");
      titleRef.current?.focus();
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
  };

  return (
    <Layout>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">제목</label>
        <input type="text" id="title" name="title" ref={titleRef} placeholder="제목을 입력해주세요." />
        <label htmlFor="content">내용</label>
        <input type="text" id="content" name="content" ref={contentRef} placeholder="내용을 입력해주세요." />
        <button>추가</button>
      </form>
    </Layout>
  );
};
