import React from "react";
import DashboardSidebar from "./components/dashboardsiderbar";
import DashboardNav from "./components/dashboardnav";
import DashboardContent from "./dashboardcontent";
import DashboardSta from "./dashboardsta";
import ActiveCampaign from "./components/activecampaign";
import NavBar from "../../components/common/Navbar";

const Dashboard = () => {
  return (
    <div>
      <DashboardSidebar />
      <div className="p-4 sm:ml-64">
        <div className="">
          <DashboardNav />
          <DashboardContent />
          <DashboardSta />
          <ActiveCampaign />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
