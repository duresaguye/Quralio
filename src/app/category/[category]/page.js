"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { products } from '@/data';


export default function CategoryPage() {
  const router = useRouter();
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (router.isReady) {
      const { category } = router.query;
      console.log('Router Query:', router.query); 
      setCategory(category || '');
    }
  }, [router.isReady, router.query]);

  // Debugging: Log the category value
  console.log('Category:', category);

  const categoryData = products[category] || [];

  // Debugging: Log the category data
  console.log('Category Data:', categoryData);

  return (
    < >
      <h2 className="text-3xl font-bold mb-4 text-center mt-40">Coming Soon{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categoryData.length > 0 ? (
          categoryData.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow rounded">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600"></p>
        )}
      </div>
    </>
  );
}