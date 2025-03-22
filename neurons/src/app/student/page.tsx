import AnnouncementList from "../components/AnnouncementList";
import Calendar from "../components/Calendar";
import TODO from "../components/TODO";
import Schedule from "../components/Schedule";
import Report from "../components/Report"
export default function StudentDashboard() {
    return (
        <div className="p-4 space-y-4">
            <h1 className="text-2xl font-bold">Student Dashboard</h1>
            <AnnouncementList />
            <div><Calendar/></div>
                <Schedule/>
                <TODO/>
            <Report/> 
        
        </div>
        
    );
}
