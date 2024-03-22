import apiService from "../services/apiService";

// export const loginUser = async (userData) => {
//   try {
//     const response = await apiService.post("/auth/login", userData);
//     setAuthTokens(reponse);
//     setUser(jwtDecode(response.data.access));
//     localStorage.setItem("authTokens", JSON.stringify(response));
//     navigate("/");
//     return response.data;
//   } catch (error) {
//     throw new Error("Login failed: " + error.message);
//   }
// };

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
    const response = await apiService.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    throw new Error("register failed: " + error.message);
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
    throw new Error("Failed to fetch trending campaigns: " + error.message);
  }
};

// get featured campaign
export const getFeaturedCampaign = async () => {
  try {
    const response = await apiService.get("/campaign/featured/");
    return response.data.data;
  } catch (error) {
    throw new Error("Failed to fetch featured campaign: " + error.message);
  }
};

// get categories
export const getCampaignCategories = async () => {
  try {
    const response = await apiService.get("/campaign_category/list/");
    console.log(response.data.campaign_categories);
    return response.data.campaign_categories;
  } catch (error) {
    throw new Error("Failed to fetch categories: " + error.message);
  }
};
