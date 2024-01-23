/** @format */

//import Navber from "../components/common/Navbar";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Circles } from "react-loader-spinner";
import { useState } from "react";
import axios from "axios";
import NavBar from "../components/common/Navbar";
import { FaFacebook } from "react-icons/fa6";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,

    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://donation-trace.onrender.com/api/v1/auth/login/",
          values
        );
        toast.success("login successful!");
        navigate("//donate-page");
      } catch (error) {
        if (error.response) {
          console.error("login failed:", error.response.data);
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
      <NavBar/>

      <div className="flex flex-col pl-96 mb-28 max-sm:pl-0">
        <h3 className="mt-28 ml-40 mb-10 font-medium text-3xl max-sm:text-teal-500 max-sm:ml-24 ">
          Welcome Back
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
            <hr class="h-1 w-[100%]  bg-gray-100 border-0 rounded mt-10 mb-6 dark:bg-gray-700 ml-5" />
            <p className="ml-8 mt-7">OR</p>
            <hr class="w-[100%] h-1 bg-gray-100 border-0 rounded mt-10 mb-6 dark:bg-gray-700 ml-8" />
          </div>

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

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className={`block rounded-md border-2 py-1.5 pl-3 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-5 w-96 ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : ""
                }`}
                style={{ width: "100%", height: "50px" }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-sm">
                  {formik.errors.password}
                </div>
              )}
            </div>

            <div className="flex mt-0 justify-between">
              <div className="inline-flex">
                <input
                  id="disabled-checked-checkbox"
                  type="checkbox"
                  value=""
                  className=""
                />
                <label htmlFor="checkbox" className="font-medium ml-1">
                  Stay Logged in
                </label>
              </div>

              <div className="">
                <Link to="/forgotpassword" className="text-teal-500">
                  Forgot password?
                </Link>
              </div>
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

            <p className="text-center mt-12">
              Not A User Yet?
              <Link to="/signup" className="text-teal-500">
                Signup
              </Link>
            </p>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
