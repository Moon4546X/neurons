export default function StudentDashboard() {
  return (
    <div className="h-screen p-6 grid grid-cols-4 gap-4 bg-gray-100">
      {/* Left Sidebar */}
      <div className="col-span-1 space-y-4">
        <div className="p-4 bg-white shadow-md rounded-lg">Schedule</div>
        <div className="p-4 bg-white shadow-md rounded-lg">To-Do List</div>
      </div>

      {/* Center Content */}
      <div className="col-span-2 space-y-4">
        <div className="p-4 bg-white shadow-md rounded-lg">Assignments</div>
        <div className="p-4 bg-white shadow-md rounded-lg">Class Notes</div>
        <div className="p-4 bg-white shadow-md rounded-lg">Reports</div>
        <div className="p-4 bg-white shadow-md rounded-lg">Books</div>
      </div>

      {/* Right Sidebar */}
      <div className="col-span-1 space-y-4">
        <div className="p-4 bg-white shadow-md rounded-lg">Student Profile</div>
        <div className="p-4 bg-white shadow-md rounded-lg">Calendar</div>
        <div className="p-4 bg-white shadow-md rounded-lg">Announcements</div>
      </div>
    </div>
  );
}
