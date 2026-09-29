import React from "react";
import { useTodos } from "../TodoContext";
import TodoItem from "../components/TodoItem";

export default function Completed() {
  const { todos } = useTodos();
  const done = todos.filter((t) => t.done);

  return (
    <div className="container">
      <div className="card">
        <h2>Completed Tasks ({done.length})</h2>
        {done.length === 0 && (
          <p className="empty">No completed tasks yet.</p>
        )}
        {done.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
