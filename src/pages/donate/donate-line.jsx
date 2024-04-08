import React, { useState, useEffect, useContext } from "react";
import { FaRegUser } from "react-icons/fa6";
import { FaHandHoldingHeart, FaRegFlag, FaCalendarAlt } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import TabButton from "../../components/tabbutton";
import {
  AboutContent,
  DonationContent,
  UpdateContent,
} from "../../components/campaigntabscontent";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getCampaignDetails } from "../../config/api";
import { formatCurrency } from "../../services/utils";
import { CurrencyContext } from "../../context/CurrencyContext";
// import { handleShare } from "../../services/shareService";
// import { CardImgOverlay } from "react-bootstrap";

const DonateLine = () => {
  const { campaignId } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const [campaign, setCampaign] = useState(null);
  const navigate = useNavigate();
  const { currency } = useContext(CurrencyContext);
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  //   const [reportReason, setReportReason] = useState("");

  //   const handleReportButtonClick = () => {
  //     setIsModalOpen(true);
  //   };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    const fetchCampaignDetails = async () => {
      const data = await getCampaignDetails(campaignId);
      if (!data) {
        return;
      }
      // store data in in local storage, use the campaign id as the key
      localStorage.setItem(campaignId, JSON.stringify(data));
      setCampaign(data);
    };
    fetchCampaignDetails();
  }, [campaignId]);

  const handleShareCampaign = () => {
    navigate(`/share-campaign/${campaignId}/${campaign.title}`);
  };

  //   const handleConfirmReport = async () => {
  //     try {
  //       const response = await fetch("/campaign/report", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ campaignId, reason: reportReason }),
  //       });

  //       if (!response.ok) {
  //         throw new Error("Error reporting campaign");
  //       }
  //       // Handle response here (e.g., close modal and show success message)
  //       setIsModalOpen(false);
  //       setReportReason(""); // Reset report reason
  //       alert("Campaign reported successfully.");
  //     } catch (error) {
  //       console.error("Failed to report campaign:", error);
  //     }
  //   };
  // Check if campaign data is not yet loaded
  if (!campaign) {
    return <div>Loading...</div>;
  }
  const tabs = [
    {
      label: "About this campaign",
      content: (
        <AboutContent
          description={campaign.description}
          background_description={campaign.background_description}
          what_campaign_will_do={campaign.what_campaign_will_do}
        />
      ),
    },
    { label: "Update", content: <UpdateContent /> },
    { label: "Donation", content: <DonationContent /> },
  ];
  // Function to format date
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  // Use this function where you need to display the date
  const formattedDate = formatDate(campaign.date_created);
  return (
    <div className=" bg-white w-full">
      <div className=" container mx-auto w-full">
        <div className="py-16 lg:py-20 mx-auto">
          <div className="">
            <div className="grid gap-10 lg:grid-cols-2 mt-10 lg:mt-20">
              <div className="">
                <img
                  src={campaign.images[0]?.image}
                  alt="donate_img"
                  className=" w-[600px] h-[380px]  rounded-xl"
                  loading="lazy"
                />
                <div className="flex items-center  space-x-4 mt-5">
                  <div className=" flex items-center justify-center rounded-full bg-[#EBEBEB] w-8 h-8">
                    <FaRegUser className="text-[#7B7B7B] w-4 h-4" />
                  </div>
                  <h6 className="text-[#252525]">
                    {campaign.user_profile_name}
                  </h6>
                  <p className=" text-gray-500"> started this fundraising</p>
                </div>
              </div>
              <div className="lg:block">
                <div className="border-2 px-4 py-3 bg-white rounded-lg shadow-md  ">
                  <div className="flex mb-5 max-sm:mt-10">
                    <p className="font-medium text-2xl mr-1">
                      {formatCurrency(campaign.raised, currency)}
                    </p>
                    <p className=" mt-2 font-normal text-gray-500">
                      raised of {formatCurrency(campaign.goal, currency)} target
                    </p>
                  </div>
                  <div className="w-full h-[72px] flex-col justify-start items-start gap-1 inline-flex">
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
                            {formatCurrency(campaign.raised, currency)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start inline-flex">
                      <div className="grow shrink basis-0 h-5 justify-end items-center gap-2.5 flex">
                        <div className="grow shrink basis-0 text-right text-emerald-700 text-sm font-bold font-['Nunito'] leading-tight">
                          {formatCurrency(campaign.goal, currency)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-3">
                    <span className=" flex items-center justify-center rounded-full w-10 h-10 bg-[#FAF4ED]">
                      <FaHandHoldingHeart className=" w-5 h-5 text-[#D18D4A]" />
                    </span>
                    {/* <p className="mt-1 ml-3 font-bold text-[#D18D4A]">
                      5k people just donated
                    </p> */}
                  </div>
                  <div className="flex flex-col mt-2">
                    <Link
                      key={campaign.id}
                      to={`/pay/${campaign.id}`}
                      className="bg-teal-500 w-full rounded-md px-4 py-3 text-center text-white mt-5 font-bold text-base"
                    >
                      Donate now
                    </Link>
                    <button
                      onClick={handleShareCampaign}
                      className="bg-white w-full rounded-md px-4 py-3 text-teal-500 border-2 border-teal-500  font-bold text-base mt-5 "
                    >
                      {" "}
                      Share Campaign
                    </button>
                  </div>
                  <hr className="my-5" />
                  <div className="flex space-x-4 mt-2">
                    <FaRegFlag className=" text-[#515151] w-6 h-7" />
                    <p className="text-[#515151] ">
                      <button>Report Fundraiser</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-sm:mt-10 lg:mt-20">
              <div>
                <h4 className="max-sm:text-center max-w-md">
                  {campaign.title}
                </h4>
                <div className="flex  space-x-2 mt-3">
                  <div className="flex items-center space-x-2">
                    <HiOutlineLocationMarker className="w-4 h-4 text-[#6C6C6C]" />
                    <p className=" text-gray-600 font-medium">
                      Abuja, Nigeria{" "}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCalendarAlt className="w-4 h-4 text-[#6C6C6C]" />
                    <p className=" text-gray-600 font-medium">
                      {formattedDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-md w-full">
              <hr className=" mt-6 " />
              <div className="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap">
                {tabs.map((tab, index) => (
                  <TabButton
                    key={index}
                    label={tab.label}
                    isActive={activeTab === index}
                    onClick={() => handleTabClick(index)}
                  />
                ))}
              </div>
              <div className="mt-7">{tabs[activeTab].content}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateLine;
