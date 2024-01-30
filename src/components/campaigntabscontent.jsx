// AboutContent.js, AccountContent.js, NotificationContent.js
import React from 'react';
import { FaRegUser } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
export const AboutContent = () => {
  return (
    <div className='max-w-lg w-full'>
          <div className="mt-7">
              <p >
                  Step into a journey of compassion and change with our
                  monumental campaign, "Hearts United for Hope." In the
                  vast landscapes of Africa, where young hearts beat with
                  dreams yet to unfold, we invite you to become a beacon
                  of light and love. This initiative is more than a mere
                  fundraiser; it's a movement to uplift, empower, and secure a
                  brighter tomorrow for orphaned children.
              </p>
              <p className="mt-7">
                  Picture a world where every child has the chance to thrive,
                  regardless of their circumstances. That's the vision we're weaving
                  into reality, and we invite you to be a vital thread in this tapestry
                  of transformation. Your support goes beyond monetary contributions;
                  it's a promise to these children that they are seen, heard, and valued.
                  From providing quality education and nurturing environments to fostering
                  talents and dreams, your generosity becomes the catalyst for a positive
                  ripple effect. Each donation, every share, and the collective energy of
                  our community resonate far beyond the immediate impact, creating a legacy
                  of love that transcends borders and generations.
              </p>
              <p className="mt-7">
                  Join us on this extraordinary journey. Let's stand united,
                  hearts entwined, as we make a profound and lasting difference
                  in the lives of these resilient souls. Together, we can rewrite the
                  narrative for orphaned children in Africa, turning every challenge
                  into an opportunity and every dream into a reality. Hearts United for
                  Hope—because transformation begins with compassion, and change starts with us.
              </p>
          </div>
    </div>
  );
};

export const UpdateContent = () => {
  return (
      <div className='bg-orange-50 p-4 max-w-md w-full'>
          <div className="flex items-center  space-x-2 mt-5">
              <div className=' flex items-center justify-center rounded-full bg-[#EBEBEB] w-8 h-8'>
                  <FaRegUser className=' text-[#7B7B7B] w-4 h-4' />
              </div>
              <h6 className="text-[#252525]">Ahmed Tinubu </h6>
              <p className=" text-gray-500"> started this fundraiser</p>
          </div>
          <div className="flex space-x-4 mt-6">
              
              <div className="flex items-center space-x-2">
                  <FaCalendarAlt className="w-4 h-4 text-[#6C6C6C]" />
                  <p className=" text-gray-600 font-medium">23 December, 2023</p>
              </div>
              <div className="flex items-center  space-x-2">
                  <IoMdTime className='w-4 h-4 text-[#6C6C6C]' />
                  <p className=" text-gray-600 font-medium ">22:11</p>
              </div>
          </div>
          <div className="mt-4">
              <p >
                  Step into a journey of compassion and change with our
                  monumental campaign, "Hearts United for Hope." In the
                  vast landscapes of Africa, where young hearts beat with
                  dreams yet to unfold, we invite you to become a beacon
                  of light and love. This initiative is more than a mere
                  fundraiser; it's a movement to uplift, empower, and secure a
                  brighter tomorrow for orphaned children.
              </p>
              <p className="mt-7">
                  Picture a world where every child has the chance to thrive,
                  regardless of their circumstances. That's the vision we're weaving
                  into reality, and we invite you to be a vital thread in this tapestry
                  of transformation. Your support goes beyond monetary contributions;
                  it's a promise to these children that they are seen, heard, and valued.
                  From providing quality education and nurturing environments to fostering
                  talents and dreams, your generosity becomes the catalyst for a positive
                  ripple effect. Each donation, every share, and the collective energy of
                  our community resonate far beyond the immediate impact, creating a legacy
                  of love that transcends borders and generations.
              </p>
              <p className="mt-7">
                  Join us on this extraordinary journey. Let's stand united,
                  hearts entwined, as we make a profound and lasting difference
                  in the lives of these resilient souls. Together, we can rewrite the
                  narrative for orphaned children in Africa, turning every challenge
                  into an opportunity and every dream into a reality. Hearts United for
                  Hope—because transformation begins with compassion, and change starts with us.
              </p>
          </div>
           <img src="/assets/image1.jpg" alt="donate_img" className=" w-[600px] h-auto  rounded-xl" />
      {/* Your updateContent JSX */}
    </div>
  );
};

export const DonationContent = () => {
  return (
      <div>
          <div className="mt-10 max-w-md w-full">
              <div className='grid grid-cols-1 divide-y'>
                  <div className="flex justify-between">
                  <div className=' flex space-x-4'>
                      <div className=' flex items-center justify-center rounded-full bg-[#EBEBEB] w-8 h-8'>
                          <FaRegUser className=' text-[#7B7B7B] w-4 h-4' />
                      </div>
                      <div className="">
                          <h5 className="text text-lg">Tafawa Balewa</h5>
                          <p className="text text-gray-500">1 day ago</p>
                      </div>
                  </div>
                  <p className="">$ 5</p>
              </div>
              
              <div className="flex justify-between">
                  <div className=' flex space-x-4'>
                      <div className=' flex items-center justify-center rounded-full bg-[#EBEBEB] w-8 h-8'>
                          <FaRegUser className=' text-[#7B7B7B] w-4 h-4' />
                      </div>
                      <div className="">
                          <h5 className="text text-lg">Tafawa Balewa</h5>
                          <p className="text text-gray-500">1 month ago</p>
                      </div>
                  </div>
                  <p className="">$ 5</p>
              </div>
             
              <div className="flex justify-between">
                  <div className=' flex space-x-4'>
                      <div className=' flex items-center justify-center rounded-full bg-[#EBEBEB] w-8 h-8'>
                          <FaRegUser className=' text-[#7B7B7B] w-4 h-4' />
                      </div>
                      <div className="">
                          <h5 className="text text-lg">Tafawa Balewa</h5>
                          <p className="text text-gray-500">2 months ago</p>
                      </div>
                  </div>
                  <p className="">$ 5</p>
              </div>
              </div>
             
          </div>
      {/* Your DonationContent JSX */}
    </div>
  );
};
