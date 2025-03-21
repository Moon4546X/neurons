import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to Neurons Dashboard</h1>
      <div className="space-x-4">
        <Link href="/login" className="px-4 py-2 bg-blue-500 text-white rounded">
          Login
        </Link>
        <Link href="/student" className="px-4 py-2 bg-green-500 text-white rounded">
          Student Dashboard
        </Link>
        <Link href="/teacher" className="px-4 py-2 bg-purple-500 text-white rounded">
          Teacher Dashboard
        </Link>
      </div>
    </div>
  );
}
