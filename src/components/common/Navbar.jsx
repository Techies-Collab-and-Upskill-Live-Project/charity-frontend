import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import DropdownMenu from "../dropdown";


function NavBar() {
  const [navbarOpen, setNavBarOpen] = useState(false);

  const [isExploreDropdownOpen, setExploreDropdownOpen] = useState(false);
  const [isOtherDropdownOpen, setOtherDropdownOpen] = useState(false);

 const toggleExploreDropdown = () => {
    setExploreDropdownOpen(!isExploreDropdownOpen);
    // Close other dropdown when Explore dropdown is toggled
    setOtherDropdownOpen(false);
  };

  const toggleOtherDropdown = () => {
    setOtherDropdownOpen(!isOtherDropdownOpen);
    // Close Explore dropdown when Other dropdown is toggled
    setExploreDropdownOpen(false);
  };

  const closeDropdowns = () => {
    setExploreDropdownOpen(false);
    setOtherDropdownOpen(false);
  };

  // explore options
  const exploreOptions = [
    {
      id: 1,
      label: 'Option 1',
      to: '/discover', // Specify the path you want for Option 1
    },
    {
      id: 2,
      label: 'Option 2',
      to: '/explorecategory', // Specify the path you want for Option 2
    },
  ];

  // other link options
  const otherOptions = [
    {
      id: 1,
      label: 'Option1',
      to: '/otherOption1', // Specify the path you want for Other Option 1
    },
    {
      id: 2,
      label: 'Option2',
      to: '/otherOption2', // Specify the path you want for Other Option 2
    },
  ];



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
            <nav className="flex flex-col items-center justify-around lg:flex-row lg:ml-auto">
              <div className=" flex items-center">
                <Link to="/discover" className="nav-link">Explore</Link>
                <div className="relative">
                  <FaChevronDown 
                    className="text-gray-600 w-2 h-2  focus:outline-none"
                   onClick={toggleExploreDropdown}
                  />
                  
                  <DropdownMenu
                     isOpen={isExploreDropdownOpen}
                    closeDropdown={closeDropdowns}
                    options={exploreOptions}
                  />
                </div>
              </div>
               <div className=" flex items-center ">
                 <Link href="/" className="nav-link">Link 2</Link>
                <div className="relative">
                  <FaChevronDown 
                    className="text-gray-600 w-2 h-2 focus:outline-none"
                    onClick={toggleOtherDropdown}

                  />
                  
                  <DropdownMenu
                     isOpen={isOtherDropdownOpen}
                    closeDropdown={closeDropdowns}
                    options={otherOptions} 
                    
                  />
                </div>
              </div>
              
             
              <Link to="/contactus" className="nav-link">Contact Us</Link>
              <div className="flex flex-row items-center justify-center py-6 lg:py-0 lg:ml-60">
                <Link to="/login"><button className="border border-[#04A38A] rounded-md mr-1 py-3 text-[#04A38A] px-5 font-medium">Login</button></Link>
                <Link to="/signup"><button className="bg-[#04A38A] border-2 border-[#04A38A] rounded-md min-w-max ml-5 p-3 px-5 font-medium text-white text-base">Start a Campaign</button></Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>

  );
}

export default NavBar;
