import React from 'react'

const DashboardNav = () => {
  return (
      <div>
          <div className='p-3'>
              <nav className="bg-white   py-2.5 ">
                  <div className="flex flex-wrap justify-between items-center">
                      <div className='flex justify-start items-center'>
                          <form action="#" method="GET" className="hidden lg:block lg:pl-2">
                              <label for="topbar-search" className="sr-only">Search</label>
                              <div className="relative mt-1 lg:w-96">
                                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                      <svg
                                          className="w-4 h-4 text-[#475367]"
                                          aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                          fill="none" viewBox="0 0 20 20"
                                       > 
                                          <path
                                              stroke="currentColor"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              stroke-width="2"
                                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" 
                                          />
                                      </svg>
                                  </div>
                                  <input
                                      type="text"
                                      name="email"
                                      id="topbar-search"
                                      className="bg-[#F0F2F5] border border-[#F9FAFB] text-gray-900 sm:text-sm rounded-lg focus:ring-[#F0F2F5]  block w-full pl-9 p-2.5 "
                                      placeholder="Search here..." 
                                      
                                      />
                              </div>
                          </form>
                      </div>
                      <div className="flex items-center lg:order-2">
                          <button
                              id="toggleSidebarMobileSearch"
                              type="button"
                              className="p-2 text-gray-500 rounded-lg lg:hidden 
                            ">
                              <span className="sr-only">Search</span>
                              <svg
                                  className="w-4 h-4"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 20 20">
                                  <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      stroke-width="2"
                                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" 
                                  />
                              </svg>
                          </button>
                          <button
                              type="button"
                              data-dropdown-toggle="notification-dropdown"
                              className="flex items-center justify-center w-10 h-10 mr-1 rounded-full bg-[#F0F2F5] 
                            ">
                              <span className="sr-only">View notifications</span>
                              <svg
                                  className="w-5 h-5 text-[#344054]"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 14 20
                                ">
                                  <path
                                      d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0
                                       .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" 
                                  />
                              </svg>
                          </button>
                          <button
                              type="button"
                              className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0  "
                              id="user-menu-button"
                              aria-expanded="false"
                              data-dropdown-toggle="dropdown
                            ">
                              <span className="sr-only">Open user menu</span>
                              <img className="w-10 h-10 rounded-full" src="/assets/img3" alt="user" />
                          </button>
                      </div>
                  </div>
              </nav>
          </div>   
    </div>
  )
}

export default DashboardNav