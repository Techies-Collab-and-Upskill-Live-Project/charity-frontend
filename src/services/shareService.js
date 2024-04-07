// shareService.js

export const shareMessage = (campaignTitle) => {
  return `Kindly donate to this cause: ${campaignTitle}`;
};

export const constructTwitterShareUrl = (campaignTitle, campaignId) => {
  const baseUrl = window.location.origin;
  const donationPageUrl = `${baseUrl}/campaign/${campaignId}`;
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage(campaignTitle))}&url=${encodeURIComponent(donationPageUrl)}`;
};

export const constructFacebookShareUrl = (campaignId) => {
  const baseUrl = window.location.origin;
  const donationPageUrl = `${baseUrl}/campaign/${campaignId}`;
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(donationPageUrl)}`;
};

export const constructLinkedInShareUrl = (campaignTitle, campaignId) => {
  const baseUrl = window.location.origin;
  const donationPageUrl = `${baseUrl}/campaign/${campaignId}`;
  return `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(donationPageUrl)}&title=${encodeURIComponent(shareMessage(campaignTitle))}`;
};

export const constructWhatsAppShareUrl = (campaignTitle, campaignId) => {
  const baseUrl = window.location.origin;
  const donationPageUrl = `${baseUrl}/campaign/${campaignId}`;
  return `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage(campaignTitle))} ${encodeURIComponent(donationPageUrl)}`;
};

export const handleShare = (platform, campaignTitle, campaignId) => {
  let url = "";
  switch (platform) {
    case "twitter":
      url = constructTwitterShareUrl(campaignTitle, campaignId);
      break;
    case "facebook":
      url = constructFacebookShareUrl(campaignId);
      break;
    case "linkedin":
      url = constructLinkedInShareUrl(campaignTitle, campaignId);
      break;
    case "whatsapp":
      url = constructWhatsAppShareUrl(campaignTitle, campaignId);
      break;
    // Add more cases for other platforms
    default:
      console.error("Unsupported platform for sharing");
      return;
  }

  window.open(url, "_blank");
};
