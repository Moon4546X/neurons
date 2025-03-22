"use client";
import { useAnnouncement } from "../context/AnnouncementContext";

const AnnouncementList = () => {
    const { announcements } = useAnnouncement();

    return (
        <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg font-bold mb-2">Class Announcements</h2>
            {announcements.length > 0 ? (
                <ul className="list-disc pl-4">
                    {announcements.map((msg, index) => (
                        <li key={index} className="text-gray-700">{msg}</li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No announcements yet.</p>
            )}
        </div>
    );
};

export default AnnouncementList;
