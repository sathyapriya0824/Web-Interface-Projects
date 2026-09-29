import React, { useState } from "react";
import { useTodos } from "../TodoContext";

export default function TodoForm() {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("medium");
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text.trim(), priority);
    setText("");
    setPriority("medium");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
}
