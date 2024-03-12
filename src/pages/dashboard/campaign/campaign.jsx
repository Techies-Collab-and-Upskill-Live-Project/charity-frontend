import React from 'react'
import DropdownButton from '../components/dropdown'
import DateRangePicker from '../components/datepicker'
import { GoPlusCircle } from "react-icons/go"
import {
    HiArrowTopRightOnSquare,
    HiChevronDown,
    HiOutlineChatBubbleBottomCenterText,
    HiChevronUp
} from "react-icons/hi2";
import { FaRegHandPointRight } from "react-icons/fa";
import ActiveCampaign from '../components/activecampaign';
const Campaign = () => {
  return (
      <div className=' p-4'>
          <div className='sm:mx-10'>
              <div className='flex flex-wrap justify-between items-center mt-6 bg-white shadow border rounded-md p-4'>
                  <h5 className=' text-[#101928]'>Campaign Overview</h5>
                  <div className='flex space-x-4'>
                      <DropdownButton items={['Newest', 'Trending', 'Most Found', 'Ending Soon',]} />
                      <DateRangePicker/>
                  </div>
              </div>
              <div className='p-5 bg-white rounded-lg border border-[#292D32] mt-8'>
                  <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 '>
                      <div className='mb-4'>
                          <h6 className=' text-[#101928]'>Summary of all Campaigns</h6>
                          <div className='mt-4 flex justify-between'>
                              <p className=' text-black text-base font-semibold leading-normal'>Total Email sent</p>
                              <p className='text-black text-base font-semibold leading-normal'>9000</p>
                          </div>
                          <hr className="my-5" />
                          <div className=' flex justify-between'>
                              <p className=' text-black text-base font-medium leading-normal'>Delivered</p>
                              <p className='text-black text-base font-semibold leading-normal'>8000</p>
                          </div>
                          <div className=' flex justify-between'>
                              <p className=' text-black text-base font-medium leading-normal'>-Opened</p>
                              <p className='text-black text-base font-semibold leading-normal'>7000</p>
                          </div>
                          <div className=' flex justify-between'>
                              <p className=' text-black text-base font-medium leading-normal'>-Clicked</p>
                              <p className='text-black text-base font-semibold leading-normal'>6000</p>
                          </div>
                          <div className=' flex justify-between'>
                              <p className=' text-black text-base font-bold leading-normal'>Rejected</p>
                              <p className='text-black text-base font-bold leading-normal'>1000</p>
                          </div>
                          <div className=' flex justify-between'>
                              <p className=' text-black text-base font-bold leading-normal'>Responded</p>
                              <p className='text-black text-base font-bold leading-normal'>5000</p>
                          </div>
                      </div>
                      <div>
                      <div className='mb-4'>
                          <button className=" w-full text-black border border-[#667185] font-medium rounded-lg text-sm px-5 py-2.5  inline-flex items-center justify-center space-x-4">
                              <GoPlusCircle className=' w-6 h-6' />
                              <p>New Campaign</p>
                          </button>
                          </div>
                          <img src='/assets/svg/Line and bar chart.svg' alt='chart' className=' w-auto h-auto mt-2' />
                      </div>
                  </div>
                  <div className=' mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8'>
                      <div className='  px-3 py-1.5 space-y-3 bg-white rounded-lg border border-[#088432]'>
                          <FaRegHandPointRight className=' w-6 h-6 text-[#088432]' />
                          <div className=' flex  justify-between'>
                              <HiChevronUp className=' w-4 h-4' />
                              <p className=' text-black text-sm '>10,682</p>
                          </div>
                          <div className=' flex  justify-between'>
                              <p className=' text-black text-sm font-medium'>80%</p>
                              <p className=' text-black text-sm font-medium'>Likes</p>
                          </div>
                      </div>
                      <div className='  px-3 py-1.5 space-y-3 bg-white rounded-lg border border-[#088432]'>
                          <HiArrowTopRightOnSquare className=' w-6 h-6' />
                          <div className=' flex  justify-between'>
                              <HiChevronDown className=' w-4 h-4' />
                              <p className=' text-black text-sm '>700</p>
                          </div>
                          <div className=' flex  justify-between'>
                              <p className=' text-black text-sm font-medium'>12%</p>
                              <p className=' text-black text-sm font-medium'>Share</p>
                          </div>
                      </div>
                      <div className='  px-3 py-1.5 space-y-3 bg-white rounded-lg border border-[#088432] '>
                          <HiOutlineChatBubbleBottomCenterText className=' w-6 h-6 text-[#000000]' />
                          <div className=' flex  justify-between'>
                              <HiChevronUp className=' w-4 h-4' />
                              <p className=' text-black text-sm '>3,682</p>
                          </div>
                          <div className=' flex  justify-between'>
                              <p className=' text-black text-sm font-medium'>45%</p>
                              <p className=' text-black text-sm font-medium'>Comments</p>
                          </div>
                        </div>
                  </div>
              </div>
              <ActiveCampaign/>
             
          </div>
      
    </div>
  )
}

export default Campaign
