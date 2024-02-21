/** @format */
import {  useNavigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import { useState } from "react";
import { showToast } from "../../components/toastr";
import { useFormik } from "formik";
import * as Yup from "yup";
import { HiOutlineMail } from "react-icons/hi";
import { forgetPassword } from "../../config/api";

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
        const response = await forgetPassword(values); 
        showToast( response.message, "code sent successfully!");
        navigate.push("/resetpassword") 
      } catch (error) {
        console.error("failed to send code:", error.message);
        showToast(" failed to send code. Please check your network connection."); 
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className=" container mx-auto w-full">
      <div className="py-6 md:py-12">
        <div className="max-w-md w-full mx-auto mt-10">
          <h3 className="text-center ">
            Forgot Password?
          </h3>
          <p className="text-sm font-medium text-gray-500  max-sm:text-center">
            Enter the email address associated with your account to get a code?
          </p>

        <form
          onSubmit={formik.handleSubmit}
          className="space-y-4 md:space-y-6"
        >
          <div className=" space-y-2">
            <div>
              <label htmlFor="email" className=" block text-sm">
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
            <button
              type="submit"
              className="w-full bg-teal-500 rounded-md px-4 text-sm text-white mt-5  py-3 flex items-center justify-center"
            >
              {loading ?
                (
                  <Circles
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                ) :
                  (
                    "Send code "
                  )
              }
            </button>
          </div>
        </form>
       
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
