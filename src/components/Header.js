// components/Header.js
"use client";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center h-16 px-6">
        <h1 className="text-3xl font-bold text-white">Quralio</h1>
        <nav className="flex items-center space-x-16">
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
      </div>
    </header>
  );
}
