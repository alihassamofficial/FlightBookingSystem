import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Flight Booking System</h3>
          <p className="text-sm text-white">© 2024 All Rights Reserved</p>
        </div>

        {/* Middle Section */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="text-white hover:text-gray-200 text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-white hover:text-gray-200 text-sm">
            Terms of Service
          </a>
          <a href="#" className="text-white hover:text-gray-200 text-sm">
            Support
          </a>
        </div>

        {/* Right Section (Social Media Icons) */}
        <div className="flex space-x-4">
          <a
            href="#"
            aria-label="Facebook"
            className="text-white hover:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 5 3.66 9.13 8.43 9.88v-6.98H8.05v-2.9h2.38v-2.22c0-2.36 1.4-3.66 3.54-3.66 1.03 0 2.11.18 2.11.18v2.33h-1.19c-1.18 0-1.54.74-1.54 1.5v1.88h2.63l-.42 2.9h-2.2v6.98C18.34 21.13 22 17 22 12z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-white hover:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M23.44 4.83c-.81.36-1.69.61-2.6.72a4.55 4.55 0 0 0 2-2.51c-.86.51-1.81.88-2.83 1.08a4.52 4.52 0 0 0-7.72 4.12 12.85 12.85 0 0 1-9.35-4.74 4.51 4.51 0 0 0 1.4 6.02 4.45 4.45 0 0 1-2.05-.57v.05c0 2.27 1.62 4.15 3.76 4.58a4.54 4.54 0 0 1-2.04.08 4.53 4.53 0 0 0 4.22 3.14 9.09 9.09 0 0 1-6.7 1.86 12.77 12.77 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85l-.01-.58a9.21 9.21 0 0 0 2.24-2.35z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-white hover:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm.02 4H5V7H5l-.01.5zm1.2 1.5H4V21h3V9zM8 7h4v1h.03c.57-1.03 2.08-1.03 3.05-1.03 2.08 0 4.11 1.05 4.11 4.92V21H17V12c0-2.28-1.23-3-2.25-3-1.24 0-1.75.8-1.75 2V21h-3v-9h3V8H8z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
