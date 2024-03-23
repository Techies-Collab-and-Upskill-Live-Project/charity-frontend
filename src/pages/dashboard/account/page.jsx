import React from "react";
import DashboardSidebar from "../components/dashboardsiderbar";
import DashboardNav from "../components/dashboardnav";
import AccountSetting from "./accountsetting";
import NavBar from "../../../components/common/Navbar";

const AccountSettingPage = () => {
  return (
    <>
      <NavBar />
      <DashboardSidebar />
      <div className=" sm:ml-64">
        <div>
          <DashboardNav />
          <AccountSetting />
        </div>
      </div>
    </>
  );
};

export default AccountSettingPage;
