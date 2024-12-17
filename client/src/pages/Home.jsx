import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchFlightForm from "../components/FlightSearchForm";

function Home() {
  const [flights, setFlights] = useState([]);
  const [searchParams, setSearchParams] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    classType: "Economy",
    airline: "",
  });
  const [filteredFlights, setFilteredFlights] = useState([]);

  useEffect(() => {
    // Fetch flight data from the JSON file using axios
    axios
      .get("/flights.json")
      .then((response) => {
        setFlights(response.data);
      })
      .catch((error) => {
        console.error("Error fetching flight data:", error);
      });
  }, []);

  const handleSearch = () => {
    // Filter the flights based on search parameters
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
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-gray-200 p-6 rounded-md shadow-md">
        <h1 className="text-4xl font-bold text-center mb-6">Flight Search</h1>

        {/* Pass down props to SearchFlightForm */}
        <SearchFlightForm
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          onSearch={handleSearch}
          flights={flights}
        />
      </div>

      {/* Display filtered flights here */}
      {filteredFlights.length > 0 ? (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
          {filteredFlights.map((flight, index) => {
            // Filter the classes based on the selected class type
            const selectedClass = flight.classes.find(
              (cls) =>
                cls.classType.toLowerCase() ===
                searchParams.classType.toLowerCase()
            );

            // Only show flight details if the selected class is found
            return selectedClass ? (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md mb-4"
              >
                <h3 className="font-bold">{`${flight.from} to ${flight.to}`}</h3>
                <p>Airline: {flight.airline}</p>
                <p>Travel Time: {flight.travelTime}</p>
                <p>Direct Flight: {flight.directFlight ? "Yes" : "No"}</p>

                {/* Display only the selected class type and its price */}
                <div className="mt-4">
                  <h4 className="font-semibold">
                    Selected Class: {selectedClass.classType}
                  </h4>
                  <p>Price: ${selectedClass.price}</p>
                </div>
              </div>
            ) : null;
          })}
        </div>
      ) : (
        <p>No flights found for the given search criteria.</p>
      )}
    </div>
  );
}

export default Home;
