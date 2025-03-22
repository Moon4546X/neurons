import AnnouncementList from "../components/AnnouncementList";
import Calendar from "../components/Calendar";

export default function StudentDashboard() {
    return (
        <div className="p-4 space-y-4">
            <h1 className="text-2xl font-bold">Student Dashboard</h1>
            <AnnouncementList />
            <Calendar />
        </div>
    );
}
