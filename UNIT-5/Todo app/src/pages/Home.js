import React from "react";
import { useTodos } from "../TodoContext";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";

export default function Home() {
  const { todos } = useTodos();
  const pending = todos.filter((t) => !t.done);

  return (
    <div className="container">
      <div className="card">
        <h2>Add a Task</h2>
        <TodoForm />
        <h3>Pending Tasks ({pending.length})</h3>
        {pending.length === 0 && <p className="empty">No pending tasks. Add one above 🎉</p>}
        {pending.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
