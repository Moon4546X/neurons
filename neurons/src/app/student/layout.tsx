export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Institution Dashboard</title>
      </head>
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
