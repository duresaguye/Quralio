"use client";
import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    Filler,
} from 'chart.js';
import { FaHome, FaTasks, FaChartBar, FaCog } from 'react-icons/fa';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    Filler
);

const Dashboard = () => {
    // Sidebar state
    const [sidebarWidth, setSidebarWidth] = useState(250); // Initial sidebar width

    // Sample data for the charts
    const inventoryData = {
        labels: ['Plastic A', 'Plastic B', 'Plastic C', 'Plastic D'],
        datasets: [
            {
                label: 'Inventory Levels',
                data: [300, 150, 200, 100],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const impactData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Recycled Plastic Volume',
                data: [50, 75, 100, 125, 175],
                backgroundColor: 'rgba(255, 99, 132, 1)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
                tension: 0.1,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Items / Time',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Volume (kg)',
                },
            },
        },
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    // Fake data for pickups
    const pickups = [
        { id: '001', status: 'Pending', date: '2024-10-01' },
        { id: '002', status: 'Approved', date: '2024-10-02' },
        { id: '003', status: 'In Progress', date: '2024-10-03' },
        { id: '004', status: 'Completed', date: '2024-10-04' },
    ];

    // Fake data for processing status
    const processingStatuses = [
        { stage: 'Plastic Collection', progress: 70 },
        { stage: 'Sorting', progress: 50 },
        { stage: 'Recycling', progress: 25 },
        { stage: 'Final Processing', progress: 10 },
    ];

    // Function to handle resizing
    const handleMouseDown = (e) => {
        const startX = e.clientX;
        const startWidth = sidebarWidth;

        const handleMouseMove = (e) => {
            const newWidth = startWidth + e.clientX - startX;
            setSidebarWidth(newWidth > 100 ? newWidth : 100); // Minimum width of 100px
        };

        const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <div
                className="bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-md p-4 relative mt-16"
                style={{ width: `${sidebarWidth}px`, transition: 'width 0.2s' }}
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Dashboard Menu</h2>
                <ul>
                    <li className="flex items-center mb-2 cursor-pointer hover:bg-blue-600 p-2 rounded transition">
                        <FaHome className="mr-2" /> Home
                    </li>
                    <li className="flex items-center mb-2 cursor-pointer hover:bg-blue-600 p-2 rounded transition">
                        <FaTasks className="mr-2" /> Pickups
                    </li>
                    <li className="flex items-center mb-2 cursor-pointer hover:bg-blue-600 p-2 rounded transition">
                        <FaChartBar className="mr-2" /> Reports
                    </li>
                    <li className="flex items-center mb-2 cursor-pointer hover:bg-blue-600 p-2 rounded transition">
                        <FaCog className="mr-2" /> Settings
                    </li>
                </ul>
                <div
                    className="cursor-ew-resize w-2 h-full bg-blue-800 absolute right-0 top-0"
                    onMouseDown={handleMouseDown}
                />
            </div>

            <div className="flex-1 p-8 mt-10">
                <h1 className="text-4xl font-bold text-center mb-8">Recycling Company Dashboard</h1>

                <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {/* Pickups Info */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Manage Pickups</h3>
                        <ul className="space-y-1">
                            {pickups.map(pickup => (
                                <li key={pickup.id}>
                                    Pickup #{pickup.id} - <span className={`text-${pickup.status === 'Completed' ? 'green' : pickup.status === 'In Progress' ? 'yellow' : 'blue'}-600`}>{pickup.status}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Processing Status */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Processing Status</h3>
                        <ul className="space-y-1">
                            {processingStatuses.map(status => (
                                <li key={status.stage}>
                                    {status.stage} - <span className={`text-${status.progress === 100 ? 'green' : status.progress >= 50 ? 'yellow' : 'red'}-600`}>{status.progress}% Complete</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Simple Report Table */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h3 className="text-xl font-semibold mb-4">Plastic Volume Reports</h3>
                    <table className="w-full text-left">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Month</th>
                                <th className="px-4 py-2">Volume (kg)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">January</td>
                                <td className="border px-4 py-2">500</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">February</td>
                                <td className="border px-4 py-2">450</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">March</td>
                                <td className="border px-4 py-2">600</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">April</td>
                                <td className="border px-4 py-2">700</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-10 flex gap-6">
                    {/* Inventory Levels Chart */}
                    <div className="bg-white p-6 rounded-lg shadow-lg" style={{ width: '100%', maxWidth: '500px', height: '300px' }}>
                        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Inventory Levels</h3>
                        <Bar 
                            data={inventoryData} 
                            options={{
                                ...options,
                                responsive: true,
                                maintainAspectRatio: false,
                                scales: {
                                    x: {
                                        display: true,
                                        title: {
                                            display: true,
                                            text: 'Items',
                                        },
                                    },
                                    y: {
                                        display: true,
                                        title: {
                                            display: true,
                                            text: 'Volume (kg)',
                                        },
                                    },
                                },
                            }}
                        />
                    </div>

                    {/* Recycled Plastic Volume Chart */}
                    <div className="bg-white p-6 rounded-lg shadow-lg" style={{ width: '100%', maxWidth: '500px', height: '300px' }}>
                        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Recycled Plastic Volume</h3>
                        <Line 
                            data={impactData} 
                            options={{
                                ...options,
                                scales: {
                                    x: {
                                        display: true,
                                        title: {
                                            display: true,
                                            text: 'Time',
                                        },
                                    },
                                    y: {
                                        display: true,
                                        title: {
                                            display: true,
                                            text: 'Volume (kg)',
                                        },
                                    },
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
