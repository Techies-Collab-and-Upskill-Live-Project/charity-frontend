import React from 'react'
import activitiesdata from '../Data';
import { HiOutlineChevronRight } from "react-icons/hi2";

const ActivitySection = () => {
    return (
        <div className=' bg-[#FEFEFE] w-full'>
            <div className='container mx-auto w-full'>
                <div className='py-6 md:py-12'>
                    <div className="flex flex-col items-center sm:max-auto">
                        <h3 className="mb-4 tracking-wide text-center "> Explore Our Ongoing Causes</h3>
                        <p className="max-w-2xl font-medium text-center leading-5 text-[#515151] text-md">
                          Each cause is a chapter in our collective story of compassion. Explore,
                          engage, and make a lasting impact – because changing
                          the world starts with your support.
                        </p>
                    </div>
                    <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2 mt-10 lg:mt-16'>
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
            </div>
        </div>
  )
}

export default ActivitySection