import React, {useState} from 'react'
import TabButton from '../components/profiletabbtn';
import {
  ProfileForm,
  UserEmail,
  NotificationContent,
  Donations,
  Payment,
  PrivacyandSecurity
} from '../components/acountcontent';
const AccountSetting = () => {
     const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Profile', content: <ProfileForm /> },
    { label: 'Email' ,  content: <UserEmail /> },
    { label: 'Notification', content: <NotificationContent /> },
    { label: 'Donations', content: <Donations /> },
    { label: 'Payment', content: <Payment /> },
    { label: 'Privacy and Security',  content: <PrivacyandSecurity /> },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className=' bg-[#E6F6F3] h-full w-full'>
      <div className='sm:mx-10'>
          <div className=' py-10'>
            <h4 className=' text-[#161616] leading-10'>Account Settings</h4>
            <div className='my-6'>
              <div className="flex space-x-4 lg:space-x-10 overflow-x-auto overflow-y-hidden  whitespace-nowrap">
                {tabs.map((tab, index) => (
                  <TabButton
                    key={index}
                    label={tab.label}
                    isActive={activeTab === index}
                    onClick={() => handleTabClick(index)}
                  />
                ))}
              </div>
              <div className="mt-7">{tabs[activeTab].content}</div>
            </div>
          </div>
        
      </div>
      
    </div>
  )
}

export default AccountSetting
