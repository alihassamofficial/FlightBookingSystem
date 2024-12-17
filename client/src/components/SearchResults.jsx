import React, { useContext, useEffect, useState } from "react";
import { FlightContext } from "../context/FlightContext";

const SearchResults = () => {
  const { searchParams } = useContext(FlightContext);
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch("../public/flights.json")
      .then((response) => response.json())
      .then((data) => setFlights(data))
      .catch((error) => console.error("Error fetching flight data:", error));
  }, []);

  // Filter flights based on search parameters
  const filteredFlights = flights.filter(
    (flight) =>
      flight.from.toLowerCase() === searchParams.from.toLowerCase() &&
      flight.to.toLowerCase() === searchParams.to.toLowerCase()
  );

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-6 mt-6">
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
        Available Flights
      </h2>
      {filteredFlights.length > 0 ? (
        filteredFlights.map((flight) => (
          <div key={flight.id} className="text-gray-700 mb-2">
            {flight.name} - ${flight.price} - {flight.from} - {flight.to}
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">
          No flights found for the selected criteria.
        </p>
      )}
    </div>
  );
};

export default SearchResults;
