import { AnnouncementProvider } from "../app/context/AnnouncementContext";
import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <AnnouncementProvider>{children}</AnnouncementProvider>
            </body>
        </html>
    );
}
