import React from 'react'
import DashboardSidebar from '../components/dashboardsiderbar'
import DashboardNav from '../components/dashboardnav'
import ActiveEvents from './activeevents'

const EventsPage = () => {
  return (
      <div>
          <DashboardSidebar />
          <div className='p-4 sm:ml-64'>
              <DashboardNav />
              <ActiveEvents/>
          </div>
    </div>
  )
}

export default EventsPage