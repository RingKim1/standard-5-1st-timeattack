import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const initialize = [
    { id: 0, title: "제목1", content: "내용1", completed: false },
    { id: 1, title: "제목2", content: "내용2", completed: true },
  ];
  const [todos, setTodos] = useState(initialize);

  const yetcompleted = todos.filter((el) => {
    !el.completed;
  });
  const completed = todos.filter((el) => {
    el.completed;
  });

  return (
    <section>
      <h1>투두리스트 타임어택</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList
        listTitle={"Working"}
        setTodos={setTodos}
        todos={yetcompleted}
      />
      <hr />
      <TodoList listTitle={"Done"} setTodos={setTodos} todos={completed} />
    </section>
  );
}
