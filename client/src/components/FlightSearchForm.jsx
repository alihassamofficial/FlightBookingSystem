import React, { useState } from "react";
import { useFlightSearchParams } from "../context/FlightContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import styles

function FlightSearchForm({ onFlightSearch, flights }) {
  const { searchParams, setSearchParams } = useFlightSearchParams();

  const [suggestions, setSuggestions] = useState({
    from: [],
    to: [],
    airline: [],
  });

  const handleInputChange = (field, value) => {
    setSearchParams({ ...searchParams, [field]: value });

    if (value) {
      const filteredSuggestions = flights.filter((flight) =>
        flight[field].toLowerCase().includes(value.toLowerCase())
      );

      setSuggestions((prevSuggestions) => ({
        ...prevSuggestions,
        [field]: filteredSuggestions.map((flight) => flight[field]),
      }));
    } else {
      setSuggestions((prevSuggestions) => ({
        ...prevSuggestions,
        [field]: [],
      }));
    }
  };

  const handleSuggestionClick = (field, value) => {
    setSearchParams({ ...searchParams, [field]: value });
    setSuggestions({ ...suggestions, [field]: [] });
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleIncrement = (type) => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      [`${type}Count`]: prevParams[`${type}Count`] + 1,
    }));
  };

  const handleDecrement = (type) => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      [`${type}Count`]: Math.max(0, prevParams[`${type}Count`] - 1),
    }));
  };

  const formattedTravelers = `${searchParams.adultCount} Adt - ${searchParams.childCount} Chd - ${searchParams.infantCount} Inf`;

  const handleDateChange = (field, date) => {
    const formattedDate = date.toISOString().split("T")[0];
    setSearchParams({ ...searchParams, [field]: formattedDate });
  };

  const today = new Date();

  return (
    <form
      className="flex items-end flex-wrap gap-4 bg-slate-500 p-12 rounded-lg text-white"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* From */}
      <div className="flex-1 min-w-[250px]">
        <label className="block text-sm font-semibold mb-1">From</label>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter departure city"
            className="p-2 rounded border w-full text-black"
            value={searchParams.from}
            onChange={(e) => handleInputChange("from", e.target.value)}
          />
          {suggestions.from.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white border rounded-md shadow-lg z-10 max-h-40 overflow-auto text-black">
              {suggestions.from.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSuggestionClick("from", suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* To */}
      <div className="flex-1 min-w-[250px]">
        <label className="block text-sm font-semibold mb-1">To</label>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter destination city"
            className="p-2 rounded border w-full text-black"
            value={searchParams.to}
            onChange={(e) => handleInputChange("to", e.target.value)}
          />
          {suggestions.to.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white border rounded-md shadow-lg z-10 max-h-40 overflow-auto text-black">
              {suggestions.to.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSuggestionClick("to", suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Departure Date */}
      <div className="flex-1 min-w-[250px]">
        <label className="block text-sm font-semibold mb-1">Departure</label>
        <DatePicker
          selected={
            searchParams.departureDate
              ? new Date(searchParams.departureDate)
              : null
          }
          onChange={(date) => handleDateChange("departureDate", date)}
          dateFormat="yyyy-MM-dd"
          className="p-2 rounded border w-full text-black"
          placeholderText="Select departure date"
          minDate={today}
        />
      </div>

      {/* Return Date */}
      <div className="flex-1 min-w-[250px]">
        <label className="block text-sm font-semibold mb-1">Return</label>
        <DatePicker
          selected={
            searchParams.returnDate ? new Date(searchParams.returnDate) : null
          }
          onChange={(date) => handleDateChange("returnDate", date)}
          dateFormat="yyyy-MM-dd"
          disabled
          className="p-2 rounded border w-full text-black"
          placeholderText="Select return date"
          minDate={today}
        />
      </div>

      {/* Travelers Input Field */}
      <div className="relative flex-1 min-w-[250px]">
        <label className="block text-sm font-semibold mb-1">Travelers</label>
        <div
          className="p-2 rounded border w-full bg-white text-black cursor-pointer "
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          {formattedTravelers}
        </div>

        {/* Dropdown */}
        {isDropdownOpen && (
          <div className="absolute top-full mt-2 left-0 w-72 bg-white border rounded shadow-lg p-4 z-10 text-black">
            {/* Adults Row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-lg">👤</span>
                <span>Adults</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="px-2 py-1 border rounded bg-gray-200"
                  onClick={() => handleDecrement("adult")}
                >
                  -
                </button>
                <span>{searchParams.adultCount}</span>
                <button
                  className="px-2 py-1 border rounded bg-gray-200"
                  onClick={() => handleIncrement("adult")}
                >
                  +
                </button>
              </div>
            </div>

            {/* Children Row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-lg">🧒</span>
                <span>Children</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="px-2 py-1 border rounded bg-gray-200"
                  onClick={() => handleDecrement("child")}
                >
                  -
                </button>
                <span>{searchParams.childCount}</span>
                <button
                  className="px-2 py-1 border rounded bg-gray-200"
                  onClick={() => handleIncrement("child")}
                >
                  +
                </button>
              </div>
            </div>

            {/* Infants Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-lg">👶</span>
                <span>Infants</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="px-2 py-1 border rounded bg-gray-200"
                  onClick={() => handleDecrement("infant")}
                >
                  -
                </button>
                <span>{searchParams.infantCount}</span>
                <button
                  className="px-2 py-1 border rounded bg-gray-200"
                  onClick={() => handleIncrement("infant")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Airline */}
      <div className="flex-1 min-w-[250px]">
        <label className="block text-sm font-semibold mb-1">Airline</label>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter airline"
            className="p-2 rounded border w-full text-black"
            value={searchParams.airline}
            onChange={(e) => handleInputChange("airline", e.target.value)}
          />
          {suggestions.airline.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white border rounded-md shadow-lg z-10 max-h-40 overflow-auto text-black">
              {suggestions.airline.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSuggestionClick("airline", suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Class */}
      <div className="flex-1 min-w-[250px]">
        <label className="block text-sm font-semibold mb-1">Class</label>
        <select
          className="p-2 rounded border w-full text-black"
          value={searchParams.classType}
          onChange={(e) =>
            setSearchParams({ ...searchParams, classType: e.target.value })
          }
        >
          <option value="">Any</option>
          <option value="Economy">Economy</option>
          <option value="Premium Economy">Premium Economy</option>
          <option value="Business Class">Business Class</option>
        </select>
      </div>

      {/* Search Button */}
      <div className="flex-1  min-w-[250px]">
        <button
          type="button"
          className="bg-red-500 rounded-md px-4 py-2 w-full"
          onClick={onFlightSearch}
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default FlightSearchForm;
