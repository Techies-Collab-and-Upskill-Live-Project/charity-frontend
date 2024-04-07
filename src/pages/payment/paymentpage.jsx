import React, { useState } from "react";
import { HiChevronLeft } from "react-icons/hi2";
import { FaHandHoldingHeart } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import { CiLock } from "react-icons/ci";

const PaymentPage = () => {
  const { campaignId } = useParams();
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("--select");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleButtonClick = (amount) => {
    const numericAmount = parseInt(amount.replace(/,/g, ""), 10);
    if (numericAmount >= 5) {
      setSelectedAmount(numericAmount.toString());
    }
  };

  // access the campaign id from local storage
  const storedCampaignData = localStorage.getItem(campaignId);
  const campaignData = storedCampaignData ? JSON.parse(storedCampaignData) : {};

  // Handle custom amount input changes
  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    if (parseInt(value, 10) >= 5 || value === "") {
      setSelectedAmount(value);
    }
  };

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const handleProceedToPayment = () => {
    let path = "";
    switch (selectedPaymentMethod) {
      case "Credit-Card":
        // path = "/pay/credit";
        path = "/paymentsuccessfull";
        break;
      case "Cryptocurrency":
        // path = "/pay/crypto";
        path = "/paymentsuccessfull";
        break;
      default:
        // Handle cases where no valid payment method is selected
        // This could be an error message or disabling the button altogether
        console.error("Invalid payment method selected.");
        return; // Exit the function if no valid method is chosen
    }

    navigate(path); // Navigate to the determined path
  };

  // Calculate the service fee as 2% of the selected amount
  const serviceFee = Number(selectedAmount) * 0.02;
  const total = Number(selectedAmount) + serviceFee;

  const isProceedDisabled =
    selectedAmount < 5 ||
    selectedPaymentMethod === "--select" ||
    !termsAccepted;

  return (
    <div className=" bg-white w-full mx-auto">
      <div className=" container w-full mx-auto">
        <div className=" py-6 md:py-12 mx-auto">
          <div>
            <Link
              to="/donate-page"
              className="flex items-center space-x-1 pl-4 "
            >
              <HiChevronLeft className=" w-4 h-4" />
              <span className=" font-normal ">Back to Fundraiser</span>
            </Link>
          </div>
          <div className="grid gap-10 lg:grid-cols-2 mt-10 lg:mt-20">
            <div className="block lg:hidden">
              <h4 className=" mb-5 mt-1">{campaignData.title}</h4>
              <img
                src="/assets/image1.jpg"
                alt=""
                className=" rounded-lg"
                loading="lazy"
              />
              <div className="flex items-center mt-3">
                <span className=" flex items-center justify-center rounded-full w-10 h-10 bg-[#FAF4ED]">
                  <FaHandHoldingHeart className=" w-5 h-5 text-[#D18D4A]" />
                </span>
                <p className="mt-1 ml-3 font-bold text-[#D18D4A]">
                  5k people just donated
                </p>
              </div>
            </div>
            <div className="border-2 rounded-lg px-4 py-14 w-full ">
              <div className=" space-y-3">
                <div className="flex space-x-2 items-center mb-5">
                  <p className=" text-gray-400">You're donating to </p>
                  <h5 className="text-[0.90rem] md:text-xl">
                    {" "}
                    - {campaignData.title}
                  </h5>
                </div>
                <h5 className="">Donation Amount</h5>
                <p className=" text-gray-400">
                  Choose or Enter donation amount
                </p>
                <div className="space-y-3">
                  <button
                    onClick={() => handleButtonClick("5")}
                    className="bg-white rounded-md px-3 text-sm text-black mt-5 h-10 border-2 mr-2"
                  >
                    {" "}
                    $ 5{" "}
                  </button>
                  <button
                    onClick={() => handleButtonClick("50")}
                    className="bg-white rounded-md px-3 text-sm text-black mt-5 h-10 border-2 mr-2"
                  >
                    {" "}
                    $ 50{" "}
                  </button>
                  <button
                    onClick={() => handleButtonClick("100")}
                    className="bg-white rounded-md px-3 text-sm text-black mt-5 h-10 border-2 mr-2"
                  >
                    {" "}
                    $ 100{" "}
                  </button>
                  <button
                    onClick={() => handleButtonClick("200")}
                    className="bg-white rounded-md px-3 text-sm text-black mt-5 h-10 border-2 mr-2"
                  >
                    {" "}
                    $ 200{" "}
                  </button>
                  <button
                    onClick={() => handleButtonClick("500")}
                    className="bg-white rounded-md px-3 text-sm text-black mt-5 h-10 border-2 mr-2"
                  >
                    {" "}
                    $ 500{" "}
                  </button>
                  <button
                    onClick={() => handleButtonClick("1000")}
                    className="bg-white rounded-md px-3 text-sm text-black mt-5 h-10 border-2 mr-2"
                  >
                    {" "}
                    $ 1000{" "}
                  </button>

                  {/* Custom donation amount */}
                  <input
                    type="text"
                    value={`$ ${selectedAmount}`}
                    onChange={handleCustomAmountChange}
                    className="w-full px-3 py-2 border rounded-md text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                    placeholder="Custom amount"
                  />
                </div>
                <hr className="mt-8 mb-6" />
                <div>
                  <h3 className="tex text-lg">Personal Information</h3>
                  <p className="f text-gray-400 mb-7">
                    Enter your name; it will appear as anonymous if left blank
                  </p>
                  <label htmlFor="name" className="flex font-bold">
                    Name
                    <p className="f text-gray-500 font-normal ml-1">
                      (optional)
                    </p>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Full-Name"
                    className="w-full px-3 py-2  border rounded-md text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6 my-4"
                  />
                  <label htmlFor="paymetmethod" className="font-bold my-4">
                    Payment Method
                  </label>
                  <p className="text-gray-500 text-xs my-4">
                    Choose your preferable payment option, in order to proceed
                    with your donation
                  </p>
                  <select
                    name="paymetmethod"
                    id=""
                    onChange={handlePaymentMethodChange}
                    value={selectedPaymentMethod}
                    className=" w-full px-3 py-2  border rounded-md text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                  >
                    <option value="--select" className=" text-[0.67rem]">
                      --select
                    </option>
                    <option value="Credit-Card" className=" text-[0.67rem]">
                      Credit card / Debit card / Bank transfer
                    </option>

                    <option value="Cryptocurrency" className=" text-[0.67rem]">
                      Cryptocurrency
                    </option>
                  </select>
                  <div>
                    <div>
                      <img
                        src="/assets/paymenticon.png"
                        alt="paymenticon"
                        className="h-auto w-auto my-6 hidden lg:block"
                        loading="lazy"
                      />
                      <div className="block lg:hidden">
                        <h5 className=" mt-3 ">Donation Summary</h5>
                        <div className="flex justify-between mt-3">
                          <p className=" text-gray-500">Your donation</p>
                          <p className=" text-gray-500">${selectedAmount}</p>
                        </div>
                        <div className="flex justify-between mt-3">
                          <p className=" text-gray-500">Service fee (2%)</p>
                          <p className=" text-gray-500">
                            ${serviceFee.toFixed(2)}
                          </p>
                        </div>
                        <hr className="my-3" />
                        <div className="flex justify-between">
                          <h5 className="text-teal-500 text-lg">Total</h5>
                          <h5 className="text-teal-500 text-lg">
                            ${total.toFixed(2)}
                          </h5>
                        </div>
                      </div>
                      <div className="hidden lg:block">
                        <input
                          type="checkbox"
                          id="termsCheckbox"
                          checked={termsAccepted}
                          onChange={(e) => setTermsAccepted(e.target.checked)}
                          className="checked:bg-teal-500"
                        />
                        <label htmlFor="termsCheckbox" className="text-xs pl-2">
                          I have read, understood and I agree to Donation
                          Trace’s
                          <a href="/home" className="text-blue-500">
                            {" "}
                            terms of service{" "}
                          </a>
                          and
                          <a href="/home" className="text-blue-500">
                            {" "}
                            privacy{" "}
                          </a>
                          statement
                        </label>
                      </div>

                      <button
                        onClick={handleProceedToPayment}
                        className={`w-full bg-teal-500 rounded-md px-4 text-sm text-white mt-5  py-3 flex items-center justify-center ${isProceedDisabled ? "bg-gray-500" : "bg-teal-500"}`}
                        disabled={isProceedDisabled}
                      >
                        {" "}
                        <CiLock className=" text-white w-4 h-4" /> Process to
                        payment gateway
                      </button>
                      <div className="lg:hidden block">
                        <input
                          type="checkbox"
                          id="termsCheckbox"
                          checked={termsAccepted}
                          onChange={(e) => setTermsAccepted(e.target.checked)}
                          className="checked:bg-teal-500"
                        />
                        <label htmlFor="termsCheckbox" className="text-xs pl-2">
                          I have read, understood and I agree to Donation
                          Trace’s
                          <a href="/home" className="text-blue-500">
                            {" "}
                            terms of service{" "}
                          </a>
                          and
                          <a href="/home" className="text-blue-500">
                            {" "}
                            privacy{" "}
                          </a>
                          statement
                        </label>
                      </div>
                    </div>
                  </div>
                  <h4 className=" mt-10">Fruad policy</h4>
                  <p className="mt-3 text-gray-500">
                    We take fraud seriously. Our platform employs advanced
                    security measures to ensure the integrity of every donation.
                    We monitor for suspicious activity and work diligently to
                    prevent unauthorized transactions. Your trust and safety are
                    our top priorities.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-2 px-4 py-3 rounded-lg shadow-md mt-8 lg:mt-0 h-auto lg:h-[700px] hidden lg:block">
              <h4 className=" mb-5 mt-1">{campaignData.title}</h4>
              <img
                src="/assets/image1.jpg"
                alt=""
                className=" rounded-lg"
                loading="lazy"
              />
              <div className="flex items-center mt-3">
                <span className=" flex items-center justify-center rounded-full w-10 h-10 bg-[#FAF4ED]">
                  <FaHandHoldingHeart className=" w-5 h-5 text-[#D18D4A]" />
                </span>
                <p className="mt-1 ml-3 font-bold text-[#D18D4A]">
                  5k people just donated
                </p>
              </div>
              <h5 className=" mt-3 ">Donation Summary</h5>
              <div className="flex justify-between mt-3">
                <p className=" text-gray-500">Your donation</p>
                <p className=" text-gray-500">${selectedAmount}</p>
              </div>
              <div className="flex justify-between mt-3">
                <p className=" text-gray-500">Service fee (2%)</p>
                <p className=" text-gray-500">${serviceFee.toFixed(2)}</p>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between">
                <h5 className="text-teal-500 text-lg">Total</h5>
                <h5 className="text-teal-500 text-lg">${total.toFixed(2)}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
