"use client"  

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const categories = [
    { name: "Blog Posts", path: "/category/blog-posts", icon: faBlog },
    { name: "Tips & Guides", path: "/category/tips-guides" },
    { name: "Eco-News", path: "/category/eco-news" },
    { name: "Local Pickup Services", path: "/category/local-pickup" },
    { name: "Plastic Recycling", path: "/category/plastic-recycling" },
  ];

  return (
    <header className="bg-gray-300 text-gray-900 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center h-16 px-6 text-1xl">
        <h1 className="text-2xl md:text-3xl font-bold">Quralio</h1>
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-16">
          <a href="/" className="hover:text-gray-700 transition duration-200">
            Home
          </a>
          <a href="/about" className="hover:text-gray-700 transition duration-200">
            About
          </a>
          <a href="/services" className="hover:text-gray-700 transition duration-200">
            Services
          </a>
          <a href="/contact" className="hover:text-gray-700 transition duration-200">
            Contact
          </a>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="hover:text-gray-700 transition duration-200 flex items-center"
            >
              Blog and Eco-News <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                {categories.map((category) => (
                  <a
                    key={category.name}
                    href={category.path}
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-200"
                  >
                    {category.icon && <FontAwesomeIcon icon={category.icon} className="mr-2" />}
                    {category.name}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
            Sign Up
          </a>
          <a href="/login" className="text-gray-800 hover:text-gray-700 transition duration-200">
            Login
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <div className="absolute top-0 left-0 w-64 h-full bg-gray-300 p-6">
          <button onClick={() => setIsMenuOpen(false)} className="focus:outline-none mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <nav className="space-y-4">
            <a href="/" className="block hover:text-gray-300 transition duration-200">
              Home
            </a>
            <a href="/about" className="block hover:text-gray-300 transition duration-200">
              About
            </a>
            <a href="/services" className="block hover:text-gray-300 transition duration-200">
              Services
            </a>
            <a href="/contact" className="block hover:text-gray-300 transition duration-200">
              Contact
            </a>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="hover:text-gray-300 transition duration-200 w-full text-left flex items-center"
            >
              Blog and Blog-News <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
            </button>
            {isDropdownOpen && (
              <div className="pl-4 space-y-2">
                {categories.map((category) => (
                  <a
                    key={category.name}
                    href={category.path}
                    className="flex items-center text-gray-900 hover:text-gray-700 transition duration-200"
                  >
                    {category.icon && <FontAwesomeIcon icon={category.icon} className="mr-2" />}
                    {category.name}
                  </a>
                ))}
              </div>
            )}
            <a href="/signup" className="block bg-blue-600 text-white px-1 py-2 rounded-md hover:bg-blue-700 transition duration-200">
              Sign Up
            </a>
            <a href="/login" className="block text-gray-900 hover:text-gray-400 transition duration-200">
              Login
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}