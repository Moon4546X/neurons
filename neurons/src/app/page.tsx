"use client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Institution Name</h1>
      <div className="grid grid-cols-2 gap-8">
        {/* Faculty Login */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Faculty Login</h2>
          <input type="text" placeholder="Username" className="border p-2 mb-2 w-full" />
          <input type="password" placeholder="Password" className="border p-2 mb-2 w-full" />
          <button
            className="bg-blue-500 text-white px-4 py-2 w-full mt-2"
            onClick={() => router.push("/faculty")}
          >
            Login
          </button>
        </div>

        {/* Student Login */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Student Login</h2>
          <input type="text" placeholder="Username" className="border p-2 mb-2 w-full" />
          <input type="password" placeholder="Password" className="border p-2 mb-2 w-full" />
          <button
            className="bg-green-500 text-white px-4 py-2 w-full mt-2"
            onClick={() => router.push("/student")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

