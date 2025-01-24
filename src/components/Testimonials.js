'use client';

import { useEffect, useRef } from 'react';

export default function Testimonials() {
  const scrollRef = useRef(null);

  // Automatic scrolling effect
  useEffect(() => {
    const scroll = scrollRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      scrollAmount += 1;
      if (scrollAmount >= scroll.scrollWidth - scroll.clientWidth) {
        scrollAmount = 0;
      }
      scroll.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  const testimonials = [
    {
      name: "Alex Johnson",
      text: "This platform has completely changed how I handle waste. Truly a game changer!",
    },
    {
      name: "Rita Garcia",
      text: "I love the concept of using plastic as money! It's eco-friendly and practical.",
    },
    {
      name: "Samuel Lee",
      text: "A sustainable approach that benefits communities and helps the environment.",
    },
    {
      name: "Nina Patel",
      text: "I have learned so much about recycling and making a difference thanks to this platform.",
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">What People Are Saying</h2>
      <div
        className="overflow-hidden w-full flex"
        ref={scrollRef}
      >
        <div className="flex space-x-8 min-w-max">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col p-4 bg-white shadow-lg rounded-lg max-w-xs mx-4"
            >
              <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
              <h3 className="text-gray-800 font-semibold text-right">- {testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
