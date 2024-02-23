import React, {useState} from 'react';
import { CiGrid41 } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { FaCalendarAlt } from "react-icons/fa";
import { FaDiceD6 } from "react-icons/fa6";
import { IoDocumentOutline } from "react-icons/io5";
import { RiSettingsLine } from "react-icons/ri";
import { MdOutlineLiveHelp } from "react-icons/md";
import { Link } from 'react-router-dom';

const DashboardSidebar = () => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

   
  return (
      <div>
          <button
              onClick={handleSidebarToggle}
              data-drawer-target="sidebar"
              data-drawer-toggle="sidebar"
              aria-controls="sidebar"
              type="button"
              className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-200 rounded-lg sm:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
              >
                  <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
              </svg>
          </button>
          <aside
              id="sidebar"
              onClick={handleSidebarClose}
              className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}`}
              aria-label="Sidebar"
          >
              <div className="h-full px-3 py-4 overflow-y-auto bg-[#037261]">
                  <div className=' flex space-x-4 mt-6'>
                      <div className="relative flex-shrink-0">
                          <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-600 rounded-full "></span>
                          <img src="/assets/img2" alt="" className="w-12 h-12 border rounded-full  border-white " />
                      </div>
                      <div className="">
                          <p className="text-base leading-normal text-[#E6F6F3]">Alison Eyo</p>
                          <p className="text-sm leading-normal text-[#E6F6F3]">alison.e@rayna.ui</p>
                      </div>
                  </div>
                  <ul className="space-y-5  mt-8">
                      <li>
                          <div className='flex items-center justify-between p-2 border border-[#E6F6F3] bg-[#2FB39E] shadow-md rounded-md group'>
                              <div className="flex items-center ">
                                  <CiGrid41 className='flex-shrink-0 w-5 h-5 text-[#E6F6F3] transition duration-75' />
                                  <span className=" flex-1 ms-3 text-[#E6F6F3]">Dashboard</span>
                              </div>
                              <div className=' flex items-center justify-center w-8 h-6 bg-[#98D9CF] rounded-full'>
                                  <span className=' text-[#E6F6F3] text-sm'>10</span>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div className="flex items-center  group ">
                              <HiOutlineCurrencyDollar className='flex-shrink-0 w-5 h-5 text-[#98D9CF] transition duration-75' />
                              <Link to="/dashboard" className="flex-1 ms-3 text-base font-medium leading-normal text-[#98D9CF]">Fundraising</Link>
                          </div>
                      </li>
                      <li>
                          <div className=' flex items-center justify-between'>
                              <div className="flex items-center group">
                                  <FaCalendarAlt className='flex-shrink-0 w-5 h-5 text-[#98D9CF] transition duration-75' />
                                  <Link to="/events" className="flex-1 ms-3 text-base font-medium leading-normal text-[#98D9CF] ">Events</Link>
                              </div>
                              <div className=' flex items-center justify-center w-8 h-6 bg-[#98D9CF] rounded-full'>
                                  <span className=' text-[#E6F6F3] text-sm'>10</span>
                              </div>
                          </div>
                      </li>
                       <li>
                          <div className="flex items-center  group ">
                              <FaDiceD6 className='flex-shrink-0 w-5 h-5 text-[#98D9CF] transition duration-75' />
                              <Link to="/campaign" className="flex-1 ms-3 text-base font-medium leading-normal text-[#98D9CF]">Campaign</Link>
                          </div>
                      </li>
                       <li>
                          <div className="flex items-center  group ">
                              <IoDocumentOutline className='flex-shrink-0 w-5 h-5 text-[#98D9CF] transition duration-75' />
                              <Link to="/" className="flex-1 ms-3 text-base font-medium leading-normal text-[#98D9CF]">Documents</Link>
                          </div>
                      </li>
                  </ul>
                  <ul className='mt-52 space-y-5 '>
                      <li>
                          <div className="flex items-center  group ">
                              <RiSettingsLine className='flex-shrink-0 w-5 h-5 text-[#98D9CF] transition duration-75' />
                              <Link to="/account" className="flex-1 ms-3 text-base font-medium leading-normal text-[#98D9CF]">Setting</Link>
                          </div>
                      </li>
                      <li>
                          <div className="flex items-center  group ">
                              <MdOutlineLiveHelp className='flex-shrink-0 w-5 h-5 text-[#98D9CF] transition duration-75' />
                              <Link to="/dashboard" className="flex-1 ms-3 text-base font-medium leading-normal text-[#98D9CF]">Help</Link>
                          </div>
                      </li>
                  </ul>
              </div>
          </aside>
      </div>
  );
};

export default DashboardSidebar;
