import React, {useState} from 'react'
import { TbCalendarStats } from "react-icons/tb";
import { HiChevronLeft, HiChevronRight  } from "react-icons/hi2";
import { events } from '../../../Data';
const ActiveEvents = () => {
const [isDropdownOpen, setIsDropdownOpen] = useState(false);



    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
      
  return (
      <div className=' p-4'>
          <h4 className=' text-[#101928]'>Events</h4>
          <div className=' flex space-x-4 mt-6 bg-white w-52 rounded-lg p-4 shadow-md duration-300 transform  hover:-translate-y-2'>
              <div className=" flex-shrink-0 flex items-center justify-center rounded-full w-10 h-10 bg-[#6DCABB]">
                  <img src='/assets/svg/calendar.svg' alt='calendar' className="w-8 h-8 text-[#04A38A] " />
              </div>
              <div>
                  <p className="text-base font-bold leading-normal text-[#252525]">20</p>
                  <p className="text-sm font-semibold leading-normal text-[#6C6C6C]">Events</p>
              </div>
          </div>
          <div className='mt-10'>
              <h4 className=' text-[#101928]'>All Events</h4>
               <div className="flex flex-wrap justify-between items-center mt-6">
                      <div className='flex justify-start items-center'>
                          <form action="#" method="GET" className=" lg:pl-2">
                              <label for="topbar-search" className="sr-only">Search</label>
                              <div className="relative mt-1 lg:w-96">
                                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                      <svg
                                          className="w-4 h-4 text-[#475367]"
                                          aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                          fill="none" viewBox="0 0 20 20"
                                       > 
                                          <path
                                              stroke="currentColor"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              stroke-width="2"
                                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" 
                                          />
                                      </svg>
                                  </div>
                                  <input
                                      type="text"
                                      name="email"
                                      id="topbar-search"
                                      className="bg-[#F0F2F5] border border-[#F9FAFB] text-gray-900 sm:text-sm rounded-lg focus:ring-[#F0F2F5]  block w-full pl-9 p-2.5 "
                                      placeholder="Search here..." 
                                    />
                              </div>
                          </form>
                      </div>
                      <div className="flex items-center">
                      <div className="relative inline-block ">
                          <button
                              id="dropdownDefaultButton"
                              onClick={toggleDropdown}
                              className="text-[#292D32] focus:outline-none  font-medium  text-sm px-4 py-2.5 text-center inline-flex items-center"
                              type="button"
                            >
                              <TbCalendarStats className=' w-5 h-5 text-[#292D32] ' />
                              
                              <svg
                                  className={`w-2.5 h-2.5 ms-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 10 6"
                              >
                                  <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="m1 1 4 4 4-4"
                                  />
                              </svg>
                          </button>
                          {/* Dropdown menu */}
                          {isDropdownOpen && (
                              <div
                                  id="dropdown"
                                  className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-full right-0 mt-1"
                              >
                                  <ul className="py-2 text-sm text-[#04A38A]">
                                      <li className='className="block px-4 py-2 hover:bg-[#E6F6F3]"'>
                                          2023
                                      </li>
                                  </ul>
                              </div>
                          )}
                      </div>
                  </div>
              </div>
              <div className='grid gap-6 row-gap-5  lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2  mt-2'>
                  {events.map((event) => (
                      <div key={event.id} className='relative rounded-lg bg-[#FFF] shadow-md p-4 mt-6'>
                          <div className=' flex justify-end'>
                              <div className=' bg-[#E6F6F3] rounded-full w-32 h-6 flex items-center justify-center'>
                                  <div className=' flex items-center space-x-2'>
                                      <span className=' bg-[#04A38A] rounded-full w-2 h-2'></span>
                                      <span className=' text-[#04A38A] font-medium leading-[18px] text-xs'>In consideration</span>
                                  </div>
                              </div>
                          </div>
                          <div className=' flex flex-col space-y-2 mt-4'>
                              <div className=' flex space-x-4 items-center'>
                                  <div className=" flex-shrink-0 flex items-center justify-center rounded-full w-8 h-8 bg-[#6DCABB]">
                                      <img src={event.calendarIcon} alt='calendar' className="w-6 h-6 text-[#04A38A] " />
                                  </div>
                                  <div>
                                      <p className="text-base font-semibold leading-normal text-[#252525]">{event.date }</p>
                                  </div>
                              </div>
                              <div className=' flex space-x-4 items-cneter'>
                                  <div className=" flex-shrink-0">
                                      <img src={event.googleIcon} alt='social_icon' className="w-8 h-8 text-[#04A38A] " />
                                  </div>
                                  <div>
                                      <p className="text-base font-semibold leading-normal text-[#252525]">{event.desc}</p>
                                  </div>
                              </div>
                              <div className=' flex space-x-4 items-center'>
                                  <div className=" flex-shrink-0  relative">
                                      <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-600 rounded-full "></span>
                                      <img src={event.user} alt="" className="w-8 h-8 rounded-full text-[#04A38A] " />
                                  </div>
                                  <div>
                                      <p className="text-base font-semibold leading-normal text-[#252525]">{event.userName }</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>

              <div className=' mt-6 flex justify-end items-end'>
                  <div className='flex space-x-6'>
                      <div className=' flex items-center justify-center space-x-2 disabled'>
                          <HiChevronLeft className=' w-6 h-6 ' />
                          <span className='text-sm font-bold  leading-tight'>Previous</span>
                      </div>
                      <div className=' flex items-center justify-center space-x-2'>
                          <span className='text-sm font-bold  leading-tight'>Next</span>
                          <HiChevronRight  className=' w-6 h-6 text-[#161616]' />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

    export default ActiveEvents
