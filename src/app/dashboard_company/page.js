"use client";
import React from 'react';
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

    return (
        <div className="min-h-screen bg-gray-100 p-8 mt-10">
            <h1 className="text-4xl font-bold text-center mb-8">Recycling Company Dashboard</h1>

            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {/* Pickups Info */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Manage Pickups</h3>
                    <ul className="space-y-1">
                        <li>Pickup #001 - <span className="text-blue-600">Pending</span></li>
                        <li>Pickup #002 - <span className="text-green-600">Approved</span></li>
                        <li>Pickup #003 - <span className="text-yellow-600">In Progress</span></li>
                    </ul>
                </div>

                {/* Processing Status */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Processing Status</h3>
                    <ul className="space-y-1">
                        <li>Plastic Collection - <span className="text-green-600">70% Complete</span></li>
                        <li>Sorting - <span className="text-yellow-600">50% Complete</span></li>
                        <li>Recycling - <span className="text-red-600">25% Complete</span></li>
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
                        max: 300,
                    },
                },
            }}
        />
    </div>

    {/* Recycled Plastic Volume Chart */}
    <div className="bg-white p-6 rounded-lg shadow-lg" style={{ width: '100%', maxWidth: '500px', height: '300px' }}>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Recycled Plastic Volume Over Time</h3>
        <Line 
            data={impactData} 
            options={{
                ...options,
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Time (Months)',
                        },
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Volume (kg)',
                        },
                        max: Math.max(...impactData.datasets[0].data) + 50,
                    },
                },
            }} 
        />
    </div>
</div>


        </div>
    );
};

export default Dashboard;
