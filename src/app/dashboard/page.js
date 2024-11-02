"use client";
import Link from "next/link"; // Import Link here
import { useState } from "react";
import { FaBars, FaUserCircle, FaTrash, FaRecycle, FaSignOutAlt } from "react-icons/fa";
import RequestPickup from "./requestPickup/page";


export default function Dashboard() {
  const [role, setRole] = useState("producer"); // Change to "recycler" for testing
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // For the resizable sidebar
  const [isRequestingPickup, setIsRequestingPickup] = useState(false); // State to manage pickup request form visibility

  // Handlers for producer actions
  const handlePickupRequest = (requestDetails) => {
    console.log(requestDetails); // Handle the pickup request data (e.g., send to API)
    setIsRequestingPickup(false); // Close the pickup request form after submission
  };

  const handleWithdraw = () => {
    alert("Withdrawal Requested!");
  };

  // Handlers for recycler actions
  const handleApproveRequest = () => {
    alert("Pickup Approved!");
  };

  const handleRejectRequest = () => {
    alert("Pickup Rejected!");
  };

  const handleLogout = () => {
    // Implement logout logic here
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 p-6">
        <h3 className="text-2xl font-bold mb-6">Dashboard</h3>

        {/* Plastic Waste Producer Dashboard */}
        {role === "producer" && (
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-2">Withdraw Funds</h4>
              <p className="text-lg text-green-600">100 birr Available</p>
              <button
                onClick={handleWithdraw}
                className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
              >
                Request Withdrawal
              </button>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-2">Recent Pickup Requests</h4>
              <ul className="list-disc pl-5">
                <li>Pickup on October 15th - Status: Completed</li>
                <li>Pickup on October 10th - Status: Pending</li>
                <li>Pickup on October 5th - Status: Completed</li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 col-span-2">
              <h4 className="text-xl font-semibold mb-2">Track Your Contributions</h4>
              <p>Your total plastic collected: <strong>200 kg</strong></p>
              <p>Last contribution: <strong>50 kg</strong> on October 20th</p>
            </div>
              {isRequestingPickup && (
              <div className="col-span-2">
                <RequestPickup onRequest={handlePickupRequest} />
              </div>
            )}

            <button
              onClick={() => setIsRequestingPickup(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 md:col-span-2"
            >
              Request Pickup
            </button>

          
          </div>
        )}

        {/* Recycling Company Dashboard */}
        {role === "recycler" && (
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-2">Incoming Pickup Requests</h4>
              <ul className="list-disc pl-5">
                <li>
                  Request from Producer A - 100 kg -
                  <button onClick={handleApproveRequest} className="text-green-500 ml-2">Approve</button>
                  <button onClick={handleRejectRequest} className="text-red-500 ml-2">Reject</button>
                </li>
                <li>
                  Request from Producer B - 150 kg -
                  <button onClick={handleApproveRequest} className="text-green-500 ml-2">Approve</button>
                  <button onClick={handleRejectRequest} className="text-red-500 ml-2">Reject</button>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-2">Processing Status</h4>
              <p>In Transit: <strong>200 kg</strong></p>
              <p>Recycled: <strong>500 kg</strong></p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 col-span-2">
              <h4 className="text-xl font-semibold mb-2">Plastic Volume Reports</h4>
              <p>Monthly Report: <strong>600 kg</strong> processed</p>
              <p>Yearly Report: <strong>7200 kg</strong> processed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}