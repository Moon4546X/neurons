"use client";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="w-1/5 bg-gray-800 text-white p-4">
      <nav className="space-y-4">
        <button onClick={() => router.push("/faculty")} className="block">
          Faculty Dashboard
        </button>
        <button onClick={() => router.push("/student")} className="block">
          Student Dashboard
        </button>
        <button onClick={() => router.push("/report")} className="block">
          Reports
        </button>
      </nav>
    </aside>
  );
}
