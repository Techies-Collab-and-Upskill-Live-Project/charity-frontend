import lefticon from "../../assets/icons/arrow-left.png";
import React, { useState } from 'react';
import Select from 'react-select';
import {explorecategorylist} from "../../Data";
import numdonatedimg from "../../assets/icons/numdonated.png"
import { Link } from "react-router-dom";
import lockicon from "../../assets/icons/Lock.png"

const PaymentPage = () => {
    const selectedActivity = explorecategorylist[1];
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState('USD'); // Default currency
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('--select');

  const handleButtonClick = (amount) => {
    setSelectedAmount(amount);
  };

  const currencyOptions = [
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
    // Add more currency options as needed
  ];

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  return (
    <div className="flex pt-28 container w-full">
      <div>
      <div >
         <Link className="flex mb-5">
          <img src={lefticon} alt="" />
          <p>Back to Fundraiser</p>
         </Link>
      </div>

      <div className="border-2 rounded-lg px-8 py-14 w-full mr-36">
        <div>
          <div className="flex mb-5">
            <p className="t text-gray-400">You're donating to </p>
            <h3 className="tex text-xl"> - Donation title/Name</h3>
          </div>

          <h3 className="tex text-lg">Donation Amount</h3>
          <p p className="t text-gray-400">Choose or Enter donation amount</p>

          <div>
            <button onClick={() => handleButtonClick(50)} className="bg-white rounded-md px-3 text-sm text-black mt-5 h-10 border-2 mr-2">$ 50</button>
            <button onClick={() => handleButtonClick(100)} className="bg-white rounded-md px-3 text-sm text-black mt-5 h-10 border-2 mr-2">$ 100</button>
            <button onClick={() => handleButtonClick(200)} className="bg-white rounded-md px-3 text-sm text-black mt-5 h-10 border-2 mr-2">$ 200</button>
            <button onClick={() => handleButtonClick(500)} className="bg-white rounded-md px-3 text-sm text-black mt-5 h-10 border-2 mr-2">$ 500</button>
            <button onClick={() => handleButtonClick("1,000")} className="bg-white rounded-md px-3 text-sm text-black mt-5 h-10 border-2 mr-2">$ 1000</button>
          </div>
          
          <div className="bg-white flex justify-between rounded-md px-3  mt-5 h-16 border-2 mr-2">

            <input
              type="text"
              value={`$ ${selectedAmount}.00`}
              readOnly
              className="text-2xl font-bold"
              name="donationAmount"

            />

           <select name="currency" id="" className="text-2xl font-bold">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
           </select>

          </div>
          <p className="fo text-gray-400">This is a hint text to help user.</p>

          <hr className="mt-8 mb-6"/>

          <div >
            <h3 className="tex text-lg">Personal Information</h3>
            <p className="f text-gray-400 mb-7">Enter your name; it will appear as anonymous if left blank</p>

            <label for="name" className="flex font-bold">Name
             <p className="f text-gray-500 font-normal ml-1">(optional)</p>
            </label>
            <input type="text" name="name" placeholder="Enter Your Full-Name"  className="block  rounded-md border-2 py-1.5 pl-3 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-16" style={{width: "100%", height: "50px"}}/>

            <label htmlFor="paymetmethod" className="font-bold">Payment Method</label>
            <p className="text-gray-500 text-xs">Choose your preferable payment option, in order to proceed with your donation</p>
            <select name="paymetmethod" id="" onChange={handlePaymentMethodChange} value={selectedPaymentMethod} className="block  rounded-md border-2 py-1.5 pl-3 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-5 " style={{width: "100%", height: "50px"}}>

                <option value="--select">--select</option>
                <option value="Credit-Card">Credit card / Debit card / Bank transfer</option>
                <option value="Cryptocurrency">Cryptocurrency</option>

            </select>


            <div>
                {selectedPaymentMethod === 'Credit-Card' && (
                  <div>
                    <button className="bg-teal-500 rounded-md px-3 text-sm text-white mt-5 w-96 h-10" style={{width: "100%"}}> <img src={lockicon} alt="" /> Process to payment gateway</button>
                    <input type="checkbox" name="checkbox" />
                    <label htmlFor="checkbox" className="text-xs">I have read, understood and I agree to Donation Trace’s
                       <a href="/" className="text-blue-500"> terms of service </a>
                       and
                       <a href="/" className="text-blue-500"> privacy </a>
                       statement</label>
                  </div>
                )}

                {selectedPaymentMethod === 'Cryptocurrency' && (
                  <div>
                    <button className="bg-teal-500 rounded-md px-3 text-sm text-white mt-5 w-96 h-10" style={{ width: "100%" }}> Donate with crypto</button>
                    <input type="checkbox" name="checkbox" />
                    <label htmlFor="checkbox" className="text-xs">I have read, understood and I agree to Donation Trace’s
                       <a href="/" className="text-blue-500"> terms of service </a>
                       and
                       <a href="/" className="text-blue-500"> privacy </a>
                       statement</label>
                  </div>

                )}
            </div>

            <h3 className="text-lg mt-10 m">Fruad policy</h3>
            <p className="mt-3 text-gray-500">Lorem ipsum dolor sit amet consectetur. Diam mattis sit risus ultrices vivamus. Leo velit ut arcu et scelerisque netus varius. Cursus a facilisi turpis urna elementum velit fringilla risus scelerisque. Fringilla justo egestas sociis sem diam ante platea. Faucibus </p>
          </div>

        </div>
      </div>

      </div>

      <div className="border-2 px-10 py-3 rounded-lg shadow-md mt-11 ml-20 h-full">
        <h3 className="text text-xl font-medium mb-5 mt-1">Donation Title/Name</h3>
        <img src={selectedActivity.CoverImg} alt="" className="ro rounded-lg"/>


        <div className="flex mt-3">
                    <img src={numdonatedimg} alt="" />
                    <p className="mt-1 ml-3 font-bold text-orange-400">5k people just donated</p>
        </div>

        <h3 className="text-lg mt-3 font-medium">Donation Summary</h3>
        <div className="flex justify-between mt-3">
            <p className=" text-gray-500">Your donation</p>
            <p className=" text-gray-500" >$1000.00</p>
        </div>

        <div className="flex justify-between mt-3">
            <p className=" text-gray-500">Service fee (2%)</p>
            <p className=" text-gray-500">$20.00</p>
        </div>

        <hr className="my-3"/>

        <div className="flex justify-between">
            <h5 className="text-teal-500 text-lg">Total</h5>
            <h5 className="text-teal-500 text-lg">$1020.00</h5>
        </div>

      </div>
    </div>
  );
}

export default PaymentPage;

