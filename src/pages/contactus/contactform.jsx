import contactusfram from "../../assets/contactus-frame.png";
import emailicon from "../../assets/icons/mail.png";
import phoneicon from "../../assets/icons/phone-call.png";
import { contactUs } from "../../config/api";
import { useFormik } from "formik";
import * as Yup from "yup";
import { showToast } from "../../components/toaster";
import { Circles } from "react-loader-spinner";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  full_name: Yup.string().required("Full name is required"),
  message: Yup.string().required("Message is required"),
  subject: Yup.string().required("Subject is required"),
  enquiry_type: Yup.string().required("Enquiry type is required"),
});
const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      full_name: "",
      message: "",
      subject: "",
      enquiry_type: "",
    },
    validationSchema,

    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await contactUs(values);
        if (response) {
          showToast(
            "Yes! We got your message. We'll get back to you shortly.",
            "success"
          );
        }
        formik.resetForm();
      } catch (error) {
        console.error("Contact us failed:", error.message);
        showToast("Contact us failed. Please try again.", "error");
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <div className="bg-white w-full">
      <div className=" container mx-auto w-full">
        <div className="py-16 lg:py-20 mx-auto">
          <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 max-sm:py-0 max-sm:px-0 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
            <div className="mt-28 mr-28 max-sm:mt-12 max-sm:mr-0">
              <h3>
                Need More Info? <br /> Contact Us
              </h3>
              <p className="mt-10">
                Got questions or feedback? <br />
                Our team is ready to assist you with any inquiries or support
                you need. <br /> <br />
                Reach out today!
              </p>
              <img
                src={contactusfram}
                alt=""
                width={566}
                height={458.98}
                className="mt-5"
                loading="lazy"
              />
            </div>
            <div className="mt-28 max-sm:mt-5">
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <label htmlFor="full_name" className="mb-10">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.full_name}
                    placeholder=" John Mark"
                    className="block  rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-teal-500 sm:text-sm sm:leading-6 mt-2 mb-5 w-96 max-sm:w-80"
                  />
                  {formik.touched.full_name && formik.errors.full_name && (
                    <p className="text-red-500">{formik.errors.full_name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="olivia@untitledui.com"
                    className="block  rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-teal-500 sm:text-sm sm:leading-6 mt-2 mb-5 w-96 max-sm:w-80"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500">{formik.errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="enquiry_type">Enquiry Type</label>
                  <select
                    name="enquiry_type"
                    id="enquiry_type"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.enquiry_type}
                    className="block  rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-teal-500 sm:text-sm sm:leading-6 mt-2 mb-5 w-96 max-sm:w-80"
                  >
                    <option value="">Select Enquiry Type</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Sales Enquiry">Sales Enquiry</option>
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Other Enquiry">Other Enquiry</option>
                  </select>
                  {formik.touched.enquiry_type &&
                    formik.errors.enquiry_type && (
                      <p className="text-red-500">
                        {formik.errors.enquiry_type}
                      </p>
                    )}
                </div>
                <div>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                    placeholder="Enter subject"
                    className="block  rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-teal-500 sm:text-sm sm:leading-6 mt-2 mb-5 w-96 max-sm:w-80"
                  />
                  {formik.touched.subject && formik.errors.subject && (
                    <p className="text-red-500">{formik.errors.subject}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    placeholder="Enter a description"
                    name="message"
                    id="message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    cols="30"
                    rows="10"
                    className="block  rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-teal-500 sm:text-sm sm:leading-6 mt-2 mb-5 w-96 max-sm:w-80"
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-red-500">{formik.errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-96 max-sm:w-80 bg-teal-500 rounded-md px-4 text-sm text-white mt-5  py-3 flex items-center justify-center "
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
                    "Submit Enquiry"
                  )}
                </button>
              </form>
            </div>
          </div>
          <div className="bg-yellow-50   py-6 text-center my-28">
            <div className=" grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 ">
              <div className=" flex flex-col justify-center items-center space-y-2">
              <img src={emailicon} alt="" className="w-10 h-10" loading="lazy" />
                <div>
                <h5 className="text-yellow-600 font-medium">Mail Us</h5>
                <p>ouremail@donationtrace.com</p>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center space-y-2 ">
              <img src={phoneicon} alt="" className="w-10 h-10" />
                <div className="">
                <h5 className="text-yellow-600 font-medium">Call US</h5>
              <p>+233 12 355 6789</p>
              </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
