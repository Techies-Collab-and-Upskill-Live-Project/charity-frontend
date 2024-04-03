import React, { useEffect, useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { getFeaturedCampaign } from "../config/api";
import { Link } from "react-router-dom";

const Cta = () => {
  const [featuredCampaign, setFeaturedCampaign] = useState([]);

  useEffect(() => {
    const fetchFeaturedCampaign = async () => {
      const data = await getFeaturedCampaign();
      if (!data) {
        return;
      }
      setFeaturedCampaign(data);
    };
    fetchFeaturedCampaign();
  }, []);

  if (!featuredCampaign) {
    return <div>Loading...</div>;
  }
  return (
    <div className=" bg-white mx-auto w-full">
      <div className=" container mx-auto w-full">
        <div className="py-6 md:py-12">
          <div className="  px-2 py-6 lg:px-10 lg:py-20 bg-emerald-800 rounded-lg">
            <h3 className=" text-white ">Featured Campaign</h3>
            <div className="gap-8 items-center py-4 px-2 mx-auto  xl:gap-16 md:grid lg:grid-cols-2 sm:py-8 lg:px-6">
              <img
                className="object-cover w-auto h-auto rounded-lg"
                alt="cta_image"
                src={
                  featuredCampaign.images && featuredCampaign.images[0].image
                }
                loading="lazy"
              />
              <div className=" self-stretch">
                <h4 className="  text-white leading-loose">
                  {featuredCampaign.title}
                </h4>
                <p className=" text-white text-base font-medium leading-normal pb-6">
                  {featuredCampaign.description}
                </p>
                <div className="w-[326px] lg:w-[368px] h-[72px] flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch h-12 relative">
                    <div className="w-full h-2 left-0 top-[40px] absolute">
                      <div className="w-full h-2 left-0 top-0 absolute bg-zinc-400 rounded-lg" />
                      <div
                        style={{
                          width: `${(featuredCampaign.raised / featuredCampaign.goal) * 100}%`,
                        }}
                        className="h-2 left-0 top-0 absolute bg-neutral-200 rounded-lg"
                      />
                    </div>
                    <div
                      style={{
                        left: `calc(${(featuredCampaign.raised / featuredCampaign.goal) * 100}% - 33px)`,
                      }}
                      className="w-[66px] h-9 top-0 absolute"
                    >
                      <div className="w-full h-7 px-2 py-1 bg-emerald-50 rounded-lg justify-center items-center inline-flex">
                        <div className="text-center text-emerald-700 text-sm font-bold font-['Nunito'] leading-tight">
                          ${featuredCampaign.raised}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 h-5 justify-end items-center gap-2.5 flex">
                      <div className="grow shrink basis-0 text-right text-white text-sm font-bold font-['Nunito'] leading-tight">
                        ${featuredCampaign.goal}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-col justify-start items-start gap-3 flex pt-4">
                  <div className="justify-start items-start inline-flex">
                    <div className="justify-start items-start flex -mr-0">
                      {featuredCampaign.donor_count >= 1 && (
                        <img
                          className="w-10 h-10 rounded-full border border-white"
                          src="/assets/image1.jpg" // Assuming different images for each donor
                          alt="activeUser1"
                          loading="lazy"
                        />
                      )}
                      {featuredCampaign.donor_count >= 2 && (
                        <img
                          className="w-10 h-10 -ml-2 rounded-full border border-white"
                          src="/assets/image2.jpg"
                          alt="activeUser2"
                          loading="lazy"
                        />
                      )}
                      {featuredCampaign.donor_count >= 3 && (
                        <img
                          className="w-10 h-10 -ml-2 rounded-full border border-white"
                          src="/assets/image3.jpg"
                          alt="activeUser3"
                          loading="lazy"
                        />
                      )}
                    </div>
                    {featuredCampaign.donor_count >= 0 && (
                      <div className="pt-4">
                        <span className="text-white">
                          +{featuredCampaign.donor_count}{" "}
                          {featuredCampaign.donor_count <= 1
                            ? "Donor"
                            : "Donors"}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <button className="mt-8 bg-white text-[12px] px-4 py-3 rounded-lg shadow border border-white">
                  <span className="   text-[#04A38A]  flex items-center justify-center space-x-5">
                    <Link to={`/donate-page/${featuredCampaign.id}`}>
                      Learn More
                    </Link>
                    <HiOutlineChevronRight size={15} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
