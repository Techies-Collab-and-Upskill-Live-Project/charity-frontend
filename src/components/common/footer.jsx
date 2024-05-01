import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import { Link } from "react-router-dom";
import { subscribeToNewsletter } from "../../config/api";
import { useFormik } from "formik";
import * as Yup from "yup";
import { showToast } from "../../components/toaster";
import { Circles } from "react-loader-spinner";

function Footer() {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,

    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await subscribeToNewsletter(values);
        if (response) {
          showToast("Subscribed to newsletter successfully.", "success");
        }
        formik.resetForm();
      } catch (error) {
        if (error.message.includes("email already subscribed")) {
          showToast("Email already subscribed.", "error");
        } else {
          showToast("Subscription failed. Please try again.", "error");
        }
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <div className="bg-white w-full mx-auto">
      <div className="container mx-auto  w-full">
        <div className="py-16 lg:py-20 mx-auto">
          <hr className="mb-16" />
          <div>
            <div className="flex flex-col items-center">
              <h4 className=" text-center  mb-3">
                Subscribe to our newsletter
              </h4>
              <p className="text-center text-[#7B7B7B] text-xs font-thin mb-5">
                Get the latest updates and exclusive offers straight to your
                inbox. Join our newsletter now!
              </p>
              <div className="flex justify-center max-sm:flex-col">
                <form
                  onSubmit={formik.handleSubmit}
                  className="flex flex-col md:flex-row space-x-4"
                >
                  <input
                    type="text"
                    name="email"
                    id="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="olivia@untitledui.com"
                    className="block rounded-md border py-1.5 pl-3 pr-20 text-gray-900   border-gray-200 placeholder:text-gray-400 focus:outline-none focus:border-teal-500 sm:text-sm sm:leading-6"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500">{formik.errors.email}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#04A38A] rounded-md ml-4 px-4 py-3 text-sm text-white max-sm:ml-0 max-sm:mt-4 "
                  >
                    {loading ? (
                      <Circles
                        height="20"
                        width="97"
                        color="#4fa94d"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                      />
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </form>
              </div>
            </div>
            <div className=" flex items-center sm:flex-row flex-col justify-between mt-6 mb-5  space-x-5">
              <div className=" flex flex-col sm:flex-row items-center">
                <a href="/home">
                  {" "}
                  <img
                    src="/assets/logo.png"
                    alt="logo"
                    loading="lazy"
                    className=" items-center md:justify-start justify-center w-10 h-10 pr-0 max-sm:w-20 max-sm:mt-5"
                  />
                </a>
                <div className="flex flex-row ">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                  <Link to="/discover" className="nav-link">
                    {" "}
                    Explore
                  </Link>
                  <Link to="/" className="nav-link">
                    {" "}
                    Link 2
                  </Link>
                  <Link to="/contactus" className="nav-link">
                    {" "}
                    Contact us
                  </Link>
                </div>
              </div>

              <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E7F8F0]">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit our Facebook page"
                  >
                    <FaFacebook className="w-6 h-6 text-[#04A38A]" />
                  </a>
                </div>
                <div className="flex items-center justify-center w-10 h-10  rounded-full bg-[#E7F8F0]">
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit our Twitter profile"
                  >
                    <FaTwitter className=" w-6 h-6 text-[#04A38A]" />
                  </a>
                </div>
                <div className="flex items-center justify-center w-10 h-10  rounded-full bg-[#E7F8F0]">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit our Instagram page"
                  >
                    <AiFillInstagram className=" w-6 h-6 text-[#04A38A]" />
                  </a>
                </div>
                <div className="flex items-center justify-center w-10 h-10  rounded-full bg-[#E7F8F0]">
                  <a
                    href="https://wa.me/qr/75NMRFJYIYX2I1"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Contact us on WhatsApp"
                  >
                    <FaWhatsapp className=" w-6 h-6 text-[#04A38A]" />
                  </a>
                </div>
              </div>
            </div>
            <hr />
            <div className=" mt-2">
              <p className="font font-thin max-sm:font-normal">
                Copyright &copy; {date} Donation Trace. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
