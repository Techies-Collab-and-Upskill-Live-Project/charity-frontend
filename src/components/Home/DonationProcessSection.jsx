import React from 'react'

const DonationProcessSection = () => {
  return (
      <div className=' bg-white mx-auto w-full'>
          <div className=' container mx-auto w-full'>
              <div className='py-6 md:py-12'>
                 
                      
                          <p className="text-start text-orange-400 text-base font-bold leading-normal">HOW TO DONATE</p>
                          <div className="pt-4 flex flex-col lg:flex-row  gap-10">
                              <div>
                                  <h3 className=" text-neutral-800 max-w-xl">Making a Difference: Learning the Donation Process</h3>
                                  <p className=" text-neutral-600 text-base font-normal max-w-lg ">Empower Positive Change in a Few Simple Steps. Discover the Seamless Process of Donating on Donation Trace.</p>
                              </div>
                              <img src='/assets/donate_image.jpg' className="h-40 w-auto rounded-md" />
                          </div>
                          
                     
                      
                  
                  <div className="self-stretch h-[340px] flex-col justify-start items-start gap-12 flex">
                      <div className="grid gap-8 row-gap-0 lg:grid-cols-3">
                          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
                              <div className="self-stretch justify-start items-center inline-flex">
                                  <div className="w-[120px] h-[52px] rounded-lg justify-center items-center gap-4 flex">
                                      <div className="grow shrink basis-0 self-stretch px-5 py-2 rounded-lg border border-teal-600 justify-center items-center gap-2 flex">
                                          <div className="text-teal-600 text-base font-bold font-['Nunito'] leading-normal">Step 1</div>
                                      </div>
                                  </div>
                                  <div className="w-[274.67px] h-px pl-[259.65px] pr-[0.02px] bg-teal-600 justify-end items-center flex">
                                      <div className="w-[15px] h-[29px] relative flex-col justify-start items-start flex" />
                                  </div>
                              </div>
                              <div className="self-stretch text-neutral-800 text-2xl font-bold font-['Montserrat'] leading-loose">Identify Campaigns Worth Supporting</div>
                              <div className="self-stretch text-neutral-600 text-base font-normal font-['Nunito'] leading-normal">Explore diverse campaigns, find one that aligns with your values, and make a difference.</div>
                          </div>
                          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
                              <div className="self-stretch justify-start items-center inline-flex">
                                  <div className="w-[120px] h-[52px] rounded-lg justify-center items-center gap-4 flex">
                                      <div className="grow shrink basis-0 self-stretch px-5 py-2 rounded-lg border border-teal-600 justify-center items-center gap-2 flex">
                                          <div className="text-teal-600 text-base font-bold font-['Nunito'] leading-normal">Step 2</div>
                                      </div>
                                  </div>
                                  <div className="w-[274.67px] h-px pl-[259.65px] pr-[0.02px] bg-teal-600 justify-end items-center flex">
                                      <div className="w-[15px] h-[29px] relative flex-col justify-start items-start flex" />
                                  </div>
                              </div>
                              <div className="self-stretch text-neutral-700 text-2xl font-bold font-['Montserrat'] leading-loose">Select Your Preferred Payment Method</div>
                              <div className="self-stretch text-neutral-600 text-base font-medium font-['Nunito'] leading-normal">Flexible Payment Options—whether it's a quick debit card transaction, a seamless bank transfer, or cryptocurrency. </div>
                          </div>
                          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
                              <div className="self-stretch justify-start items-center inline-flex">
                                  <div className="w-[120px] h-[52px] rounded-lg justify-center items-center gap-4 flex">
                                      <div className="grow shrink basis-0 self-stretch px-5 py-2 rounded-lg border border-teal-600 justify-center items-center gap-2 flex">
                                          <div className="text-teal-600 text-base font-bold font-['Nunito'] leading-normal">Final Step</div>
                                      </div>
                                  </div>
                                  <div className="w-[274.67px] h-px pl-[259.65px] pr-[0.02px] bg-emerald-50 justify-end items-center flex">
                                      <div className="w-[15px] h-[29px] relative flex-col justify-start items-start flex" />
                                  </div>
                              </div>
                              <div className="self-stretch text-neutral-700 text-2xl font-bold font-['Montserrat'] leading-loose">Submit Your Donation</div>
                              <div className="self-stretch text-neutral-600 text-base font-medium font-['Nunito'] leading-normal">Finalize your donation by submitting your payment, and watch your support create meaningful change. Every contribution counts, and we appreciate your commitment to making a positive impact.</div>
                          </div>
                      </div>
                      <div className="w-40 rounded-lg justify-start items-start inline-flex">
                          <div className="grow shrink basis-0 h-14 px-5 py-4 bg-teal-600 rounded-lg shadow border border-teal-600 justify-center items-center gap-2 flex">
                              <div className="text-white text-base font-bold font-['Nunito'] leading-normal">Donate Now</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    
  )
}

export default DonationProcessSection