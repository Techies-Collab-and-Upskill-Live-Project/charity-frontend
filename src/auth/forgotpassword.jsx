/** @format */

import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/common/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Circles } from "react-loader-spinner";
import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Forgotpassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,

    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://donation-trace.onrender.com/api/v1/auth/password-reset/",
          values
        );
        toast.success("code sent successfully!");
      } catch (error) {
        if (error.response) {
          toast.error("login failed. Please try again.");
        } else {
          console.error("login failed:", error.message);
          toast.error("login failed. Please check your network connection.");
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
        <h3 className="mt-28 ml-32 mb-5 font-medium text-3xl max-sm:text-teal-500 max-sm:ml-16 ">
          Forgot Password?
        </h3>
        <p className="text-sm font-medium text-gray-500 ml-1 max-sm:text-center">
          Enter the email address associated with your account to get a code?
        </p>

        <form
          onSubmit={formik.handleSubmit}
          className="pr-80 mt-5 mr-7 max-sm:pr-0 max-sm:mr-6 max-sm:ml-6"
        >
          <div>
            <div>
              <label htmlFor="email" className="mb-10">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className={`block rounded-md border-2 py-1.5 pl-3 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-5 ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : ""
                }`}
                style={{ width: "100%", height: "50px" }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="bg-teal-500 rounded-md px-3 text-sm text-white mt-5 w-96 h-10 flex items-center justify-center"
              style={{ width: "100%" }}
            >
              {loading ? (
                <Circles
                  height="80"
                  width="80"
                  color="#4fa94d"
                  ariaLabel="circles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              ) : (
                "Send code "
              )}
            </button>
          </div>
        </form>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default Forgotpassword;
