import React from 'react'
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
const DashboardContent = () => {
  return (
      <div className='p-4'>
          <h4 className=' text-[#101928]'>Dashboard</h4>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
              <div className=' flex space-x-4 mt-6 bg-white rounded-lg p-4 shadow'>
                  <div className=" flex-shrink-0 flex items-center justify-center rounded-full w-10 h-10 bg-[#6DCABB]">
                      <HiOutlineCurrencyDollar className="w-8 h-8 text-[#04A38A]"/>
                  </div>
                  <div className="">
                      <p className="text-base font-medium leading-normal text-[#252525]">$20,000</p>
                        <p className="text-sm leading-normal text-[#6C6C6C]">Funds raised</p>
                  </div>
              </div>
              <div className=' flex space-x-4 mt-6 bg-white rounded-lg p-4 shadow'>
                  <div className=" flex-shrink-0 flex items-center justify-center rounded-full w-10 h-10 bg-[#6DCABB]">
                      <HiOutlineCurrencyDollar className="w-8 h-8 text-[#04A38A] "/>
                  </div>
                  <div className="">
                      <p className="text-base font-medium leading-normal text-[#252525]">20</p>
                        <p className="text-sm leading-normal text-[#6C6C6C]">Events</p>
                  </div>
              </div>
              <div className=' flex space-x-4 mt-6 bg-white rounded-lg p-4 shadow'>
                  <div className=" flex-shrink-0 flex items-center justify-center rounded-full w-10 h-10 bg-[#6DCABB]">
                      <HiOutlineCurrencyDollar className="w-8 h-8 text-[#04A38A]"/>
                  </div>
                  <div className="">
                      <p className="text-base font-medium leading-normal text-[#252525]">5</p>
                        <p className="text-sm leading-normal text-[#6C6C6C]">Campaigns</p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default DashboardContent