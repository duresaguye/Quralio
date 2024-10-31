// src/app/products/[id]/page.js
import { useRouter } from 'next/router';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query; // Get product ID from URL

  return (
    <div>
      <h3>Product Details for {id}</h3>
      <p>Here you can show the details of the product.</p>
    </div>
  );
}
