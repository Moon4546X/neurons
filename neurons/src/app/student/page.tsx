export default function StudentDashboard() {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-green-700 text-white p-4 text-center text-xl">Institution Name</header>
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-1/4 bg-green-100 p-4 space-y-4">
          <h2 className="font-semibold">Class Schedule</h2>
          <div className="border p-2 bg-white rounded">Math</div>
          <div className="border p-2 bg-white rounded">Science</div>

          <h2 className="font-semibold mt-4">Assignments</h2>
          <input type="text" placeholder="Submit Task" className="w-full p-2 border rounded mb-2" />
          <button className="w-full bg-green-500 text-white p-2 rounded">Submit</button>

          <button className="w-full bg-red-500 text-white p-2 rounded mt-4">Logout</button>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-4 grid grid-cols-2 gap-4">
          <div className="border p-4 bg-white rounded">Subjects</div>
          <div className="border p-4 bg-white rounded">Calendar</div>
          <div className="border p-4 bg-white rounded">Announcements</div>
        </main>
      </div>
    </div>
  );
}
