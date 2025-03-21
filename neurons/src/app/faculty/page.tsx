export default function FacultyDashboard() {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 text-center text-xl">Institution Name</header>
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-200 p-4 space-y-4">
          <h2 className="font-semibold">Schedule</h2>
          <div className="border p-2 bg-white rounded">Class 1</div>
          <div className="border p-2 bg-white rounded">Class 2</div>

          <h2 className="font-semibold mt-4">To-Do</h2>
          <input type="text" placeholder="Add Task" className="w-full p-2 border rounded mb-2" />
          <button className="w-full bg-blue-500 text-white p-2 rounded">Add</button>

          <button className="w-full bg-red-500 text-white p-2 rounded mt-4">Logout</button>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-4 grid grid-cols-3 gap-4">
          <div className="border p-4 bg-white rounded">Classes</div>
          <div className="border p-4 bg-white rounded">Student List</div>
          <div className="border p-4 bg-white rounded">Calendar</div>
          <div className="border p-4 bg-white rounded col-span-2">Documents & Reports</div>
          <div className="border p-4 bg-white rounded">Announcements</div>
        </main>
      </div>
    </div>
  );
}
