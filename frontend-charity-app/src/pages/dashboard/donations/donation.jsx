import React from 'react'
import { HiMiniChevronUpDown, HiOutlineChevronRight } from "react-icons/hi2";
import activitiesdata from '../../../Data';
import FilterDropdown from '../components/filterdropdown';
const Donation = () => {
  return (
      <div className='p-4'>
          <div className='flex  items-center justify-between '>
              <h4 className=' text-[#101928]'>Donations</h4>
              <div className='  flex items-center space-x-3 w-full md:w-auto'>
                 <FilterDropdown items={['Health Aid', 'Child Welfare', 'Poverty Relief', 'Human Rights', 'Education', 'Disaster Relief', ]}/>
                  <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-[#667185] focus:outline-none" type="button">
                      <HiMiniChevronUpDown className=' text-[#667185] w-4 h-4' />
                     Sort
                  </button>
                  <div id="filterDropdown" className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow ">
                      <h6 className="mb-3  text-gray-900 ">Choose Donation</h6>
                      <ul className="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                          <li className="flex items-center">
                              Health Aid
                          </li>
                          <li className="flex items-center">
                              Child  Welfare
                          </li>
                          <li className="flex items-center">
                              Poverty Relief
                          </li>
                      </ul>
                  </div>
              </div>
          </div>

           <div className='grid gap-6 row-gap-5  lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2  mt-2'>
                        {activitiesdata.map((activities) => (
                            <div key={activities.id} className=' relative inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2'>
                                <div className='flex flex-col h-full'>
                                    <img
                                        src={activities.CoverImg}
                                        className="object-cover w-full h-64"
                                        alt={activities.text} 
                                        
                                    />
                                    <div className=' absolute mt-6 left-4 top-0 rounded-md bg-[#0A0A0AA3]'>
                                        <p className=' px-4 py-3 bg-transparent text-white font-normal text-[12px]'>
                                            {activities.text}
                                        </p>
                                    </div>
                                    <div className='flex-grow'>
                                        <div className='p-4'>
                                            <button className="mt-4 text-[12px] bg-transparent">
                                                <span className="  text-[#04A38A]  flex items-center justify-center space-x-5">
                                                    Donate Now
                                                    <HiOutlineChevronRight size={15}/>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
          
    </div>
  )
}

export default Donation