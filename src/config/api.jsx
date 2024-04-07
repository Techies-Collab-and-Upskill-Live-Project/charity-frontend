import apiService from "../services/apiServicesNoAuth";

// get access token from local storage
export const getAccessToken = () => {
  return localStorage.getItem("authTokens")
    ? JSON.parse(localStorage.getItem("authTokens")).access
    : null;
};

// forget password  api
export const forgetPassword = async (userData) => {
  try {
    const response = await apiService.post("/auth/password-reset", userData);
    return response.data;
  } catch (error) {
    throw new Error("Forget password failed: " + error.message);
  }
};

/// resgisterUser
export const resgisterUser = async (userData) => {
  try {
    const response = await apiService.post("/auth/register/", userData);
    return response.data;
  } catch (error) {
    // Use a more defensive approach to avoid accessing undefined properties
    const detailError = error.response?.data?.detail?.[0]?.msg;
    const nonFieldError = error.response?.data?.non_field_errors?.[0];

    if (detailError) {
      throw new Error(detailError);
    } else if (nonFieldError) {
      throw new Error(nonFieldError);
    } else {
      // Fall back to a more generic error message
      throw new Error("Registration failed: " + error.message);
    }
  }
};

// resetpassword
export const resetPassword = async (userData) => {
  try {
    const response = await apiService.post("/auth/password-reset", userData);
    return response.data;
  } catch (error) {
    throw new Error("reset failed: " + error.message);
  }
};

/// codeverificatiion
export const verifyCode = async (userData) => {
  try {
    const response = await apiService.post("/auth/password-reset", userData);
    return response.data;
  } catch (error) {
    throw new Error("reset failed: " + error.message);
  }
};

// contact us api
export const contactUs = async (userData) => {
  try {
    const response = await apiService.post("/contactus/", userData);
    return response.data;
  } catch (error) {
    throw new Error("contact us failed: " + error.message);
  }
};

// subscribe to newsletter
export const subscribeToNewsletter = async (emailObject) => {
  try {
    const response = await apiService.post("/subscribe/" + emailObject.email);
    return response.data;
  } catch (error) {
    throw new Error(
      "subscribe failed: " + error.response.data.detail[0].msg
        ? error.response.data.detail[0].msg
        : error.message
    );
  }
};

// get trending campaigns
export const getTrendingCampaigns = async () => {
  try {
    const response = await apiService.get("/campaign/trending/");
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch featured campaign:", error);
    return null;
  }
};

// get featured campaign
export const getFeaturedCampaign = async () => {
  try {
    const response = await apiService.get("/campaign/featured/");
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch featured campaign:", error);
    return null;
  }
};

// a sample request that needs authentication
// export const getCampaignCategories = async (apiService) => {
//   try {
//     const response = await apiService.get("/campaign_category/list/");
//     return response.data.campaign_categories;
//   } catch (error) {
//     console.error("Failed to fetch featured campaign:", error);
//     return null;
//   }
// };

// get categories
export const getCampaignCategories = async () => {
  try {
    const response = await apiService.get("/campaign_category/list/");
    return response.data.campaign_categories;
  } catch (error) {
    console.error("Failed to fetch featured campaign:", error);
    return null;
  }
};

// get campaigns in a category
export const getCampaignsForCategory = async (selectedcategory) => {
  try {
    const response = await apiService.get(
      `/campaign/${selectedcategory}/list/`
    );
    return response.data.campaigns;
  } catch (error) {
    console.error("Failed to fetch campaigns:", error);
    return null;
  }
};

// get campaign details
export const getCampaignDetails = async (campaignId) => {
  try {
    const response = await apiService.get(`/campaign/${campaignId}/`);
    return response.data.campaign;
  } catch (error) {
    console.error("Failed to fetch campaign details:", error);
    return null;
  }
};

// report a campaign
export const reportCampaign = async (campaignId, reportData) => {
  try {
    const response = await apiService.post(
      `/campaign/${campaignId}/report/`,
      reportData
    );
    return response.data;
  } catch (error) {
    throw new Error("Report failed: " + error.message);
  }
};
