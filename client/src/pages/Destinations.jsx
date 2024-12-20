import React from "react";

function Destinations() {
  return (
    <div className="container mx-auto mt-4 p-8 bg-gradient-to-r from-teal-500 to-indigo-600 text-white rounded-lg shadow-xl">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold mb-6 animate__animated animate__fadeIn">
          Destinations
        </h1>
        <p className="text-xl mb-8 font-light leading-relaxed max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
          Find your dream destinations and start planning your next adventure.
          Your perfect getaway awaits!
        </p>
        <div className="bg-white text-teal-600 rounded-lg p-6 shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Coming Soon!</h2>
          <p className="text-lg font-medium text-gray-800">
            We're working hard to add new and exciting destinations. Stay tuned
            for updates!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
