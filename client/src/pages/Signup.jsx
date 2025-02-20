import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [signupErr, setsignupErr] = useState("");
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Too short")
      .max(34, "Too long"),
    username: Yup.string()
      .required("Username is required")
      .min(6, "Too short")
      .max(34, "Too long"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password too short")
      .max(18, "Password too long"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/user/create",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data) {
        navigate("/login");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error?.message ||
        "An error occurred during signup";
      setsignupErr(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section: Form */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center">
        <div className="w-full max-w-md px-6 py-8">
          <Link to="/" className="text-blue-500 text-sm mb-4 inline-block">
            &larr; Back to Home
          </Link>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Create an account
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-sm text-red-500 mt-1"
                  />
                </div>
                <div>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-sm text-red-500 mt-1"
                  />
                </div>
                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-sm text-red-500 mt-1"
                  />
                </div>
                <div>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-sm text-red-500 mt-1"
                  />
                </div>
                {/* Error message */}
                {signupErr && (
                  <div className="text-sm text-red-500 mt-2">{signupErr}</div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2 px-4 rounded-lg text-white ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                >
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {/* Right Section: Background Image */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/login.jpg')",
        }}
      ></div>
    </div>
  );
};

export default SignUp;
