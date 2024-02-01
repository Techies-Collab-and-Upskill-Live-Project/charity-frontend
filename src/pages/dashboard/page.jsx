import React from 'react'
import DashboardSidebar from './dashboardsiderbar'
import DashboardNav from './dashboardnav'
import DashboardContent from './dashboardcontent'

const Dashboard = () => {
  return (
      <div>
          <DashboardSidebar />
          <div className='p-4 sm:ml-64'>
              <div className=''>
                  <DashboardNav/>
                  <DashboardContent/>
              </div>
          </div>
      
    </div>
  )
}

export default Dashboard
