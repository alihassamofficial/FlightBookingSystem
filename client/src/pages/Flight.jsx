import React, { useState, useEffect } from "react";
import axios from "axios";
import FlightSearchForm from "../components/FlightSearchForm";
import { useFlightSearchParams } from "../context/FlightContext";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

function Flight() {
  const { searchParams, setSearchParams } = useFlightSearchParams();
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const navigate = useNavigate();

  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get("/flights.json");
        setFlights(response.data);
      } catch (error) {
        console.error("Error fetching flight data:", error);
      }
    };
    fetchFlights();
  }, []);

  const handleFlightSearch = () => {
    const filteredFlights = flights.filter((flight) => {
      const matchesFrom = flight.from
        .toLowerCase()
        .includes(searchParams.from.toLowerCase());
      const matchesTo = flight.to
        .toLowerCase()
        .includes(searchParams.to.toLowerCase());
      const matchesClassType = searchParams.classType
        ? flight.classes.some(
            (cls) =>
              cls.classType.toLowerCase() ===
              searchParams.classType.toLowerCase()
          )
        : true;
      const matchesAirline = searchParams.airline
        ? flight.airline
            .toLowerCase()
            .includes(searchParams.airline.toLowerCase())
        : true;
      const matchesDepartureDate = searchParams.departureDate
        ? flight.departureDate === searchParams.departureDate
        : true;
      const matchesReturnDate = searchParams.returnDate
        ? flight.returnDate === searchParams.returnDate
        : true;

      return (
        matchesFrom &&
        matchesTo &&
        matchesClassType &&
        matchesAirline &&
        matchesDepartureDate &&
        matchesReturnDate
      );
    });

    setFilteredFlights(filteredFlights);

    // Animations for Framer Motion
    const containerVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.2 },
      },
    };

    const cardVariants = {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    };
  };

  return (
    <div>
      <div className="bg-gray-100 relative">
        {/* Hero Section */}
        <motion.div
          className="container mx-auto p-6 flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-1/4">
            <img
              src="./images/vacation.png"
              alt="Hero Left"
              className="object-contain w-full"
            />
          </div>

          <div className="text-center w-1/2">
            <h1 className="text-6xl font-bold mb-2">Flight</h1>
            <p className="text-gray-600 text-lg">
              Search and book flights to your favorite destinations.
            </p>
          </div>

          <div className="w-1/4">
            <img
              src="./images/plane-2.png"
              alt="Hero Right"
              className="object-contain w-full"
            />
          </div>
        </motion.div>

        {/* Flight Search Form */}
        <div className="container mx-auto p-8 mt-8">
          <div className="bg-white py-12 p-8 rounded-xl shadow-md">
            {/* Flight Search Form */}
            <FlightSearchForm
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              onFlightSearch={handleFlightSearch}
              flights={flights}
            />
          </div>
        </div>

        {/* Search Results Section */}
        <div className="container mx-auto p-8">
          {filteredFlights.length > 0 ? (
            <div className="mt-6 ">
              <h2 className="text-2xl font-semibold mb-4">Search Flights</h2>
              {filteredFlights.map((flight, index) => {
                const selectedClass = flight.classes.find(
                  (cls) =>
                    cls.classType.toLowerCase() ===
                    searchParams.classType.toLowerCase()
                );
                if (!selectedClass) return null;

                const calculateTotalPrice = (selectedClass) => {
                  const adultPrice =
                    selectedClass.prices.adult * searchParams.adultCount;
                  const childPrice =
                    selectedClass.prices.child * searchParams.childCount;
                  const infantPrice =
                    selectedClass.prices.infant * searchParams.infantCount;

                  return adultPrice + childPrice + infantPrice;
                };

                // Format the departure date outside JSX
                const formattedDate = new Date(
                  flight.departureDate
                ).toLocaleDateString("en-US", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                });

                const parts = formattedDate.split(", "); // Split the formatted date string into parts

                // Check to ensure correct structure
                const dayOfWeek = parts[0]; // Day of the week (e.g., Monday)
                const month = parts[1].split(" ")[0]; // Numeric day (e.g., 2)
                const day = parts[1].split(" ")[1]; // Full month name (e.g., August)
                const year = parts[2];

                return selectedClass ? (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md mb-4 flex flex-col"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img
                          src={flight.image}
                          alt={flight.airline}
                          className="w-16 h-16 rounded-full border-blue-600 border object-contain"
                        />
                        <div>
                          <h3 className="text-lg font-semibold">
                            {flight.airline}
                          </h3>
                          <p className="text-gray-500">{flight.flightNumber}</p>
                        </div>
                      </div>

                      <div className="text-center">
                        <p className="text-sm text-gray-500">{`${flight.travelTime}`}</p>
                        <div className="flex gap-4 items-center justify-center text-gray-700">
                          {/* Departure Details */}
                          <div className="flex flex-col items-center">
                            <p className="text-lg font-bold">
                              {flight.departureTime}
                            </p>
                            <p className="text-gray-500  whitespace-nowrap">
                              {flight.from}
                            </p>
                          </div>

                          {/* Arrow Icon */}
                          <img
                            src="./images/route-plan.png"
                            alt="Arrow"
                            className="w-full h-full object-contain block"
                          />

                          {/* Arrival Details */}
                          <div className="flex flex-col items-center">
                            <p className="text-lg font-bold">
                              {flight.arrivalTime}
                            </p>
                            <p className="text-gray-500  whitespace-nowrap">
                              {flight.to}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">{`${flight.flightStops} Stops`}</p>
                      </div>

                      <div className="text-right">
                        <div className="flex justify-end items-center gap-2">
                          <span>Price</span>
                          <p className="text-xl font-semibold">{`$${calculateTotalPrice(
                            selectedClass
                          )}`}</p>
                        </div>
                        <button
                          onClick={() =>
                            navigate("/booking-details", { state: { flight } })
                          }
                          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>

                    {/* Line Separator */}
                    <hr className="my-2 border-gray-300" />

                    <div className="flex justify-between items-center mt-2">
                      <p className="text-m font-semibold">
                        <span>{`${dayOfWeek}  ${day} ${month}`}</span>{" "}
                        {/* Corrected date display */}
                      </p>
                      <button
                        onClick={() => setShowDetails((prev) => !prev)}
                        className="text-blue-500 text-sm hover:underline"
                      >
                        {showDetails ? "Hide Details" : "Flight Detail"}
                      </button>
                    </div>

                    {showDetails && (
                      <div className="mt-4 p-8 bg-gray-50 rounded-lg shadow-md border border-gray-200 flex">
                        {/* Left Section: Date and Time */}
                        <div className="flex flex-col gap-2  items-start justify-center w-1/3">
                          {/* Date */}
                          <div className="bg-orange-500 text-white px-3 py-2 mb-3 rounded-md font-semibold">
                            <span>{`${day} ${month}, ${year}  `}</span>
                          </div>
                          <div>
                            <p className="text-black mb-1 font-semibold">
                              <span>{`${dayOfWeek}, ${month} ${day} - ${flight.departureTime}`}</span>
                            </p>
                            <p className="text-gray-500 text-sm mb-2">
                              {flight.travelTime}
                            </p>
                            <p className="text-gray-600 font-medium mb-2">
                              <span>
                                {new Date(
                                  flight.departureDate
                                ).toLocaleDateString("en-US", {
                                  weekday: "long", // Day of the week (e.g., Monday)
                                  day: "numeric", // Numeric day (e.g., 2)
                                  month: "long", // Full month name (e.g., August)
                                })}
                                - {flight.arrivalTime}
                              </span>
                            </p>
                          </div>
                        </div>

                        <div className="bg-blue-50 rounded-md p-8 py-12 w-2/3 flex items-center gap-8">
                          <img
                            src={flight.image}
                            alt="Airline Logo"
                            className="w-16 h-16 rounded-full border-blue-600 border object-contain"
                          />
                          <div className="text-gray-600 text-sm">
                            <p>Operated by {flight.airline}</p>
                            <p>
                              {selectedClass.classType} | Flight{" "}
                              {flight.flightNumber}
                            </p>
                            <p>Adult(s): 25KG luggage free</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : null;
              })}
            </div>
          ) : (
            <p className="container mx-auto text-left">
              No flights found for the given search criteria.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Flight;
