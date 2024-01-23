import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
const DonationProcessSection = () => {
  return (
      <div className="bg-white mx-auto w-full ">
          <div className=' container mx-auto w-full'>
              <div className='py-8 lg:py-12 pb-[350px]'>
                  <p className="text-start text-orange-400 text-base font-bold leading-normal">HOW TO DONATE</p>
                  <div className="py-10  grid gap-10 lg:grid-cols-2 ">
                      <div className='   mb-auto '>
                          <h3 className=" text-neutral-800 max-w-xl">Making a Difference: Learning the Donation Process</h3>
                          <p className=" text-neutral-600 text-base font-normal max-w-lg ">Empower Positive Change in a Few Simple Steps. Discover the Seamless Process of Donating on Donation Trace.</p>
                      </div>
                      <div className=' mt-6 sm:mt-0'>
                          <img src='/assets/donate_image.jpg' className="object-cover w-full h-56 rounded shadow-lg sm:h-50" />
                      </div>
                  </div>
                  <div className="self-stretch h-[340px] flex-col justify-start items-start gap-12 flex">
                      <div className="grid gap-8 row-gap-0 lg:grid-cols-3">
                          
                          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
                              <div className="self-stretch justify-start items-center inline-flex">
                                  <div className=" rounded-lg justify-center items-center gap-4 flex">
                                      <div className="grow shrink basis-0 self-stretch px-5 py-2 rounded-lg border border-teal-600 justify-center items-center gap-2 flex">
                                          <div className="text-teal-600 text-base font-bold">Step 1</div>
                                      </div>
                                  </div>
                                  <span><FaArrowRight className=" w-[150px] h-px text-teal-600" /></span>
                                </div>
                              <h4 className=" text-neutral-800 pb-5">Identify Campaigns Worth Supporting</h4>
                              <p className=" text-neutral-600 text-base font-normal ">Explore diverse campaigns, find one that aligns with your values, and make a difference.</p>
                          </div>

                          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6">
                              <div className="self-stretch justify-start items-center inline-flex">
                                  <div className=' rounded-lg justify-center items-center gap-4 flex'>
                                       <div className=" grow shrink basis-0 self-stretch px-5 py-2 rounded-lg border border-teal-600 justify-center items-center gap-2 flex">
                                      <div className="text-teal-600 text-base font-bold">Step 2</div>
                                  </div>
                                  </div>
                                  
                                  <FaArrowRight className="w-[150px] h-px text-teal-600 top-0   " />
                              </div>
                              <h4 className=" text-neutral-700 pb-5">Select Your Preferred Payment Method</h4>
                              <p className=" text-neutral-600 text-base font-normal">Flexible Payment Options—whether it's a quick debit card transaction, a seamless bank transfer, or cryptocurrency. </p>
                          </div>
                          <div className="  flex-col justify-start items-start inline-flex">
                              <div className=" px-5 py-2 rounded-lg border border-teal-600 justify-center items-center  flex">
                                  <div className="text-teal-600 text-base font-bold">Final Step</div>
                              </div>
                              <h4 className=" text-neutral-700 sm:pb-5 pb-0 ">Submit Your Donation</h4>
                              <p className=" text-neutral-600 text-base font-normal">Finalize your donation by submitting your payment, and watch your support create meaningful change. Every contribution counts, and we appreciate your commitment to making a positive impact.</p>
                          </div>
                      </div>
                      <div className="w-40 rounded-lg justify-start items-start inline-flex ">
                          <div className="grow shrink basis-0 px-4 py-3 bg-teal-600 rounded-lg shadow border border-teal-600 justify-center items-center gap-2 flex">
                              <button className="text-white text-base font-bold font-['Nunito'] leading-normal">Donate Now</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    
  )
}

export default DonationProcessSection