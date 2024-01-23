import React from 'react'
import { HiOutlineChevronRight } from "react-icons/hi2";
const Cta = () => {
  return (
      <div className=' bg-white mx-auto w-full'>
          <div className=' container mx-auto w-full'>
              <div className='py-6 md:py-12'>
                  <div className="  px-2 py-6 lg:px-10 lg:py-20 bg-emerald-800 rounded-lg">
                      <h3 className=" text-white ">Featured Campaign</h3>
                      <div className="gap-8 items-center py-4 px-2 mx-auto  xl:gap-16 md:grid lg:grid-cols-2 sm:py-8 lg:px-6">
                          <img className="object-cover w-auto h-auto rounded-lg" alt='cta_image' src="/assets/ctaimage.jpg" />
                          <div class=" self-stretch">
                              <h4 className="  text-white leading-loose">Support for Whirlwind pandemic.</h4>
                              <p className=" text-white text-base font-medium leading-normal pb-6">Lorem ipsum dolor sit amet consectetur. Pharetra mi purus mi scelerisque habitasse pulvinar. Velitt amet consectet......</p>
                               <div className="w-[326px] lg:w-[368px] h-[72px] flex-col justify-start items-start gap-1 inline-flex">
                                    <div className="self-stretch h-12 relative">
                                        <div className="w-[326px] lg:w-[368px] h-2 left-0 top-[40px] absolute">
                                            <div className="w-[326px] lg:w-[368px] h-2 left-0 top-0 absolute bg-zinc-400 rounded-lg" />
                                            <div className="  w-[170.30px] lg:w-[192.24px] h-2 left-0 top-0 absolute  bg-neutral-200   rounded-lg" />
                                        </div>
                                        <div className="w-[66px] h-9 left-[140.85px] lg:left-[160px] top-0 absolute">
                                            <div className="w-[66px] h-7 px-2 py-1 left-0 top-0 absolute bg-emerald-50 rounded-lg justify-center items-center inline-flex">
                                                <div className="text-center text-emerald-700 text-sm font-bold font-['Nunito'] leading-tight">$ 50.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 h-5 justify-end items-center gap-2.5 flex">
                                            <div className="grow shrink basis-0 text-right text-white text-sm font-bold font-['Nunito'] leading-tight">$ 1000</div>
                                        </div>
                                    </div>
                                </div>

                               <div className="flex-col justify-start items-start gap-3 flex pt-4">
                                    <div className="justify-start items-start inline-flex">
                                      <div className="justify-start items-start flex">
                                          <img className="w-10 h-10 rounded-full border border-white" src="https://via.placeholder.com/40x40" alt='activeUser' />
                                          <img className="w-10 h-10 -ml-2 rounded-full border border-white" src="https://via.placeholder.com/40x40" alt='activeUser' />
                                          <img className="w-10 h-10 -ml-2 rounded-full border border-white" src="https://via.placeholder.com/40x40" alt='activeUser' />
                                        </div>
                                      <div className="w-[220px] px-5 py-2.5 bg-white rounded-[25px] justify-center items-center flex">
                                          <span className="text-emerald-800 text-base font-semibold  leading-normal">+26 People are donating</span>
                                        </div>
                                  </div>
                              </div>
                              <button className="mt-8 bg-white text-[12px] px-4 py-3 rounded-lg shadow border border-white">
                                  <span className="   text-[#04A38A]  flex items-center justify-center space-x-5">
                                      Learn More
                                      <HiOutlineChevronRight size={15} />
                                  </span>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Cta
 