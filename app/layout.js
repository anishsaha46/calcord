import { Inter } from "next/font/google";
import "./globals.css";



export const metadata = {
  title: "Calcord",
  description: "Clone of Calendly",
};

const inter=Inter({subsets:["latin"]});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`inter.className`}
      >
      {/* header */}
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
          {children}
        </main>
        {/* footer */}
        <footer className="bg-blue-100 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            &copy; {new Date().getFullYear()} Calcord. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
