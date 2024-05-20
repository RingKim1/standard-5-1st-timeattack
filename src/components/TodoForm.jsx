import { useState } from "react";

export default function TodoForm({ setTodos }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addHandler = (event) => {
    console.log("작동 여부");
    event.preventDefault();

    if (!title || !content) {
      alert("제목과 내용을 모두 입력해주세요!");
      return;
    }
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      content: content,
      completed: false,
    };
    setTodos((todos) => [...todos, newTodo]);
  };
  return (
    <>
      <form onSubmit={addHandler}>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="내용"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <button type="submit">제출</button>
      </form>
    </>
  );
}
