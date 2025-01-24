// src/app/dashboard/RequestPickup.js

import { useState } from "react";

export default function RequestPickup({ onRequest }) {
  const [pickupDate, setPickupDate] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onRequest({ pickupDate, pickupLocation }); // Callback to notify the parent component
    alert("Pickup requested successfully!"); // Show feedback
    // Reset form fields
    setPickupDate("");
    setPickupLocation("");
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h4 className="text-xl font-semibold mb-2">Request Pickup</h4>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Pickup Date:</label>
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Pickup Location:</label>
          <input
            type="text"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded"
            placeholder="Enter your pickup location"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Request Pickup
        </button>
      </form>
    </div>
  );
}
