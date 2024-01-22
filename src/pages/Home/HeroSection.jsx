import React from 'react';;
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="w-full bg-center bg-cover h-[40rem] mx-auto bg-[url('/public/assets/hero_img.jpg')]">
        <div className=' '>
          <div className='px-0'>
            <div className="flex items-center justify-center w-full h-[40rem] bg-gray-900 bg-opacity-50">
              <div className=' container mx-auto w-full'>
                <div className=''>
                  <div className=" mt-10 lg:mt-20">
                    <h1 className=" text-white ">
                      Transform Lives through the Power of Giving
                    </h1>
                    <p className="max-w-2xl font-sans font-bold leading-none  text-white sm:text-sm lg:text-md my-2">
                      Join us on a journey where your generosity knows no bounds. Together,
                      let's spark hope, share joy, and transform lives through the extraordinary power of giving.
                      Be a hero today – make a difference with every heartfelt donation.
                    </p>
                    <button className=' bg-[#04A38A] text-[#FEFEFE] px-4 py-3 rounded-md font-bold text-[12px] md:text-[14px]'>
                      Start a Campaign
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
