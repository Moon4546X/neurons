"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [userType, setUserType] = useState("");

  const handleLogin = () => {
    if (userType === "faculty") {
      router.push("/faculty");
    } else if (userType === "student") {
      router.push("/student");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <select
        className="p-2 border rounded mb-4"
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
      >
        <option value="">Select Role</option>
        <option value="faculty">Faculty</option>
        <option value="student">Student</option>
      </select>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

