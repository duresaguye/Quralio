// components/HomePage.js
"use client";

import { useRef } from 'react';
import Sidebar from "@/components/Sidebar";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import CallToAction from '@/components/CallToAction';

export default function HomePage() {
  // Create a reference for the How It Works section
  const howItWorksRef = useRef(null);

  // Function to scroll to the How It Works section
  const scrollToHowItWorks = () => {
    if (howItWorksRef.current) {
      howItWorksRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
        <div className="relative flex flex-col items-center justify-center bg-cover bg-center" 
             style={{ backgroundImage: "url('/background.webp')" }} 
        >
          {/* Background blur overlay */}
          <div className="absolute inset-0 bg-black opacity-60 backdrop-blur-md"></div>
          
          <h1 className="text-2xl md:text-4xl font-bold text-white text-center mb-4 relative z-10 mt-11">
            We’re solving poverty and plastic pollution
            <br />
            with one transformative idea
          </h1>
          <p className="text-3xl md:text-5xl font-bold text-white text-center mb-8 relative z-10">
            Plastic as Money
          </p>
          
          <button 
            onClick={scrollToHowItWorks}
            className="mt-4 px-4 py-2 mb-10 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition relative z-10"
          >
            Learn More
          </button>
        </div>
      
      {/* How It Works Section with ref */}
      <div ref={howItWorksRef}>
        <HowItWorks />
      </div>

      <Testimonials />
      <CallToAction />
    </div>
  );
}
