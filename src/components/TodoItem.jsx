export default function TodoItem({ el, setTodos }) {
  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((el) => el.id !== id));
  };

  const toggleTodo = (id) => {};
  return (
    <li>
      <h3>{el.title}</h3>
      <p>{el.content}</p>
      <div>
        <button onClick={toggleTodo(el.id)}>
          {el.completed ? "취소" : "완료"}
        </button>
        <button onClick={removeTodo(el.id)}>삭제</button>
      </div>
    </li>
  );
}
