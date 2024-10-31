"use client";
import Link from "next/link";

export default function Dashboard() {
  const handlePickupRequest = () => {
    // Logic to request a pickup can go here
    alert("Pickup Requested!");
  };

  const handleWithdraw = () => {
    // Logic to handle withdrawal can go here
    alert("Withdrawal Requested!");
  };

  const handleLogout = () => {

  
  }

  return (
    <div className="p-6 bg-gray-50 mt-10" >
      <h3 className="text-2xl font-bold mb-4">Your Dashboard</h3>
      
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h4 className="text-xl font-semibold">Withdraw Funds</h4>
        <p className="text-lg text-green-600">100 birr Available</p>
        <button
          onClick={handleWithdraw}
          className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
        >
          Request Withdrawal
        </button>
      </div>
      
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h4 className="text-xl font-semibold mb-2">Recent Pickup Requests</h4>
        <ul className="list-disc pl-5">
          <li>Pickup on October 15th - Status: Completed</li>
          <li>Pickup on October 10th - Status: Pending</li>
          <li>Pickup on October 5th - Status: Completed</li>
        </ul>
      </div>

      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h4 className="text-xl font-semibold mb-2">Track Your Contributions</h4>
        <p>Your total plastic collected: <strong>200 kg</strong></p>
        <p>Last contribution: <strong>50 kg</strong> on October 20th</p>
      </div>

      <button
        onClick={handlePickupRequest}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Request Pickup
      </button>
    </div>
  );
}
