// src/app/dashboard/layout.js

import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100 mt-10">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <Link href="/dashboard" className="text-2xl font-bold mb-4">Dashboard</Link>
       
        <nav className="flex flex-col space-y-2">
          <Link href="/dashboard/overview" className="text-gray-800 hover:text-blue-500">
            Overview
          </Link>
          <Link href="/dashboard/pickups" className="text-gray-800 hover:text-blue-500">
            Pickups
          </Link>
          <Link href="/dashboard/profile" className="text-gray-800 hover:text-blue-500">
            Profile
          </Link>
          <Link href="/dashboard/settings" className="text-gray-800 hover:text-blue-500">
            Settings
          </Link>
          <Link href="/dashboard/logout" className="text-red-500 hover:text-red-600">
            Logout
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
