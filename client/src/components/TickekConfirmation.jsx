import React from "react";
import { useLocation } from "react-router-dom";
import { useFlightSearchParams } from "../context/FlightContext";

import { motion } from "framer-motion";

export default function TickekConfirmation() {
  const { searchParams, setSearchParams } = useFlightSearchParams();
  const location = useLocation();
  const { flight } = location.state;
  return (
    <motion.div
      className="bg-gray-50 min-h-screen p-4 flex justify-center"
      initial={{ opacity: 0 }} // Initial state: transparent
      animate={{ opacity: 1 }} // Animate to fully visible
      transition={{ duration: 0.8 }} // Fade duration
    >
      <div className="w-full max-w-6xl  p-6">
        {/* Step Indicator */}
        <div className="flex justify-around items-center bg-white p-4 shadow-md rounded-lg mb-8">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center">
              ✓
            </div>
            <span className="ml-2 text-sm font-semibold text-gray-700">
              Your Selection
            </span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center">
              ✓
            </div>
            <span className="ml-2 text-sm font-semibold text-blue-600">
              Booking Details
            </span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center">
              3
            </div>
            <span className="ml-2 text-sm font-semibold text-gray-500">
              Confirmation
            </span>
          </div>
        </div>

        {/* Main Content */}
        <motion.div
          className="w-full max-w-md mx-auto  bg-white rounded-md "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Booking Details Header */}
          <div className="bg-purple-800 text-white p-6 rounded-t-lg">
            <div className="text-sm uppercase mb-4">Booking Details</div>
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">{flight.from}</div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/images/airplane.png"
                  className="w-8 h-8 object-contain"
                />
                <div className="text-sm uppercase mb-4">
                  {searchParams.classType}
                </div>
              </div>
              <div className="text-lg font-semibold">{flight.to}</div>
            </div>
            {/* <div className="flex items-center justify-between text-xs mt-2 text-gray-200">
              <div>{flight.from}</div>
              <div>{flight.to}</div>
            </div> */}
          </div>

          {/* Booking Info Section */}
          <div className="p-6 space-y-4">
            <div className="flex justify-between text-sm">
              <div>
                <div className="text-gray-500">DEPARTURE DATE</div>
                <div>{new Date(flight.departureDate).toLocaleDateString()}</div>
              </div>
              <div className="text-end">
                <div className="text-gray-500">ARRIVAL DATE</div>
                <div>{new Date(flight.arrivalDate).toLocaleDateString()}</div>
              </div>
            </div>

            <div className="flex justify-between text-sm">
              <div>
                <div className="text-gray-500">PASSENGERS</div>
                <div>{searchParams.adultCount} Adult</div>
                {searchParams.childCount > 0 && (
                  <div>{searchParams.childCount} Child</div>
                )}
                {searchParams.infantCount > 0 && (
                  <div>{searchParams.infantCount} Infant</div>
                )}
              </div>
              <div className="text-end">
                <div className="text-gray-500">PRICE</div>
                <div>$425.6</div>
              </div>
            </div>

            {/* Confirmation Message */}
            <div className="text-xs text-gray-500">
              Please check your email. Your booking confirmation is already sent
              to your email. If you didn&apos;t receive any confirmation in the
              next 5 mins, please call us at the number below.
            </div>

            {/* Contact Button */}
            <button className="w-full bg-red-500 hover:bg-red-600 py-2 px-4 rounded-md text-white font-semibold">
              0207-404-4545
            </button>

            {/* Booking Confirmation */}
            <div className="text-center space-y-2">
              <div className="text-sm">YOUR BOOKING IS CONFIRMED</div>
              <div className="border-t border-dashed pt-4"></div>
              <div className="text-xs text-gray-500">Booking Reference</div>
              <div className="font-mono">FXTDC297944</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
