import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PaymentSuccessfullPage from "../../pages/payment/paymentsuccessfullpage.jsx";
import ResetPasswordPage from "../../auth/resetpassword/page.jsx";
import VerifyMailPage from "../../auth/verifiyemail/page.jsx";
import VerificationCodePage from "../../auth/verifiycode/page.jsx";
import SuccessMessagePage from "../../auth/successfullmessage/page.jsx";
import Payment from "../../pages/payment/payment.jsx";
import Dashboard from "../../pages/dashboard/page.jsx";
import DonationPage from "../../pages/dashboard/donations/page.jsx";
import EventsPage from "../../pages/dashboard/events/page.jsx";
import CampaignPage from "../../pages/dashboard/campaign/page.jsx";
import AccountSettingPage from "../../pages/dashboard/account/page.jsx";

const PrivateRoutesComponent = () => {
  return (
    <PrivateRoute>
      <Routes>
        <Route path="/resetpassword" element={<ResetPasswordPage />} />
        <Route path="/verifyemail" element={<VerifyMailPage />} />
        <Route path="/successmessage" element={<SuccessMessagePage />} />
        <Route path="/verificationcode" element={<VerificationCodePage />} />
        <Route path="/pay/:campaignId" element={<Payment />} />
        <Route
          path="/paymentsuccessfull"
          element={<PaymentSuccessfullPage />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/donationpage" element={<DonationPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/campaign" element={<CampaignPage />} />
        <Route path="/account" element={<AccountSettingPage />} />
        <Route path="/explore" element={<AccountSettingPage />} />
      </Routes>
    </PrivateRoute>
  );
};

export default PrivateRoutesComponent;
