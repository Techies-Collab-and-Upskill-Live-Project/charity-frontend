/** @format */

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Circles } from "react-loader-spinner";
import NavBar from "../components/common/Navbar";
import { FaFacebook } from "react-icons/fa6";
const Signup = () => {
  const validationSchema = Yup.object({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Second Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
    validationSchema,

    onSubmit: async (values) => {
      setLoading(true);
      try {
        // yufyujhjhvhh
        const response = await axios.post(
          "https://donation-trace.onrender.com/api/v1/auth/register/",
          values
        );
        console.log("Registration successful:", response.data);
        toast.success("Registration successful!");
        navigate("/donate-page");
      } catch (error) {
        if (error.response) {
          console.error("Registration failed:", error.response.data);
          toast.error("Registration failed. Please try again.", error.response.data);
        } else {
          console.error("Registration failed:", error.message);
          toast.error(
            error.message
          );
        }
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div>
      <NavBar />
      <div className="flex flex-col pl-96 mb-28 max-sm:pl-0">

        <h3 className="mt-28 ml-52 mb-10 font-medium text-3xl max-sm:text-teal-500 max-sm:ml-32">
          Sign Up
        </h3>

        <form
          onSubmit={formik.handleSubmit}
          className="pr-80 mr-7 max-sm:pr-0 max-sm:mr-6 max-sm:ml-6"
        >
          <div className="flex flex-col">
            <button
              className="bg-white rounded-md text-sm mb-5 border-2 text-center h-11 font-medium"
              style={{ width: "100%" }}
            >
              <img
                src="/assets/Social icon.jpg"
                alt=""
                className="mr-1 inline-flex w-12 h-12"
              />{" "}
              Sign in with Google
            </button>
            <button
              className="bg-blue-500 border rounded-md text-sm h-11 font-medium text-white"
              style={{ width: "100%" }}
            >
              <FaFacebook className="mr-1 inline-flex h-12 w-12" />{" "}
              Sign in with Facebook
            </button>
          </div>

          <div className="flex">
            <hr className="h-1 w-[100%] bg-gray-100 border-0 rounded mt-10 mb-6 dark:bg-gray-700 ml-5" />
            <p className="ml-8 mt-7">OR</p>
            <hr className="w-[100%] h-1 bg-gray-100 border-0 rounded mt-10 mb-6 dark:bg-gray-700 ml-8" />
          </div>

          <div>
            <div className="flex max-sm:block">
              <div className="w-[100%] ">
                <label htmlFor="firstName" className="mb-10">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Enter First Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.first_name}
                  className="block rounded-md border-2  py-1.5 pl-3 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-5"
                  style={{ width: "100%", height: "50px" }}
                />
                {formik.touched.first_name && formik.errors.first_name ? (
                  <div className="text-red-500 text-xs">
                    {formik.errors.first_name}
                  </div>
                ) : null}
              </div>

              <div className="w-[100%] ">
                <label htmlFor="lastName" className="mb-10">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  id="lastName"
                  placeholder="Enter LastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.last_name}
                  className="block rounded-md border-2 py-1.5 pl-3 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-5"
                  style={{ width: "100%", height: "50px" }}
                />
                {formik.touched.last_name && formik.errors.last_name ? (
                  <div className="text-red-500 text-xs">
                    {formik.errors.last_name}
                  </div>
                ) : null}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-10">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="block rounded-md border-2 py-1.5 pl-3 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-5"
                style={{ width: "100%", height: "50px" }}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-xs">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="block rounded-md border-2 py-1.5 pl-3 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-5 w-96"
                style={{ width: "100%", height: "50px" }}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-xs">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            <button
              type="submit"
              className="bg-teal-500 rounded-md px-3 text-sm text-white mt-5 w-96 h-10 flex items-center justify-center"
              style={{ width: "100%" }}
            >
              {loading ? (
                <Circles
                  height="30"
                  width="30"
                  color="#4fa94d"
                  ariaLabel="circles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              ) : (
                "Sign up"
              )}
            </button>

            <div className="">
              <p className="font-m font-medium text-gray-500 mt-4 text-xs">
                By signing up, you confirm that you’ve read and accepted our
                <a href="/" className="text text-blue-500">
                  {" "}
                  Terms of Service{" "}
                </a>
                and
                <a href="/" className="text text-blue-500">
                  {" "}
                  Privacy Policy{" "}
                </a>
                We will also subscribe you to our level up newsletter. You can
                also unsubscribe at any time
              </p>
            </div>

            <p className="text-center mt-12">
              Already have an account?
              <Link to="/login" className="text-teal-500">
                Login
              </Link>
            </p>
          </div>
        </form>
        <ToastContainer />
      </div>

    </div>
  );
};

export default Signup;
