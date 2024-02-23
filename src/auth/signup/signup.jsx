/** @format */

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Circles } from "react-loader-spinner";
//import NavBar from "../../components/common/Navbar";
import { FaFacebook } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineApple } from "react-icons/ai";

const Signup = () => {
  const validationSchema = Yup.object({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Second Name is required"),
    full_name:Yup.string().required("Full Name Name is required"),
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
    <div className=" container mx-auto w-full">
      <div className="py-6 md:py-12">
        <div className="max-w-md w-full mx-auto mt-10">
          <h3 className="text-center">
            Sign Up
          </h3>
          <form
            onSubmit={formik.handleSubmit}
            className="space-y-4 md:space-y-6"
          >
           <div className=" space-y-4">
                <button
                  className="bg-white flex items-center justify-center w-full p-2 space-x-4 border rounded-md"
                >
                  <img
                    src="/assets/Social icon.jpg"
                    alt=""
                    className=" w-6 h-6"
                  />{" "}
                  <span>Sign in with Google</span>
                </button>
                <button
                  className="bg-blue-500 flex items-center justify-center w-full p-2 space-x-4 border rounded-md text-white"
                >
                  <FaFacebook className=" h-6 w-6  " />{" "}
                  <span>Sign in with Facebook</span>
              </button>
              <button
                  className=" md:hidden bg-black flex items-center justify-center w-full p-2 space-x-4 border rounded-md text-white"
                >
                  <AiOutlineApple className=" h-6 w-6  " />{" "}
                  <span>Sign in with Apple</span>
                </button>
              </div>
            <div className="flex items-center w-full my-4">
              <hr className="w-full text-gray-400 h-1" />
              <p className="px-3 text-gray-400">OR</p>
              <hr className="w-full dark:text-gray-400 h-1" />
            </div>
            <div className="">
              <div className="max-sm:flex hidden">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm">
                    Full Name
                  </label>
                  <div className=" relative ">
                    <span className=" pointer-events-none inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                      <FaRegUser className=" h-4 w-4" />
                    </span>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      placeholder="olivia@untitledui.com"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.full_name}
                      className="w-full px-3 py-2 pl-10 pr-4 border rounded-md text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                    />
                    {formik.touched.full_name && formik.errors.full_name ?
                      (
                        <div className="text-red-500 text-xs">
                          {formik.errors.full_name}
                        </div>
                      ) : null
                    }
                  </div>
                </div>
                
              </div>
              <div className="flex max-sm:hidden">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm">
                    First Name
                  </label>
                  <div className=" relative ">
                    <span className=" pointer-events-none inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                      <FaRegUser className=" h-4 w-4" />
                    </span>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      placeholder="olivia@untitledui.com"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.first_name}
                      className="w-full px-3 py-2 pl-10 pr-4 border rounded-md text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                    />
                    {formik.touched.first_name && formik.errors.first_name ?
                      (
                        <div className="text-red-500 text-xs">
                          {formik.errors.first_name}
                        </div>
                      ) : null
                    }
                  </div>
                </div>
                <div className=" space-y-2">
                  <label htmlFor="lastName" className="block text-sm">
                    Last Name
                  </label>
                  <div className=" relative">
                    <span className=" pointer-events-none inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                      <FaRegUser className=" h-4 w-4" />
                    </span>
                    <input
                      type="text"
                      name="last_name"
                      id="lastName"
                      placeholder="olivia@untitledui.com"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.last_name}
                      className="w-full px-3 py-2 pl-10 pr-4 border rounded-md text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-teal-500 sm:text-sm sm:leading-6"  
                    />
                    {formik.touched.last_name && formik.errors.last_name ?
                      (
                        <div className="text-red-500 text-xs">
                          {formik.errors.last_name}
                        </div>
                      ) : null
                    }
                  </div>
                </div> 
              </div>
              <div className=" space-y-2">
                <label htmlFor="email" className="block text-sm">
                  Email
                </label>
                <div className=" relative">
                   <span className="pointer-events-none inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <HiOutlineMail className="h-4 w-4" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="olivia@untitledui.com"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="w-full px-3 py-2 pl-10 pr-4 border rounded-md text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-teal-500 sm:text-sm sm:leading-6"
                  />
                  {formik.touched.email && formik.errors.email ?
                    (
                      <div className="text-red-500 text-xs">
                        {formik.errors.email}
                      </div>
                    ) : null
                  }
                </div>
              </div>
              <div className=" space-y-2">
                <label htmlFor="password" className="block text-sm">Password</label>
                <div className=" relative">
                  <span className="pointer-events-none inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                      <RiLockPasswordLine className="h-4 w-4" />
                  </span>
                  <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="***************"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="w-full px-3 py-2 pl-10 pr-4 border rounded-md text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-teal-500 sm:text-sm sm:leading-6"
                />
                {formik.touched.password && formik.errors.password ?
                  (
                    <div className="text-red-500 text-xs">
                      {formik.errors.password}
                    </div>
                  ) : null
                }
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 rounded-md px-4 text-sm text-white mt-5  py-3 flex items-center justify-center"
              >
                {loading ?
                  (
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
                  )
                }
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
              <div className="text-center mt-12">
                Already have an account?
                <Link to="/login" className="text-teal-500">
                  Login
                </Link>
              </div>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Signup;
