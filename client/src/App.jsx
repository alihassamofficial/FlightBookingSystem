import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Airlines from "./pages/Airlines";
import Destinations from "./pages/Destinations";
import ContactUs from "./pages/ContactUs";
import ErrorPage from "./pages/PageNotFound";
import Flight from "./pages/Flight";
import BookingDetailsForm from "./pages/BookingDetails";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import { FlightSearchFormProvider } from "./context/FlightContext";
import TickekConfirmation from "./components/TickekConfirmation";

function App() {
  return (
    <FlightSearchFormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/flight" element={<Flight />} />
            {/* <Route index element={<Flight />} /> */}
            <Route path="/airlines" element={<Airlines />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/booking-details" element={<BookingDetailsForm />} />
            <Route path="/thanksforbooking" element={<TickekConfirmation />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </FlightSearchFormProvider>
  );
}

export default App;
