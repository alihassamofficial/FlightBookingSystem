import React, { createContext, useState } from "react";

// Create Context
export const FlightContext = createContext();

// Provider Component
export const FlightProvider = ({ children }) => {
  // State for managing search parameters
  const [searchParams, setSearchParams] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    passengerCount: 1,
  });

  // State for managing selected flight details
  const [selectedFlight, setSelectedFlight] = useState(null);

  return (
    <FlightContext.Provider
      value={{
        searchParams,
        setSearchParams,
        selectedFlight,
        setSelectedFlight,
      }}
    >
      {children}
    </FlightContext.Provider>
  );
};
