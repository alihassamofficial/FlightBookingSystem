import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Home() {
  // Hook for Hero Section animation
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });

  // Hook for Top Destinations animation
  const [destinationsRef, destinationsInView] = useInView({ threshold: 0.3 });

  // Hook for Achievements animation
  const [achievementsRef, achievementsInView] = useInView({ threshold: 0.3 });

  return (
    <div className="bg-gray-50 ">
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-gray-50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center min-h-screen">
            {/* Left Content: Text (1/3 of the space) */}
            <div className="lg:w-1/3 text-left">
              <h1 className="text-4xl font-bold text-gray-900 leading-snug sm:text-5xl">
                <span className="text-blue-600">Book</span> Your <br />
                Dream <span className="text-blue-600">Flights</span> Now!
              </h1>
              <p className="mt-4 text-gray-600 text-lg">
                Lorem ipsum dolor sit amet consectetur. Felis tristique pretium
                leo nisi at risus ac enim.
              </p>
              <div className="mt-6">
                <Link
                  to="/"
                  className=" bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* Right Content: Airplane Image (2/3 of the space) */}
            <div className="lg:w-2/3 relative">
              <motion.img
                src="/images/plane.png"
                alt="Airplane"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-md mx-auto lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Top Destination Section */}
      <motion.div
        ref={destinationsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={destinationsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="relative bg-[#e6f4f6] py-20 min-h-screen overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="w-full md:w-1/3 space-y-10 z-10">
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <span className="text-4xl font-bold bg-gray-100 px-3 py-1 rounded">
                    TRAVEL
                  </span>
                  <span className="text-4xl font-bold bg-gray-100 px-3 py-1 rounded">
                    All
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-4xl font-bold bg-gray-100 px-3 py-1 rounded">
                    OVER
                  </span>
                  <span className="text-4xl font-bold bg-gray-100 px-3 py-1 rounded text-blue-500">
                    The
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-4xl font-bold bg-gray-100 px-3 py-1 rounded text-blue-500">
                    WORLD
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  to="/"
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="w-full md:w-2/3 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={destinationsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex items-center justify-center gap-4"
              >
                <img
                  src="/images/paris.png"
                  alt="Paris"
                  className="w-1/4 rounded-2xl border-4 border-white object-contain"
                />
                <img
                  src="/images/dubai.png"
                  alt="Dubai"
                  className="w-2/5 rounded-2xl border-4 border-white object-contain"
                />
                <img
                  src="/images/italy.png"
                  alt="Italy"
                  className="w-1/4 rounded-2xl border-4 border-white object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Achievements Section */}
      <motion.div
        ref={achievementsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={achievementsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="max-w-7xl mx-auto p-20"
      >
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Content */}
            <div className="flex-1 ">
              <span className="text-blue-500 font-medium">Achievement</span>

              <h2 className="text-2xl font-bold">
                Your Destination Awaits. Book Now
              </h2>

              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur. Sed leo sit semper sed
                facilisis ultrices urna eu. In tellus interdum vel ac massa
                interdum viverra elementum auctor.
              </p>

              <div className="flex flex-col mt-6 sm:flex-row gap-4">
                {/* Stats Box 1 */}
                <div className="flex-1 bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-blue-500 text-3xl font-bold">
                        12870 +
                      </div>
                      <div className="text-gray-600">Happy Customers</div>
                    </div>
                    <div className="bg-white p-3 rounded-full">
                      {/* <User className="w-6 h-6 text-blue-500" /> */}
                    </div>
                  </div>
                </div>

                {/* Stats Box 2 */}
                <div className="flex-1 bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-blue-500 text-3xl font-bold">
                        100 %
                      </div>
                      <div className="text-gray-600">Client Satisfied</div>
                    </div>
                    <div className="bg-white p-3 rounded-full">
                      {/* <User className="w-6 h-6 text-blue-500" /> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center mt-8 ">
                <p className="text-gray-800 font-medium mr-6">
                  Let's Connect Reach Out for More Information
                </p>
                <div className="">
                  <Link
                    to="/"
                    className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="/images/achievement-image.png"
                alt="Achievements"
                className="rounded-3xl w-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
