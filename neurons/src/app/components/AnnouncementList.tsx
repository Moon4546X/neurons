"use client";
import { useAnnouncement } from "../context/AnnouncementContext";

export default function AnnouncementList() {
  const { announcements } = useAnnouncement();

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Announcements</h2>
      {announcements.length === 0 ? (
        <p className="text-gray-500">No announcements yet.</p>
      ) : (
        <ul className="space-y-2">
          {announcements.map((announcement, index) => (
            <li key={index} className="p-2 border rounded-lg shadow-sm">
              <p className="font-medium">{announcement.message}</p>
              <span className="text-sm text-gray-500">{announcement.timestamp}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
