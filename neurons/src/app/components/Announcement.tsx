"use client";
import { useState } from "react";
import { useAnnouncement } from "../context/AnnouncementContext";

export default function Announcement() {
  const { announcements, addAnnouncement } = useAnnouncement();
  const [input, setInput] = useState("");

  const sendAnnouncement = () => {
    if (input.trim() !== "") {
      addAnnouncement(input);
      setInput("");
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-2">Announcements</h2>
      
      {/* Input for Teacher */}
      <div className="flex mb-2">
        <input
          type="text"
          placeholder="Enter announcement..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 w-full"
        />
        <button onClick={sendAnnouncement} className="bg-blue-500 text-white px-4 py-2 ml-2">
          Send
        </button>
      </div>

      {/* Display Announcements */}
      <ul>
        {announcements.map((a, index) => (
          <li key={index} className="p-2 border-b">
            <strong>{a.timestamp}:</strong> {a.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
