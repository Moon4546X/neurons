"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define the type for announcements
interface Announcement {
  message: string;
  timestamp: string;
}

// Define context type
interface AnnouncementContextType {
  announcements: Announcement[];
  addAnnouncement: (message: string) => void;
}

// Create the context
const AnnouncementContext = createContext<AnnouncementContextType | undefined>(undefined);

// Provider Component
export function AnnouncementProvider({ children }: { children: ReactNode }) {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  // Load announcements from localStorage when the component mounts
  useEffect(() => {
    const storedAnnouncements = localStorage.getItem("announcements");
    if (storedAnnouncements) {
      setAnnouncements(JSON.parse(storedAnnouncements));
    }
  }, []);

  // Save to localStorage whenever announcements change
  useEffect(() => {
    localStorage.setItem("announcements", JSON.stringify(announcements));
  }, [announcements]);

  // Function to add an announcement
  const addAnnouncement = (message: string) => {
    const newAnnouncement = { message, timestamp: new Date().toLocaleString() };
    setAnnouncements((prev) => {
      const updatedAnnouncements = [newAnnouncement, ...prev];
      localStorage.setItem("announcements", JSON.stringify(updatedAnnouncements)); // Save immediately
      return updatedAnnouncements;
    });
  };

  return (
    <AnnouncementContext.Provider value={{ announcements, addAnnouncement }}>
      {children}
    </AnnouncementContext.Provider>
  );
}

// Custom Hook to use AnnouncementContext
export function useAnnouncement() {
  const context = useContext(AnnouncementContext);
  if (!context) {
    throw new Error("useAnnouncement must be used within an AnnouncementProvider");
  }
  return context;
}
