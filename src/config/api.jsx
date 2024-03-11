import apiService from "../services/apiService";

export const loginUser = async (userData) => {
  try {
    const response = await apiService.post("/auth/login", userData);
    return response.data;
  } catch (error) {
    throw new Error("Login failed: " + error.message);
  }
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
