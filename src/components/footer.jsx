import React from "react";
import logo from "../assets/logo.png"
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom";



function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="bg-white w-full">
       <div className="container mx-auto  w-full">
      <div className="py-16 lg:py-20 mx-auto">
         <hr className="mb-16"/>
      <div>
        <div className="flex flex-col">
          <h3 className="text text-center text-3xl font-semibold mb-3">Subscribe to our newsletter</h3>
          <p className="text-center text-xs font-thin mb-5">Lorem ipsum dolor sit amet consectectur. Nunc ultrices in</p>
          <div className="flex justify-center max-sm:flex-col">
              <input type="text" placeholder="olivia@untitledui.com"  class="block rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              <button className="bg-teal-500 rounded-md ml-4 px-3 text-sm text-white max-sm:ml-0 max-sm:mt-5 max-sm:w-32 max-sm:py-2">Subscribe</button>
          </div>
        </div>
        <div className= "flex mb-5 max-sm:flex-col">
         <div className="ml-10 max-sm:ml-32">
            <a href="/" > <img src={logo} alt="logo" className="w-32 pr-0 max-sm:w-20 max-sm:mt-5"  /></a>
         </div>

        <div className="flex mt-9 max-sm:flex-col">
            <div className="ml-3 mr-64 max-sm:ml-0 max-sm:mr-0">
                <Link  to="/" className="ml-5 font-semibold max-sm:ml-5">Home</Link>
                <a href="/" className="ml-10 font-semibold max-sm:ml-5"> Explore</a>
                <a href="/" className="ml-10 font-semibold max-sm:ml-5"> Link 2</a>
                <Link to="/contactus" className="ml-10 font-semibold max-sm:ml-5"> Contact us</Link>
            </div>

            <div className="flex ml-72 max-sm:ml-4 max-sm:mt-5">
                <CiFacebook className="max-sm:mr-2"/>
                <CiTwitter className="max-sm:mr-2"/>
                <FaInstagram className="max-sm:mr-2"/>
            </div>
          </div>
        </div>
        <hr className="ml-10 mr-0 max-sm:ml-0"/>
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
