import React from "react";
import DashboardSidebar from "../components/dashboardsiderbar";
import DashboardNav from "../components/dashboardnav";
import Campaign from "./campaign";

const CampaignPage = () => {
  return (
    <div>
      <DashboardSidebar />
      <div className="p-4 sm:ml-64">
        <DashboardNav />
        <Campaign />
      </div>
    </div>
  );
};

export default CampaignPage;
