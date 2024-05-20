import React from "react";
import TodoItem from "./TodoItem";
import Test2 from "./Test2";

export default function TodoList({ listTitle, setTodos, todos }) {
  return (
    <div>
      <h2>{listTitle}</h2>
      {/* TodoItem이 나오지 않아서 test를 위해 갖고 옴 */}
      <Test2 />
      <ul>
        {todos.map((el) => {
          return <TodoItem el={el} setTodos={setTodos} />;
        })}
      </ul>
    </div>
  );
}
