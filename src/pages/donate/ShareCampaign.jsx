import React from "react";
import { useParams } from "react-router-dom";
import {
  constructTwitterShareUrl,
  constructFacebookShareUrl,
  constructLinkedInShareUrl,
  constructWhatsAppShareUrl,
} from "../../services/shareService";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const ShareCampaign = () => {
  const { campaignId, campaignTitle } = useParams();

  const shareUrls = {
    twitter: constructTwitterShareUrl(campaignTitle, campaignId),
    facebook: constructFacebookShareUrl(campaignId),
    whatsapp: constructWhatsAppShareUrl(campaignTitle, campaignId),
    linkedin: constructLinkedInShareUrl(campaignTitle, campaignId),
  };

  const handlePlatformClick = (url) => window.open(url, "_blank");

  const platforms = [
    {
      name: "Facebook",
      icon: <FaFacebook className="w-6 h-6 text-[#04A38A]" />,
      url: shareUrls.facebook,
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="w-6 h-6 text-[#04A38A]" />,
      url: shareUrls.twitter,
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-6 h-6 text-[#04A38A]" />,
      url: shareUrls.whatsapp,
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-6 h-6 text-[#04A38A]" />,
      url: shareUrls.linkedin,
    },
  ];

  return (
    <div className="container w-full mx-auto flex flex-col items-center">
      <div className="text-center rounded-full bg-[#E7F8F0] mb-4 px-4">
        <h3>Share '{campaignTitle}' on your favorite platform</h3>
      </div>
      <div className="inline-flex justify-center space-x-6">
        {platforms.map(({ name, icon, url }) => (
          <div
            key={name}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E7F8F0]"
            onClick={() => handlePlatformClick(url)}
          >
            <button className="focus:outline-none">{icon}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShareCampaign;
