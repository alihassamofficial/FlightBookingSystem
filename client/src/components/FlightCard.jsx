import React, { useContext } from "react";
import { FlightContext } from "../context/FlightContext";

const FlightCard = ({ flight }) => {
  const { setSelectedFlight } = useContext(FlightContext);

  const handleSelect = () => {
    setSelectedFlight(flight);
    console.log("Selected flight:", flight);
  };

  return (
    <div>
      <h3>{flight.name}</h3>
      <p>Price: ${flight.price}</p>
      <button onClick={handleSelect}>Select Flight</button>
    </div>
  );
};

export default FlightCard;
