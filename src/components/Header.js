// components/Header.js
"use client";

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800">
      <div className="container mx-auto flex justify-between items-center h-16 px-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Quralio</h1>
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-16">
          <a href="/" className="text-white hover:text-gray-300 transition duration-200">
            Home
          </a>
          <a href="/about" className="text-white hover:text-gray-300 transition duration-200">
            About
          </a>
          <a href="/services" className="text-white hover:text-gray-300 transition duration-200">
            Services
          </a>
          <a href="/contact" className="text-white hover:text-gray-300 transition duration-200">
            Contact
          </a>
          <a href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
            Sign Up
          </a>
          <a href="/login" className="text-gray-200 hover:text-gray-400 transition duration-200">
            Login
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <div className="absolute top-0 left-0 w-64 h-full bg-gray-800 p-6">
          <button onClick={() => setIsMenuOpen(false)} className="text-white focus:outline-none mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <nav className="space-y-4">
            <a href="/" className="block text-white hover:text-gray-300 transition duration-200">
              Home
            </a>
            <a href="/about" className="block text-white hover:text-gray-300 transition duration-200">
              About
            </a>
            <a href="/services" className="block text-white hover:text-gray-300 transition duration-200">
              Services
            </a>
            <a href="/contact" className="block text-white hover:text-gray-300 transition duration-200">
              Contact
            </a>
            <a href="/signup" className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
              Sign Up
            </a>
            <a href="/login" className="block text-gray-200 hover:text-gray-400 transition duration-200">
              Login
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}