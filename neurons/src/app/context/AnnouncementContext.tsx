"use client";
import { createContext, useContext, useState } from "react";

// Create Announcement Context
const AnnouncementContext = createContext(null);

// Provider Component
export const AnnouncementProvider = ({ children }) => {
    const [announcements, setAnnouncements] = useState<string[]>([]);

    const addAnnouncement = (message: string) => {
        setAnnouncements((prev) => [...prev, message]);
    };

    return (
        <AnnouncementContext.Provider value={{ announcements, addAnnouncement }}>
            {children}
        </AnnouncementContext.Provider>
    );
};

// Hook to Use in Components
export const useAnnouncement = () => useContext(AnnouncementContext);
