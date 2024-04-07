import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi2";
const PaymentSuccessful = () => {
  let location = useLocation();
  let from = location.state?.from?.pathname || "/discover";
  return (
    <div className=" container mx-auto w-full">
      <div className="py-6 md:py-12">
        <div className="max-w-md w-full mx-auto mt-10 ">
          <div>
            <Link to={from} className="flex items-center space-x-1 pl-4 ">
              <HiChevronLeft className=" w-4 h-4" />
              <span className=" font-normal ">Back to Fundraiser</span>
            </Link>
          </div>
          <div className=" bg-white shadow-md border p-4 mt-4">
            <div className=" flex items-center justify-center">
              <img
                src="/assets/svg/objects.svg"
                alt="object_image"
                className="w-20 h-20 object-cover "
                loading="lazy"
              />
            </div>
            <h4 className="text-center text-[#04A38A] ">Donation Successful</h4>
            <p className="text-sm font-medium text-gray-500  text-center">
              Thank you for making a donation
            </p>
            <Link
              to="/discover"
              className="w-full bg-teal-500 rounded-md px-4 text-sm text-white mt-5  py-3 flex items-center justify-center"
            >
              Explore more Fundraisers
            </Link>
            <p className=" max-w-md text-[0.87rem] text-[#6C6C6C] mt-4">
              Thank you for your generous donation! Your support is making a
              difference. Together, we're helping to bring about the change we
              wish to see in the world.
            </p>
            <h5 className="mt-6 text-black">Your Impact</h5>
            <p className=" max-w-md text-[0.87rem] text-[#6C6C6C] mt-4">
              Every contribution helps us move closer to our goal. Your donation
              is now at work, supporting [cause/project name]. You've not just
              donated; you've become a part of our community committed to making
              a difference.
            </p>
            <h5 className="mt-6 text-black">Stay Connected</h5>
            <p className=" max-w-md text-[0.87rem] text-[#6C6C6C] mt-4">
              We believe in transparency and the power of community. Stay tuned
              for updates on how your donation is making an impact. [Optionally,
              include how they can stay connected, like subscribing to a
              newsletter or following social media channels.]
            </p>
            <h5 className="mt-6 text-black">Spread the Word</h5>
            <p className=" max-w-md text-[0.87rem] text-[#6C6C6C] mt-4">
              Your voice is powerful! Help us reach more kind-hearted
              individuals like yourself by sharing your experience with friends
              and family. Together, we can extend our reach and impact even
              further.
            </p>
            <h5 className="mt-6 text-black">Thank You!</h5>
            <p className=" max-w-md text-[0.87rem] text-[#6C6C6C] mt-4">
              Once again, thank you for your support. It's donors like you who
              make our work possible.
            </p>
            <p className=" max-w-md text-[0.87rem] text-[#6C6C6C] mt-4">
              <Link to="/discover" className="bg-teal-500 rounded-full px-4">
                Explore More Fundraisers
              </Link>{" "}
              - Discover other causes that resonate with you and continue to
              spread kindness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
