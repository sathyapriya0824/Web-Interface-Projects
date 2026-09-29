import React from "react";
import { useTodos } from "../TodoContext";

export default function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <div className={`todo-item ${todo.done ? "done" : ""}`}>
      <div className="todo-left">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className="todo-text">{todo.text}</span>
        <span className={`badge ${todo.priority}`}>{todo.priority}</span>
      </div>
      <button className="btn danger" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </div>
  );
}
