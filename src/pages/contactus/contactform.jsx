import contactusfram from "../../assets/contactus-frame.png";
import emailicon from "../../assets/icons/mail.png";
import phoneicon from "../../assets/icons/phone-call.png"

const ContactUsForm = () => {
    return(
      <div className="bg-white w-full">
        <div className=" container mx-auto w-full">
          <div className="py-16 lg:py-20 mx-auto">
            <div className="grid grid-cols gap-8  lg:grid-cols-2 md:px-12 px-8 lg:px-16 xl:px-32 ">
              <div className="mt-28 mr-28">
                <h3 >Need More Info? <br /> Contact Us</h3>
                <p className="mt-10">Lorem ipsum dolor sit amet consectetur. Ac mauris porttitor dui nibh arcu <br /> urna consequat malesuada.</p>
                <img src={contactusfram} alt="" width={566} height={458.98} className="mt-5" />
              </div>
              <div className="mt-28">
                <form action="/">
                  <div>
                    <label htmlFor="fullname" className="mb-10">Full Name</label>
                    <input type="text" name="fullname" id="" placeholder=" John Mark" className="block  rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-5 w-96" />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder="olivia@untitledui.com" className="block  rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-5 w-96" />
                  </div>
                  <div>
                    <label htmlFor="enuirytype">Enquiry type</label>
                    <select name="enuirytype" id="" className="block  rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-5 w-96" >
                      <option value="Technical Support">Technical Support</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" id="" placeholder="Enter subject" className="block  rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-5 w-96" />
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea placeholder="Enter a description" name="message" id="" cols="30" rows="10" className="block  rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-5 w-96" ></textarea>
                  </div>
                  <button type="submit" className="bg-teal-500 rounded-md px-4 py-3 text-sm text-white mt-5 "> Submit</button>
                </form>
              </div>
            </div>
            <div className="bg-yellow-50 flex h-72 mx-12 justify-around pt-20 text-center my-28">
              <div>
                <img src={emailicon} alt="" className="ml-20 mb-5 mt-5" />
                <h5 className="text-yellow-600 font-medium">Mail Us</h5>
                <p>ouremail@donationtrace.com</p>
              </div>
              <div>
                <img src={phoneicon} alt="" className="ml-10 mb-5 mt-5" />
                <h5 className="text-yellow-600 font-medium">Call US</h5>
                <p>+233 12 355 6789</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}

export default ContactUsForm