import React from "react";
import { FaFacebook, FaTwitter  } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import { Link } from "react-router-dom";



function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="bg-white w-full mx-auto">
       <div className="container mx-auto  w-full">
        <div className="py-16 lg:py-20 mx-auto">
          <hr className="mb-16" />
          <div>
            <div className="flex flex-col">
              <h3 className=" text-center  mb-3">Subscribe to our newsletter</h3>
              <p className="text-center text-xs font-thin mb-5">Lorem ipsum dolor sit amet consectectur. Nunc ultrices in</p>
              <div className="flex justify-center max-sm:flex-col">
                <input type="text" placeholder="olivia@untitledui.com" class="block rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring  ring-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6" />
                <button className="bg-teal-500 rounded-md ml-4 px-3 text-sm text-white max-sm:ml-0 max-sm:mt-5 max-sm:w-32 max-sm:py-2">Subscribe</button>
              </div>
            </div>
            <div className="flex items-center mt-6 mb-5  space-x-5">
              <div className="">
                <a href="/" > <img src="/assets/logo.png" alt="logo" className="w-10 h-10 pr-0 max-sm:w-20 max-sm:mt-5" /></a>
              </div>
              <div className="flex flex-col md:flex-row ">
                <div className="flex flex-row space-x-5">
                  <Link to="/" className="nav-link">Home</Link>
                  <a href="/" className="nav-link"> Explore</a>
                  <a href="/" className="nav-link"> Link 2</a>
                  <Link to="/contactus" className="nav-link"> Contact us</Link>
                </div>
                <div className="flex space-x-5  ">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E7F8F0]">
                    <FaFacebook className="w-6 h-6 text-[#04A38A]"/>
                  </div>
                  <div className="flex items-center justify-center w-10 h-10  rounded-full bg-[#E7F8F0]">
                    <FaTwitter  className=" w-6 h-6 text-[#04A38A]"/>
                  </div>
                  <div className="flex items-center justify-center w-10 h-10  rounded-full bg-[#E7F8F0]">
                    <AiFillInstagram className=" w-6 h-6 text-[#04A38A]"/>
                  </div>
                </div>
              </div>
            </div>
            <hr className="ml-10 mr-0 max-sm:ml-0" />
            <div className="ml-10 mt-6 max-sm:ml-0" >
              <p className="font font-thin max-sm:font-normal">Copywright  2023 Your Company. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>

   
  );
}

export default Footer;
