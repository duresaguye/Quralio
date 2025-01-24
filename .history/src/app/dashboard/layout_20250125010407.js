"use client";

import Link from "next/link"; // Import Link here
import { useState } from "react";
import { FaBars, FaUserCircle, FaRecycle, FaSignOutAlt } from "react-icons/fa";
import ProfileUpdate from "./profile/page"; // Import the ProfileUpdate component

export default function RootLayout({ children }) {
  const [role, setRole] = useState("producer"); // Change to "recycler" for testing
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // For the resizable sidebar
  const [isEditingProfile, setIsEditingProfile] = useState(false); // State to toggle profile edit form

  const handleLogout = () => {
    // Implement logout logic here
  };

  const handleProfileUpdate = (updatedProfile) => {
    // Handle the updated profile data (e.g., send to API)
    console.log(updatedProfile);
    setIsEditingProfile(false); // Close the profile update form after submission
  };

  return (
    <div className="flex min-h-screen bg-gray-100 ">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-blue-800 p-4 text-white transition-width duration-300 ease-in-out`}
      >
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-xl mb-4 block focus:outline-none"
        >
          <FaBars />
        </button>
        <div className="flex flex-col items-center space-y-4">
          <FaUserCircle className="text-4xl" />
          {isSidebarOpen && (
            <div className="text-center">
              <h2 className="text-lg font-semibold">Profile</h2>
              <p>John Doe</p>
            </div>
          )}
          <nav className="flex flex-col items-center space-y-4 mt-6">
            <Link href="/" className="flex items-center space-x-2">
              <FaRecycle />
              {isSidebarOpen && <span>Dashboard</span>}
            </Link>
            <button
              onClick={() => setIsEditingProfile(!isEditingProfile)}
              className="flex items-center space-x-2"
            >
              <FaUserCircle />
              {isSidebarOpen && <span>Edit Profile</span>}
            </button>
            <button onClick={handleLogout} className="flex items-center space-x-2 mt-10">
              <FaSignOutAlt />
              {isSidebarOpen && <span>Logout</span>}
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Show Profile Update Form */}
        {isEditingProfile && <ProfileUpdate onUpdate={handleProfileUpdate} />}
        <main>{children}</main>

        {/* Your existing dashboard content goes here... */}
      </div>
    </div>
  );
}
