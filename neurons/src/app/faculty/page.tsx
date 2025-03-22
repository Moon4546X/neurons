import AnnouncementForm from "../components/AnnouncementForm";
import StudentList from "../components/StudentList";
import Calendar from "../components/Calendar";
import TODO from "../components/TODO";
import Schedule from "../components/Schedule";
import { setMaxIdleHTTPParsers } from "http";
import Sidebar from "../components/Sidebar"

export default function TeacherDashboard() {
    return (
        
      
        <div className="p-4 space-y-4">
            
            <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
            <div className="grid grid-cols-2 gap-4">
                <AnnouncementForm />
                <StudentList />
                
                <Calendar/>
                <Schedule/>
                <TODO/>
            </div>
            
            
        </div>
    );
}
