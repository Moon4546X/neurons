"use client";
import { useState } from "react";

export default function ToDo() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  return (
    <div className="bg-white p-4 shadow-md rounded">
      <h2 className="text-lg font-semibold">To-Do List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="border p-2 w-full"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2"
        onClick={() => setTasks([...tasks, newTask])}
      >
        Add Task
      </button>
      <ul className="mt-2">
        {tasks.map((task, index) => (
          <li key={index} className="border p-2 mt-1">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}
