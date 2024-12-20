import React from "react";

function Airlines() {
  return (
    <div className="container mt-4 mx-auto p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-xl">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold mb-6 animate__animated animate__fadeIn">
          Airlines
        </h1>
        <p className="text-xl mb-8 font-light leading-relaxed max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
          Explore a wide range of airlines and their exceptional services,
          tailored to meet your travel needs.
        </p>
        <div className="bg-white text-blue-600 rounded-lg p-6 shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Coming Soon!</h2>
          <p className="text-lg font-medium text-gray-800">
            We're working hard to bring you exciting new features. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Airlines;
