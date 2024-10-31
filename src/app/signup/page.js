"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Signup = () => {
    const router = useRouter();
    const [userType, setUserType] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [location, setLocation] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (userType === 'producer') {
            router.push('/producer-dashboard');
        } else if (userType === 'recycler') {
            router.push('/recycler-dashboard');
        } else {
            setError("Please select a user type.");
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Image */}
            <div 
                className="hidden md:flex w-1/2 bg-cover bg-center "
                style={{
                    backgroundImage: `url('signupimage.webp')`
                }}
            />

            {/* Right Side - Form */}
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white text-gray-700 p-8">
                <div className="container mx-auto max-w-md">
                    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h1 className="text-4xl font-bold text-center text-white">Sign Up</h1>
                        {error && <p className="text-red-500">{error}</p>}

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">User Type</label>
                            <select 
                                value={userType} 
                                onChange={(e) => setUserType(e.target.value)} 
                                className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-200"
                                required
                            >
                                <option value="">Select user type</option>
                                <option value="producer">Plastic Waste Producer</option>
                                <option value="recycler">Recycling Company</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-200"
                                placeholder="Enter your Full Name"
                                required
                            />
                        </div>

                        {/* Additional form fields for Location and House Number if userType is 'producer' */}
                        {userType === 'producer' && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">Location</label>
                                    <input
                                        type="text"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-200"
                                        placeholder="Enter your Location"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">House Number</label>
                                    <input
                                        type="text"
                                        value={houseNumber}
                                        onChange={(e) => setHouseNumber(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-200"
                                        placeholder="Enter your House Number"
                                        required
                                    />
                                </div>
                            </>
                        )}

                        {/* Additional form fields for Company Name if userType is 'recycler' */}
                        {userType === 'recycler' && (
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Company Name</label>
                                <input
                                    type="text"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-200"
                                    placeholder="Enter your Company Name"
                                    required
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-200"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-200"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-200"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 w-full transition duration-300"
                        >
                            Sign Up
                        </button>
                        <p className="mt-4 text-gray-300">Already have an account?</p>
                        <button
                            type="button"
                            onClick={() => router.push('/login')}
                            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 w-full transition duration-300"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
