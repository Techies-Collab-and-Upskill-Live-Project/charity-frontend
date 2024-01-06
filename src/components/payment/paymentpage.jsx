import lefticon from "../../assets/icons/arrow-left.png";
import React, { useState } from 'react';
import Select from 'react-select';
import {explorecategorylist} from "../../Data";
import numdonatedimg from "../../assets/icons/numdonated.png"

const PaymentPage = () => {
    const selectedActivity = explorecategorylist[1];
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState('USD'); // Default currency

  const handleButtonClick = (amount) => {
    setSelectedAmount(amount);
  };

  const currencyOptions = [
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
    // Add more currency options as needed
  ];

  return (
    <div className="flex">
      <div>
      <div>
        <img src={lefticon} alt="" />
        <p>Back to Fundraiser</p>
      </div>
      <div>
        <div>
          <div>
            <p>You're donating to -</p>
            <h3>Donation title/Name</h3>
          </div>

          <h3>Donation Amount</h3>
          <p>Choose or Enter donation amount</p>

          <div>
            <button onClick={() => handleButtonClick(50)}>$ 50</button>
            <button onClick={() => handleButtonClick(100)}>$ 100</button>
            <button onClick={() => handleButtonClick(200)}>$ 200</button>
            <button onClick={() => handleButtonClick(500)}>$ 500</button>
            <button onClick={() => handleButtonClick(1000)}>$ 1000</button>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>

            <input
              type="text"
              value={`$ ${selectedAmount}`}
              readOnly
              className=""
              name="donationAmount"
            />

           <select name="currency" id="" className="fgfgfgfg">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
           </select>
           <p>This is a hint text to help user.</p>
          </div>

          <div>
            <h3>Personal Information</h3>
            <p>Enter your name; it will appear as anonymous if left blank</p>

            <label for="name">Name</label>
            <input type="text" name="name"/>

            <label htmlFor="paymetmethod">Payment</label>
            <p>Choose your preferable payment option, in order to proceed with your donation</p>
            <select name="paymetmethod" id="">
                <option value="--select">--select</option>
                <option value="credit card">Credit card / Debit card / Bank transfer</option>
                <option value="Cryptocurrency">Cryptocurrency</option>
            </select>

            <input type="checkbox" name="checkbox"/>
            <label htmlFor="checkbox">I have read, understood and I agree to Donation Trace’s
             <a href="/">terms of service</a>
             and
             <a href="/">privacy</a>
            statement</label>

            <div>
                <button>Process to payment gateway</button>
                <button>Donate with crypto</button>
            </div>

            <h3>Fruad policy</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Diam mattis sit risus ultrices vivamus. Leo velit ut arcu et scelerisque netus varius. Cursus a facilisi turpis urna elementum velit fringilla risus scelerisque. Fringilla justo egestas sociis sem diam ante platea. Faucibus </p>
          </div>

        </div>
      </div>
      </div>

      <div>
        <h3>Donation Title/Name</h3>
        <img src={selectedActivity.CoverImg} alt="" />


        <div className="flex mt-3">
                    <img src={numdonatedimg} alt="" />
                    <p className="mt-1 ml-3 font-bold text-orange-400">5k people just donated</p>
        </div>

        <h3>Donation Summary</h3>
        <div>
            <p>Your donation</p>
            <p>$1000.00</p>
        </div>

        <div>
            <h3>Service fee (2%)</h3>
            <p>$20.00</p>
        </div>

        <hr />

        <div>
            <h5>Total</h5>
            <h5>$1020.00</h5>
        </div>

      </div>
    </div>
  );
}

export default PaymentPage;

