import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="flex-grow">
        <Outlet /> {/* Render child routes */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
