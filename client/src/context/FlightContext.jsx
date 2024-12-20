import React, { createContext, useContext, useState } from "react";

// Create Context
const FlightSearchFormContext = createContext();

// Provider Component
export const FlightSearchFormProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    classType: "Economy",
    airline: "",
    adultCount: 1, // Default 1 adult
    childCount: 0, // Default 0 children
    infantCount: 0, // Default 0 infants
  });
  return (
    <FlightSearchFormContext.Provider value={{ searchParams, setSearchParams }}>
      {children}
    </FlightSearchFormContext.Provider>
  );
};

// Custom hook to use the SearchParamsContext
export const useFlightSearchParams = () => useContext(FlightSearchFormContext);
