import React from 'react'
import {  useNavigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RiLockPasswordLine } from "react-icons/ri";
import { showToast } from '../../components/toastr';
import { resetPassword } from '../../config/api';

const validationSchema = Yup.object().shape({
    password: Yup.string().required("Password is required"),
    confirm_password:Yup.string().required("Password does not match"),
});

const ResetPassword = () => {
     const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
          password: "",
        confirm_password:"",
        
    },
    validationSchema,

    onSubmit: async (values) => {
      setLoading(true);
      try {
       const response = await resetPassword(values); 
        showToast( response.message, "Password has been changed successfully");
         navigate("/login");
      } catch (error) {
            console.error("password reset failed:", error.message);
         showToast("password reset failed. Please check your network connection.");
      } finally {
        setLoading(false);
      }
    },
  });
    return (
        <div className=" container mx-auto w-full">
            <div className="py-6 md:py-12">
                <div className="max-w-lg w-full mx-auto mt-10">
                    <h3 className="text-center ">
                        Enter the new password
                    </h3>
                    <p className="text-sm font-medium text-gray-500  text-center">
                        Enter the new password
                  </p>
                  <form
                     onSubmit={formik.handleSubmit}
                     className="space-y-4 md:space-y-6"
                    >
                        <div className="space-y-2">
                            <label htmlFor="password">Password</label>
                            <div className=" relative">
                                <span className="pointer-events-none inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
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
                        <div className="space-y-2">
                            <label htmlFor="password">Confirm Password</label>
                            <div className=" relative">
                                <span className="pointer-events-none inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                    <RiLockPasswordLine className="h-4 w-4" />
                                </span>
                                <input
                                    type="password"
                                    name="comfirm_password"
                                    id="comfirm_password"
                                    placeholder="*************"
                                    className={`w-full px-3 py-2 pl-10 pr-4 border rounded-md text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 focus:outline-none sm:text-sm sm:leading-6  
                                    ${formik.touched.confirm_password && formik.errors.confirm_password
                                        ? "border-red-500"
                                        : ""
                                    }`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.confirm_password}
                                />
                                {formik.touched.confirm_password && formik.errors.confirm_password &&
                                    (
                                        <div className="text-red-500 text-sm">
                                            {formik.errors.confirm_password}
                                        </div>
                                    )
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
                                    "Submit "
                                )
                            }
                        </button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
