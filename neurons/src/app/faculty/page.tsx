export default function FacultyDashboard() {
  return (
    <div className="h-screen p-6 grid grid-cols-4 gap-4 bg-gray-100">
      {/* Left Sidebar */}
      <div className="col-span-1 space-y-4">
        <div className="p-4 bg-white shadow-md rounded-lg">Schedule</div>
        <div className="p-4 bg-white shadow-md rounded-lg">To-Do List</div>
        <div className="p-4 bg-white shadow-md rounded-lg">Logout</div>
      </div>

      {/* Center Content */}
      <div className="col-span-2 space-y-4">
        <div className="p-4 bg-white shadow-md rounded-lg">Classes</div>
        <div className="p-4 bg-white shadow-md rounded-lg">Student List</div>
        <div className="p-4 bg-white shadow-md rounded-lg">Report Generation</div>
      </div>

      {/* Right Sidebar */}
      <div className="col-span-1 space-y-4">
        <div className="p-4 bg-white shadow-md rounded-lg">Teacher Profile</div>
        <div className="p-4 bg-white shadow-md rounded-lg">Calendar</div>
        <div className="p-4 bg-white shadow-md rounded-lg">Announcements</div>
      </div>
    </div>
  );
}

