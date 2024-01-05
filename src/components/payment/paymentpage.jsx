import lefticon from "../../assets/icons/arrow-left.png";
import React, { useState } from 'react';
import Select from 'react-select';

const PaymentPage = () => {
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
