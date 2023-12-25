import React from "react";
import logo from "../assets/logo.png"
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (

    <div  className="container mx-auto mb-10 mt-28 md:max-lg:flex"   >
      <hr className="mb-16"/>
      <div>
        <div className="flex flex-col">
          <h3 className="text text-center text-3xl font-semibold mb-3">Subscribe to our newsletter</h3>
          <p className="text-center text-xs font-thin mb-5">Lorem ipsum dolor sit amet consectectur. Nunc ultrices in</p>
          <div className="flex justify-center">
              <input type="text" placeholder="olivia@untitledui.com"  class="block  rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              <button className="bg-teal-500 rounded-md ml-4 px-3 text-sm text-white">Subscribe</button>
          </div>
        </div>
        <div className= "flex mb-5">
         <div className="ml-10">
            <a href="/" > <img src={logo} alt="logo" className="w-32 pr-0"  /></a>
         </div>

        <div className="flex mt-9">
            <div className="ml-3 mr-64">
                <a href="/" className="ml-5 font-semibold">Home</a>
                <a href="/" className="ml-10 font-semibold"> Link 1</a>
                <a href="/" className="ml-10 font-semibold"> Link 2</a>
                <a href="/" className="ml-10 font-semibold"> Contact us</a>
            </div>

            <div className="flex ml-72">
                <CiFacebook />
                <CiTwitter />
                <FaInstagram />
            </div>
          </div>
        </div>
        <hr className="ml-10 mr-0"/>
        <div className="ml-10 mt-6" >
         <p className="font font-thin">Copywright  2023 Your Company. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
