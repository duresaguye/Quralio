import React from 'react';

const CallToAction = () => {
  return (
    <div className="  text-center py-10 px-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
      <p className="text-lg mb-6">
        Be a part of our mission to combat plastic pollution. Participate, donate, or support our cause to make a real difference in the world.
      </p>
      <a
        href="/get-involved" // Adjust the path as necessary
        className="bg-blue-600 text-white px-6 py-2 font-semibold rounded-lg hover:bg-gray-200 transition"
      >
        Get Involved
      </a>
    </div>
  );
};

export default CallToAction;
