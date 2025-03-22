"use client";
import { useState } from "react";

export default function TODO() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const removeTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-2">To-Do List</h2>
      <div className="flex mb-2">
        <input
          type="text"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 w-full"
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 ml-2">
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center p-2 border-b">
            {task}
            <button onClick={() => removeTask(index)} className="text-red-500">
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
