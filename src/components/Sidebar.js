'use client';

import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();

  const categories = [
    { name: "Blog Posts", path: "/category/blog-posts" },
    { name: "Tips & Guides", path: "/category/tips-guides" },
    { name: "Eco-News", path: "/category/eco-news" },
    { name: "Local Pickup Services", path: "/category/local-pickup" },
    { name: "Plastic Recycling", path: "/category/plastic-recycling" },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-100 p-4 shadow-lg mt-16">
      <div>
        <h2 className="relative text-2xl font-bold z-10 flex items-center justify-center h-full">
          Content Categories
        </h2>
      </div>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.name}>
            <button
              onClick={() => router.push(category.path)}
              className="block text-left text-gray-800 hover:bg-gray-200 hover:text-gray-900 py-2 px-4 rounded transition duration-200"
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
