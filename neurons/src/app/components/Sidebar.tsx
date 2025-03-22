"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiMenu, FiX, FiHome, FiUsers, FiCalendar, FiClipboard } from "react-icons/fi";

export default function Sidebar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`h-screen bg-gray-900 text-white p-4 ${isOpen ? "w-64" : "w-16"} transition-all duration-300`}>
      {/* Sidebar Toggle Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Navigation Items */}
      <ul className="mt-6">
        <li className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer" onClick={() => router.push("/")}>
          <FiHome size={20} className="mr-3" /> {isOpen && "Dashboard"}
        </li>
        <li className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer" onClick={() => router.push("/student")}>
          <FiUsers size={20} className="mr-3" /> {isOpen && "Students"}
        </li>
        <li className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer" onClick={() => router.push("/dashboard/calendar")}>
          <FiCalendar size={20} className="mr-3" /> {isOpen && "Calendar"}
        </li>
        <li className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer" onClick={() => router.push("/dashboard/todo")}>
          <FiClipboard size={20} className="mr-3" /> {isOpen && "To-Do List"}
        </li>
      </ul>
    </div>
  );
}
