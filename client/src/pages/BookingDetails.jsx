import React from "react";
import { useLocation } from "react-router-dom";
import { useFlightSearchParams } from "../context/FlightContext";

const BookingDetailsForm = () => {
  const { searchParams, setSearchParams } = useFlightSearchParams();

  const location = useLocation();
  const { flight } = location.state; // Get the flight data passed in state

  const selectedClass = flight.classes.find(
    (cls) =>
      cls.classType.toLowerCase() === searchParams.classType.toLowerCase()
  );

  const totalPrice =
    selectedClass.prices.adult * searchParams.adultCount +
    selectedClass.prices.child * searchParams.childCount +
    selectedClass.prices.infant * searchParams.infantCount;

  return (
    <div className="bg-gray-50 min-h-screen p-4 flex justify-center">
      <div className="w-full max-w-6xl bg-white shadow-md rounded-lg p-6">
        {/* Step Indicator */}
        <div className="flex justify-around items-center mb-8">
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
              2
            </div>
            <span className="ml-2 text-sm font-semibold text-blue-600">
              Your Details
            </span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center">
              3
            </div>
            <span className="ml-2 text-sm font-semibold text-gray-500">
              Final Step
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-4">
          {/* Left Form */}
          <div className="col-span-2">
            <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>
            <form className="grid grid-cols-2 gap-4">
              <select className="col-span-1 border p-2 rounded">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <input
                type="text"
                placeholder="First Name"
                className="col-span-1 border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="col-span-2 border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="col-span-1 border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Nationality"
                className="col-span-1 border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Your Number"
                className="col-span-1 border p-2 rounded"
              />
              <input
                type="date"
                placeholder="Date of Birth"
                className="col-span-1 border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="col-span-1 border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Flight Number"
                className="col-span-1 border p-2 rounded"
              />
            </form>

            {/* Save Details */}
            <div className="mt-6">
              <h3 className="font-semibold">Save your details!</h3>
              <p className="text-sm text-gray-500 mb-2">
                Use your contact details to create an account for faster
                bookings.
              </p>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Save my details for next time</span>
              </label>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-1 space-y-4">
            {/* Booking Summary Card */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold mb-4">
                Your Booking Detail
              </h3>
              <div className="text-sm text-gray-600">
                <p className="flex justify-between">
                  <span>{flight.from}</span>
                  <span>→</span>
                  <span>{flight.to}</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {flight.flightStops} Stop | {flight.travelTime}
                </p>
                <p className="mt-2 text-sm">
                  Departure:{" "}
                  <strong>
                    {new Date(flight.departureDate).toLocaleDateString()}
                  </strong>
                </p>
                <p className="text-sm">
                  Arrival:{" "}
                  <strong>
                    {new Date(flight.arrivalDate).toLocaleDateString()}
                  </strong>
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Operated by {flight.airline} | Flight {flight.flightNumber}{" "}
                  <br />
                  25KG luggage free
                </p>
              </div>
            </div>

            {/* Price Summary Card */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold mb-4">Price Details</h3>
              <div className="text-sm text-gray-700 space-y-2">
                {selectedClass && (
                  <>
                    {/* Adult Price */}
                    <div className="flex justify-between">
                      <span>{searchParams.adultCount} x Adult </span>
                      <span>
                        {searchParams.adultCount} x $
                        {selectedClass.prices.adult}
                      </span>
                    </div>
                    <hr className="my-2 border-gray-300" />
                    {/* Child Price */}
                    <div className="flex justify-between">
                      <span>{searchParams.childCount} x Child </span>
                      <span>
                        {searchParams.childCount} x $
                        {selectedClass.prices.child}
                      </span>
                    </div>
                    <hr className="my-2 border-gray-300" />
                    {/* Infant Price */}
                    <div className="flex justify-between">
                      <span>{searchParams.infantCount} x Infant </span>
                      <span>
                        {searchParams.infantCount} x $
                        {selectedClass.prices.infant}
                      </span>
                    </div>
                    <hr className="my-2 border-gray-300" />
                  </>
                )}
                {/* Service Charges */}
                <div className="flex flex-col justify-between my-4">
                  <div className="text-lg font-semibold mb-2">
                    Final Total Price
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="w-2/3 text-sm text-gray-600">
                      All prices (including taxes & fees) are updated in USD
                    </span>
                    <span className="text-xl font-bold text-gray-900">
                      ${totalPrice}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsForm;
