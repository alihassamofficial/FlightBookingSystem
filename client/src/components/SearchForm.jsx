import React, { useContext } from "react";
import { FlightContext } from "../context/FlightContext";

const SearchForm = () => {
  const { searchParams, setSearchParams } = useContext(FlightContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleSearch = () => {
    console.log("Search parameters:", searchParams);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg p-6 rounded-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Search Flights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="from"
          placeholder="From"
          value={searchParams.from}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="text"
          name="to"
          placeholder="To"
          value={searchParams.to}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="date"
          name="departureDate"
          value={searchParams.departureDate}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="date"
          name="returnDate"
          value={searchParams.returnDate}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="number"
          name="passengerCount"
          min="1"
          value={searchParams.passengerCount}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Passengers"
        />
      </div>
      <button
        onClick={handleSearch}
        className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;
