// src/app/api/pickups/route.js
export async function POST(request) {
  const { userId, location } = await request.json(); // Example data
  // Process the pickup request (e.g., save to database)

  return new Response(JSON.stringify({ message: 'Pickup request received' }), { status: 200 });
}
