export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to Neurons</h1>
      <a href="/login" className="px-4 py-2 bg-blue-600 text-white rounded">
        Go to Login
      </a>
    </div>
  );
}
