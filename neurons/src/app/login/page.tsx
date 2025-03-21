"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Institution Name</h1>
        <div className="grid grid-cols-2 gap-4">
          {/* Faculty Login */}
          <div className="border p-4 rounded-lg shadow-md bg-gray-50">
            <h2 className="text-lg font-semibold mb-2">Faculty Login</h2>
            <input type="text" placeholder="Username" className="w-full p-2 border rounded mb-2" />
            <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-2" />
            <button 
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              onClick={() => router.push("/dashboard/faculty")}
            >
              Login
            </button>
            <p className="text-sm text-blue-500 cursor-pointer mt-2">Forgot Password?</p>
          </div>

          {/* Student Login */}
          <div className="border p-4 rounded-lg shadow-md bg-gray-50">
            <h2 className="text-lg font-semibold mb-2">Student Login</h2>
            <input type="text" placeholder="Username" className="w-full p-2 border rounded mb-2" />
            <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-2" />
            <button 
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
              onClick={() => router.push("/dashboard/student")}
            >
              Login
            </button>
            <p className="text-sm text-green-500 cursor-pointer mt-2">Forgot Password?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
