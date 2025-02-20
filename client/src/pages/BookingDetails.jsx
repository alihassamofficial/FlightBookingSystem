import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFlightSearchParams } from "../context/FlightContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { motion } from "framer-motion";

const BookingDetailsForm = () => {
  const { searchParams } = useFlightSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { flight } = location.state;

  const selectedClass = flight.classes.find(
    (cls) =>
      cls.classType.toLowerCase() === searchParams.classType.toLowerCase()
  );

  const totalPrice =
    selectedClass.prices.adult * searchParams.adultCount +
    selectedClass.prices.child * searchParams.childCount +
    selectedClass.prices.infant * searchParams.infantCount;

  const handleNextClick = (values) => {
    navigate("/thanksforbooking", {
      state: { flight, bookingDetails: values, totalPrice },
    });
  };

  const validationSchema = Yup.object({
    gender: Yup.string().required("Gender is required"),
    firstName: Yup.string()
      .max(20, "First name must be 20 characters or less")
      .required("First name is required"),
    lastName: Yup.string()
      .max(20, "Last name must be 20 characters or less")
      .required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    nationality: Yup.string().required("Nationality is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must be numeric")
      .required("Phone number is required"),
    dateOfBirth: Yup.date().required("Date of Birth is required"),
    postalCode: Yup.string().required("Postal code is required"),
    flightNumber: Yup.string().required("Flight number is required"),
  });

  return (
    <motion.div
      className="bg-gray-50 min-h-screen p-4 flex justify-center"
      initial={{ opacity: 0 }} // Initial state: transparent
      animate={{ opacity: 1 }} // Animate to fully visible
      transition={{ duration: 0.8 }} // Fade duration
    >
      <div className="w-full max-w-6xl p-6">
        {/* Step Indicator */}
        <div className="flex justify-around items-center bg-white shadow-md rounded-lg p-4 mb-8">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center">
              ✓
            </div>
            <span className="ml-2 text-sm font-semibold text-gray-700">
              Your Selection
            </span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center">
              2
            </div>
            <span className="ml-2 text-sm font-semibold text-blue-600">
              Booking Details
            </span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center">
              3
            </div>
            <span className="ml-2 text-sm font-semibold text-gray-500">
              Confirmation
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-4">
          {/* Left Form */}
          <motion.div
            className="col-span-2 bg-white shadow-md rounded-lg p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>
            <Formik
              initialValues={{
                gender: "",
                firstName: "",
                lastName: "",
                email: "",
                nationality: "",
                phone: "",
                dateOfBirth: "",
                postalCode: "",
                flightNumber: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleNextClick}
            >
              {({ isSubmitting }) => (
                <Form className="grid grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <Field
                      name="gender"
                      as="select"
                      className="border p-2 rounded w-full"
                    >
                      <option value="">Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Field>
                    <ErrorMessage
                      name="gender"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <div className="col-span-1">
                    <Field
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      className="border p-2 rounded w-full"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <div className="col-span-1">
                    <Field
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      className="border p-2 rounded w-full"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <div className="col-span-1">
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="border p-2 rounded w-full"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <div className="col-span-1">
                    <Field
                      name="nationality"
                      type="text"
                      placeholder="Nationality"
                      className="border p-2 rounded w-full"
                    />
                    <ErrorMessage
                      name="nationality"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <div className="col-span-1">
                    <Field
                      name="phone"
                      type="text"
                      placeholder="Your Number"
                      className="border p-2 rounded w-full"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <div className="col-span-1">
                    <Field
                      name="dateOfBirth"
                      type="date"
                      placeholder="Date of Birth"
                      className="border p-2 rounded w-full"
                    />
                    <ErrorMessage
                      name="dateOfBirth"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <div className="col-span-1">
                    <Field
                      name="postalCode"
                      type="text"
                      placeholder="Postal Code"
                      className="border p-2 rounded w-full"
                    />
                    <ErrorMessage
                      name="postalCode"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <div className="col-span-1">
                    <Field
                      name="flightNumber"
                      type="text"
                      placeholder="Flight Number"
                      className="border p-2 rounded w-full"
                    />
                    <ErrorMessage
                      name="flightNumber"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <div className="col-span-2 flex justify-end mt-4">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-2 w-full rounded-md hover:bg-blue-700"
                      disabled={isSubmitting}
                    >
                      Book Now
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="col-span-1 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Booking Summary Card */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold mb-4">
                Your Booking Detail
              </h3>
              <div className="text-sm text-gray-600">
                <p className="flex justify-between">
                  <span>{flight.from}</span>
                  <span>
                    <img
                      src="./images/route-plan.png"
                      alt="Arrow"
                      className="w-full h-full object-contain block"
                    />
                  </span>
                  <span>{flight.to}</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {flight.flightStops} Stop | {flight.travelTime}
                </p>
                <p className="mt-2 text-sm">
                  Departure:{" "}
                  <strong>
                    {new Date(flight.departureDate).toLocaleDateString()}
                  </strong>
                </p>
                <p className="text-sm">
                  Arrival:{" "}
                  <strong>
                    {new Date(flight.arrivalDate).toLocaleDateString()}
                  </strong>
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Operated by {flight.airline} <br />
                  {searchParams.classType} | Flight {flight.flightNumber} <br />
                  25KG luggage free
                </p>
              </div>
            </div>

            {/* Price Summary Card */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold mb-4">Price Details</h3>
              <div className="text-sm text-gray-700 space-y-2">
                {selectedClass && (
                  <>
                    {/* Adult Price */}
                    <div className="flex justify-between">
                      <span>{searchParams.adultCount} x Adult </span>
                      <span>
                        {searchParams.adultCount} x $
                        {selectedClass.prices.adult}
                      </span>
                    </div>
                    <hr className="my-2 border-gray-300" />
                    {/* Child Price */}
                    <div className="flex justify-between">
                      <span>{searchParams.childCount} x Child </span>
                      <span>
                        {searchParams.childCount} x $
                        {selectedClass.prices.child}
                      </span>
                    </div>
                    <hr className="my-2 border-gray-300" />
                    {/* Infant Price */}
                    <div className="flex justify-between">
                      <span>{searchParams.infantCount} x Infant </span>
                      <span>
                        {searchParams.infantCount} x $
                        {selectedClass.prices.infant}
                      </span>
                    </div>
                    <hr className="my-2 border-gray-300" />
                  </>
                )}
                {/* Service Charges */}
                <div className="flex flex-col justify-between my-4">
                  <div className="text-lg font-semibold mb-2">
                    Final Total Price
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="w-2/3 text-sm text-gray-600">
                      All prices (including taxes & fees) are updated in USD
                    </span>
                    <span className="text-xl font-bold text-gray-900">
                      ${totalPrice}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookingDetailsForm;
