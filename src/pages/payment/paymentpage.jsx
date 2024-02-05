
import React, { useState } from 'react';
//import {explorecategorylist} from "../../Data";
//import Select from 'react-select';
import { HiChevronLeft } from "react-icons/hi2";
import { FaHandHoldingHeart} from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiLock } from "react-icons/ci";

const PaymentPage = () => {
    //const selectedActivity = explorecategorylist[1];
  const [selectedAmount, setSelectedAmount] = useState(0);
  //const [selectedCurrency, setSelectedCurrency] = useState('USD'); // Default currency
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('--select');

  const handleButtonClick = (amount) => {
    setSelectedAmount(amount);
  };

  /*const currencyOptions = [
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
    // Add more currency options as needed
  ];*/

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  return (
    <div className=" bg-white w-full mx-auto">
      <div className=' container w-full mx-auto'>
        <div className=' py-6 md:py-12 mx-auto'>
          <div>
            <Link to="/donate-page" className="flex items-center space-x-1 pl-4 ">
              <HiChevronLeft className=" w-4 h-4" />
              <span className=" font-normal ">Back to Fundraiser</span>
            </Link>
          </div>
          <div className='grid gap-10 lg:grid-cols-2 mt-10 lg:mt-20'>
            <div className='block lg:hidden'>
              <h4 className=" mb-5 mt-1">Donation Title/Name</h4>
              <img src="/assets/image1.jpg" alt="" className=" rounded-lg" />
              <div className="flex items-center mt-3">
                <span className=' flex items-center justify-center rounded-full w-10 h-10 bg-[#FAF4ED]'>
                  <FaHandHoldingHeart className=' w-5 h-5 text-[#D18D4A]' />
                </span>
                <p className="mt-1 ml-3 font-bold text-[#D18D4A]">5k people just donated</p>
              </div>
            </div>
            <div className="border-2 rounded-lg px-4 py-14 w-full ">
              <div className=' space-y-3'>
                <div className="flex space-x-2 items-center mb-5">
                  <p className=" text-gray-400">You're donating to </p>
                  <h5 className="text-[0.90rem] md:text-xl"> - Donation title/Name</h5>
                </div>
                <h5 className="">Donation Amount</h5>
                <p className=" text-gray-400">Choose or Enter donation amount</p>
                <div>
                  <button onClick={() => handleButtonClick(50)} className="bg-white rounded-md px-3 text-sm text-black mt-5 h-10 border-2 mr-2 focus:ring-2 focus:ring-teal-500">$ 50</button>
                  <button onClick={() => handleButtonClick(100)} className="bg-white rounded-md px-3 text-sm text-black mt-5 h-10 border-2 mr-2 focus:ring-2 focus:ring-teal-500">$ 100</button>
                  <button onClick={() => handleButtonClick(200)} className="bg-white rounded-md px-3 text-sm text-black mt-5 h-10 border-2 mr-2 focus:ring-2 focus:ring-teal-500">$ 200</button>
                  <button onClick={() => handleButtonClick(500)} className="bg-white rounded-md px-3 text-sm text-black mt-5 h-10 border-2 mr-2 focus:ring-2 focus:ring-teal-500">$ 500</button>
                  <button onClick={() => handleButtonClick("1,000")} className="bg-white rounded-md px-3 text-sm text-black mt-5 h-10 border-2 mr-2 focus:ring-2 focus:ring-teal-500">$ 1000</button>
                </div>
                <div className="bg-white flex justify-between mt-4">
                  <input
                    type="text"
                    value={`$ ${selectedAmount}.00`}
                    readOnly
                    className="w-full px-3 py-2 pl-10 pr-4 border rounded-md text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                    name="donationAmount"
                  />
                  <select name="currency" id="" className="w-full px-3 py-2 pl-10 pr-4 border rounded-md text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </select>
                </div>
                <p className=" text-gray-400">This is a hint text to help user.</p>
                <hr className="mt-8 mb-6" />
                <div >
                  <h3 className="tex text-lg">Personal Information</h3>
                  <p className="f text-gray-400 mb-7">Enter your name; it will appear as anonymous if left blank</p>
                  <label for="name" className="flex font-bold">Name
                    <p className="f text-gray-500 font-normal ml-1">(optional)</p>
                  </label>
                  <input type="text" name="name" placeholder="Enter Your Full-Name" className="w-full px-3 py-2  border rounded-md text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6 my-4" />
                  <label htmlFor="paymetmethod" className="font-bold my-4">Payment Method</label>
                  <p className="text-gray-500 text-xs my-4">Choose your preferable payment option, in order to proceed with your donation</p>
                  <select name="paymetmethod" id="" onChange={handlePaymentMethodChange} value={selectedPaymentMethod} className=" w-full px-3 py-2  border rounded-md text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6">
                    <option value="--select" className=' text-[0.67rem]'>--select</option>
                    <option value="Credit-Card" className=' text-[0.67rem]' >
                      
                      Credit card / Debit card / Bank transfer
                    </option>
                   
                      
                      <option value="Cryptocurrency" className=' text-[0.67rem]' >
                     
                      Cryptocurrency
                    </option>
                    
                    
                  </select>
                  <div>
                    {selectedPaymentMethod === 'Credit-Card' &&
                      (
                      <div>
                        <img src='/assets/paymenticon.png' alt='paymenticon' className='h-auto w-auto my-6 hidden lg:block' />
                        <div className='block lg:hidden'>
                          <h5 className=" mt-3 ">Donation Summary</h5>
                          <div className="flex justify-between mt-3">
                            <p className=" text-gray-500">Your donation</p>
                            <p className=" text-gray-500" >$1000.00</p>
                          </div>
                          <div className="flex justify-between mt-3">
                            <p className=" text-gray-500">Service fee (2%)</p>
                            <p className=" text-gray-500">$20.00</p>
                          </div>
                          <hr className="my-3" />
                          <div className="flex justify-between">
                            <h5 className="text-teal-500 text-lg">Total</h5>
                            <h5 className="text-teal-500 text-lg">$1020.00</h5>
                          </div>
                        </div>
                        <div className='hidden lg:block'>
                          <input type="checkbox" name="checkbox" />
                          <label htmlFor="checkbox" className="text-xs pl-2">I have read, understood and I agree to Donation Trace’s
                            <a href="/" className="text-blue-500"> terms of service </a>
                            and
                            <a href="/" className="text-blue-500"> privacy </a>
                            statement
                          </label>
                        </div>
                        
                        <button className="w-full bg-teal-500 rounded-md px-4 text-sm text-white mt-5  py-3 flex items-center justify-center"> <CiLock className=' text-white w-4 h-4' /> Process to payment gateway</button>
                        <div className='lg:hidden block'>
                          <input type="checkbox" name="checkbox" />
                          <label htmlFor="checkbox" className="text-xs pl-2">I have read, understood and I agree to Donation Trace’s
                            <a href="/" className="text-blue-500"> terms of service </a>
                            and
                            <a href="/" className="text-blue-500"> privacy </a>
                            statement
                          </label>
                        </div>
                          
                        </div>
                      )
                    }
                    {selectedPaymentMethod === 'Cryptocurrency' &&
                      (
                      <div>
                        <div className='block lg:hidden'>
                          <h5 className=" mt-3 ">Donation Summary</h5>
                          <div className="flex justify-between mt-3">
                            <p className=" text-gray-500">Your donation</p>
                            <p className=" text-gray-500" >$1000.00</p>
                          </div>
                          <div className="flex justify-between mt-3">
                            <p className=" text-gray-500">Service fee (2%)</p>
                            <p className=" text-gray-500">$20.00</p>
                          </div>
                          <hr className="my-3" />
                          <div className="flex justify-between">
                            <h5 className="text-teal-500 text-lg">Total</h5>
                            <h5 className="text-teal-500 text-lg">$1020.00</h5>
                          </div>
                        </div>
                        <div className=' lg:block hidden'>
                          <input type="checkbox" name="checkbox" className=' ' />
                          <label htmlFor="checkbox" className="text-xs pl-2">I have read, understood and I agree to Donation Trace’s
                            <a href="/" className="text-blue-500"> terms of service </a>
                            and
                            <a href="/" className="text-blue-500"> privacy </a>
                            statement
                          </label>
                        </div>
                        <button className="w-full bg-teal-500 rounded-md px-4 text-sm text-white mt-5  py-3 flex items-center justify-center"> Donate with crypto</button>
                        <div className=' block lg:hidden'>
                          <input type="checkbox" name="checkbox" className=' ' />
                          <label htmlFor="checkbox" className="text-xs pl-2">I have read, understood and I agree to Donation Trace’s
                            <a href="/" className="text-blue-500"> terms of service </a>
                            and
                            <a href="/" className="text-blue-500"> privacy </a>
                            statement
                          </label>
                        </div>
                          
                        </div>
                      )
                    }
                  </div>
                  <h4 className=" mt-10">Fruad policy</h4>
                  <p className="mt-3 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur. Diam mattis sit risus ultrices vivamus.
                    Leo velit ut arcu et scelerisque netus varius. Cursus a facilisi turpis urna
                    elementum velit fringilla risus scelerisque. Fringilla justo egestas sociis sem diam
                    ante platea. Faucibus
                  </p>
                </div>
              </div>
            </div>

            


            <div className="border-2 px-4 py-3 rounded-lg shadow-md mt-8 lg:mt-0 h-auto lg:h-[700px] hidden lg:block">
              <h4 className=" mb-5 mt-1">Donation Title/Name</h4>
              <img src="/assets/image1.jpg" alt="" className=" rounded-lg" />
              <div className="flex items-center mt-3">
                <span className=' flex items-center justify-center rounded-full w-10 h-10 bg-[#FAF4ED]'>
                  <FaHandHoldingHeart className=' w-5 h-5 text-[#D18D4A]' />
                </span>
                <p className="mt-1 ml-3 font-bold text-[#D18D4A]">5k people just donated</p>
              </div>
              <h5 className=" mt-3 ">Donation Summary</h5>
              <div className="flex justify-between mt-3">
                <p className=" text-gray-500">Your donation</p>
                <p className=" text-gray-500" >$1000.00</p>
              </div>
              <div className="flex justify-between mt-3">
                <p className=" text-gray-500">Service fee (2%)</p>
                <p className=" text-gray-500">$20.00</p>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between">
                <h5 className="text-teal-500 text-lg">Total</h5>
                <h5 className="text-teal-500 text-lg">$1020.00</h5>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
    
  );
}

export default PaymentPage;

