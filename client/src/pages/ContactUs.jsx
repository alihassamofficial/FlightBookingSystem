import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function ContactUs() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      // Handle form submission logic
      console.log(values);
      alert("Message Sent Successfully!");
    },
  });

  return (
    <div className="container mx-auto p-12 bg-white text-gray-800 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center items-start text-left">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg mb-8 font-light max-w-xl">
            We're here to help! Reach out to us for more information, inquiries,
            or support. We’d love to hear from you.
          </p>
        </div>

        <div className="bg-gray-100 p-8 rounded-xl shadow-xl w-full">
          <h2 className="text-3xl font-semibold mb-6 text-teal-600 text-center">
            Get in Touch
          </h2>
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500 text-sm mt-2">
                  {formik.errors.name}
                </div>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm mt-2">
                  {formik.errors.email}
                </div>
              )}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
              {formik.touched.message && formik.errors.message && (
                <div className="text-red-500 text-sm mt-2">
                  {formik.errors.message}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
