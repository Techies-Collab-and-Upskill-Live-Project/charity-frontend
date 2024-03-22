import React, { useEffect, useState } from "react";
// import { trendingdata } from "../Data";
import { getTrendingCampaigns } from "../config/api";
import { Link } from "react-router-dom";

const TrendingSection = () => {
  const [trendingCampaigns, setTrendingCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTrendingCampaigns = async () => {
      setLoading(true);
      try {
        const data = await getTrendingCampaigns();
        // if data is null
        if (!data) {
          throw new Error("Failed to fetch trending campaigns");
        }
        setTrendingCampaigns(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingCampaigns();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className=" bg-[#FEFEFE] w-full">
      <div className="container mx-auto w-full">
        <div className="py-6 md:py-12">
          <div className="flex flex-col items-center sm:max-auto">
            <h3 className="mb-4 tracking-wide text-center ">
              {" "}
              Discover Trending Causes
            </h3>
            <p className="max-w-2xl font-medium text-center leading-5 text-[#515151] text-md">
              Each cause is a chapter in our collective story of compassion.
              Explore, engage, and make a lasting impact – because changing the
              world starts with your support.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:max-w-full sm:mx-auto xl:max-w-full mt-10 lg:mt-16">
            {trendingCampaigns.map((campaign) => (
              <Link to={`/donate-page/${campaign.id}`}>
                <div
                  key={campaign.id}
                  className="overflow-hidden transition-shadow duration-300 bg-white rounded-md"
                >
                  <img
                    src={campaign.images[0]?.image}
                    className="object-cover w-full h-64 rounded-md"
                    alt="trending_image"
                  />
                  <div className="p-2">
                    <h5 className="text-[#161616]">{campaign.title}</h5>
                    <p className="text-[12px] text-[#515151]">
                      {campaign.description}
                    </p>
                  </div>
                  {/*--- prohress bar----*/}
                  <div className="w-[326px] lg:w-[368px] h-[72px] flex-col justify-start items-start gap-1 inline-flex">
                    <div className="self-stretch h-12 relative">
                      <div className="w-full h-2 left-0 top-[40px] absolute">
                        <div className="w-full h-2 left-0 top-0 absolute bg-neutral-200 rounded-lg" />
                        <div
                          style={{
                            width: `${(campaign.raised / campaign.goal) * 100}%`,
                          }}
                          className="h-2 left-0 top-0 absolute bg-teal-600 rounded-lg transition-width duration-300"
                        />
                      </div>
                      <div
                        style={{
                          left: `calc(${(campaign.raised / campaign.goal) * 100}% - 33px)`,
                        }}
                        className="w-[66px] h-9 top-0 absolute"
                      >
                        <div className="w-full h-7 px-2 py-1 bg-emerald-50 rounded-lg justify-center items-center inline-flex">
                          <div className="text-center text-emerald-700 text-sm font-bold font-['Nunito'] leading-tight">
                            {campaign.raised}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start inline-flex">
                      <div className="grow shrink basis-0 h-5 justify-end items-center gap-2.5 flex">
                        <div className="grow shrink basis-0 text-right text-emerald-700 text-sm font-bold font-['Nunito'] leading-tight">
                          {campaign.goal}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*==============people donation======*/}
                  <div className="flex-col justify-start items-start gap-3 flex">
                    <div className="justify-start items-start inline-flex">
                      <div className="justify-start items-start flex">
                        <img
                          className="w-8 h-8 rounded-full border border-white"
                          alt="trending1"
                          src="/assets/image3.jpg"
                        />
                        <img
                          className="w-8 h-8 -ml-2 rounded-full border border-white"
                          alt="trending3"
                          src="/assets/image3.jpg"
                        />
                        <img
                          className="w-8 h-8 -ml-2 rounded-full border border-white"
                          alt="trending2"
                          src="/assets/image3.jpg"
                        />
                      </div>
                      <div className="w-[190px] px-4 py-2 bg-orange-50 rounded-[20px] justify-center items-center flex">
                        <div className="text-yellow-800 text-sm font-semibold  leading-tight">
                          {campaign.donor_count}{" "}
                          {campaign.donor_count <= 1 ? "donor" : "donors"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center">
            <Link to="/discover">
              <button className="border border-[#04A38A] text-[#04A38A] rounded-md py-3 px-5 font-medium">
                See more campaigns
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;
