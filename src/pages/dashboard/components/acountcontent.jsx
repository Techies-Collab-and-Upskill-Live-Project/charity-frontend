// AboutContent.js, AccountContent.js, NotificationContent.js
import React from "react";

import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
export const ProfileForm = () => {
  return (
    <div className=" w-full">
      <div className="mt-7">
        <h6 className=" text-[#252525]">Profile</h6>
        <div className="max-w-lg mx-auto ">
          <div className="w-40 h-40 rounded-full mx-auto bg-white border-2 border-[#C2C2C2] border-dotted flex flex-col items-center justify-center">
            <FaRegCircleUser className="mb-4 w-8 h-8 text-[#757575]" />
            <p className=" text-[#12B76A] text-base font-semibold leading-normal">
              Profile Photo
            </p>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-5 h-5 mb-3 text-[#515151]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-xs font-normal text-[#898989]">
                    <span className="font-semibold text-sm text-[#04A38A]">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </p>
                  <p class="text-xs font-normal text-[#898989]">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </div>
        </div>
        <div className=" mt-6">
          <h5 className=" text-[#161616] text-base font-bold">
            Contact Information
          </h5>
          <p className=" text-[#7B7B7B] text-xs font-normal leading-tight mt-3">
            Click to edit Contact information
          </p>
          <form className=" mt-6">
            <div>
              <div className=" space-y-3">
                <label
                  htmlFor="selcteprefix"
                  className="block text-[#252525] text-sm"
                >
                  Prefix
                </label>
                <select
                  name="selcteprefix"
                  id=""
                  className=" w-80 rounded-md ring-1 ring-inset ring-gray-300 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-teal-500 font-medium  sm:text-sm px-4 py-2.5  "
                >
                  <option value="Mrs">Mrs</option>
                  <option value="Mr">Mr</option>
                  <option value="Miss">Miss</option>
                </select>
              </div>
              <div className="space-y-3 mt-2">
                <label
                  htmlFor="firstName"
                  className="block text-[#252525] text-sm"
                >
                  First Name
                </label>
                <div className=" relative ">
                  <span className=" pointer-events-none inline-flex items-center justify-center absolute left-0 top-0 h-10 w-10 text-gray-400">
                    <FaRegUser className=" h-4 w-4" />
                  </span>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    placeholder="olivia@untitledui.com"
                    className="w-full px-3 py-2 pl-10 pr-4 border rounded-md text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className=" space-y-3 mt-2">
                <label
                  htmlFor="lastName"
                  className="block text-[#252525] text-sm"
                >
                  Last Name
                </label>
                <div className=" relative">
                  <span className=" pointer-events-none inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <FaRegUser className=" h-4 w-4" />
                  </span>
                  <input
                    type="text"
                    name="last_name"
                    id="lastName"
                    placeholder="Trace"
                    className="w-full px-3 py-2 pl-10 pr-4 border rounded-md text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-teal-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        {/*--- change password---*/}
        <div className=" mt-16">
          <h5 className=" text-[#161616] text-base font-bold">
            Change Password
          </h5>
          <p className=" text-[#7B7B7B] text-xs font-normal leading-tight mt-3">
            Click to Change password
          </p>
          <form className=" mt-6">
            <div>
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-[#252525] text-sm"
                >
                  Old password
                </label>
                <div className=" relative">
                  <span className="pointer-events-none inline-flex items-center justify-center absolute  inset-y-0 start-0  ps-3.5 left-0 top-0 h-full w-10 text-gray-400">
                    <RiLockPasswordLine className="h-4 w-4" />
                  </span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*************"
                    className="w-full px-3 py-2 pl-10 pr-4 border rounded-md text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 focus:outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="space-y-2 mt-2">
                <label
                  htmlFor="password"
                  className="block text-[#252525] text-sm"
                >
                  New passsword
                </label>
                <div className=" relative">
                  <span className="pointer-events-none inline-flex items-center justify-center absolute  inset-y-0 start-0  ps-3.5 left-0 top-0 h-full w-10 text-gray-400">
                    <RiLockPasswordLine className="h-4 w-4" />
                  </span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*************"
                    className="w-full px-3 py-2 pl-10 pr-4 border rounded-md text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 focus:outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="space-y-2 mt-2">
                <label
                  htmlFor="password"
                  className="block text-[#252525] text-sm"
                >
                  Confirm new password
                </label>
                <div className=" relative">
                  <span className="pointer-events-none inline-flex items-center justify-center absolute  inset-y-0 start-0  ps-3.5 left-0 top-0 h-full w-10 text-gray-400">
                    <RiLockPasswordLine className="h-4 w-4" />
                  </span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*************"
                    className="w-full px-3 py-2 pl-10 pr-4 border rounded-md text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 focus:outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        {/*----- 2 step factor auth-----*/}
        <div className=" mt-16">
          <h5 className=" text-[#3B3B3B] text-xl font-bold">
            Two factor authentication (2FA)
          </h5>
          <p className=" text-[#7B7B7B] text-base font-normal leading-tight mt-3">
            Setting up a 2FA adds an extra layer of security to protect your
            account.
          </p>
          <label className="relative inline-flex items-center cursor-pointer mt-6">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none   rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
            <span className="ms-3 text-xl font-normal text-[#4A4A4A] ">
              Enable Two-Factor authentication (2FA)
            </span>
          </label>
        </div>
        {/*------buttton ------*/}
        <div className=" flex space-x-6 mt-6">
          <button
            type="submit"
            className="w-full bg-white rounded-md px-4 text-sm text-teal-500 border border-teal-500  mt-5  py-3 flex items-center justify-center"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full bg-teal-500 rounded-md px-4 text-sm text-white mt-5  py-3 flex items-center justify-center"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export const UserEmail = () => {
  return (
    <div className=" mt-16">
      <h5 className=" text-[#161616] text-base font-bold">
        Change Email Address
      </h5>
      <p className=" text-[#7B7B7B] text-xs font-normal leading-tight mt-3">
        Click to Change Email Address
      </p>
      <div className=" space-y-2 mt-2">
        <label htmlFor="email" className="block text-sm">
          Email
        </label>
        <div className=" relative">
          <span className="pointer-events-none inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <HiOutlineMail className="h-4 w-4" />
          </span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="olivia@untitledui.com"
            className="w-full px-3 py-2 pl-10 pr-4 border rounded-md text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-teal-500 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      {/*------buttton ------*/}
      <div className=" flex space-x-6 mt-6">
        <button
          type="submit"
          className="w-full bg-white rounded-md px-4 text-sm text-teal-500 border border-teal-500  mt-5  py-3 flex items-center justify-center"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-full bg-teal-500 rounded-md px-4 text-sm text-white mt-5  py-3 flex items-center justify-center"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export const NotificationContent = () => {
  return (
    <div>
      <div className="mt-10 max-w-md w-full"></div>
    </div>
  );
};

export const Donations = () => {
  return (
    <div>
      <div className="mt-10 max-w-md w-full"></div>
    </div>
  );
};
export const Payment = () => {
  return (
    <div>
      <div className="mt-10 max-w-md w-full"></div>
    </div>
  );
};
export const PrivacyandSecurity = () => {
  return (
    <div>
      <div className="mt-10 max-w-md w-full"></div>
    </div>
  );
};
