import React, { useState } from "react";

function SearchFlightForm({
  searchParams,
  setSearchParams,
  onSearch,
  flights,
}) {
  const [suggestions, setSuggestions] = useState({
    from: [],
    to: [],
    airline: [],
  });

  const handleInputChange = (field, value) => {
    // Update searchParams when the user types
    setSearchParams({ ...searchParams, [field]: value });

    if (value) {
      // Filter suggestions based on the value typed
      const filteredSuggestions = flights.filter((flight) =>
        flight[field].toLowerCase().includes(value.toLowerCase())
      );

      // Set the filtered suggestions for the respective field
      setSuggestions((prevSuggestions) => ({
        ...prevSuggestions,
        [field]: filteredSuggestions.map((flight) => flight[field]),
      }));
    } else {
      // Clear suggestions if input is empty
      setSuggestions((prevSuggestions) => ({
        ...prevSuggestions,
        [field]: [],
      }));
    }
  };

  const handleSuggestionClick = (field, value) => {
    // Update the search field with the selected suggestion
    setSearchParams({ ...searchParams, [field]: value });
    // Clear suggestions after a selection
    setSuggestions({ ...suggestions, [field]: [] });
  };

  return (
    <form
      className="grid grid-cols-2 gap-4"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* From Field */}
      <div className="relative">
        <input
          type="text"
          placeholder="From"
          className="p-2 rounded border"
          value={searchParams.from}
          onChange={(e) => handleInputChange("from", e.target.value)}
        />
        {suggestions.from.length > 0 && (
          <ul className="absolute top-full left-0 w-full bg-white border rounded-md shadow-lg z-10 max-h-40 overflow-auto">
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

      {/* To Field */}
      <div className="relative">
        <input
          type="text"
          placeholder="To"
          className="p-2 rounded border"
          value={searchParams.to}
          onChange={(e) => handleInputChange("to", e.target.value)}
        />
        {suggestions.to.length > 0 && (
          <ul className="absolute top-full left-0 w-full bg-white border rounded-md shadow-lg z-10 max-h-40 overflow-auto">
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

      {/* Departure Date */}
      <input
        type="date"
        className="p-2 rounded border"
        value={searchParams.departureDate}
        onChange={(e) =>
          setSearchParams({ ...searchParams, departureDate: e.target.value })
        }
      />

      {/* Return Date (Disabled) */}
      <input
        type="date"
        className="p-2 rounded border"
        value={searchParams.returnDate}
        disabled
        onChange={(e) =>
          setSearchParams({ ...searchParams, returnDate: e.target.value })
        }
      />

      {/* Class Type */}
      <select
        className="p-2 rounded border"
        value={searchParams.classType}
        onChange={(e) =>
          setSearchParams({ ...searchParams, classType: e.target.value })
        }
      >
        <option value="">Select Class Type</option>
        <option value="Economy">Economy</option>
        <option value="Premium Economy">Premium Economy</option>
        <option value="Business Class">Business Class</option>
      </select>

      {/* Airline Field */}
      <div className="relative">
        <input
          type="text"
          placeholder="Airline"
          className="p-2 rounded border"
          value={searchParams.airline}
          onChange={(e) => handleInputChange("airline", e.target.value)}
        />
        {suggestions.airline.length > 0 && (
          <ul className="absolute top-full left-0 w-full bg-white border rounded-md shadow-lg z-10 max-h-40 overflow-auto">
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

      <button
        type="button"
        className="col-span-2 p-2 bg-blue-500 text-white rounded"
        onClick={onSearch}
      >
        Search
      </button>
    </form>
  );
}

export default SearchFlightForm;
