import React from "react";
import logo from "../assest/logo.png"
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div  className="container mx-auto">
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
         <div className="ml-14">
            <a href="/" > <img src={logo} alt="logo" className="w-32 pr-0"  /></a>
         </div>

        <div className="flex mt-9">
            <div className="ml-3 mr-96">
                <a href="/">Home</a>
                <a href="/"> Link 1</a>
                <a href="/"> Link 2</a>
                <a href="/"> Contact us</a>
            </div>

            <div className="flex ml-96">
                <CiFacebook />
                <CiTwitter />
                <FaInstagram />
            </div>
          </div>
        </div>
        <hr className="m mx-14"/>
        <div className="ml-14 mt-6" >
         <p>Copywright  2023 Your Company. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
