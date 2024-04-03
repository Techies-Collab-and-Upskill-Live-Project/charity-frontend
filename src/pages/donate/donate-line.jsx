import React, {useState} from 'react';
import { FaRegUser } from "react-icons/fa6";
import { FaHandHoldingHeart, FaRegFlag, FaCalendarAlt  } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import TabButton from '../../components/tabbutton';
import { AboutContent, DonationContent, UpdateContent } from '../../components/campaigntabscontent';
import { Link } from "react-router-dom";


const DonateLine = () => {
    const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'About this campaign', content: <AboutContent /> },
    { label: 'Update' ,  content: <UpdateContent /> },
    { label: 'Donation',  content: <DonationContent /> },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
   

    return(
        <div className=" bg-white w-full">
            <div className=" container mx-auto w-full">
                <div className="py-16 lg:py-20 mx-auto">
                    <div className="">
                        <div className='grid gap-10 lg:grid-cols-2 mt-10 lg:mt-20'>
                            <div>
                                <img src="/assets/image1.jpg" alt="donate_img" className=" w-[600px] h-auto  rounded-xl" loading="lazy"/>
                                <div className="flex items-center  space-x-4 mt-5">
                                    <div className=' flex items-center justify-center rounded-full bg-[#EBEBEB] w-8 h-8'>
                                        <FaRegUser className=' text-[#7B7B7B] w-4 h-4' />
                                    </div>
                                    <h6 className="text-[#252525]">Ahmed Tinubu </h6>
                                    <p className=" text-gray-500"> started this fundraiser</p>
                                </div>
                            </div>
                            <div className='hidden lg:block'>
                                <div className="border-2 px-4 py-3 bg-white rounded-lg shadow-md  ">
                                    <div className="flex mb-5 max-sm:mt-10">
                                        <p className="font-medium text-2xl mr-1">$50</p>
                                        <p className=" mt-2 font-normal text-gray-500">raised of $100 target</p>
                                    </div>
                                    <div className="w-[326px] lg:w-[368px] h-[72px] flex-col justify-start items-start gap-1 inline-flex ">
                                        <div className="self-stretch h-12 relative">
                                            <div className="w-[326px] lg:w-[368px] h-2 left-0 top-[40px] absolute">
                                                <div className="w-[326px] lg:w-[368px] h-2 left-0 top-0 absolute bg-neutral-200 rounded-lg" />
                                                <div className="  w-[170.30px] lg:w-[192.24px] h-2 left-0 top-0 absolute bg-teal-600 rounded-lg" />
                                            </div>
                                            <div className="w-[66px] h-9 left-[140.85px] lg:left-[160px] top-0 absolute">
                                                <div className="w-[66px] h-7 px-2 py-1 left-0 top-0 absolute bg-emerald-50 rounded-lg justify-center items-center inline-flex">
                                                    <div className="text-center text-emerald-700 text-sm font-bold font-['Nunito'] leading-tight">$50.00</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch justify-start items-start inline-flex">
                                            <div className="grow shrink basis-0 h-5 justify-end items-center gap-2.5 flex">
                                                <div className="grow shrink basis-0 text-right text-emerald-700 text-sm font-bold font-['Nunito'] leading-tight">$100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex mt-3">
                                        <span className=' flex items-center justify-center rounded-full w-10 h-10 bg-[#FAF4ED]'>
                                            <FaHandHoldingHeart className=' w-5 h-5 text-[#D18D4A]'/>
                                        </span>
                                        <p className="mt-1 ml-3 font-bold text-[#D18D4A]">5k people just donated</p>
                                    </div>
                                    <div className="flex flex-col mt-2">
                                        <Link to={"/paymentpage"} className="bg-teal-500 w-full rounded-md px-4 py-3 text-center text-white mt-5 font-bold text-base">Donate now</Link>
                                        <button className="bg-white w-full rounded-md px-4 py-3 text-teal-500 border-2 border-teal-500  font-bold text-base mt-5 "> Share Campaign</button>
                                    </div>
                                    <hr className="my-5" />
                                    <div className="flex space-x-4 mt-2">
                                    <FaRegFlag  className=" text-[#515151] w-6 h-7" />
                                    <p className="text-[#515151]">Report Fundraiser</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className=" mt-5 max-sm:mt-10">
                            <div>
                                <h4 className="max-sm:text-center max-w-md">
                                    Building a Brighter Tomorrow for Orphans in Africa
                                </h4>
                                <div className="flex  space-x-2 mt-3">
                                    <div className="flex items-center space-x-2">
                                        <HiOutlineLocationMarker className='w-4 h-4 text-[#6C6C6C]' />
                                        <p className=" text-gray-600 font-medium">Abuja, Nigeria </p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <FaCalendarAlt className="w-4 h-4 text-[#6C6C6C]" />
                                        <p className=" text-gray-600 font-medium">23 December, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='max-w-md w-full'>
                            <hr className=' mt-6 ' />
                        <div className="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap">
                            {tabs.map((tab, index) => (
                                <TabButton
                                    key={index}
                                    label={tab.label}
                                    isActive={activeTab === index}
                                    onClick={() => handleTabClick(index)}
                                />
                            ))}
                        </div>
                        <div className="mt-7">{tabs[activeTab].content}</div>
                        
                        </div>
                         <div className='lg:hidden block mt-8'>
                                <div className="border-2 px-4 py-3 bg-white rounded-lg shadow-md  ">
                                    <div className="flex mb-5 max-sm:mt-10">
                                        <p className="font-medium text-2xl mr-1">$50</p>
                                        <p className=" mt-2 font-normal text-gray-500">raised of $100 target</p>
                                    </div>
                                    <div className="w-[300px] lg:w-[368px] h-[72px] flex-col justify-start items-start gap-1 inline-flex ">
                                        <div className="self-stretch h-12 relative">
                                            <div className="w-[326px] lg:w-[368px] h-2 left-0 top-[40px] absolute">
                                                <div className="w-[300px] lg:w-[368px] h-2 left-0 top-0 absolute bg-neutral-200 rounded-lg" />
                                                <div className="  w-[160.30px] lg:w-[192.24px] h-2 left-0 top-0 absolute bg-teal-600 rounded-lg" />
                                            </div>
                                            <div className="w-[66px] h-9 left-[140.85px] lg:left-[160px] top-0 absolute">
                                                <div className="w-[66px] h-7 px-2 py-1 left-0 top-0 absolute bg-emerald-50 rounded-lg justify-center items-center inline-flex">
                                                    <div className="text-center text-emerald-700 text-sm font-bold font-['Nunito'] leading-tight">$50.00</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch justify-start items-start inline-flex">
                                            <div className="grow shrink basis-0 h-5 justify-end items-center gap-2.5 flex">
                                                <div className="grow shrink basis-0 text-right text-emerald-700 text-sm font-bold font-['Nunito'] leading-tight">$100.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex mt-3">
                                        <span className=' flex items-center justify-center rounded-full w-10 h-10 bg-[#FAF4ED]'>
                                            <FaHandHoldingHeart className=' w-5 h-5 text-[#D18D4A]'/>
                                        </span>
                                        <p className="mt-1 ml-3 font-bold text-[#D18D4A]">5k people just donated</p>
                                    </div>
                                    <div className="flex flex-col mt-2">
                                        <Link to={"/paymentpage"} className="bg-teal-500 w-full rounded-md px-4 py-3 text-white mt-5 text-center font-bold text-base">Donate now</Link>
                                        <button className="bg-white w-full rounded-md px-4 py-3 text-teal-500 border-2 border-teal-500  font-bold text-base mt-5 "> Share Campaign</button>
                                    </div>
                                    <hr className="my-5" />
                                    <div className="flex space-x-4 mt-2">
                                    <FaRegFlag  className=" text-[#515151] w-6 h-7" />
                                    <p className="text-[#515151]">Report Fundraiser</p>
                                </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default DonateLine