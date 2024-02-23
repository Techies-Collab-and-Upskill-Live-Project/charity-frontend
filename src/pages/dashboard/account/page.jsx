import React from 'react'
import DashboardSidebar from '../components/dashboardsiderbar'
import DashboardNav from '../components/dashboardnav'
import AccountSetting from './accountsetting'

const AccountSettingPage = () => {
  return (
      <>
          <DashboardSidebar />
          <div className=' sm:ml-64'>
              <div>
                  <DashboardNav/>
                  <AccountSetting/>
              </div>
          </div>
          
    </>
  )
}

export default AccountSettingPage