import React, {useState} from 'react'
import { IoCalendarNumberOutline } from "react-icons/io5";
const DashboardSta = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);



  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className='p-4'>
      <div className='w-full grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 '>
        <div className='rounded-lg bg-[#FAFAFA] shadow-md lg:col-span-2 p-4'>
          <div>
            <div className=' flex justify-between'>
              <p className=' text-[#101928] font-bold text-[0-80] leading-normal'>Statistics</p>
              <div className="relative inline-block ">
              <button
                id="dropdownDefaultButton"
                onClick={toggleDropdown}
                className="text-[#04A38A] bg-[#E6F6F3]  focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                type="button"
              >
               2023{' '}
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
          <div className=' mt-6 '>
            <img src='/assets/svg/Line Chart.svg' alt='chart' className=' w-auto h-auto p-2'/>
          </div>
        </div>
        <div className='rounded-lg bg-[#FAFAFA] shadow-md p-4'>
          <div>
            <p className='text-[#101928] font-bold text-[0-80] leading-normal'>Events</p>
          </div>
          {/**==========In consideration=========== */}
          <div className='rounded-lg bg-[#FFF] shadow-md p-4 mt-6 '>
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
                    <IoCalendarNumberOutline className="w-6 h-6 text-[#04A38A] "/>
                </div>
                <div>
                  <p className="text-base font-semibold leading-normal text-[#252525]">20/12/2023</p>
                </div>
              </div>
              <div className=' flex space-x-4 items-cneter'>
                <div className=" flex-shrink-0">
                    <img src="/assets/svg/Social icon.svg" alt='social_icon' className="w-8 h-8 text-[#04A38A] "/>
                </div>
                <div>
                  <p className="text-base font-semibold leading-normal text-[#252525]">Google Meet</p>
                </div>
              </div>
              <div className=' flex space-x-4 items-center'>
                <div className=" flex-shrink-0  relative">
                   <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-600 rounded-full "></span>
                    <img src="/assets/img2" alt="" className="w-8 h-8 rounded-full text-[#04A38A] "/>
                </div>
                <div>
                  <p className="text-base font-semibold leading-normal text-[#252525]">Iman Akbar</p>
                </div>
              </div>
            </div>
          </div>
          {/**============In session=========== */}
          <div className='rounded-lg bg-[#FFF] shadow-md p-4 mt-4'>
            <div className=' flex justify-end'>
              <div className=' bg-[#FFFAEB] rounded-full w-24 h-6 flex items-center justify-center'>
                <div className=' flex items-center space-x-2'>
                  <span className=' bg-[#F79009] rounded-full w-2 h-2'></span>
                  <span className=' text-[#B54708] font-medium leading-[18px] text-xs'>In session</span>
                </div>
              </div>
            </div>
            <div className=' flex flex-col space-y-2 mt-4'>
              <div className=' flex space-x-4 items-center'>
                <div className=" flex-shrink-0 flex items-center justify-center rounded-full w-8 h-8 bg-[#6DCABB]">
                    <IoCalendarNumberOutline className="w-6 h-6 text-[#04A38A] "/>
                </div>
                <div>
                  <p className="text-base font-semibold leading-normal text-[#252525]">20/12/2023</p>
                </div>
              </div>
              <div className=' flex space-x-4 items-cneter'>
                <div className=" flex-shrink-0">
                    <img src="/assets/svg/Social icon.svg" alt='social_icon' className="w-8 h-8 text-[#04A38A] "/>
                </div>
                <div>
                  <p className="text-base font-semibold leading-normal text-[#252525]">Google Meet</p>
                </div>
              </div>
              <div className=' flex space-x-4 items-center'>
                <div className=" flex-shrink-0  relative">
                   <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-600 rounded-full "></span>
                    <img src="/assets/img2" alt="" className="w-8 h-8 rounded-full text-[#04A38A] "/>
                </div>
                <div>
                  <p className="text-base font-semibold leading-normal text-[#252525]">Iman Akbar</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DashboardSta
