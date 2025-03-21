const StudentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="p-4 bg-green-600 text-white">Student Dashboard</header>
      <main className="p-6">{children}</main>
    </div>
  );
};

export default StudentLayout;

