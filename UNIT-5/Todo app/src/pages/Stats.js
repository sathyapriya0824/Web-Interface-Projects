import React from "react";
import { useTodos } from "../TodoContext";

export default function Stats() {
  const { todos } = useTodos();
  const total = todos.length;
  const done = todos.filter((t) => t.done).length;
  const pending = total - done;
  const high = todos.filter((t) => t.priority === "high" && !t.done).length;

  return (
    <div className="container">
      <div className="card">
        <h2>Task Statistics</h2>
        <div className="stats-grid">
          <div className="stat-box">
            <h2>{total}</h2>
            <p>Total Tasks</p>
          </div>
          <div className="stat-box">
            <h2>{done}</h2>
            <p>Completed</p>
          </div>
          <div className="stat-box">
            <h2>{pending}</h2>
            <p>Pending</p>
          </div>
        </div>
        <p style={{ marginTop: 20 }}>
          High priority tasks pending: <b>{high}</b>
        </p>
      </div>
    </div>
  );
}
