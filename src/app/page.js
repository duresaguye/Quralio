/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: false,
            email,
            password,
        });

        if (result.ok) {
            router.push('/');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="min-h-screen bg-white text-white flex items-center justify-center">
            <div className="relative z-10 w-full max-w-md bg-opacity-90 p-8 rounded-lg shadow-lg text-white">
                <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg mt-10">
                    {error && <p className="text-red-500">{error}</p>}
                    <h1 className="text-4xl font-bold mb-6 text-center">Login</h1>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 w-full transition duration-300"
                    >
                        Login
                    </button>
                    <p className="mt-4 text-gray-300">Don&apos;t have an account?</p>
                    <button
                        onClick={() => router.push('/signup')}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 w-full transition duration-300"
                    >
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;