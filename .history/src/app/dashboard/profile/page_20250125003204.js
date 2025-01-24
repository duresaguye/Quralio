// src/app/dashboard/ProfileUpdate.js

import { useState } from "react";

export default function ProfileUpdate({ onUpdate }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to update the profile, e.g., send data to the server
    onUpdate({ name, password, location }); // Callback to notify the parent component
    alert("Profile updated successfully!"); // Show feedback
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h4 className="text-xl font-semibold mb-2">Update Profile</h4>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block mb-1">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded"
            placeholder="Enter new password"
          />
        </div>
        <div>
          <label className="block mb-1">Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded"
            placeholder="Enter your location"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}
