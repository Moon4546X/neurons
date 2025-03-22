"use client";
import { useState } from "react";
import { useAnnouncement } from "../context/AnnouncementContext";

const AnnouncementForm = () => {
    const { addAnnouncement } = useAnnouncement();
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            addAnnouncement(message);
            setMessage(""); // Clear input after sending
        }
    };

    return (
        <div className="bg-gray-200 p-4 rounded-md">
            <h2 className="text-lg font-bold mb-2">Send Announcement</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    className="w-full p-2 border rounded"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your announcement..."
                    rows={3}
                />
                <button type="submit" className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
                    Send
                </button>
            </form>
        </div>
    );
};

export default AnnouncementForm;
