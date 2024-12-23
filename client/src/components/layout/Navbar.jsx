import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white  top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="text-lg font-semibold">
          <Link to="/" className="hover:text-gray-200">
            FlightBooking
          </Link>
        </div>

        {/* Navigation links on the right */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/flight" className="hover:text-gray-200">
              Flight
            </Link>
          </li>
          <li>
            <Link to="/airlines" className="hover:text-gray-200">
              Airlines
            </Link>
          </li>
          <li>
            <Link to="/destinations" className="hover:text-gray-200">
              Destinations
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-gray-200">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-200">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="hover:text-gray-200">
              SignUp
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
