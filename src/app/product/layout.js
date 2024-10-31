// src/app/products/layout.js
export default function ProductsLayout({ children }) {
  return (
    <div>
      <h2>Products</h2>
      <nav>
        <a href="/products">All Products</a>
      </nav>
      <div>{children}</div>
    </div>
  );
}
