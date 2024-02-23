import React from 'react'
import { Link } from 'react-router-dom'
import { HiChevronLeft } from "react-icons/hi2";
const PaymentSuccessful = () => {
    return (
        <div className=" container mx-auto w-full">
            <div className="py-6 md:py-12">
                <div className="max-w-md w-full mx-auto mt-10 ">
                    <div>
                        <Link to="/donate-page" className="flex items-center space-x-1 pl-4 ">
                            <HiChevronLeft className=" w-4 h-4" />
                            <span className=" font-normal ">Back to Fundraiser</span>
                        </Link>
                    </div>
                    <div className=' bg-white shadow-md border p-4 mt-4'>
                        <div className=' flex items-center justify-center'>
                            <img src='/assets/svg/objects.svg' alt='object_image' className='w-20 h-20 object-cover ' />
                        </div>
                        <h4 className="text-center text-[#04A38A] ">
                            Donation Successful
                        </h4>
                        <p className="text-sm font-medium text-gray-500  text-center">
                            Thank you for making a donation
                        </p>
                        <Link
                            to="/login"
                            className="w-full bg-teal-500 rounded-md px-4 text-sm text-white mt-5  py-3 flex items-center justify-center"
                        >
                            Explore more Fundraisers
                        </Link>
                        <h5 className='mt-6 text-black'>Lorem Ipsum</h5>
                        <p className=' max-w-md text-[0.87rem] text-[#6C6C6C] mt-4'>
                            Lorem ipsum dolor sit amet consectetur. Diam mattis sit risus ultrices vivamus.
                            Leo velit ut arcu et scelerisque netus varius. Cursus a facilisi turpis urna elementum velit
                            fringilla risus scelerisque. Fringilla justo egestas sociis sem diam ante platea. Faucibus
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default PaymentSuccessful
