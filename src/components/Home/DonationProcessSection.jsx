import React from 'react'
import { HiOutlineChevronRight } from "react-icons/hi2"
const DonationProcessSection = () => {
  return (
      <div className=' bg-white mx-auto w-full'>
          <div className=' container mx-auto w-full'>
              <div className='py-6 md:py-12'>
                  <p className="text-start text-orange-400 text-base font-bold">HOW TO DONATE</p>
                  <div className="pt-4 grid gap-5 lg:grid-cols-2 justify-start items-start">
                      <div>
                          <h3 className=" text-neutral-800  md:max-w-xl">Making a Difference: Learning the Donation Process</h3>
                          <p className=" text-neutral-600 text-base font-normal md:max-w-lg ">Empower Positive Change in a Few Simple Steps. Discover the Seamless Process of Donating on Donation Trace.</p>
                      </div>
                      <div>
                           <img src='/assets/donate_image.jpg' alt='donate' className="object-cover w-[500px] h-56 rounded shadow-lg" />
                      </div>
                     
                  </div>
                  <div className=" ">
                      <div className=" grid gap-8 row-gap-0 md:grid-cols-2 lg:grid-cols-3 mt-8">
                          <div className=" flex-col justify-start items-start inline-flex">
                              <div className=" justify-start items-center inline-flex">
                                  <div className="  px-4 py-2 rounded-lg border border-teal-600 justify-center items-center  flex">
                                      <div className="text-teal-600 text-base font-bold">Step 1</div>
                                  </div>
                                  <div className="w-[150px] h-px pl-[100px] pr-[1px] bg-teal-600 justify-end items-center flex">
                                      <HiOutlineChevronRight  className="w-16 text-teal-600" />
                                  </div>
                              </div>
                              <h4 className=" text-neutral-800 pb-5">Identify Campaigns Worth Supporting</h4>
                              <p className=" text-neutral-600 text-base font-normal ">Explore diverse campaigns, find one that aligns with your values, and make a difference.</p>
                          </div>


                          <div className="flex-col justify-start items-start inline-flex">
                              <div className=" grow shrink justify-start items-center inline-flex">
                                  <div className=" self-stretch px-5 py-2 rounded-lg border border-teal-600 justify-center items-center  flex">
                                      <div className="text-teal-600 text-base font-bold">Step 2</div>
                                  </div>
                                  <div className="w-[150px] h-px pl-[100px]  bg-teal-600 top-0 right-0 flex items-center justify-center ">
                                      <HiOutlineChevronRight className=" text-teal-600" />
                                  </div>
                              </div>
                              <h4 className=" text-neutral-700 pb-5">Select Your Preferred Payment Method</h4>
                              <p className=" text-neutral-600 text-base font-normal">Flexible Payment Options—whether it's a quick debit card transaction, a seamless bank transfer, or cryptocurrency. </p>
                          </div>
                          <div className="  flex-col justify-start items-start inline-flex">
                              <div className=" px-5 py-2 rounded-lg border border-teal-600 justify-center items-center  flex">
                                  <div className="text-teal-600 text-base font-bold">Final Step</div>
                              </div>
                              <h4 className=" text-neutral-700 pb-5 ">Submit Your Donation</h4>
                              <p className=" text-neutral-600 text-base font-normal">Finalize your donation by submitting your payment, and watch your support create meaningful change. Every contribution counts, and we appreciate your commitment to making a positive impact.</p>
                          </div>
                      </div>
                      <div className="  justify-start items-start inline-flex">
                          <button className="text-white text-base font-bold px-4 py-3 bg-teal-600 rounded-lg shadow border border-teal-600 ">
                             Donate Now
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    
  )
}

export default DonationProcessSection