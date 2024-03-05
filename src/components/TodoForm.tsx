import React from "react";

export const TodoForm = () => {
  //todo 추가
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: { value: string };
      content: { value: string };
    };
    console.log(target.title.value);
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
