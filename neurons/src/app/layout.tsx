import "./globals.css"; // Ensure correct path

export const metadata = {
  title: "Neurons Dashboard",
  description: "Faculty & Student Management System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
