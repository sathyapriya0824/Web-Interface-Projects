import React, { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

export function useTodos() {
  return useContext(TodoContext);
}

const STORAGE_KEY = "unit5_todo_list";

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text, priority) => {
    const newTodo = {
      id: Date.now(),
      text,
      priority,
      done: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const value = { todos, addTodo, toggleTodo, deleteTodo };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
