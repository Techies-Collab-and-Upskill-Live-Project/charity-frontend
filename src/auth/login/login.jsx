/** @format */

//import Navber from "../components/common/Navbar";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { showToast } from "../../components/toaster";
import { Circles } from "react-loader-spinner";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineApple } from "react-icons/ai";
import { loginUser } from "../../config/api";

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
        const response = await loginUser(values); // Pass values directly to loginUser function
        showToast( response.message, "success");
        navigate("/donate-page");

      } catch (error) {
        console.error("Login failed:", error.message);
        showToast("Login failed. Please try again.", "error");
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <div>
      <div className=" container mx-auto w-full">
        <div className="py-6 md:py-12">
          <div className=" max-w-md w-full mx-auto mt-10 ">
            <h3 className=" text-center ">
              Welcome Back
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
              <div className=" space-y-2">
                <label htmlFor="email" className="block text-sm">
                Email
                </label>
                <div className="relative">
                   <span className="pointer-events-none inline-flex items-center justify-center absolute inset-y-0 start-0  ps-3.5  left-0 top-0 h-full w-10 text-gray-400">
                    <HiOutlineMail className="h-4 w-4" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="olivia@untitledui.com"
                    className={`w-full px-3 py-2 pl-10 pr-4 border rounded-md text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 focus:outline-none sm:text-sm sm:leading-6  
                    ${
                      formik.touched.email && formik.errors.email
                      ? "border-red-500"
                        : ""
                      }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email &&
                    (
                      <div className="text-red-500 text-sm">
                        {formik.errors.email}
                      </div>
                    )
                  }
                </div>
                <div className="space-y-2">
                  <label htmlFor="password">Password</label>
                  <div className=" relative">
                    <span className="pointer-events-none inline-flex items-center justify-center absolute  inset-y-0 start-0  ps-3.5 left-0 top-0 h-full w-10 text-gray-400">
                      <RiLockPasswordLine className="h-4 w-4" />
                    </span>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="*************"
                      className={`w-full px-3 py-2 pl-10 pr-4 border rounded-md text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 focus:outline-none sm:text-sm sm:leading-6  
                      ${formik.touched.password && formik.errors.password
                        ? "border-red-500"
                          : ""
                      }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password &&
                      (
                      <div className="text-red-500 text-sm">
                        {formik.errors.password}
                        </div>
                      )
                    }
                  </div>
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
                      "Sign In"
                    )
                  }
                </button>
                <p className="text-center font-medium text-[16px] mt-12">
                  Not A User Yet?
                  <Link to="/signup" className="text-teal-500 pl-2">
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
