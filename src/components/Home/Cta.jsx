import React from 'react'
import { HiOutlineChevronRight } from "react-icons/hi2";
const Cta = () => {
  return (
      <div className=' bg-white mx-auto w-full'>
          <div className=' container mx-auto w-full'>
              <div className='py-6 md:py-12'>
                  <div className=" h-[938px] px-4 py-12 lg:h-[565px] lg:px-10 lg:py-20 bg-emerald-800 rounded-lg">
                      <h3 className=" text-white ">Featured Campaign</h3>
                      <div className="gap-8 items-center py-4 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid lg:grid-cols-2 sm:py-8 lg:px-6">
                          <img className="object-cover w-[326px] h-[353px] lg:w-[500px] lg:h-[300px] self-stretch rounded-lg" alt='cta_image' src="/assets/ctaimage.jpg" />
                          <div class="">
                              <h4 className="  text-white leading-loose">Support for Whirlwind pandemic.</h4>
                              <p className=" text-white text-base font-medium leading-normal">Lorem ipsum dolor sit amet consectetur. Pharetra mi purus mi scelerisque habitasse pulvinar. Velitt amet consectet......</p>
                              <div className="pt-4 flex-col justify-start items-start gap-1 flex">
                                  <div className="self-stretch h-[53px] relative">
                                      <div className=" w-[326px] lg:w-[476px] h-3 left-0 top-[41px] absolute">
                                          <div className="w-[326px] lg:w-[476px] h-3 left-0 top-0 absolute bg-zinc-400 rounded-lg" />
                                          <div className="w-[170.30px] lg:w-[248.66px] h-3 left-0 top-0 absolute bg-white rounded-lg" />
                                      </div>
                                      <div className="w-[73px] h-[39px] left-[211px] top-0 absolute">
                                          <div className="w-[73px] h-8 px-2 py-1 left-0 top-0 absolute bg-white rounded-lg justify-center items-center inline-flex">
                                              <span className="text-center text-emerald-800 text-base font-bold leading-normal">$ 50.00</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="self-stretch justify-start items-start inline-flex">
                                      <div className="grow shrink basis-0 h-6 justify-end items-center gap-2.5 flex">
                                          <p className="grow shrink basis-0 text-right text-white text-base font-bold leading-normal">$ 100.00</p>
                                      </div>
                                  </div>
                              </div>
                               <div className="flex-col justify-start items-start gap-3 flex">
                                    <div className="justify-start items-start inline-flex">
                                      <div className="justify-start items-start flex">
                                          <img className="w-10 h-10 rounded-full border border-white" src="https://via.placeholder.com/40x40" />
                                          <img className="w-10 h-10 -ml-2 rounded-full border border-white" src="https://via.placeholder.com/40x40" />
                                          <img className="w-10 h-10 -ml-2 rounded-full border border-white" src="https://via.placeholder.com/40x40" />
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
 