import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";


function NavBar() {
const [navbarOpen, setNavBarOpen] = useState(false);
  return (
    
    <div className=" bg-white fixed inset-x-0 z-50">
       <div className="flex flex-wrap items-center justify-between py-2 ">
      <div className="container w-full mx-auto px-4 flex flex-wrap items-center justify-between">
         <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/" className="inline-block mr-4 py-2">
              <img  className="w-10 h-10" src="/assets/logo.png" alt="logo"/>
            </Link>
            <button
              className="text-[#00050F] cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden  outline-none focus:outline-none"
              type="button"
              onClick={() => setNavBarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <AiOutlineClose size={25} />
              ) : (
                <HiBars3 size={25} />
              )}
            </button>
        </div>
        <div
          className={"lg:flex flex-grow items-center justify-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <div className="flex flex-col items-center justify-center lg:flex-row lg:ml-auto">
            <Link href="/" className="nav-link">Explore</Link>
            <Link href="/" className="nav-link">Link 2  </Link>
            <Link href="/" className="nav-link">Contact Us</Link>

            <div className="flex flex-row items-center justify-center py-6 lg:py-0 lg:ml-60">
            <button className="border border-[#04A38A] rounded-md mr-1 py-3 text-[#04A38A] px-5 font-medium">Login</button>
            <button className="bg-[#04A38A] border-2 border-[#04A38A] rounded-md min-w-max ml-5 p-3 px-5 font-medium text-white text-base">Start a Campaign</button>
          </div>
          </div>
        </div>
      </div>
     

      
    </div>
    </div>
   
  );
}

export default NavBar;
