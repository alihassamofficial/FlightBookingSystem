import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Airlines from "./pages/Airlines";
import Destinations from "./pages/Destinations";
import ContactUs from "./pages/ContactUs";
import ErrorPage from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/airlines" element={<Airlines />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
