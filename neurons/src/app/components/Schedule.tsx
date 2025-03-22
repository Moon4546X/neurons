"use client";
import { useState } from "react";

export default function Schedule() {
  const [schedule, setSchedule] = useState<{ time: string; event: string }[]>([]);
  const [time, setTime] = useState("");
  const [event, setEvent] = useState("");

  const addSchedule = () => {
    if (time.trim() !== "" && event.trim() !== "") {
      setSchedule([...schedule, { time, event }]);
      setTime("");
      setEvent("");
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-2">Schedule</h2>
      <div className="flex mb-2">
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border p-2 w-1/3"
        />
        <input
          type="text"
          placeholder="Event name"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          className="border p-2 w-2/3 ml-2"
        />
        <button onClick={addSchedule} className="bg-green-500 text-white px-4 py-2 ml-2">
          Add
        </button>
      </div>
      <ul>
        {schedule.map((item, index) => (
          <li key={index} className="p-2 border-b">
            <strong>{item.time}</strong> - {item.event}
          </li>
        ))}
      </ul>
    </div>
  );
}
