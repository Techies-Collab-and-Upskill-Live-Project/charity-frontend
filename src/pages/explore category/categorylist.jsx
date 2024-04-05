import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getCampaignCategories,
  getCampaignsForCategory,
} from "../../config/api";

const CategoryList = () => {
  const { categoryId: defaultCategoryId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(defaultCategoryId);
  const [campaignCategories, setCampaignCategories] = useState([]);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaignCategories = async () => {
      const data = await getCampaignCategories();
      if (data) {
        setCampaignCategories(data);
        // If the default category ID is valid, fetch campaigns for it
        if (data.some((category) => category.id === defaultCategoryId)) {
          fetchCampaigns(defaultCategoryId);
        }
      }
    };
    fetchCampaignCategories();
  }, [defaultCategoryId]);

  const fetchCampaigns = async (selectedCategory) => {
    const data = await getCampaignsForCategory(selectedCategory);
    setCampaigns(data || []);
  };

  const handleCategoryChange = async (e) => {
    const newCategoryId = e.target.value;
    setSelectedCategory(newCategoryId);
    fetchCampaigns(newCategoryId);
  };

  if (!campaignCategories.length) {
    return <div>Loading categories...</div>;
  }

  return (
    <div className="container w-full mx-auto">
      <div className="py-16 lg:py-20 mx-auto">
        <div className="">
          <label htmlFor="selectcategory" className="mr-5 font-medium">
            Category:
          </label>
          <select
            name="selectcategory"
            id="selectcategory"
            value={selectedCategory}
            className="rounded-md ring-gray-600 ring-2 focus:ring-2 focus:outline-none focus:ring-teal-500 font-medium text-sm px-4 py-2.5"
            onChange={handleCategoryChange}
          >
            {campaignCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-center md:justify-start">
          <ul
            className="flex flex-row flex-wrap mb-0 list-none space-x-4 md:space-x-6 space-y-3 md:space-y-0 pt-3 pb-4"
            role="tablist"
          >
            <li className="-mb-px list:mr-0">
              <button
                className={`p-lg capitalize ${selectedCategory === "Trending" ? "rounded-md p-lg text-black bg-[#E6F6F3] px-2 md:px-4 py-2" : "rounded-md p-lg bg-transparent border border-grey-50 px-2 md:px-4 py-2"}`}
                onClick={() => setSelectedCategory("Trending")}
                role="tab"
              >
                Trending
              </button>
            </li>
            <li className="-mb-px list:mr-0">
              <button
                className={`p-lg capitalize ${selectedCategory === "Ending Soon" ? "rounded-md p-lg text-black bg-[#E6F6F3] px-2 md:px-4 py-2" : "rounded-md p-lg bg-transparent border border-grey-50 px-2 md:px-4 py-2"}`}
                onClick={() => setSelectedCategory("Ending Soon")}
                role="tab"
              >
                Ending Soon
              </button>
            </li>
            <li className="-mb-px list:mr-0">
              <button
                className={`p-lg capitalize ${selectedCategory === "Newest" ? "rounded-md p-lg text-black bg-[#E6F6F3] px-2 md:px-4 py-2" : "rounded-md p-lg bg-transparent border border-grey-50 px-2 md:px-4 py-2"}`}
                onClick={() => setSelectedCategory("Newest")}
                role="tab"
              >
                Newest
              </button>
            </li>
            <li className="-mb-px list:mr-0">
              <button
                className={`p-lg capitalize ${selectedCategory === "Most Funded" ? "rounded-md p-lg text-black bg-[#E6F6F3] px-2 md:px-4 py-2" : "rounded-md p-lg bg-transparent border border-grey-50 px-2 md:px-4 py-2"}`}
                onClick={() => setSelectedCategory("Most Funded")}
                role="tab"
              >
                Most Funded
              </button>
            </li>
            <li className="-mb-px list:mr-0">
              <button
                className={`p-lg capitalize ${selectedCategory === "Least Funded" ? "rounded-md p-lg text-black bg-[#E6F6F3] px-2 md:px-4 py-2" : "rounded-md p-lg bg-transparent border border-grey-50 px-2 md:px-4 py-2"}`}
                onClick={() => setSelectedCategory("Least Funded")}
                role="tab"
              >
                Least Funded
              </button>
            </li>
          </ul>
        </div>
        <div className=" relative">
          <div className="tab-content tab-space">
            <div className="block">
              <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:max-w-full sm:mx-auto xl:max-w-full mt-10 lg:mt-16">
                {campaigns.map((campaign) => (
                  <Link key={campaign.id} to={`/donate-page/${campaign.id}`}>
                    <div
                      key={campaign.id}
                      className="overflow-hidden transition-shadow duration-300 bg-white rounded-md"
                    >
                      <img
                        src={campaign.images[0]?.image}
                        className="object-cover w-full h-64 rounded-md"
                        alt={campaign.title}
                        loading="lazy"
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
                              loading="lazy"
                            />
                            <img
                              className="w-8 h-8 -ml-2 rounded-full border border-white"
                              alt="trending3"
                              src="/assets/image3.jpg"
                              loading="lazy"
                            />
                            <img
                              className="w-8 h-8 -ml-2 rounded-full border border-white"
                              alt="trending2"
                              src="/assets/image3.jpg"
                              loading="lazy"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
