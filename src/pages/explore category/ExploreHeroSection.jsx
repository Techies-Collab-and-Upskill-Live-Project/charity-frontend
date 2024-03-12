import { Link } from "react-router-dom";
//import arrowicon from "../../assets/icons/arrow-left.png";

import { HiChevronLeft } from "react-icons/hi2";

const ExploreHeroSection = () =>{
    return(
       <div className="bg-[#FAF4ED] w-full bg-center bg-cover h-full lg:h-[34rem] mx-auto">
          <div className=" container mx-auto w-full">
             <div className="py-10 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-2 mt-10 lg:mt-20 ">
                   <div className=" mt-0 sm:mt-5">
                      <Link to="/discover" className="flex items-center space-x-1 pl-4 ">
                         <HiChevronLeft className=" w-4 h-4" />
                         <span className=" font-normal ">All categories</span>
                      </Link>
                      <h3 className=" max-w-lg">
                         Empowering futures: child Walfare Campaigns
                      </h3>
                      <p className="text-gray-500 max-w-full">
                         Explore campaigns dedicated to ensuring
                         the well-being and bright future of every child.
                         Your support can make a lasting impact on young lives.
                      </p>
                   </div>
                   <div className="mt-6 sm:mt-0">
                      <img src="/assets/donate_image.jpg" alt="explore_image" className="object-cover w-full h-56 rounded shadow-lg sm:h-[300px]" />
                   </div>
                </div>
             </div>
          </div>
       </div>
    )
}

export default ExploreHeroSection