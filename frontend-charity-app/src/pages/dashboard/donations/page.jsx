import React from 'react'
import DashboardSidebar from '../components/dashboardsiderbar'
import Donation from './donation'
import DashboardNav from '../components/dashboardnav'

const DonationPage = () => {
  return (
      <>
          <DashboardSidebar />
          <div className='p-4 sm:ml-64'>
              <div>
                  <DashboardNav/>
                  <Donation/>
              </div>
          </div>
          
    </>
  )
}

export default DonationPage