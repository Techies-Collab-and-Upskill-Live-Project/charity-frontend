import {  useNavigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { showToast } from "../../components/toastr";
import { verifyCode } from "../../config/api";


const validationSchema = Yup.object().shape({
 
  password: Yup.string().required(""),
});

const VerificationCode = () => {
     const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema,

    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await verifyCode(values); 
        showToast( response.message, "code verify successfully!");
         navigate("/login");
      } catch (error) {
          console.error("verify failed:", error.message);
         showToast("verification failed. Please check your network connection.");
      
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
                        Verification
                    </h3>
                    <p className="text-sm font-medium text-gray-500  text-center">
                        Enter the  6 digit code sent to your email
                  </p>
                  <form
                     onSubmit={formik.handleSubmit}
                     className="space-y-4 md:space-y-6"
                  >
                      
                      <div className=" md:hidden block">
                          <input
                              type="password"
                              name="password"
                              id="password"
                              className={`w-full px-3 py-2 pl-10 pr-4 border rounded-md text-black ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-teal-500 focus:outline-none sm:text-sm sm:leading-6  
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
                      <div className="hidden md:block">
                          <div className="flex flex-row items-center justify-between ">
                              <div className="w-16 h-16 ">
                                  <input
                                      type="password"
                                      name="password"
                                      id="password"
                                      className={`w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-teal-500  
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
                              <div className="w-16 h-16 ">
                                  <input
                                      type="password"
                                      name="password"
                                      id="password"
                                      className={`w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-teal-500  
                                      ${formik.touched.password && formik.errors.password
                                          ? "border-red-500"
                                              : ""
                                          }`}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.password}
                                      
                                  />
                                  
                              </div>
                             <div className="w-16 h-16 ">
                                  <input
                                      type="password"
                                      name="password"
                                      id="password"
                                      className={`w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-teal-500  
                                      ${formik.touched.password && formik.errors.password
                                          ? "border-red-500"
                                              : ""
                                          }`}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.password}
                                      
                                  />
                                 
                              </div>
                              <div className="w-16 h-16 ">
                                  <input
                                      type="password"
                                      name="password"
                                      id="password"
                                      className={`w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-teal-500  
                                      ${formik.touched.password && formik.errors.password
                                          ? "border-red-500"
                                              : ""
                                          }`}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.password}
                                      
                                  />
                                 
                              </div>
                             <div className="w-16 h-16 ">
                                  <input
                                      type="password"
                                      name="password"
                                      id="password"
                                      className={`w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-teal-500  
                                      ${formik.touched.password && formik.errors.password
                                          ? "border-red-500"
                                              : ""
                                          }`}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.password}
                                      
                                  />
                                 
                              </div>
                              <div className="w-16 h-16 ">
                                  <input
                                      type="password"
                                      name="password"
                                      id="password"
                                      className={`w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-teal-500  
                                      ${formik.touched.password && formik.errors.password
                                          ? "border-red-500"
                                              : ""
                                          }`}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.password}
                                      
                                  />
                                  
                              </div>
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
                                    "Verify "
                                )
                            }
                      </button>
                      <p className="text-center font-medium text-[16px] mt-12">
                          Didn't receive code? 
                          <Link to="/verificationcode" className="text-teal-500 pl-2">
                              Resend now 
                          </Link>
                      </p>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default VerificationCode