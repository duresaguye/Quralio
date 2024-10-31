// src/app/api/products/route.js
let products = []; // This could be fetched from a database in a real app

export async function GET() {
  return new Response(JSON.stringify(products), { status: 200 });
}

export async function POST(request) {
  const newProduct = await request.json();
  products.push(newProduct);
  return new Response(JSON.stringify(newProduct), { status: 201 });
}
